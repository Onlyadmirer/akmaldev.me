import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com/Onlyadmirer" },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/akmal-l-0365ab2b5/",
  },
  {
    icon: <BsInstagram size={18} />,
    href: "https://www.instagram.com/akmal_2yu",
  },
  { icon: <SiGmail size={18} />, href: "mailto:akmalrbc6@gmail.com" },
];

function Footer() {
  return (
    <footer className='border-t border-border'>
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
            {socials.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target='_blank'
                aria-label='socialmedia-icon'
                rel='noopener noreferrer'
                className='text-foreground-secondary/80 transition-colors duration-200 hover:text-foreground'
              >
                {s.icon}
              </Link>
            ))}
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
