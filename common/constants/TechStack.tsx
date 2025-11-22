type StackProps = {
  [key: string]: {
    icon: string;
    link: string;
    key: string;
  };
};

export const STACK: StackProps = {
  TailwindCSS: {
    icon: "/skillsIcon/tailwindcss.svg",
    link: "https://tailwindcss.com/docs/installation/using-vite",
    key: "tailwindcss",
  },
  Nextjs: {
    icon: "/skillsIcon/nextjs.svg",
    link: "https://nextjs.org",
    key: "nextjs",
  },
};
