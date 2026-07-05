import Dashboard from "@/modules/dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  // 1. Konsistensi format title (Judul | Brand)
  title: "Dashboard | Akmaldev",
  description:
    "Welcome to Akmaldev — the central hub showcasing Akmal’s latest projects, achievements, and creative work.",

  openGraph: {
    title: "Akmaldev Dashboard — Personal Hub",
    description:
      "Discover Akmal’s web projects, development journey, and creative highlights in one place.",
    url: "https://www.akmaldev.me/dashboard",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmaldev Dashboard Central Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Akmaldev",
    description:
      "Discover Akmal’s web projects, development journey, and creative highlights in one place.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <Dashboard />;
}

export default page;
