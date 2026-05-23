"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const cn = (...inputs: Array<string | false | null | undefined>) => {
  return inputs.filter(Boolean).join(" ");
};

const LocalStyles = () => (
  <style>{`
    .hero-underline { position: absolute; left: 0; width: 100%; top: 100%; margin-top: -5px; pointer-events: none; }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
    .animate-fade-in-up-delay-1 { animation-delay: 0.2s; }
    .animate-fade-in-up-delay-2 { animation-delay: 0.4s; }

    .btn-base {
      transition: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes btn-bounce {
      0% { transform: scale(1); }
      50% { transform: scale(0.95); }
      100% { transform: scale(1); }
    }
    .btn-bounce-anim {
      animation: btn-bounce 0.3s cubic-bezier(0.36, 0, 0.66, -0.56);
    }

    .btn-focus-ring:focus-visible { outline: 2px solid var(--foreground); outline-offset: 3px; }
    .focus-outline:focus-visible { outline: 2px solid var(--foreground); outline-offset: 2px; }
  `}</style>
);

const buttonVariants = cva(
  "btn-base inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[color:var(--foreground)] text-[color:var(--background)]",
        outline:
          "border-2 border-[color:var(--foreground)] bg-[color:var(--background)] text-[color:var(--foreground)]",
        ghost: "bg-transparent text-[color:var(--foreground)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, ...props }, ref) => {
    const localRef = useRef<HTMLButtonElement | null>(null);
    const mergedRef = (node: HTMLButtonElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const btn = localRef.current;
      if (!btn) return;

      btn.classList.add("btn-bounce-anim");
      window.setTimeout(() => btn.classList.remove("btn-bounce-anim"), 300);

      if (onClick) onClick(event);
    };

    const classes = cn(buttonVariants({ variant, size }) as string, className ?? "");
    return <button ref={mergedRef} onClick={handleClick} className={classes} {...props} />;
  },
);
Button.displayName = "Button";

interface ComponentProps {
  brand?: string;
  heroClassName?: string;
  onSignIn?: () => void;
  onTryForFree?: () => void;
}

const Navigation: React.FC<{ brand?: string; onSignIn?: () => void }> = ({
  brand = "SaaS",
  onSignIn,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!menuOpen) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && triggerRef.current) triggerRef.current.focus();
  }, [menuOpen]);

  const navItems = [
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
  ];

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight transition-opacity">
              {brand}
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="focus-outline text-sm font-medium text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </a>
            ))}

            <Button size="sm" variant="default" className="focus-outline" onClick={() => onSignIn?.()}>
              Sign In
            </Button>
          </div>

          <div className="relative md:hidden">
            <Button
              size="sm"
              variant="ghost"
              className="focus-outline font-medium"
              onClick={() => setMenuOpen((state) => !state)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="menu"
              ref={triggerRef}
            >
              {menuOpen ? "Close" : "Menu"}
            </Button>

            {menuOpen && (
              <div
                id="mobile-menu"
                ref={menuRef}
                className="absolute right-0 mt-2 w-56 rounded-md border border-[color:var(--border)] bg-[color:var(--background)]/95 p-3 shadow-lg backdrop-blur-md"
                role="menu"
                aria-label="Mobile menu"
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="focus-outline block rounded px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition-colors hover:bg-[color:var(--panel)] hover:text-[color:var(--foreground)]"
                      onClick={() => setMenuOpen(false)}
                      role="menuitem"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="space-y-2 pt-2">
                    <Button
                      size="sm"
                      variant="default"
                      className="focus-outline w-full justify-center"
                      onClick={() => {
                        setMenuOpen(false);
                        onSignIn?.();
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ heroClassName?: string; onTryForFree?: () => void }> = ({
  heroClassName,
  onTryForFree,
}) => {
  return (
    <section
      className="flex min-h-screen items-center justify-center px-4 pb-24 pt-32 md:pb-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1
          id="hero-heading"
          className="animate-fade-in-up mb-6 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl"
        >
          A Simple Hero For Your
          <br />
          <span className="relative inline-block">
            <span className={cn(heroClassName ?? "", "text-5xl font-normal sm:text-6xl md:text-7xl")}>
              SaaS
            </span>
            <svg
              className="hero-underline"
              viewBox="0 0 170 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 9C32.8203 5.34032 108.769 -0.881146 166 3.51047"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
            </svg>
          </span>{" "}
          Success
        </h1>

        <div className="animate-fade-in-up animate-fade-in-up-delay-1 mx-auto mb-9 max-w-2xl">
          <p className="text-base leading-snug text-[color:var(--muted)] sm:text-lg">
            Level up your SaaS design with a hero built for clarity and trust. Scale your product,
            without the extra design work.
          </p>
        </div>

        <div className="animate-fade-in-up animate-fade-in-up-delay-2">
          <Button
            size="lg"
            variant="default"
            className="focus-outline rounded-lg px-8 py-6 text-base"
            onClick={() => onTryForFree?.()}
          >
            Try for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

const Component: React.FC<ComponentProps> = ({
  brand = "SaaS",
  heroClassName,
  onSignIn,
  onTryForFree,
}) => {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <LocalStyles />
      <Navigation brand={brand} onSignIn={onSignIn} />
      <Hero heroClassName={heroClassName} onTryForFree={onTryForFree} />
    </div>
  );
};

export default Component;
