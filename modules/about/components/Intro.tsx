import { getTranslations } from "next-intl/server";
import Image from "next/image";
import signature from "@/public/images/profile/Akmal.svg";

async function Intro() {
  const t = await getTranslations("AboutPage");

  return (
    <div className='mb-20'>
      <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
        {t("title")}
      </h1>
      <div className='mt-10 grid gap-10 md:grid-cols-[300px_1fr] md:gap-16'>
        <div className='relative aspect-3/4 w-full overflow-hidden bg-surface'>
          <Image
            src='/images/profile/akmal.jpg'
            alt='Akmal'
            fill
            className='object-cover'
            sizes='300px'
            priority
          />
        </div>
        <div className='space-y-5'>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            {t("para1")}
          </p>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            {t("para2")}
          </p>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            {t("para3")}
          </p>
          <div className='pt-4'>
            <p className='text-sm text-foreground-secondary'>{t("closing")}</p>
            <Image
              src={signature}
              alt='signature'
              width={100}
              height={100}
              className='mt-2 h-10 w-auto opacity-80'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
