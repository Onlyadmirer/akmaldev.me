import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LuArrowRight } from "react-icons/lu";

async function AboutSummary() {
  const t = await getTranslations("HomePage.About");
  const about = await getTranslations("AboutPage");

  return (
    <section className='mx-auto max-w-6xl border-t border-border px-6 py-14 md:py-16'>
      <div className='mb-8 md:mb-10'>
        <h2 className='font-heading text-2xl font-semibold tracking-tight text-foreground'>
          {t("title")}
        </h2>
        <p className='mt-1 text-sm text-foreground-secondary'>{t("subtitle")}</p>
      </div>

      <div className='grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16'>
        <div className='max-w-3xl space-y-4'>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            {about("para1")}
          </p>
          <p className='text-base leading-relaxed text-foreground-secondary'>
            {about("para2")}
          </p>
        </div>

        <Link
          href='/about'
          className='group inline-flex w-fit shrink-0 items-center gap-2 border-b border-border pb-1 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground'
        >
          {t("readMore")}
          <LuArrowRight
            size={14}
            className='transition-transform duration-200 group-hover:translate-x-1'
          />
        </Link>
      </div>
    </section>
  );
}

export default AboutSummary;
