import Image from "next/image";
import ThemeToggle from "../../../components/ui/ThemeToggle";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useNavbar } from "@/hooks/useNavbar";

function DekstopNav() {
  const { pathName, menuItems } = useNavbar();

  return (
    <div className='flex h-full flex-col px-1'>
      <div className='flex-3 flex flex-col pb-2 items-center gap-3 border-b border-primary/50'>
        <div className='overflow-hidden w-22 h-22 rounded-full border-2 border-primary/50 relative'>
          <Image
            src={"/akmal.jpg"}
            alt='Akmal'
            fill
            sizes='(max-width: 1200px) 50vw, 33vw'
            blurDataURL='...'
            placeholder='blur'
            className='object-cover'
          ></Image>
        </div>
        <div className='text-center'>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='text-2xl font-semibold '>Akmal</h1>
            <RiVerifiedBadgeFill className='text-cyan-400' size={20} />
          </div>
          <p className='text-sm text-muted-foreground'>@akmal</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div className='flex-4 py-4 flex flex-col gap-1 border-b border-primary/50'>
        {menuItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathName === "/"
              : pathName.startsWith(item.href);
          return (
            <Link
              href={item.href}
              key={item.label}
              className={`flex flex-row justify-between py-2 rounded-lg px-4 items-center hover:scale-105 hover:text-primary transition-all duration-200 ease-in-out hover:bg-muted-foreground/20 ${
                isActive
                  ? "bg-muted-foreground/20 text-primary scale-105"
                  : "bg-transparent text-muted-foreground"
              }`}
            >
              <div className='flex flex-row items-center gap-2'>
                {item.icon}
                <span className='text-base'>{item.label}</span>
              </div>
              {isActive ? <BsArrowRight /> : ""}
            </Link>
          );
        })}
      </div>
      <div className='flex-1 py-4'>
        <h1 className='text-center text-lg'>
          © {new Date().getFullYear()} Akmal. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default DekstopNav;
