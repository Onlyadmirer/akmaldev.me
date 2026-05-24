"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import Folder from "@/common/components/ui/Folder";
import SpotlightCard from "@/common/components/ui/SpotlightCard";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import {
  LuBookUser,
  LuGalleryVerticalEnd,
  LuLayoutDashboard,
  LuUser,
} from "react-icons/lu";
import { MdBackupTable } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import CardAchiev from "./featured-components/CardAchiev";

function Featured() {
  return (
    <div className='py-6 '>
      <SubHeaderSection
        icon={<MdBackupTable size={24} />}
        title='Featured Section'
        description='Explore everything I’ve crafted, contributed, and accomplished.'
      />
      <div className='grid grid-cols-1 pt-6 gap-2 md:grid-cols-4 md:grid-rows-2 '>
        {/* Card Projects */}
        <SpotlightCard
          className=' h-80 md:col-span-2'
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/projects"} className='flex flex-row items-center gap-4'>
            <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
              <LuGalleryVerticalEnd
                size={24}
                className='object-cover w-full h-full'
              />
            </div>
            <div>
              <h2 className='text-base font-medium'>Projects</h2>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card About */}
        <SpotlightCard
          className=' h-80 '
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/about"}>
            <div className=' flex items-center flex-col gap-2'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <LuUser size={24} className='object-cover w-full h-full' />
              </div>
              <div className='text-center'>
                <h2 className='text-base font-medium'>About me</h2>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Skills */}
        <SpotlightCard
          className=' h-80 '
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/"}>
            <div className=' flex items-center flex-col gap-2'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <GrTechnology
                  size={24}
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='text-center'>
                <h2 className='text-base font-medium'>Skills</h2>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Achievements */}
        <CardAchiev />
        {/* Card Contact */}
        <SpotlightCard
          className=' h-80'
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/contact"}>
            <div className=' flex items-center flex-col gap-2'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <LuBookUser size={24} className='object-cover w-full h-full' />
              </div>
              <div className='text-center'>
                <h2 className='text-base font-medium'>Contact</h2>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Dashboard */}
        <SpotlightCard
          className=' h-80 md:col-span-2'
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/dashboard"}>
            <div className=' flex flex-row items-center gap-4'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <LuLayoutDashboard
                  size={24}
                  className='object-cover w-full h-full'
                />
              </div>
              <div>
                <h2 className='text-base font-medium'>Dashboard</h2>
              </div>
            </div>
          </Link>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Featured;
