"use client";

import SectionHeading from "@/common/components/elements/SectionHeading";
import Link from "next/link";

const links = [
  {
    label: "Projects",
    href: "/projects",
    description: "Explore my work",
  },
  {
    label: "Achievements",
    href: "/achievements",
    description: "Certifications & milestones",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    description: "GitHub stats & analytics",
  },
];

function Featured() {
  return (
    <section className='mx-auto max-w-6xl px-6 py-16 border-t border-border'>
      <SectionHeading title='Explore' subtitle='Quick links to key sections' />
      <div className='space-y-4'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='group flex items-center justify-between border-b border-border py-4 transition-all duration-200 hover:opacity-60'
          >
            <div>
              <span className='font-heading text-lg font-medium tracking-tight text-foreground'>
                {link.label}
              </span>
              <p className='mt-0.5 text-sm text-foreground-secondary'>
                {link.description}
              </p>
            </div>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              className='text-foreground-secondary transition-transform duration-200 group-hover:translate-x-1'
            >
              <path
                d='M7 4L13 10L7 16'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Featured;
