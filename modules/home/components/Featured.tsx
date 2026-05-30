"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import SpotlightCard from "@/common/components/ui/SpotlightCard";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdBackupTable } from "react-icons/md";
import CardAchiev from "./featured-components/CardAchiev";
import CardProject from "./featured-components/CardProject";
import CardAbout from "./featured-components/CardAbout";
import CardSkills from "./featured-components/CardSkills";
import CardContact from "./featured-components/CardContact";

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
        <CardProject />
        {/* Card About */}
        <CardAbout />
        {/* Card Skills */}
        <CardSkills />
        {/* Card Achievements */}
        <CardAchiev />
        {/* Card Contact */}
        <CardContact />
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
                  className='object-cover w-full h-full text-description'
                />
              </div>
              <div>
                <h2 className='text-description text-sm font-medium'>
                  Dashboard
                </h2>
                <p className='text-neutral-400 tracking-tight text-xs'>
                  Real-time insights of my coding activity, GitHub metrics, and
                  stats.
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
