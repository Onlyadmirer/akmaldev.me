import About from "@/modules/about/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Akmal — a passionate web developer who crafts interactive and performance-driven web experiences.",
  openGraph: {
    title: "About Akmal",
    description:
      "Discover Akmal’s background, skills, and vision in building modern and user-centered web applications.",
    url: "/about",
    images: ["/akmal.jpg"],
  },
};

function page() {
  return <About />;
}

export default page;
