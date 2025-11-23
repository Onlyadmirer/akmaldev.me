import Image from "next/image";
import Link from "next/link";
import SpotlightCardAchiev from "@/common/components/ui/SpotlightCardAchiev";
import { Achiv } from "../../../types/userTypes";
import { getInfo } from "@/lib/data";

async function CardAchiv() {
  const { userAchievements } = await getInfo();

  return (
    <div className='grid grid-cols-1 py-6 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {userAchievements.map((achiev: Achiv) => (
        <Link
          key={achiev.id}
          href={achiev.url}
          className='h-full'
          target='_blank'
        >
          <SpotlightCardAchiev className='flex flex-col justify-between overflow-hidden group'>
            <div className='relative h-46'>
              <Image
                src={achiev.url}
                alt='sertification'
                className='object-cover '
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
              ></Image>
              <div className='absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:bg-gray-800/60 group-hover:opacity-100'>
                <p className='font-semibold text-gray-100'>Show Credential →</p>
              </div>
            </div>
            <div className='flex flex-col px-4 py-6 space-y-2 h-1/2'>
              <h1 className='text-primary'>{achiev.title}</h1>
              <p className='text-sm font-semibold text-muted-foreground/90'>
                {achiev.publisher}
              </p>
              <p className='text-xs text-muted-foreground/80 '>Issued on</p>
              <p className='text-sm text-muted-foreground/90 '>
                {achiev.issuedOn}
              </p>
            </div>
          </SpotlightCardAchiev>
        </Link>
      ))}
    </div>
  );
}

export default CardAchiv;
