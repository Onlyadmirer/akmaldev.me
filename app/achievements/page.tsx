import Achievements from "@/modules/achievements/Achievements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "A collection of Akmal’s milestones, awards, and recognitions throughout his journey in web development and technology.",
  openGraph: {
    title: "Akmaldev Achievements",
    description:
      "See the achievements and milestones that reflect Akmal’s dedication and growth as a web developer.",
    url: "/achievements",
    images: ["/akmal.jpg"],
  },
};

function page() {
  return <Achievements />;
}

export default page;
