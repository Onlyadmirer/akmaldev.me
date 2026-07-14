import { useTranslations } from "next-intl";
import Image from "next/image";
import signature from "@/public/images/profile/Akmal.svg";

function Intro() {
  const t = useTranslations("AboutPage.Intro");

  return (
    <div className='py-6 space-y-4 border-b border-muted-foreground/50'>
      <div className='text-description leading-7 space-y-4'>
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </div>
      <div className='space-y-4'>
        <p className='leading-loose font-medium text-primary'>{t("closing")}</p>
        <Image
          src={signature}
          alt='signature'
          width={100}
          height={100}
          className='w-38 md:w-40 h-auto'
          priority
        />
      </div>
    </div>
  );
}

export default Intro;
