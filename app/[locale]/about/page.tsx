import About from "@/modules/about/About";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
    description: t("para1"),

    openGraph: {
      title: t("title"),
      description: t("para1"),
      url: "https://www.akmaldev.me/about",
      siteName: "Akmaldev",
      images: [
        {
          url: "https://www.akmaldev.me/images/profile/akmal.jpg",
          width: 1200,
          height: 630,
          alt: "About Akmaldev",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("para1"),
      images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
    },
  };
}

function page() {
  return <About />;
}

export default page;
