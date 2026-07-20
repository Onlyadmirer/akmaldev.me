import SectionHeading from "@/common/components/elements/SectionHeading";
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
  React: { rgb: "97, 218, 251", isLight: true },
  "Next.js": { rgb: "255, 255, 255", isLight: true },
  "Tailwind CSS": { rgb: "6, 182, 212", isLight: true },
  "Node.js": { rgb: "86, 179, 83", isLight: false },
  Express: { rgb: "255, 255, 255", isLight: true },
  Go: { rgb: "0, 173, 216", isLight: true },
  PostgreSQL: { rgb: "65, 105, 225", isLight: false },
  Prisma: { rgb: "255, 255, 255 ", isLight: false },
  Git: { rgb: "240, 80, 50", isLight: false },
  Docker: { rgb: "36, 150, 237", isLight: true },
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

const categories = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Go"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Prisma"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Bun"],
  },
];

function SkillChip({ name }: { name: string }) {
  const color = brandColors[name];
  const { rgb } = color;

  return (
    <span
      className='inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm leading-tight transition-all duration-200 hover:scale-[1.03]'
      style={{
        backgroundColor: `rgba(${rgb}, 0.1)`,
        border: `1px solid rgba(${rgb}, 0.5)`,
        color: `rgba(${rgb}, 0.85)`,
      }}
    >
      <span className='shrink-0'>{skillIcons[name]}</span>
      <span className='text-foreground/90'>{name}</span>
    </span>
  );
}

function Skills() {
  return (
    <section className='mx-auto max-w-6xl px-6 py-20 border-t border-border'>
      <SectionHeading title='Stack' subtitle='Technologies I work with' />
      <div className='grid gap-8 sm:grid-cols-2'>
        {categories.map((cat) => (
          <div key={cat.label}>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground-secondary/80'>
              {cat.label}
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
