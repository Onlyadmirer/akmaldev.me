"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

export function ThemeProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  );
}
