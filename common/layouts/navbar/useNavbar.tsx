"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LuBookUser,
  LuGalleryVerticalEnd,
  LuHouse,
  LuLayoutDashboard,
  LuUser,
} from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";

export const useNavbar = () => {
  const pathName = usePathname();
  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <LuHouse size={20} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <LuUser size={20} />,
    },
    {
      label: "Achievements",
      href: "/achievements",
      icon: <PiCertificate size={20} />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <LuGalleryVerticalEnd size={20} />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <LuBookUser size={20} />,
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return { pathName, menuItems, toggleMenu, showMenu, setShowMenu };
};
