"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import { Spinner } from "@/common/components/ui/spinner";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { BsEmojiDizzy } from "react-icons/bs";
import { SiUmami } from "react-icons/si";

function UmamiStats() {
  const t = useTranslations("DashboardPage.UmamiStats");
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
    <div className='py-6 flex flex-col gap-4 '>
      <SubHeaderSection
        icon={<SiUmami height='2em' />}
        title={t("title")}
        description={t("description")}
      />
      <div>
        {isLoading ? (
          <Spinner />
        ) : isBlock ? (
          <div className=' flex py-6 mt-6 text-neutral-400 flex-col gap-4 justify-center items-center'>
            <BsEmojiDizzy size={36} />
            <p className='text-center text-sm'>
              {" "}
              {t("error")}
            </p>
          </div>
        ) : (
          <iframe
            src='https://cloud.umami.is/share/kQqVwGiVToTkkgX0/akmaldev.me'
            className='w-full h-[600px] border-0'
            referrerPolicy='origin'
            loading='lazy'
          />
        )}
      </div>
    </div>
  );
}

export default UmamiStats;
