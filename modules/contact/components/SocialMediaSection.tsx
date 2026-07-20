import Link from "next/link";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const links = [
  {
    label: "Email",
    href: "mailto:akmalrbc6@gmail.com",
    value: "akmalrbc6@gmail.com",
    icon: <SiGmail size={14} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Onlyadmirer",
    value: "@Onlyadmirer",
    icon: <FaGithub size={14} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akmal-l-0365ab2b5/",
    value: "Akmal L",
    icon: <FaLinkedin size={14} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/akmal_2yu",
    value: "@akmal_2yu",
    icon: <BsInstagram size={14} />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@akmalrbc2",
    value: "@akmalrbc2",
    icon: <FaTiktok size={14} />,
  },
];

function SocialMediaSection() {
  return (
    <div>
      <h2 className='font-heading text-lg font-semibold tracking-tight text-foreground'>
        Find me online
      </h2>
      <div className='mt-6 space-y-5'>
        {links.map((link) => (
          <div key={link.label} className='border-b border-border pb-4'>
            <p className='text-xs text-foreground-secondary/80'>{link.label}</p>
            <Link
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group mt-1 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground'
            >
              <span className='text-foreground-secondary/50 transition-colors duration-200 group-hover:text-foreground'>
                {link.icon}
              </span>
              {link.value}
              <span className='block h-px max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaSection;
