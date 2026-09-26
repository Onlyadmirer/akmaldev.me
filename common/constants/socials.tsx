import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const socials = [
  {
    label: "Email",
    handle: "akmalrbc6@gmail.com",
    href: "mailto:akmalrbc6@gmail.com",
    icon: SiGmail,
  },
  {
    label: "GitHub",
    handle: "@Onlyadmirer",
    href: "https://github.com/Onlyadmirer",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "Akmal L",
    href: "https://www.linkedin.com/in/akmal-l-0365ab2b5/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    handle: "@akmal_2yu",
    href: "https://www.instagram.com/akmal_2yu",
    icon: BsInstagram,
  },
  {
    label: "TikTok",
    handle: "@akmalrbc2",
    href: "https://www.tiktok.com/@akmalrbc2",
    icon: FaTiktok,
  },
] as const;
