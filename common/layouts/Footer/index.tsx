import Link from "next/link";
import { socials } from "@/common/constants/socials";

function Footer() {
  return (
    <footer className='border-t bottom-0 border-border'>
      <div className='mx-auto max-w-6xl px-6 py-10 '>
        <div className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between'>
          <div>
            <Link
              href='/'
              className='font-heading text-lg font-semibold tracking-tight text-foreground'
            >
              Akmal
            </Link>
            <p className='mt-1 text-sm text-foreground-secondary'>
              Full-Stack Developer
            </p>
          </div>
          <nav className='flex flex-wrap gap-x-6 gap-y-2'>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  aria-label={social.label}
                  rel='noopener noreferrer'
                  className='text-foreground-secondary/80 transition-colors duration-200 hover:text-foreground'
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </nav>
        </div>
        <div className='mt-10 border-t border-border pt-6'>
          <p className='text-xs text-foreground-secondary/90'>
            &copy; {new Date().getFullYear()} Akmal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
