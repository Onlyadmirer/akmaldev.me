import SubSectionHeader from "@/common/components/elements/SubHeaderSection";
import { GrTechnology } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";
import { useTranslations } from "next-intl";

function Skils() {
  const skills = [
    {
      icon: "/images/skills/html.svg",
      key: "html5",
      link: "https://www.w3schools.com/html/",
    },
    {
      icon: "/images/skills/css.svg",
      key: "css3",
      link: "https://www.w3schools.com/css/",
    },
    {
      icon: "/images/skills/tailwindcss.svg",
      key: "tailwindcss",
      link: "https://tailwindcss.com/docs/installation/using-vite",
    },
    {
      icon: "/images/skills/javascript.svg",
      key: "javascript",
      link: "https://www.w3schools.com/js/",
    },
    {
      icon: "/images/skills/typescript.svg",
      key: "typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: "/images/skills/react.svg",
      key: "react",
      link: "https://react.dev/",
    },
    {
      icon: "/images/skills/vite.svg",
      key: "vite",
      link: "https://vite.dev/",
    },
    {
      icon: "/images/skills/nextjs.svg",
      key: "nextjs",
      link: "https://nextjs.org/",
    },
    {
      icon: "/images/skills/nodejs.svg",
      key: "nodejs",
      link: "https://nodejs.org/en",
    },
    {
      icon: "/images/skills/express.svg",
      key: "express",
      link: "https://expressjs.com/",
    },
    {
      icon: "/images/skills/prisma.svg",
      key: "prisma",
      link: "https://www.prisma.io/",
    },
    {
      icon: "/images/skills/postgresql.svg",
      key: "postgresql",
      link: "https://www.postgresql.org/",
    },
    {
      icon: "/images/skills/bun.svg",
      key: "bun",
      link: "https://bun.com/",
    },
    {
      icon: "/images/skills/git.svg",
      key: "git",
      link: "https://git-scm.com/",
    },
    {
      icon: "/images/skills/github.svg",
      key: "github",
      link: "https://github.com/",
    },
  ];

  const t = useTranslations("HomePage.Skills");

  return (
    <div className='py-6 border-b border-muted-foreground/50'>
      <SubSectionHeader
        icon={<GrTechnology size={24} />}
        title={t("title")}
        description={t("subTitle")}
      />
      <div className='grid grid-cols-5 md:grid-cols-7 lg:grid-cols-11 pt-6 space-y-3 lg:space-y-4'>
        {skills.map((skill) => (
          <Tooltip key={skill.key}>
            <TooltipTrigger className='hover:scale-105 transition-all h-16 w-16 lg:h-12 lg:w-12 duration-300 ease-in-out'>
              <Link
                href={skill.link}
                target='_blank'
                rel='noopener noreferrer'
                className='relative block h-16 w-16 lg:h-12 lg:w-12 overflow-hidden'
              >
                <Image
                  src={skill.icon}
                  alt={skill.key}
                  fill
                  priority
                  className='p-2 lg:p-0 object-cover'
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.key}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Skils;
