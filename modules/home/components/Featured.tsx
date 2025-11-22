"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
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

function Featured() {
  return (
    <div className='py-6 '>
      <SubHeaderSection
        icon={<MdBackupTable size={26} />}
        title='Featured Section'
        description='Explore everything I’ve crafted, contributed, and accomplished.'
      />
      <div className='grid grid-cols-1 pt-6 gap-2 md:grid-cols-4 md:grid-rows-2 '>
        {/* Card Projects */}
        <SpotlightCard
          className='custom-spotlight-card h-80 md:col-span-2'
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
              <p className='text-sm text-muted-foreground'>
                Discover the works I’ve built and crafted with passion.
              </p>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card About */}
        <SpotlightCard
          className='custom-spotlight-card h-80 '
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/about"}>
            <div className=' flex items-center flex-col gap-2'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <LuUser size={24} className='object-cover w-full h-full' />
              </div>
              <div className='text-center'>
                <h2 className='text-base font-medium'>About me</h2>
                <p className='text-sm text-muted-foreground max-w-58'>
                  Learn more about who I am and what drives me.
                </p>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Skills */}
        <SpotlightCard
          className='custom-spotlight-card h-80 '
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
                <p className='text-sm text-muted-foreground max-w-58'>
                  Expertise across web and UI/UX technologies.
                </p>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Achievements */}
        <SpotlightCard
          className='custom-spotlight-card h-80'
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/achievements"}>
            <div className=' flex items-center flex-col gap-2'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <PiCertificate
                  size={24}
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='text-center'>
                <h2 className='text-base font-medium'>Achievements</h2>
                <p className='text-sm text-muted-foreground max-w-58'>
                  Highlights from projects, programs, and community
                  contributions.
                </p>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Contact */}
        <SpotlightCard
          className='custom-spotlight-card h-80'
          spotlightColor='rgba(200, 0, 100, 0.2)'
        >
          <Link href={"/contact"}>
            <div className=' flex items-center flex-col gap-2'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <LuBookUser size={24} className='object-cover w-full h-full' />
              </div>
              <div className='text-center'>
                <h2 className='text-base font-medium'>Contact</h2>
                <p className='text-sm text-muted-foreground '>
                  Get in touch or collaborate with me.
                </p>
              </div>
            </div>
          </Link>
        </SpotlightCard>
        {/* Card Dashboard */}
        <SpotlightCard
          className='custom-spotlight-card h-80 md:col-span-2'
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
                <p className='text-sm text-muted-foreground'>
                  Personal insights and data-driven portfolio view.
                </p>
              </div>
            </div>
          </Link>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Featured;
