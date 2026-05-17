type StackProps = {
  [key: string]: {
    icon: string;
    link: string;
    key: string;
  };
};

export const STACK: StackProps = {
  TailwindCSS: {
    icon: "/images/skills/tailwindcss.svg",
    link: "https://tailwindcss.com/docs/installation/using-vite",
    key: "tailwindcss",
  },
  Nextjs: {
    icon: "/images/skills/nextjs.svg",
    link: "https://nextjs.org",
    key: "nextjs",
  },
  Postgree: {
    icon: "/images/skills/postgresql.svg",
    link: "https://www.postgresql.org/",
    key: "postgreesql",
  },
  Prisma: {
    icon: "/images/skills/prisma.svg",
    link: "https://www.prisma.io/",
    key: "prisma",
  },
};
