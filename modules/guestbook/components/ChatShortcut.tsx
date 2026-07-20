"use client";

import { Bubble, BubbleContent } from "@/common/components/ui/bubble";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiChatSmileAiLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "shortcut-guestbook";

function ChatShortcut() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem(STORAGE_KEY);
    }
    return true;
  });

  useEffect(() => {
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  const closeButton = () => {
    setShowPopup(false);
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <div className='fixed right-4 xl:right-20 pointer-events-none gap-2 bottom-6 xl:bottom-10 flex flex-col'>
      {showPopup && (
        <div className='self-end w-70 justify-end flex pr-8 '>
          <Bubble className='pointer-events-none'>
            <BubbleContent className='rounded-br-none bg-surface text-foreground border border-border'>
              Want to leave a message? click here
            </BubbleContent>
            <span
              onClick={closeButton}
              className='p-1 -left-3 cursor-pointer -top-2 bg-surface border border-border absolute flex pointer-events-auto justify-center items-center h-6 w-6 rounded-full'
            >
              <IoMdClose />
            </span>
          </Bubble>
        </div>
      )}
      <Link
        href={"/guestbook"}
        className='rounded-full cursor-pointer pointer-events-auto w-12 h-12 sm:w-13 sm:h-13 flex justify-center items-center self-end group hover:scale-105 duration-300 transition-all ease-in-out p-3 bg-surface border border-border'
      >
        <IoChatbubbleEllipsesOutline size={28} className='group-hover:hidden' />
        <RiChatSmileAiLine size={28} className='hidden group-hover:block' />
      </Link>
    </div>
  );
}

export default ChatShortcut;
