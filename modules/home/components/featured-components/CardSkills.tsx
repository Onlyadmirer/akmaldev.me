import SpotlightCard from "@/common/components/ui/SpotlightCard";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import {
  SiGo,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function CardSkills() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiGo />, title: "Go", href: "https://pkg.go.dev" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <SpotlightCard className=' h-80 ' spotlightColor='rgba(200, 0, 100, 0.2)'>
      <Link href={"/"}>
        <div className=' flex items-center flex-col gap-2'>
          <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
            <GrTechnology
              size={24}
              className='object-cover w-full h-full text-description'
            />
          </div>
          <div className='text-center'>
            <h2 className='text-description text-sm font-medium'>Skills</h2>
            <p className='text-neutral-400 tracking-tight text-xs'>
              Libraries, frameworks, and tools I use to build scalable apps.
            </p>
          </div>
        </div>
      </Link>
      <div className='h-40 mt-8 space-y-2 relative overflow-hidden'>
        {/* Vertical loop with deceleration on hover */}
        <LogoLoop speed={50} logos={techLogos} />
        <LogoLoop speed={50} direction='right' logos={techLogos} />
      </div>
    </SpotlightCard>
  );
}
