import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/app/globals.css";
import Layouts from "@/common/layouts/Layouts";
import { Toaster } from "@/common/components/ui/sonner";
import { AuthProvider } from "@/providers/AuthProvider";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const fontInterTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter-tight",
});

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.akmaldev.me";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: {
    default: "Akmal | Full-Stack Developer ",
    template: "%s | Akmal",
  },
  description:
    "Portfolio of Akmal | a full-stack developer and UI engineer crafting digital products with precision.",
  keywords: [
    "Akmal",
    "akmal",
    "Akmaldev",
    "web developer Indonesia",
    "full-stack developer",
    "Next.js portfolio",
    "React developer",
  ],
  creator: "Akmal",
  authors: [{ name: "Akmal", url: domain }],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: domain,
    siteName: "Akmal",
    title: "Akmal | Full-Stack Developer ",
    description:
      "Full-stack developer and UI engineer crafting digital products with precision.",
    images: [
      {
        url: "/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmal Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Akmal | Full-Stack Developer ",
    description:
      "Full-stack developer and UI engineer crafting digital products with precision.",
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

  const initialTheme = await getTheme();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_TOKEN}
        />
      </head>
      <body
        className={`${fontInter.variable} ${fontInterTight.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <NextIntlClientProvider>
            <ThemeProvider
              attribute='class'
              initialTheme={initialTheme ?? undefined}
            >
              <Toaster position='top-center' />
              <Layouts>{children}</Layouts>
            </ThemeProvider>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
