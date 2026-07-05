import Home from "@/modules/home/Home";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akmaldev — Full-Stack Web Developer Portfolio",
  description:
    "Welcome to Akmaldev. Explore a curated showcase of interactive, high-performance web applications built with clean code and modern technologies.",

  openGraph: {
    title: "Akmaldev — Personal Portfolio & Central Hub",
    description:
      "Explore Akmal’s web projects, development journey, and creative highlights in one place.",
    url: "https://www.akmaldev.me",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmaldev — Portfolio Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akmaldev — Full-Stack Web Developer Portfolio",
    description:
      "Explore a curated showcase of interactive, high-performance web applications built by Akmal.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <Home />;
}

export default page;
