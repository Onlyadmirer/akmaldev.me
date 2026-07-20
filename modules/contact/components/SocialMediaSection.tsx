import Link from "next/link";

const links = [
  {
    label: "Email",
    href: "mailto:akmalrbc6@gmail.com",
    value: "akmalrbc6@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Onlyadmirer",
    value: "@Onlyadmirer",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akmal-l-0365ab2b5/",
    value: "Akmal L",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/akmal_2yu",
    value: "@akmal_2yu",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@akmalrbc2",
    value: "@akmalrbc2",
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
            <p className='text-xs text-foreground-secondary/60'>{link.label}</p>
            <Link
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group mt-1 inline-block text-sm text-foreground-secondary transition-colors duration-200 hover:text-foreground'
            >
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
