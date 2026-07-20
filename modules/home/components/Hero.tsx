import Link from "next/link";

function Hero() {
  return (
    <section className='mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28'>
      <h1 className='font-heading text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] text-foreground'>
        Crafting
        <br />
        Digital
        <br />
        Products
      </h1>
      <div className='mt-8 space-y-2 md:mt-10'>
        <p className='text-base text-foreground-secondary md:text-lg'>
          Full-Stack Developer & UI Engineer
        </p>
        <p className='text-sm text-foreground-secondary/60'>
          Based in Indonesia
        </p>
      </div>
      <div className='mt-8 flex items-center gap-8 md:mt-10'>
        <Link
          href='/projects'
          className='group relative text-sm font-medium text-foreground transition-colors duration-200'
        >
          View Work
          <span className='absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full' />
        </Link>
        <Link
          href='/contact'
          className='group relative text-sm font-medium text-foreground-secondary transition-colors duration-200 hover:text-foreground'
        >
          Get in Touch
          <span className='absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full' />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
