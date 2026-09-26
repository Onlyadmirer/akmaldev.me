import { getTranslations } from "next-intl/server";
import { LuArrowUpRight } from "react-icons/lu";
import { socials } from "@/common/constants/socials";

async function ContactCta() {
  const t = await getTranslations("HomePage.Cta");
  const email = socials.find((social) => social.label === "Email")!;
  const github = socials.find((social) => social.label === "GitHub")!;

  return (
    <section className='mx-auto max-w-6xl border-t border-border px-6 py-16 md:py-24'>
      <h2 className='max-w-3xl font-heading text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05] font-bold tracking-[-0.03em] whitespace-pre-line text-foreground'>
        {t("title")}
      </h2>
      <p className='mt-5 max-w-lg text-base leading-relaxed text-foreground-secondary'>
        {t("subtitle")}
      </p>

      <div className='mt-8 flex flex-wrap items-center gap-3'>
        <a
          href={email.href}
          className='group inline-flex cursor-pointer items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-85'
        >
          {t("email")}
          <LuArrowUpRight
            size={15}
            className='transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          />
        </a>
        <a
          href={github.href}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex cursor-pointer items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-foreground/5'
        >
          {t("github")}
        </a>
      </div>

      <div className='mt-12 border-t border-border pt-6'>
        <p className='text-xs tracking-widest text-foreground-secondary uppercase'>
          {t("findMe")}
        </p>
        <div className='mt-4 flex flex-wrap gap-x-8 gap-y-3'>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel='noopener noreferrer'
                className='group inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors duration-200 hover:text-foreground'
              >
                <Icon size={15} className='text-foreground-secondary/60 transition-colors duration-200 group-hover:text-foreground' />
                {social.handle}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
