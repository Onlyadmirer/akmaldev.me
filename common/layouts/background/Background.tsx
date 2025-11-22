"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Background() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className='absolute inset-0 -z-10 bg-neutral-100 dark:bg-neutral-900' />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {isDark ? (
        <>
          {/* Dark mode background */}
          <div
            className='fixed inset-0 -z-10 transition-bg'
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), radial-gradient(68% 58% at 50% 50%, #8a2be2 0%, #7b1fa2 16%, #6a1b9a 32%, #5e1a8a 46%, #4d177a 60%, #3c146a 72%, #2c115c 84%, #1d0f4d 94%, #0a0a0a 100%)",
            }}
          />
          <div
            className='absolute inset-0 -z-10 pointer-events-none'
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
              opacity: 0.95,
            }}
          />
        </>
      ) : (
        <>
          {/* Light mode background */}
          {/* Cool Blue Glow Top */}
          <div
            className='fixed inset-0 -z-10'
            style={{
              background: "#F5F5F5",
            }}
          />
          {/* Your Content/Components */}
        </>
      )}
    </>
  );
}

export default Background;
