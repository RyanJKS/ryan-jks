import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "premium-card rounded-[var(--radius-sm)] p-6",
        interactive &&
          "transition duration-300 hover:border-[color:var(--accent)]/35 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_48px_rgba(0,0,0,0.32)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative z-10 mb-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold tracking-tight text-[color:var(--foreground)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("relative z-10 mt-2 text-sm leading-7 text-[color:var(--muted)]", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative z-10", className)} {...props} />;
}
