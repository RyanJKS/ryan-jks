import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--foreground)] text-[color:var(--background)] shadow-[0_14px_32px_rgba(0,0,0,0.16)] hover:translate-y-[-1px] hover:opacity-90",
        outline:
          "border border-[color:var(--border)] bg-[color:var(--panel-strong)] text-[color:var(--foreground)] shadow-[0_10px_26px_rgba(0,0,0,0.06)] backdrop-blur-xl hover:translate-y-[-1px] hover:border-[color:var(--accent)]/55",
        ghost:
          "text-[color:var(--muted)] hover:bg-[color:var(--panel)] hover:text-[color:var(--foreground)]",
        link: "text-[color:var(--accent-strong)] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5",
        sm: "min-h-9 px-3 text-xs",
        lg: "min-h-12 px-6",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
