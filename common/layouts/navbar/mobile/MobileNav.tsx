"use client";

import Image from "next/image";
import { RiMenu3Fill, RiVerifiedBadgeFill } from "react-icons/ri";
import ThemeToggle from "../../../components/ui/ThemeToggle";
import Link from "next/link";
import { useNavbar } from "@/hooks/useNavbar";
import { BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function MobileNav() {
  const { pathName, menuItems, toggleMenu, setShowMenu, showMenu } =
    useNavbar();

  return (
    <div
      className={`py-4 flex flex-col px-4 fixed inset-x-0 top-0 z-50 bg-transparent border-b border-primary/20 w-full backdrop-blur-3xl ${
        showMenu ? "h-screen" : "h-auto"
      }`}
    >
      <div
        className={`flex flex-row justify-between ${
          showMenu && "border-b border-muted-foreground/50 py-2"
        }`}
      >
        <div
          className={`flex transition-all duration-500 ease-in-out gap-4 ${
            showMenu ? "flex-col p-4" : "flex-row"
          }`}
        >
          <div
            className={`overflow-hidden w-9 h-9 rounded-full border-2 border-muted-foreground/50 relative ${
              showMenu && "h-18 w-18"
            }`}
          >
            <Image
              src={"/pp.jpeg"}
              alt='foto profile'
              fill
              className='w-full h-full object-cover'
            ></Image>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='text-2xl font-semibold '>Akmal</h1>
            <RiVerifiedBadgeFill className='text-cyan-400' size={20} />
          </div>
        </div>
        <div
          className={`grid place-items-center gap-4 ${
            showMenu ? "grid-rows-2 px-2 justify-items-end " : "grid-cols-2"
          }`}
        >
          <ThemeToggle />
          {showMenu ? (
            <IoMdClose
              size={26}
              onClick={() => toggleMenu()}
              className={` transition-all duration-500  cursor-pointer ease-in-out ${
                showMenu && "row-start-1"
              }`}
            />
          ) : (
            <RiMenu3Fill
              size={26}
              onClick={() => toggleMenu()}
              className={`transition-all duration-500 cursor-pointer ease-in-out ${
                showMenu && "row-start-1"
              }`}
            />
          )}
        </div>
      </div>
      <div
        className={`py-4 flex flex-col gap-1 transition-all duration-500 ease-in-out ${
          showMenu ? "h-full translate-y-0" : "h-0 hidden -translate-y-90"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={() => setShowMenu(!showMenu)}
            className={`flex flex-row justify-between py-2 rounded-lg px-4 items-center hover:scale-105 transition-all duration-200 ease-in-out hover:bg-muted-foreground/10 ${
              pathName === item.href
                ? "bg-muted-foreground/10 scale-105"
                : "bg-transparent"
            }`}
          >
            <div className='flex flex-row items-center gap-2'>
              {item.icon}
              <span className='text-lg'>{item.label}</span>
            </div>
            {pathName === item.href ? <BsArrowRight /> : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
