import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiBun,
} from "react-icons/si";
import { LuArrowRight } from "react-icons/lu";
import Section from "@/common/components/elements/Section";
import StatsStrip from "./StatsStrip";

type BrandColor = {
  rgb: string;
  isLight: boolean;
};

const brandColors: Record<string, BrandColor> = {
  TypeScript: { rgb: "49, 120, 198", isLight: false },
  React: { rgb: "97, 218, 251", isLight: false },
  "Next.js": { rgb: "255, 255, 255", isLight: true },
  "Tailwind CSS": { rgb: "6, 182, 212", isLight: false },
  "Node.js": { rgb: "86, 179, 83", isLight: false },
  Express: { rgb: "255, 255, 255", isLight: true },
  "Elysia.js": { rgb: "236, 72, 153", isLight: false },
  PostgreSQL: { rgb: "65, 105, 225", isLight: false },
  MySQL: { rgb: "68, 121, 161", isLight: false },
  Git: { rgb: "240, 80, 50", isLight: false },
  Docker: { rgb: "36, 150, 237", isLight: false },
  Bun: { rgb: "255, 255, 255", isLight: true },
};

const skillIcons: Record<string, ReactNode> = {
  TypeScript: <SiTypescript size={13} />,
  React: <SiReact size={13} />,
  "Next.js": <SiNextdotjs size={13} />,
  "Tailwind CSS": <SiTailwindcss size={13} />,
  "Node.js": <SiNodedotjs size={13} />,
  Express: <SiExpress size={13} />,
  "Elysia.js": (
    <Image
      src='/images/skills/elysia.svg'
      alt=''
      width={13}
      height={13}
      unoptimized
    />
  ),
  PostgreSQL: <SiPostgresql size={13} />,
  MySQL: <SiMysql size={13} />,
  Git: <SiGit size={13} />,
  Docker: <SiDocker size={13} />,
  Bun: <SiBun size={13} />,
};

const skillCategories = [
  { key: "frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { key: "backend", items: ["Node.js", "Express", "Elysia.js"] },
  { key: "database", items: ["PostgreSQL", "MySQL"] },
  { key: "tools", items: ["Git", "Docker", "Bun"] },
] as const;

function SkillChip({ name }: { name: string }) {
  const { rgb, isLight } = brandColors[name];

  return (
    <span
      className='inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm leading-tight transition-all duration-200 hover:scale-[1.03]'
      style={{
        backgroundColor: isLight
          ? "rgba(var(--rgb-foreground), 0.08)"
          : `rgba(${rgb}, 0.1)`,
        border: isLight
          ? "1px solid rgba(var(--rgb-foreground), 0.25)"
          : `1px solid rgba(${rgb}, 0.5)`,
        color: isLight ? "rgba(var(--rgb-foreground), 0.85)" : `rgba(${rgb}, 0.85)`,
      }}
    >
      <span className='shrink-0'>{skillIcons[name]}</span>
      <span className='text-foreground/90'>{name}</span>
    </span>
  );
}

async function Stack() {
  const t = await getTranslations("HomePage.Stack");

  return (
    <Section
      title={t("title")}
      subtitle={t("subtitle")}
      className='border-t border-border'
    >
      <div className='grid gap-10 md:grid-cols-[1fr_300px] md:gap-16'>
        <div className='grid gap-8 sm:grid-cols-2'>
          {skillCategories.map((category) => (
            <div key={category.key}>
              <p className='text-xs font-medium tracking-widest text-foreground-secondary uppercase'>
                {t(category.key)}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {category.items.map((skill) => (
                  <SkillChip key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='space-y-4'>
          <StatsStrip />
          <Link
            href='/dashboard'
            className='group inline-flex items-center gap-1.5 text-sm text-foreground-secondary transition-colors duration-200 hover:text-foreground'
          >
            {t("viewActivity")}
            <LuArrowRight
              size={14}
              className='transition-transform duration-200 group-hover:translate-x-1'
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Stack;
