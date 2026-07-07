import Contact from "@/modules/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akmal for collaboration, freelance work, or professional inquiries.",

  openGraph: {
    title: "Contact Akmaldev - Let's Collaborate",
    description:
      "Reach out to Akmal for web development projects, collaborations, or creative discussions.",
    url: "https://www.akmaldev.me/contact",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Akmaldev",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Reach out to Akmal for web development projects, collaborations, or creative discussions.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <Contact />;
}

export default page;
