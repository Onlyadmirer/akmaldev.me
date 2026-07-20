"use client";

import { useTheme } from "@teispace/next-themes";
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
  const [github, setGithub] = useState<Github>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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

  if (!mounted) return null;

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className='mb-16'>
      <div className='flex items-center justify-between border-b border-border pb-4'>
        <div className='flex items-center gap-2'>
          <FaGithub size={18} className='text-foreground-secondary' />
          <h2 className='font-heading text-lg font-semibold tracking-tight text-foreground'>
            GitHub Activity
          </h2>
        </div>
        <Link
          href='https://github.com/onlyadmirer'
          target='_blank'
          className='text-xs text-foreground-secondary transition-colors duration-200 hover:text-foreground'
        >
          @Onlyadmirer
        </Link>
      </div>

      <div className='mt-6 grid grid-cols-3 gap-6'>
        <div>
          <p className='text-xs text-foreground-secondary/60'>
            Public Repositories
          </p>
          <p className='mt-1 font-heading text-xl font-semibold tracking-tight text-foreground'>
            {github?.public_repos ?? "—"}
          </p>
        </div>
        <div>
          <p className='text-xs text-foreground-secondary/60'>Followers</p>
          <p className='mt-1 font-heading text-xl font-semibold tracking-tight text-foreground'>
            {github?.followers ?? "—"}
          </p>
        </div>
        <div>
          <p className='text-xs text-foreground-secondary/60'>Following</p>
          <p className='mt-1 font-heading text-xl font-semibold tracking-tight text-foreground'>
            {github?.following ?? "—"}
          </p>
        </div>
      </div>

      <div className='mt-8'>
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
              text: (activity) => `${activity.count} activities on ${activity.date}`,
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
