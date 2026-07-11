"use client";

import Button from "@/common/components/ui/Button";
import { useSession } from "next-auth/react";
import { FaPlus } from "react-icons/fa";
import InputAchiv from "./InputAchiv";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";

function AddAchiev() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session?.user.role === "Admin" ? (
        <>
          <div className='py-4'>
            <Popover>
              <PopoverTrigger asChild>
                <Button className='flex items-center justify-center dark:hover:bg-neutral-800 dark:bg-neutral-900 dark:border border-neutral-600'>
                  <FaPlus />
                  <p>Add Achievement</p>
                </Button>
              </PopoverTrigger>
              <PopoverContent align='start'>
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
