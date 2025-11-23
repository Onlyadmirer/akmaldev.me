import Projects from "@/modules/projects/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse through Akmal’s web development projects — built using modern technologies and clean design principles.",
  openGraph: {
    title: "Akmaldev Projects",
    description:
      "Explore Akmal’s curated selection of web projects showcasing innovation, design, and performance.",
    url: "/projects",
    images: ["/akmal.jpg"],
  },
};

function page() {
  return <Projects />;
}

export default page;
