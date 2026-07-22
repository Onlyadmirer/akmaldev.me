"use client";

import { useTheme } from "@teispace/next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";

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
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
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

  if (!mounted) return null;

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className='mb-16'>
      <div className='flex items-center justify-between pb-4 border-b border-border'>
        <div className='flex items-center gap-2'>
          <FaGithub size={18} className='text-foreground-secondary' />
          <h2 className='text-lg font-semibold tracking-tight font-heading text-foreground'>
            {t("title")}
          </h2>
        </div>
        <Link
          href='https://github.com/onlyadmirer'
          target='_blank'
          className='text-xs transition-colors duration-200 text-foreground-secondary hover:text-foreground'
        >
          @Onlyadmirer
        </Link>
      </div>

      <div className='flex flex-col items-center justify-center w-full gap-4'>
        <div className='grid grid-cols-3 gap-8 mt-6'>
          <div className='flex flex-col items-center'>
            <p className='text-xs text-center text-foreground-secondary/90'>
              {t("publicRepos")}
            </p>
            <p className='mt-1 text-xl font-semibold tracking-tight font-heading text-foreground'>
              {github?.public_repos ?? "—"}
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-xs text-foreground-secondary/90'>{t("followers")}</p>
            <p className='mt-1 text-xl font-semibold tracking-tight font-heading text-foreground'>
              {github?.followers ?? "—"}
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-xs text-foreground-secondary/90'>{t("following")}</p>
            <p className='mt-1 text-xl font-semibold tracking-tight font-heading text-foreground'>
              {github?.following ?? "—"}
            </p>
          </div>
        </div>

        <GitHubCalendar
          username='onlyadmirer'
          colorScheme={`${isDark ? "dark" : "light"}`}
          theme={explicitTheme}
          fontSize={14}
          blockSize={11}
          blockMargin={4}
          year={"last"}
          blockRadius={2}
          tooltips={{
            activity: {
              text: (activity) =>
                t("tooltip", { count: activity.count, date: activity.date }),
              placement: "top",
              offset: 12,
            },
          }}
        />
      </div>
    </div>
  );
}

export default GithubStats;
