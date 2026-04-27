"use client";

import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { useForm } from "react-hook-form";
import { ContactFormSchema, ContactType } from "@/lib/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useContact = () => {
  const items = [
    {
      title: "Instagram",
      description: "Follow my latest activities and visual works on Instagram.",
      action: "View Profile",
      icon: <BsInstagram size={38} />,
      background: "bg-[url(/backgroundSocialMedia/instagram.png))]",
      url: "https://www.instagram.com/akmal_2yu",
    },
    {
      title: "LinkedIn",
      description:
        "Connect with me professionally and view my work history and career path.",
      action: "View Profile",
      icon: <FaLinkedin size={38} />,
      background: "bg-[url(/backgroundSocialMedia/linkedin.png))]",
      url: "https://www.linkedin.com/in/akmal-l-0365ab2b5/",
    },
    {
      title: "GitHub",
      description:
        "Explore my coding projects, contributions, and public repositories.",
      action: "View Repositories",
      icon: <SiGithub size={38} />,
      background: "bg-[url(/backgroundSocialMedia/github.png))]",
      github: "https://github.com/Onlyadmirer",
    },
    {
      title: "TikTok",
      description: "Watch short videos, creative content, or quick tutorials.",
      action: "Watch Content",
      icon: <FaTiktok size={38} />,
      background: "bg-[url(/backgroundSocialMedia/tiktok.png))]",
      url: "https://www.tiktok.com/@akmalrbc2",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({ resolver: zodResolver(ContactFormSchema) });

  return { items, register, handleSubmit, errors };
};
