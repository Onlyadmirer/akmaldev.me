"use client";

import { useTheme } from "@teispace/next-themes";
import NextTopLoader from "nextjs-toploader";

function TopLoader() {
  const { theme } = useTheme();

  const color = theme === "dark" ? "#ffffff" : "#000000";

  return <NextTopLoader color={color} showSpinner={false} />;
}

export default TopLoader;
