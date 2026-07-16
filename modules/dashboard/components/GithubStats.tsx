"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import SpotlightCard from "@/common/components/ui/SpotlightCard";
import { useTheme } from "@teispace/next-themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

interface Github {
  public_repos: number;
  followers: number;
  following: number;
}

function GithubStats() {
  const t = useTranslations("DashboardPage.GithubStats");
  const [github, setGithub] = useState<Github>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const githubDatas = async () => {
      const response = await fetch("https://api.github.com/users/Onlyadmirer");
      const datas = await response.json();
      setGithub(datas);
    };
    githubDatas();
  }, []);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!mounted) {
    return null;
  }

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className='py-6 flex flex-col gap-4 border-b border-neutral-600'>
      <div className='flex flex-row justify-between items-end'>
        <SubHeaderSection
          icon={<FaGithub height='2em' />}
          title={t("title")}
          description={t("description")}
        />
        <Link href={"https://github.com/onlyadmirer"} target='_blank'>
          <p className='text-muted-foreground font-medium'>{t("username")}</p>
        </Link>
      </div>
      <div className='grid grid-cols-3 grid-rows-1 py-4 gap-4 w-full '>
        <SpotlightCard className='rounded-md text-center flex flex-col justify-center items-center'>
          <p className='text-neutral-600 dark:text-neutral-400 text-sm md:text-base'>
            {t("publicRepos")}
          </p>
          <p className='text-[#7052b6] dark:text-[#ad89ff] text-2xl font-semibold '>
            {github?.public_repos}
          </p>
        </SpotlightCard>
        <SpotlightCard className='rounded-md flex flex-col justify-center items-center'>
          <p className='text-neutral-600 dark:text-neutral-400 text-sm md:text-base'>
            {t("followers")}
          </p>
          <p className='text-[#7052b6] dark:text-[#ad89ff] text-2xl font-semibold  '>
            {github?.followers}
          </p>
        </SpotlightCard>
        <SpotlightCard className='rounded-md flex flex-col justify-center items-center'>
          <p className='text-neutral-600 dark:text-neutral-400 text-sm md:text-base'>
            {t("following")}
          </p>
          <p className='text-[#7052b6] dark:text-[#ad89ff] text-2xl font-semibold  '>
            {github?.following}
          </p>
        </SpotlightCard>
      </div>
      <GitHubCalendar
        username='onlyadmirer'
        colorScheme={`${isDark ? "dark" : "light"}`}
        theme={explicitTheme}
        fontSize={14}
        blockSize={11}
        blockMargin={4}
        year={"last"}
        blockRadius={3}
        tooltips={{
          activity: {
            text: (activity) => `${activity.count} ${t("tooltip", { date: activity.date })}`,
            placement: "top",
            offset: 12,
            transitionStyles: {
              common: { fontFamily: "monospace" },
            },
            withArrow: true,
          },
        }}
      />
    </div>
  );
}

export default GithubStats;
