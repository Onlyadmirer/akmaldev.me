import HeaderSection from "@/common/components/elements/HeaderSection";
import { useTranslations } from "next-intl";

function AboutHeader() {
  const t = useTranslations("AboutPage.Header");

  return (
    <div>
      <HeaderSection
        title={t("title")}
        description={t("description")}
      />
    </div>
  );
}

export default AboutHeader;
