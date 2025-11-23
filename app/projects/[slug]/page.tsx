import HeaderSection from "@/common/components/elements/HeaderSection";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";
import { STACK } from "@/common/constants/TechStack";
import getProjectDetail from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  params: Promise<{ slug: string }>;
};

async function ProjectDetail({ params }: Props) {
  const resolvedParams = await params;

  const slug = resolvedParams.slug;

  const project = await getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className='space-y-6'>
        <button>
          <Link
            href={"/projects"}
            className='flex items-center gap-1 hover:gap-2 transition-all duration-300 ease-in-out cursor-pointer text-muted-foreground'
          >
            <IoArrowBackCircleOutline size={20} />
            <span>Back</span>
          </Link>
        </button>
        <HeaderSection
          title={project.title}
          description={project.description}
        ></HeaderSection>
      </div>
      <div className='py-6 flex flex-col md:flex-row items-center md:justify-between'>
        <div className='flex flex-row gap-2 items-center'>
          <h1 className='text-muted-foreground'>Tech Stack:</h1>
          <div className='flex flex-row md:gap-1'>
            {project.stack.map((stackName) => {
              const stackData = STACK[stackName.name];
              if (!stackData) {
                return null;
              }
              return (
                <Tooltip key={stackData.key}>
                  <TooltipTrigger className='hover:scale-105 transition-all p-1 md:p-2 duration-300 ease-in-out'>
                    <Link
                      href={stackData.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='relative block h-12 w-12 lg:h-9 lg:w-9 overflow-hidden'
                    >
                      <Image
                        src={stackData.icon}
                        alt={stackData.key}
                        fill
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='p-2 lg:p-0 object-cover'
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stackData.key}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <BsGithub size={26} />
            <Link
              href={project.github || ""}
              className='text-violet-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              Source Code
            </Link>
          </div>
          <span className='text-muted-foreground'>|</span>
          <div>
            <Link
              href={project.url}
              className='flex flex-row gap-2 items-center'
            >
              <FiExternalLink size={24} />
              <span className='text-violet-400'>Live Demo</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden w-full h-full'>
        <Image
          src={project.image}
          alt='project'
          width={800}
          height={300}
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 53vw'
          priority
        ></Image>
      </div>
    </div>
  );
}

export default ProjectDetail;
