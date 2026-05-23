"use client";

import { createContext, useContext, useMemo } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(
    () => ({
      toggleTheme: () => {
        const isDark = document.documentElement.classList.contains("dark");
        const nextTheme: Theme = isDark ? "light" : "dark";
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        localStorage.setItem("theme", nextTheme);
      },
    }),
    [],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return value;
}
