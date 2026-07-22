import { getTranslations } from "next-intl/server";
import Link from "next/link";

async function Hero() {
  const t = await getTranslations("HomePage.Hero");

  return (
    <section className='relative md:h-screen mx-auto max-w-6xl px-6 pt-24 overflow-hidden mt-28 pb-8 md:mt-12'>
      {/* Background monogram */}
      <div
        aria-hidden={true}
        className='pointer-events-none absolute top-1 left-3 select-none font-heading text-[clamp(10rem,25vw,20rem)] font-bold leading-none text-foreground/8 lg:-top-10 lg:-left-5'
      >
        Ak
      </div>

      {/* Radial gradient accent */}
      <div
        aria-hidden
        className='pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-foreground/1.5 blur-3xl'
      />

      <div className='relative flex flex-col md:flex-row md:justify-between md:gap-12'>
        {/* Left: main content */}
        <div className='max-w-2xl'>
          <h1 className='font-heading text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-foreground whitespace-pre-line'>
            {t("heading")}
          </h1>

          <div className='mt-8 h-px w-16 bg-foreground/20 md:mt-10' />

          <div className='mt-6 space-y-2'>
            <p className='text-base text-foreground/90 md:text-lg'>
              {t("role")}
            </p>
            <p className='text-sm text-foreground-secondary/90'>
              {t("location")}
            </p>
          </div>

          <div className='mt-6 flex items-center gap-2'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
            </span>
            <span className='text-xs text-foreground-secondary'>
              {t("available")}
            </span>
          </div>

          <div className='mt-8 flex items-center gap-8 md:mt-10'>
            <Link
              href='/projects'
              className='group relative text-sm font-medium text-foreground transition-colors duration-200'
            >
              {t("viewWork")}
              <span className='absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full' />
            </Link>
            <Link
              href='/contact'
              className='group relative text-sm font-medium text-foreground-secondary transition-colors duration-200 hover:text-foreground'
            >
              {t("getInTouch")}
              <span className='absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full' />
            </Link>
          </div>
        </div>

        {/* Right: vertical contact accent */}
        <div className='mt-12 hidden md:flex md:items-end md:pb-2'>
          <div className='flex items-center gap-6'>
            <div className='h-24 w-px bg-border' />
            <a
              href='mailto:akmalrbc6@gmail.com'
              className='font-heading text-xs font-medium tracking-[0.15em] text-foreground-secondary/60 transition-colors duration-200 hover:text-foreground'
              style={{ writingMode: "vertical-rl" }}
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
