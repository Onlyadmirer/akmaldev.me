import SectionHeading from "@/common/components/elements/SectionHeading";
import { getTranslations } from "next-intl/server";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiBun,
} from "react-icons/si";

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
  Go: { rgb: "0, 173, 216", isLight: false },
  PostgreSQL: { rgb: "65, 105, 225", isLight: false },
  Prisma: { rgb: "255, 255, 255 ", isLight: true },
  Git: { rgb: "240, 80, 50", isLight: false },
  Docker: { rgb: "36, 150, 237", isLight: false },
  Bun: { rgb: "255, 255, 255", isLight: true },
};

const skillIcons: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript size={13} />,
  React: <SiReact size={13} />,
  "Next.js": <SiNextdotjs size={13} />,
  "Tailwind CSS": <SiTailwindcss size={13} />,
  "Node.js": <SiNodedotjs size={13} />,
  Express: <SiExpress size={13} />,
  Go: <SiGo size={13} />,
  PostgreSQL: <SiPostgresql size={13} />,
  Prisma: <SiPrisma size={13} />,
  Git: <SiGit size={13} />,
  Docker: <SiDocker size={13} />,
  Bun: <SiBun size={13} />,
};

const skillCategories = [
  { key: "frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { key: "backend", items: ["Node.js", "Express", "Go"] },
  { key: "database", items: ["PostgreSQL", "Prisma"] },
  { key: "tools", items: ["Git", "Docker", "Bun"] },
];

function SkillChip({ name }: { name: string }) {
  const color = brandColors[name];
  const { rgb, isLight } = color;

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
        color: isLight
          ? "rgba(var(--rgb-foreground), 0.85)"
          : `rgba(${rgb}, 0.85)`,
      }}
    >
      <span className='shrink-0'>{skillIcons[name]}</span>
      <span className='text-foreground/90'>{name}</span>
    </span>
  );
}

async function Skills() {
  const t = await getTranslations("HomePage.Skills");

  return (
    <section className='mx-auto max-w-6xl px-6 py-16 border-t border-border'>
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <div className='grid gap-8 sm:grid-cols-2'>
        {skillCategories.map((cat) => (
          <div key={cat.key}>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground-secondary'>
              {t(cat.key)}
            </p>
            <div className='mt-3 flex flex-wrap gap-2'>
              {cat.items.map((skill) => (
                <SkillChip key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
