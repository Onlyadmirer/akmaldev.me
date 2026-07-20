import Home from "@/modules/home/Home";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akmal — Full-Stack Developer & UI Engineer",
  description:
    "Portfolio of Akmal — a full-stack developer and UI engineer crafting digital products with precision.",

  openGraph: {
    title: "Akmal — Full-Stack Developer & UI Engineer",
    description:
      "Crafting digital products with modern web technologies.",
    url: "https://www.akmaldev.me",
    siteName: "Akmal",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmal — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akmal — Full-Stack Developer & UI Engineer",
    description:
      "Crafting digital products with modern web technologies.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <Home />;
}

export default page;
