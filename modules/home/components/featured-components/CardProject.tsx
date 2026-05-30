"use client";

import SpotlightCard from "@/common/components/ui/SpotlightCard";
import CardSwap, { Card } from "@/common/components/ui/CardSwap";
import Image from "next/image";
import Link from "next/link";
import { LuGalleryVerticalEnd } from "react-icons/lu";

function CardProject() {
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
          <h2 className='text-description text-sm flex flex-row gap-2 items-center font-medium'>
            Projects
          </h2>
          <p className='text-neutral-400 tracking-tight text-xs'>
            Exploring my recent web development and systems integration
            projects.
          </p>
        </div>
      </Link>
      <div className='absolute sm:scale-55 scale-125 bottom-0 right-4'>
        <CardSwap
          cardDistance={100}
          verticalDistance={95}
          delay={3000}
          pauseOnHover={false}
        >
          <Card className='flex flex-col overflow-hidden'>
            <h3 className=' border-b px-2 border-neutral-100'>akmal.me</h3>
            <div className='w-full h-full relative'>
              <Image
                src={"/images/home/project1.png"}
                alt={"akmaldev"}
                fill
                className='object-cover object-top-left'
              />
            </div>
          </Card>
          <Card className='flex flex-col overflow-hidden'>
            <h3 className=' border-b px-2 border-neutral-100'>VELO</h3>
            <div className='w-full h-full relative'>
              <Image
                src={"/images/home/project2.png"}
                alt={"velo"}
                fill
                className='object-cover object-top-left'
              />
            </div>
          </Card>
          <Card className='flex flex-col overflow-hidden'>
            <h3 className=' border-b px-2 border-neutral-100'>On Process</h3>
            <div className='w-full h-full flex items-center justify-center relative'>
              {/* <Image
                src={"/images/home/project2.png"}
                alt={"velo"}
                fill
                className='object-cover object-top-left'
              /> */}
              <p>Will Update</p>
            </div>
          </Card>
        </CardSwap>
      </div>
    </SpotlightCard>
  );
}

export default CardProject;
