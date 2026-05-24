"use client";

import SpotlightCard from "@/common/components/ui/SpotlightCard";
import CardSwap, { Card } from "@/components/CardSwap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuGalleryVerticalEnd } from "react-icons/lu";

type Projects = {
  id: number;
  title: string;
  image: string;
};

function CardProject() {
  const [project, setProject] = useState<Projects[]>([]);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProject(data.projects);
      } catch (error) {
        console.error("gagal mengambil data", error);
      }
    }

    getProjects();
  }, []);

  return (
    <SpotlightCard
      className=' h-80 md:col-span-2 flex flex-col justify-between relative'
      spotlightColor='rgba(200, 0, 100, 0.2)'
    >
      <Link href={"/projects"} className='flex flex-row items-center gap-4'>
        <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
          <LuGalleryVerticalEnd
            size={24}
            className='object-cover w-full h-full text-description'
          />
        </div>
        <div>
          <h2 className='text-description flex flex-row gap-2 items-center font-medium'>
            Projects
            <ArrowRight className='translate-y-0.5' size={14} />
          </h2>
        </div>
      </Link>
      <div className='absolute sm:scale-55 scale-125 bottom-0 right-4'>
        <CardSwap
          cardDistance={100}
          verticalDistance={95}
          delay={3000}
          pauseOnHover={false}
        >
          {project.map((proj) => (
            <Card key={proj.id} className='flex flex-col overflow-hidden'>
              <h3 className=' border-b px-2 border-neutral-100'>
                {proj.title}
              </h3>
              <div className='w-full h-full relative'>
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className='object-cover object-top-left'
                />
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </SpotlightCard>
  );
}

export default CardProject;
