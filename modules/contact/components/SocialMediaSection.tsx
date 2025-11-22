"use client";

import Button from "@/common/components/ui/Button";
import { useContact } from "./useContact";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

function SocialMediaSection() {
  const { items } = useContact();

  return (
    <div className='py-6 space-y-4 border-b border-primary/50'>
      <h1 className='text-primary'>Find me on social media</h1>
      <div className='grid lg:grid-cols-2 gap-4 grid-rows-3'>
        <div className='rounded-md lg:col-span-2 flex flex-row justify-between items-center py-4 px-6 bg-[url(/backgroundSocialMedia/gmail.svg)]'>
          <div className='space-y-3'>
            <div className='space-y-2'>
              <h1 className='text-xl font-semibold text-neutral-200'>
                Stay in Touch
              </h1>
              <p className='text-sm font-medium text-neutral-300'>
                Reach out via email for formal inquiries or project
                collaborations.
              </p>
            </div>
            <a
              href='mailto:akmalrbc6@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>Send Email</Button>
            </a>
          </div>
          <div className='rounded-2xl p-2 border-4 flex items-center justify-center w-16 h-16 border-neutral-200/60'>
            <SiGmail size={38} />
          </div>
        </div>
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-md row-span-1 flex flex-row justify-between items-center py-4 px-6 ${item.background}`}
          >
            <div className='space-y-3'>
              <div className='space-y-2'>
                <h1 className='text-xl font-semibold text-neutral-200'>
                  {item.title}
                </h1>
                <p className='text-sm font-medium max-w-[90%] text-neutral-300'>
                  {item.description}
                </p>
              </div>
              <Link
                href={item.url || ""}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button>{item.action}</Button>
              </Link>
            </div>
            <div className='rounded-2xl p-2 border-4 flex items-center justify-center w-16 h-16 border-neutral-200/60'>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaSection;
