import Projects from "@/modules/projects/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Akmaldev",
  description:
    "Browse through Akmal’s web development projects — built using modern technologies and clean design principles.",

  openGraph: {
    title: "Akmaldev Projects — Web Development Showcase",
    description:
      "Explore Akmal’s curated selection of web projects showcasing innovation, design, and performance.",
    url: "https://www.akmaldev.me/projects",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmaldev Projects Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Akmaldev",
    description:
      "Browse through Akmal’s web development projects built with modern technologies.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <Projects />;
}

export default page;
