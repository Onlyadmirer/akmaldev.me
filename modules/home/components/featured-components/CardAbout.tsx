"use client";

import SpotlightCard from "@/common/components/ui/SpotlightCard";
import Stack from "@/components/Stack";
import Image from "next/image";
import Link from "next/link";
import { LuUser } from "react-icons/lu";

function CardAbout() {
  const images = [
    "/images/profile/akmal.jpg",
    "/images/about/a1.jpeg",
    "/images/about/a2.jpeg",
    "/images/about/a3.jpeg",
  ];

  return (
    <SpotlightCard className=' h-80 ' spotlightColor='rgba(200, 0, 100, 0.2)'>
      <Link href={"/about"}>
        <div className=' flex items-center flex-col gap-2'>
          <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
            <LuUser
              size={24}
              className='object-cover w-full h-full text-description'
            />
          </div>
          <div className='text-center'>
            <h2 className='text-description text-sm font-medium'>About me</h2>
            <p className='text-neutral-600 dark:text-neutral-400 tracking-tight text-xs'>
              Get to know more about my background and philosophy.
            </p>
          </div>
        </div>
      </Link>
      <div className='w-32 h-38 mx-auto mb-2 relative z-10'>
        <Stack
          randomRotation={false}
          sensitivity={100}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <div
              key={i}
              className='relative w-full h-full border-neutral-600 dark:border-neutral-200 border-2 rounded-xl overflow-hidden'
            >
              <Image
                src={src}
                alt={`card-${i + 1}`}
                fill
                draggable={false}
                className='object-cover'
                priority={i === 0}
              />
            </div>
          ))}
          autoplay
          autoplayDelay={2000}
          pauseOnHover
        />
      </div>
    </SpotlightCard>
  );
}

export default CardAbout;
