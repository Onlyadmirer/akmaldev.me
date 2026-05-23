"use client";

import SubHeaderSection from "@/common/components/elements/SubHeaderSection";
import GithubIcon from "@iconify-react/mdi/github";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

function GithubStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return null;
  }

  return (
    <div className='py-6 flex flex-col gap-4'>
      <div className='flex flex-row justify-between items-end'>
        <SubHeaderSection
          icon={<GithubIcon height='2em' />}
          title='Github Activity'
          description='Open source contributions, repositories, and coding activity over the past year.'
        />
        <Link href={"https://github.com/onlyadmirer"} target='_blank'>
          <p className='text-muted-foreground font-medium'>@akmal</p>
        </Link>
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
            text: (activity) =>
              `${activity.count} activities on ${activity.date}`,
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
