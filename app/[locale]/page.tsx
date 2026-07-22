import Home from "@/modules/home/Home";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: "Akmal | Full-Stack Developer",
    description: t("Hero.role"),

    openGraph: {
      title: "Akmal | Full-Stack Developer",
      description: t("Hero.heading"),
      url: "https://www.akmaldev.me",
      siteName: "Akmal",
      images: [
        {
          url: "https://www.akmaldev.me/images/profile/akmal.jpg",
          width: 1200,
          height: 630,
          alt: "Akmal | Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Akmal | Full-Stack Developer",
      description: t("Hero.heading"),
      images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
    },
  };
}

function page() {
  return <Home />;
}

export default page;
