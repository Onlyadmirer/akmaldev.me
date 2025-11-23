import Dashboard from "@/modules/dashboard/Dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Welcome to Akmaldev — the central hub showcasing Akmal’s latest projects, achievements, and creative work.",
  openGraph: {
    title: "Akmaldev Dashboard",
    description:
      "Discover Akmal’s web projects, development journey, and creative highlights in one place.",
    url: "/dashboard",
    images: ["/akmal.jpg"],
  },
};

function page() {
  return <Dashboard />;
}

export default page;
