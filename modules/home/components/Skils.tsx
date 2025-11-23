import SubSectionHeader from "@/common/components/elements/SubHeaderSection";
import { GrTechnology } from "react-icons/gr";
import { useSkill } from "./useSkill";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";

function Skils() {
  const skills = useSkill();

  return (
    <div className='py-6 border-b border-muted-foreground/50'>
      <SubSectionHeader
        icon={<GrTechnology size={26} />}
        title='skills & tools'
        description='My professional Skills & Tools.'
      />
      <div className='grid grid-cols-5 md:grid-cols-7 lg:grid-cols-11 items-start pt-6 space-y-3 lg:space-y-4'>
        {skills.map((skill) => (
          <Tooltip key={skill.key}>
            <TooltipTrigger className='hover:scale-105 transition-all duration-300 ease-in-out'>
              <Link
                href={skill.link}
                target='_blank'
                rel='noopener noreferrer'
                className=' relative block overflow-hidden h-16 w-16 lg:h-13 lg:w-13'
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
