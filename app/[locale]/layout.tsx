import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Layouts from "@/common/layouts/Layouts";
import { ThemeProviderContext } from "@/providers/ThemeProvider";
import TopLoader from "@/common/components/elements/TopLoader";
import { Toaster } from "@/common/components/ui/sonner";
import { AuthProvider } from "@/providers/AuthProvider";
import ChatShortcut from "@/modules/guestbook/components/ChatShortcut";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.akmaldev.me";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: {
    default: "Akmal - Full-Stack Web Developer Portfolio",
    template: "%s | Akmaldev",
  },
  description:
    "The personal portfolio of Akmal - a web developer passionate about building clean, modern, and efficient web experiences.",
  keywords: [
    "Akmal",
    "akmal",
    "Akmaldev",
    "akmal dev",
    "web developer Indonesia",
    "portfolio developer",
    "Next.js portfolio",
    "React developer",
  ],
  creator: "Akmal",
  authors: [{ name: "Akmal", url: domain }],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: domain,
    siteName: "Akmaldev",
    title: "Akmaldev - Web Developer Portfolio",
    description:
      "Explore Akmal’s portfolio showcasing projects, achievements, and creative work in web development.",
    images: [
      {
        url: "/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmaldev Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Akmaldev - Web Developer Portfolio",
    description:
      "Explore Akmal’s portfolio showcasing projects, achievements, and creative work.",
    images: ["/images/profile/akmal.jpg"],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} data-scroll-behavior='smooth' suppressHydrationWarning>
      <head>
        <Script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_TOKEN}
        ></Script>
      </head>
      <body className={` ${fontInter.className} antialiased`}>
        <Toaster position='top-center' />
        <AuthProvider>
          <NextIntlClientProvider>
            <ThemeProviderContext>
              <TopLoader />
              <Layouts>{children}</Layouts>
            </ThemeProviderContext>
          </NextIntlClientProvider>
        </AuthProvider>
        <ChatShortcut />
      </body>
    </html>
  );
}
