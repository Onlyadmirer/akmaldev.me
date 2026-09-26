import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LuArrowUpRight } from "react-icons/lu";

async function Hero() {
  const t = await getTranslations("HomePage.Hero");

  return (
    <section className='relative mx-auto max-w-6xl overflow-hidden px-6 pt-12 pb-16 md:pt-16 md:pb-20'>
      <div
        aria-hidden
        className='pointer-events-none absolute -top-32 -right-40 h-[420px] w-[420px] rounded-full bg-foreground/1.5 blur-3xl'
      />
      <div
        aria-hidden
        className='pointer-events-none absolute -top-4 left-2 select-none font-heading text-[clamp(8rem,22vw,18rem)] leading-none font-bold text-foreground/5 lg:-top-16'
      >
        Ak
      </div>

      <div className='relative grid items-start gap-12 md:grid-cols-[1fr_300px] md:gap-16'>
        <div className='max-w-2xl'>
          <div className='inline-flex items-center gap-2.5 rounded-full border border-border px-3 py-1.5'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
            </span>
            <span className='text-xs text-foreground-secondary'>
              {t("available")}
            </span>
          </div>

          <h1 className='mt-6 font-heading text-[clamp(2.5rem,7vw,4.25rem)] leading-[0.95] font-bold tracking-[-0.04em] whitespace-pre-line text-foreground'>
            {t("heading")}
          </h1>

          <div className='mt-8 h-px w-16 bg-foreground/20' />

          <p className='mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary md:text-lg'>
            {t("subheading")}
          </p>

          <div className='mt-9 flex flex-wrap items-center gap-3'>
            <Link
              href='/projects'
              className='group inline-flex cursor-pointer items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-85'
            >
              {t("viewWork")}
              <LuArrowUpRight
                size={15}
                className='transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </Link>
            <Link
              href='/contact'
              className='inline-flex cursor-pointer items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-foreground/5'
            >
              {t("getInTouch")}
            </Link>
          </div>
        </div>

        <div className='w-full md:pt-16'>
          <div className='relative aspect-4/5 w-full overflow-hidden bg-surface ring-1 ring-border'>
            <Image
              src='/images/profile/akmal.jpg'
              alt='Akmal'
              fill
              priority
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 300px'
            />
          </div>
          <div className='mt-3 flex items-center justify-between gap-4'>
            <span className='text-xs text-foreground-secondary'>
              {t("location")}
            </span>
            <a
              href='mailto:akmalrbc6@gmail.com'
              className='truncate font-heading text-xs font-medium tracking-[0.12em] text-foreground-secondary/90  transition-colors duration-200 hover:text-foreground'
            >
              akmalrbc6@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
