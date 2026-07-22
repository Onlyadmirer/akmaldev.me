"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useTheme } from "@teispace/next-themes";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";

const primaryLinks = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { label: "Achievements", href: "/achievements" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Dashboard", href: "/dashboard" },
];

function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLocale = () => {
    const next = locale === "en" ? "id" : "en";
    router.replace(pathname, { locale: next });
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl'>
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
          <Link
            href='/'
            className='font-heading text-2xl font-semibold tracking-tight text-foreground'
          >
            Akmal
          </Link>

          <nav className='hidden items-center gap-8 md:flex'>
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-foreground-secondary hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className='absolute -bottom-1 left-0 right-0 h-px bg-foreground' />
                )}
              </Link>
            ))}

            <div className='group relative'>
              <button className='flex cursor-pointer items-center gap-1 text-sm text-foreground-secondary transition-colors duration-200 hover:text-foreground'>
                More
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  className='transition-transform duration-200 group-hover:rotate-180'
                >
                  <path
                    d='M3 5L6 8L9 5'
                    stroke='currentColor'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <div className='invisible absolute right-0 top-full mt-1 w-40 origin-top-right scale-95 border border-border bg-surface p-1 opacity-0 shadow-sm transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100 rounded-sm'>
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-foreground"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-3 pl-4 border-l border-border'>
              <button
                onClick={toggleLocale}
                type='button'
                className='cursor-pointer text-xs font-medium uppercase tracking-wider text-foreground-secondary transition-colors duration-200 hover:text-foreground'
              >
                {locale === "en" ? "ID" : "EN"}
              </button>
              <button
                type='button'
                aria-label='theme-toggle'
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className='cursor-pointer text-foreground-secondary transition-colors duration-200 hover:text-foreground'
              >
                {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
              </button>
            </div>
          </nav>

          <button
            type='button'
            onClick={() => setMobileOpen(true)}
            aria-label='nav-toggle'
            className='cursor-pointer text-foreground md:hidden'
          >
            <LuMenu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div className='fixed inset-0 z-50 bg-background md:hidden'>
            <div className='flex h-16 items-center justify-between px-6 border-b border-border'>
              <Link
                href='/'
                className='font-heading text-2xl font-semibold tracking-tight text-foreground'
                onClick={() => setMobileOpen(false)}
              >
                Akmal
              </Link>
              <button
                type='button'
                onClick={() => setMobileOpen(false)}
                className='cursor-pointer text-foreground'
              >
                <LuX size={20} />
              </button>
            </div>
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className='flex flex-col gap-1 px-4 pt-8'
            >
              {[...primaryLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded px-4 py-3 text-base transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-foreground bg-foreground/10"
                      : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className='flex items-center gap-4 px-4 pt-8'>
                <button
                  type='button'
                  onClick={toggleLocale}
                  className='cursor-pointer text-sm font-medium uppercase tracking-wider text-foreground-secondary transition-colors duration-200 hover:text-foreground'
                >
                  {locale === "en" ? "ID" : "EN"}
                </button>
                <button
                  type='button'
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className='cursor-pointer text-foreground-secondary transition-colors duration-200 hover:text-foreground'
                >
                  {theme === "dark" ? (
                    <LuSun size={18} />
                  ) : (
                    <LuMoon size={18} />
                  )}
                </button>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
