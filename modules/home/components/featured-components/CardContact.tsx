"use client";

import SpotlightCard from "@/common/components/ui/SpotlightCard";
import Link from "next/link";
import { LuBookUser } from "react-icons/lu";
import InstagramIcon from "@iconify-react/skill-icons/instagram";
import GmailDarkIcon from "@iconify-react/skill-icons/gmail-dark";
import LinkedinIcon from "@iconify-react/skill-icons/linkedin";
import GithubLightIcon from "@iconify-react/skill-icons/github-light";

function CardContact() {
  return (
    <SpotlightCard className=' h-80' spotlightColor='rgba(200, 0, 100, 0.2)'>
      <Link href={"/contact"}>
        <div className=' flex items-center flex-col gap-2'>
          <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
            <LuBookUser
              size={24}
              className='object-cover w-full h-full text-description'
            />
          </div>
          <div className='text-center'>
            <h2 className='text-description text-sm font-medium'>Contact</h2>
            <p className='text-neutral-400 tracking-tight text-xs'>
              Reach out via email, GitHub, or LinkedIn.
            </p>
          </div>
        </div>
      </Link>
      <div className='grid grid-cols-2 mt-6 md:mt-8 md:gap-8 gap-8 justify-items-center m-auto w-full'>
        <InstagramIcon className='md:h-10 h-14 justify-self-end hover:-rotate-6 hover:scale-110 transition-all duration-300 ease-in-out' />
        <GmailDarkIcon className='md:h-10 h-14 justify-self-start hover:rotate-6 hover:scale-110 transition-all duration-300 ease-in-out' />
        <LinkedinIcon className='md:h-10 h-14 justify-self-end hover:rotate-6 hover:scale-110 transition-all duration-300 ease-in-out' />
        <GithubLightIcon className='md:h-10 justify-self-start h-14 hover:-rotate-6 hover:scale-110 transition-all duration-300 ease-in-out' />
      </div>
    </SpotlightCard>
  );
}

export default CardContact;
