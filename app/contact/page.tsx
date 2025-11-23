import Contact from "@/modules/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akmal for collaboration, freelance work, or professional inquiries.",
  openGraph: {
    title: "Contact Akmaldev",
    description:
      "Reach out to Akmal for web development projects, collaborations, or creative discussions.",
    url: "/contact",
    images: ["/akmal.jpg"],
  },
};

function page() {
  return <Contact />;
}

export default page;
