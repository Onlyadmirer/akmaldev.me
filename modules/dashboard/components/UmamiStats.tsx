"use client";

import { Spinner } from "@/common/components/ui/spinner";
import { useEffect, useState } from "react";
import { BsEmojiDizzy } from "react-icons/bs";
import { SiUmami } from "react-icons/si";

function UmamiStats() {
  const [isBlock, setIsBlock] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const umami = "https://cloud.umami.is/share/kQqVwGiVToTkkgX0/akmaldev.me";

  useEffect(() => {
    fetch(umami, { mode: "no-cors" })
      .then(() => {
        setIsLoading(true);
      })
      .then(() => {
        setIsBlock(false);
      })
      .catch(() => {
        setIsBlock(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className='flex items-center gap-2 border-b border-border pb-4'>
        <SiUmami size={18} className='text-foreground-secondary' />
        <h2 className='font-heading text-lg font-semibold tracking-tight text-foreground'>
          Umami
        </h2>
      </div>
      <div className='mt-6'>
        {isLoading ? (
          <Spinner />
        ) : isBlock ? (
          <div className='flex flex-col items-center justify-center gap-3 py-12 text-center'>
            <BsEmojiDizzy size={24} className='text-foreground-secondary/40' />
            <p className='text-sm text-foreground-secondary/60'>
              Failed to load analytics. Please disable your AdBlocker or Brave
              Shields.
            </p>
          </div>
        ) : (
          <iframe
            src='https://cloud.umami.is/share/kQqVwGiVToTkkgX0/akmaldev.me'
            className='h-[600px] w-full border-0'
            referrerPolicy='origin'
            loading='lazy'
          />
        )}
      </div>
    </div>
  );
}

export default UmamiStats;
