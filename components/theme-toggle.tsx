"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </Button>
  );
}
