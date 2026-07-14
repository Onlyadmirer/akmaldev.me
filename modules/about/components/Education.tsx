import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import SpotlightCard from "@/common/components/ui/SpotlightCard";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Education() {
  const t = useTranslations("AboutPage.Education");

  return (
    <div className='py-8 border-b border-muted-foreground/50'>
      <SubHeaderSection
        icon={<GraduationCap size={24} />}
        title={t("title")}
        description={t("description")}
      />
      <div className='flex mt-6 flex-col'>
        <SpotlightCard className='flex flex-col md:flex-row items-center gap-6'>
          <div className='overflow-hidden relative '>
            <Image
              src={"/images/about/sman3ekg.png"}
              width={80}
              height={80}
              alt='sman-3-ekg'
            />
          </div>
          <div className='flex flex-col text-center md:text-start'>
            <h1>SMAN 3 ENREKANG</h1>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 text-sm text-neutral-700 dark:text-neutral-400'>
              <p>{t("degree")}</p>
              <span className='hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block'>
                •
              </span>
              <p>{t("major")}</p>
            </div>
            <div className='flex flex-col md:flex-row mt-2 gap-1 md:gap-2 text-xs text-neutral-700 dark:text-neutral-400'>
              <span>{t("period")}</span>
              <span className='hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block'>
                •
              </span>
              <p>{t("location")}</p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Education;
