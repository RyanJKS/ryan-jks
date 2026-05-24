"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = portfolio.nav.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className={cn(
          "border-b transition-[background,border-color,box-shadow] duration-300",
          scrolled
            ? "border-[color:var(--border)] bg-[color:var(--nav-bg)] shadow-[var(--nav-shadow)] backdrop-blur-2xl"
            : "border-transparent bg-[color:var(--nav-bg-top)] backdrop-blur-xl",
        )}
        initial={reduceMotion ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="section-container flex h-[4.25rem] items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            aria-label={`${portfolio.name} home`}
          >
            <span className="block text-sm font-semibold tracking-tight text-[color:var(--foreground)]">
              {portfolio.name}
            </span>
            <span className="hidden text-[11px] font-medium text-[color:var(--muted)] sm:block">
              {portfolio.role}
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] p-1 lg:flex">
            {portfolio.nav.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]",
                    isActive
                      ? "text-[color:var(--foreground)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[color:var(--panel-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary btn-primary-sm hidden sm:inline-flex"
            >
              LinkedIn
            </Link>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--foreground)] lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open ? (
          <motion.div
            className="border-t border-[color:var(--border)] bg-[color:var(--nav-bg)] px-4 py-3 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="grid gap-1">
              {portfolio.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-[color:var(--muted)] hover:bg-[color:var(--panel)] hover:text-[color:var(--foreground)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-[color:var(--border)] pt-3">
                <span className="text-xs font-medium text-[color:var(--muted)]">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </header>
  );
}
