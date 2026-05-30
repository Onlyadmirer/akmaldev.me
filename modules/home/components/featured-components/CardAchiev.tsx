"use client";

import Folder from "@/common/components/ui/Folder";
import SpotlightCard from "@/common/components/ui/SpotlightCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiCertificate } from "react-icons/pi";

type Achievement = {
  id: string;
  url: string;
  title?: string;
};

function CardAchiev() {
  const [achiv, setAchiv] = useState<Achievement[]>([]);

  useEffect(() => {
    async function getAchiv() {
      try {
        const response = await fetch("/api/achievements");
        const data = await response.json();
        setAchiv(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      }
    }

    getAchiv();
  }, []);

  const achivImage = achiv
    .slice(0, 3)
    .map((achiv) => (
      <Image
        key={achiv?.id}
        src={achiv.url}
        alt={achiv.title || ""}
        fill
        className='object-cover'
      />
    ));

  return (
    <SpotlightCard
      className='flex flex-col items-center justify-between h-80 pb-10 md:py-10'
      spotlightColor='rgba(200, 0, 100, 0.2)'
    >
      <Link
        href={"/achievements"}
        className=' w-full flex items-center flex-row md:flex-col gap-4 md:gap-2'
      >
        <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
          <PiCertificate
            size={24}
            className='object-cover text-description w-full h-full'
          />
        </div>
        <div className='md:text-center'>
          <h2 className='text-description text-sm font-medium'>Achievements</h2>
          <p className='text-neutral-400 text-start md:text-center tracking-tight text-xs'>
            Certificates, tech bootcamp completions, and academic milestones.
          </p>
        </div>
      </Link>
      <Folder
        size={1}
        color='#5227FF'
        className='custom-folder scale-125 md:scale-100'
        items={achivImage}
      />
    </SpotlightCard>
  );
}

export default CardAchiev;
