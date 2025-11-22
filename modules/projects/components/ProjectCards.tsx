import SpotlightCardAchiev from "@/common/components/ui/SpotlightCardAchiev";
import { getInfo } from "@/lib/data";
import { Projects } from "@/types/userTypes";
import Image from "next/image";
import Link from "next/link";

async function ProjectCards() {
  const { userProjects } = await getInfo();
  return (
    <div className='grid grid-cols-1 py-6 gap-4 md:grid-cols-2 '>
      {userProjects.map((project: Projects) => (
        <Link
          key={project.id}
          href={`/projects/${project.slug}`}
          className='h-full'
        >
          <SpotlightCardAchiev className='flex flex-col justify-between overflow-hidden group'>
            <div className='relative h-46'>
              <Image
                src={project.image}
                alt='project'
                className='object-cover w-full h-full'
                fill
                priority
              ></Image>
              <div className='absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:bg-gray-800/60 group-hover:opacity-100'>
                <p className='font-semibold text-gray-100'>View Project →</p>
              </div>
            </div>
            <div className='px-4 py-6 space-y-2'>
              <h1 className='text-primary text-lg'>{project.title}</h1>
              <p className='text-sm text-muted-foreground'>
                {project.description}
              </p>
            </div>
          </SpotlightCardAchiev>
        </Link>
      ))}
    </div>
  );
}

export default ProjectCards;
