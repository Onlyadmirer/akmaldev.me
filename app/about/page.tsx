import About from "@/modules/about/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Akmal - a passionate web developer who crafts interactive and performance-driven web experiences.",

  openGraph: {
    title: "About Akmal - Personal Background & Vision",
    description:
      "Discover Akmal’s background, skills, and vision in building modern and user-centered web applications.",
    url: "https://www.akmaldev.me/about",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "About Akmaldev",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Discover Akmal’s background, skills, and vision in building modern web applications.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <About />;
}

export default page;
