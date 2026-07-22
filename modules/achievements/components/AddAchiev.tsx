"use client";

import Button from "@/common/components/ui/Button";
import { useSession } from "next-auth/react";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";
import InputAchiv from "./InputAchiv";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";

function AddAchiev() {
  const t = useTranslations("AchievementsPage");
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>{t("loading")}</p>;
  }

  return (
    <>
      {session?.user.role === "Admin" ? (
        <>
          <div className='py-4'>
            <Popover>
              <PopoverTrigger asChild>
                <Button className='flex items-center justify-center rounded-md border border-border text-foreground'>
                  <FaPlus />
                  <p>{t("addAchievement")}</p>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='bg-background' align='start'>
                <InputAchiv />
              </PopoverContent>
            </Popover>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default AddAchiev;
