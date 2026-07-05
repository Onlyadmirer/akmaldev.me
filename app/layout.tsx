import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/layouts/Layouts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Background from "@/common/layouts/background/Background";
import TopLoader from "@/common/components/elements/TopLoader";
import { Toaster } from "@/common/components/ui/sonner";
import { AuthProvider } from "@/providers/AuthProvider";
import ChatShortcut from "@/modules/guestbook/components/ChatShortcut";

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.akmaldev.me";

export const metadata: Metadata = {
  metadataBase: new URL(domain),

  title: {
    default: "Akmaldev - Full-Stack Web Developer Portfolio",
    template: "%s | Akmaldev",
  },
  description:
    "The personal portfolio of Akmal — a web developer passionate about building clean, modern, and efficient web experiences.",
  keywords: [
    "Akmal",
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
    title: "Akmaldev — Web Developer Portfolio",
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
    title: "Akmaldev — Web Developer Portfolio",
    description:
      "Explore Akmal’s portfolio showcasing projects, achievements, and creative work.",
    images: ["/images/profile/akmal.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={` ${fontInter.className} antialiased`}>
        <TopLoader />
        <Toaster position='top-center' />
        <AuthProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <Background />
            <Layouts>{children}</Layouts>
          </ThemeProvider>
        </AuthProvider>
        <ChatShortcut />
      </body>
    </html>
  );
}
