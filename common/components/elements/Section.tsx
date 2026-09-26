import { Link } from "@/i18n/navigation";
import { LuArrowRight } from "react-icons/lu";

interface SectionProps {
  title: string;
  subtitle?: string;
  asideLabel?: string;
  asideHref?: string;
  className?: string;
  children: React.ReactNode;
}

function Section({
  title,
  subtitle,
  asideLabel,
  asideHref,
  className = "",
  children,
}: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-14 md:py-16 ${className}`}>
      <div className='mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6 md:mb-10'>
        <div>
          <h2 className='font-heading text-2xl font-semibold tracking-tight text-foreground'>
            {title}
          </h2>
          {subtitle && (
            <p className='mt-1 text-sm text-foreground-secondary'>{subtitle}</p>
          )}
        </div>
        {asideLabel && asideHref && (
          <Link
            href={asideHref}
            className='group inline-flex shrink-0 items-center gap-1.5 text-sm text-foreground-secondary transition-colors duration-200 hover:text-foreground'
          >
            {asideLabel}
            <LuArrowRight
              size={14}
              className='transition-transform duration-200 group-hover:translate-x-1'
            />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default Section;
