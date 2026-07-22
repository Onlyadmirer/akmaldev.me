import Projects from "@/modules/projects/Projects";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: t("title"),
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.akmaldev.me/projects",
      siteName: "Akmaldev",
      images: [
        {
          url: "https://www.akmaldev.me/images/profile/akmal.jpg",
          width: 1200,
          height: 630,
          alt: "Akmaldev Projects Showcase",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
    },
  };
}

function page() {
  return <Projects />;
}

export default page;
