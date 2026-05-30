"use client";

import SpotlightCard from "@/common/components/ui/SpotlightCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { LuLayoutDashboard } from "react-icons/lu";

function CardDashboard() {
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
    <SpotlightCard
      className=' h-80 md:col-span-2'
      spotlightColor='rgba(200, 0, 100, 0.2)'
    >
      <Link href={"/dashboard"}>
        <div className=' flex flex-row items-center gap-4'>
          <div className='p-3 rounded-xl h-14 w-14 bg-neutral-300 dark:bg-neutral-800'>
            <LuLayoutDashboard
              size={24}
              className='object-cover w-full h-full text-description'
            />
          </div>
          <div>
            <h2 className='text-description text-sm font-medium'>Dashboard</h2>
            <p className='text-neutral-400 tracking-tight text-xs'>
              Real-time insights of my coding activity, GitHub metrics, and
              stats.
            </p>
          </div>
        </div>
      </Link>
      <div className='py-6 flex flex-col gap-4'>
        <GitHubCalendar
          username='onlyadmirer'
          colorScheme={`${isDark ? "dark" : "light"}`}
          theme={explicitTheme}
          fontSize={10}
          blockSize={8}
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
    </SpotlightCard>
  );
}

export default CardDashboard;
