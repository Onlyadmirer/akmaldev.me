"use client";

import HeaderSection from "@/common/components/elements/HeaderSection";
import { useTranslations } from "next-intl";

function DashboardHeader() {
  const t = useTranslations("DashboardPage.Header");
  return (
    <div>
      <HeaderSection title={t("title")} description={t("description")} />
    </div>
  );
}

export default DashboardHeader;
