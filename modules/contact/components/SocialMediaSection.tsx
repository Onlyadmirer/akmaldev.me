import { getTranslations } from "next-intl/server";
import { socials } from "@/common/constants/socials";

async function SocialMediaSection() {
  const t = await getTranslations("ContactPage");

  return (
    <div>
      <h2 className='font-heading text-lg font-semibold tracking-tight text-foreground'>
        {t("socialTitle")}
      </h2>
      <div className='mt-6 space-y-5'>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <div key={social.href} className='border-b border-border pb-4'>
              <p className='text-xs text-foreground-secondary/80'>{social.label}</p>
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel='noopener noreferrer'
                className='group mt-1 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground'
              >
                <span className='text-foreground-secondary/50 transition-colors duration-200 group-hover:text-foreground'>
                  <Icon size={14} />
                </span>
                {social.handle}
                <span className='block h-px max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full' />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SocialMediaSection;
