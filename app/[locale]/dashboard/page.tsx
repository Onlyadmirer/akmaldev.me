import Dashboard from "@/modules/dashboard/Dashboard";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DashboardPage" });

  return {
    title: t("Header.title"),
    description: t("Header.description"),

    openGraph: {
      title: t("Header.title"),
      description: t("Header.description"),
      url: "https://www.akmaldev.me/dashboard",
      siteName: "Akmaldev",
      images: [
        {
          url: "https://www.akmaldev.me/images/profile/akmal.jpg",
          width: 1200,
          height: 630,
          alt: "Akmaldev Dashboard Central Hub",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("Header.title"),
      description: t("Header.description"),
      images: ["https://www.akmaldev.me/images/profile/akmal.jpg"],
    },
  };
}

function page() {
  return <Dashboard />;
}

export default page;
