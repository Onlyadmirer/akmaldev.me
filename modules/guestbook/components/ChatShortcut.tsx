"use client";

import { Bubble, BubbleContent } from "@/common/components/ui/bubble";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiChatSmileAiLine } from "react-icons/ri";
import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

function ChatShortcut() {
  const [close, setClose] = useState(false);

  const closeButton = () => {
    setClose(true);
  };

  return (
    <div className='fixed right-4 xl:right-20 pointer-events-none gap-2 bottom-6 xl:bottom-10 flex flex-col'>
      {close ? (
        ""
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            scale: [0, 0, 1.1, 1, 1],
            opacity: [0, 0, 1, 1, 1],
          }}
          transition={{
            duration: 10,
            times: [0, 0.5, 0.52, 0.55, 1],
            ease: "easeInOut",
          }}
          className='self-end w-70 justify-end flex pr-8 '
        >
          <Bubble className='relative pointer-events-none' variant={"tinted"}>
            <BubbleContent className='rounded-br-none '>
              Want to leave a message? click here
            </BubbleContent>
            <span
              onClick={() => closeButton()}
              className='p-1 -left-3 cursor-pointer -top-2 bg-neutral-300 dark:bg-neutral-700 absolute flex pointer-events-auto justify-center items-center h-6 w-6 rounded-full'
            >
              <IoMdClose />
            </span>
          </Bubble>
        </motion.div>
      )}
      <Link
        href={"/guestbook"}
        className='rounded-full cursor-pointer pointer-events-auto w-12 h-12 sm:w-13 sm:h-13 flex justify-center items-center self-end group hover:scale-105 duration-300 transition-all ease-in-out p-3 bg-neutral-200 dark:bg-neutral-700 border border-neutral-600'
      >
        <IoChatbubbleEllipsesOutline size={28} className='group-hover:hidden' />
        <RiChatSmileAiLine size={28} className='hidden group-hover:block' />
      </Link>
    </div>
  );
}

export default ChatShortcut;
