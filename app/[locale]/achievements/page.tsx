import Achievements from "@/modules/achievements/Achievements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "A collection of Akmal’s milestones, awards, and recognitions throughout his journey in web development and technology.",

  openGraph: {
    title: "Akmaldev Achievements - Milestones & Awards",
    description:
      "See the achievements and milestones that reflect Akmal’s dedication and growth as a web developer.",
    url: "https://www.akmaldev.me/achievements",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmaldev Achievements Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Achievements",
    description:
      "A collection of Akmal’s milestones, awards, and recognitions throughout his journey in tech.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <Achievements />;
}

export default page;
