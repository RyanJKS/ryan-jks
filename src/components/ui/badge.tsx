import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "signal";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variant === "default" &&
          "border-[color:var(--accent)]/30 bg-[color:var(--accent)]/8 text-[color:var(--accent-strong)]",
        variant === "secondary" &&
          "border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--muted)] backdrop-blur-xl",
        variant === "signal" &&
          "border-[color:var(--signal)]/30 bg-[color:var(--signal)]/10 text-[color:var(--signal)]",
        className,
      )}
      {...props}
    />
  );
}
