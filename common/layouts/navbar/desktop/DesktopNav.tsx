import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useNavbar } from "@/common/layouts/navbar/useNavbar";
import ShinyText from "@/common/components/ui/ShinyText";
import IntlToggle from "../components/IntlToggle";

function DesktopNav() {
  const { pathName, menuItems } = useNavbar();

  return (
    <div className='flex flex-col h-full px-1'>
      <div className='flex flex-col items-center gap-3 pb-2 border-b flex-3 border-primary/50'>
        <div className='relative overflow-hidden border-2 rounded-full w-22 h-22 border-primary/50'>
          <Image
            src={"/images/profile/akmal.jpg"}
            alt='Akmal'
            fill
            sizes='(max-width: 1200px) 50vw, 33vw'
            blurDataURL='...'
            placeholder='blur'
            className='object-cover object-center scale-155'
          ></Image>
        </div>
        <div className='text-center'>
          <div className='flex flex-row items-center gap-2'>
            <ShinyText
              text='Akmal'
              speed={2}
              delay={0}
              color={"var(--shiny-color)"}
              shineColor={"var(--shiny-shine)"}
              spread={120}
              direction='left'
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className='text-2xl font-medium'
            />
            <RiVerifiedBadgeFill className='text-cyan-400' size={20} />
          </div>
          <p className='text-sm text-muted-foreground'>@akmal</p>
        </div>
        <div className='flex flex-row items-center justify-around w-full '>
          <IntlToggle />
          <ThemeToggle />
        </div>
      </div>
      <div className='flex flex-col gap-1 py-4 border-b flex-4 border-primary/50'>
        {menuItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathName === "/"
              : pathName.startsWith(item.href);
          return (
            <Link
              href={item.href}
              key={item.label}
              className={`group flex flex-row justify-between py-2 rounded-lg px-4 items-center hover:scale-105 hover:text-primary transition-all duration-200 ease-in-out hover:bg-muted-foreground/20 ${
                isActive
                  ? "bg-muted-foreground/20 text-primary scale-105"
                  : "bg-transparent text-muted-foreground"
              }`}
            >
              <div className='flex flex-row items-center gap-2'>
                <span className='transition-all duration-500 ease-in-out group-hover:-rotate-10'>
                  {item.icon}
                </span>
                <span className='text-base'>{item.label}</span>
              </div>
              {isActive ? <BsArrowRight /> : ""}
            </Link>
          );
        })}
      </div>
      <div className='flex-1 py-4 mt-4'>
        <h1 className='text-sm text-center'>
          © {new Date().getFullYear()} Akmal. <br /> All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default DesktopNav;
