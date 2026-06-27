"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import SpotlightCard from "@/common/components/ui/SpotlightCard";
import Link from "next/link";
import {
  LuGalleryVerticalEnd,
  LuLayoutDashboard,
  LuUser,
} from "react-icons/lu";
import { MdBackupTable } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

function Featured() {
  const featured = [
    {
      route: "/projects",
      icon: (
        <LuGalleryVerticalEnd
          size={24}
          className='object-cover w-full h-full text-description'
        />
      ),
      title: "Projects",
      description:
        "Exploring my recent web development and systems integration projects",
    },
    {
      route: "/achievements",
      icon: (
        <PiCertificate
          size={24}
          className='object-cover w-full h-full text-description'
        />
      ),
      title: "Achievements",
      description:
        "Certificates, tech bootcamp completions, and academic milestones",
    },
    {
      route: "/about",
      icon: (
        <LuUser
          size={24}
          className='object-cover w-full h-full text-description'
        />
      ),
      title: "About",
      description: "Get to know more about my background and philosophy",
    },
    {
      route: "/dashboard",
      icon: (
        <LuLayoutDashboard
          size={24}
          className='object-cover w-full h-full text-description'
        />
      ),
      title: "Dashboard",
      description:
        "Real-time insights of my coding activity, GitHub metrics, and stats",
    },
  ];

  return (
    <div className='py-6'>
      <SubHeaderSection
        icon={<MdBackupTable size={24} />}
        title='Featured Section'
        description='Explore everything I’ve crafted, contributed, and accomplished.'
      />

      <div className='mt-8 flex flex-col sm:grid grid-cols-2 grid-rows-2 gap-4 sm:gap-2'>
        {featured.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className='flex flex-row items-center gap-4'
          >
            <SpotlightCard className='flex rounded-lg flex-row items-center gap-6 w-full'>
              <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
                <>{item.icon}</>
              </div>
              <div>
                <h2 className='text-description text-sm flex flex-row gap-2 items-center font-medium'>
                  {item.title}
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400 tracking-tight text-xs'>
                  {item.description}
                </p>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Featured;
