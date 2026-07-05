import ChatRoom from "@/modules/guestbook/GuestBook";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Akmaldev",
  description:
    "Leave a message, sign the guestbook, or share your thoughts on Akmaldev. Let's connect and share feedback!",

  openGraph: {
    title: "Guestbook — Akmaldev",
    description:
      "Leave a message, sign the guestbook, or share your thoughts on Akmaldev. Let's connect and share feedback!",
    url: "https://akmaldev.me/guestbook",
    siteName: "Akmaldev",
    images: [
      {
        url: "https://www.akmaldev.me/images/profile/akmal.jpg",
        width: 1200,
        height: 630,
        alt: "Akmaldev Guestbook Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guestbook | Akmaldev",
    description:
      "Leave a message, sign the guestbook, or share your thoughts on Akmaldev.",
    images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
  },
};

function page() {
  return <ChatRoom />;
}

export default page;
