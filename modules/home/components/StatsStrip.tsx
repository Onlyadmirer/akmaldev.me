"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GITHUB_USERNAME } from "@/common/constants/owner";

interface Github {
  public_repos: number;
  followers: number;
  following: number;
}

function StatsStrip() {
  const t = useTranslations("DashboardPage.GithubStats");
  const home = useTranslations("HomePage.Stack");
  const [github, setGithub] = useState<Github>();

  useEffect(() => {
    let ignore = false;

    const fetchGithub = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!response.ok) return;
        const data: Github = await response.json();
        if (!ignore) setGithub(data);
      } catch {
        return;
      }
    };

    fetchGithub();
    return () => {
      ignore = true;
    };
  }, []);

  const stats = [
    { label: t("publicRepos"), value: github?.public_repos },
    { label: t("followers"), value: github?.followers },
    { label: t("following"), value: github?.following },
  ];

  return (
    <div className='border border-border bg-surface p-6'>
      <div className='flex items-center gap-2 border-b border-border pb-4'>
        <FaGithub size={16} className='text-foreground-secondary' />
        <h3 className='font-heading text-sm font-semibold tracking-tight text-foreground'>
          {home("statsTitle")}
        </h3>
        <span className='ml-auto text-xs text-foreground-secondary'>
          {home("statsSubtitle")}
        </span>
      </div>

      <div className='divide-y divide-border'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='flex items-baseline justify-between gap-4 py-3'
          >
            <span className='text-xs text-foreground-secondary'>{stat.label}</span>
            <span className='font-heading text-2xl font-semibold tabular-nums tracking-tight text-foreground'>
              {stat.value ?? "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsStrip;
