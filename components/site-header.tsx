"use client";

import Link from "next/link";
import { ArrowUpRight, Braces, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

const navItems = [
  { label: "Lens", href: "/#thinking" },
  { label: "Range", href: "/#capabilities" },
  { label: "Work", href: "/#work" },
  { label: "Atlas", href: "/#systems" },
  { label: "Notes", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="section-container surface flex h-14 items-center justify-between gap-4 rounded-full px-2.5">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full pr-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          aria-label="Jhelan Suggun home"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--foreground)] text-sm text-[color:var(--background)] shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
            <span className="absolute inset-x-2 bottom-2 h-px bg-[color:var(--accent)] transition-transform duration-200 group-hover:translate-x-2" />
            <Braces className="h-4 w-4" />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block">{profile.name}</span>
            <span className="mt-1 block text-[11px] font-semibold uppercase text-[color:var(--muted)]">
              Platform systems
            </span>
          </span>
        </Link>

        <div className="hidden items-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] p-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-[color:var(--muted)] transition-colors duration-200 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <a href={`mailto:${profile.email}`}>
              Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
          <ThemeToggle />
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
      {open ? (
        <div className="section-container mt-2 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--background)]/95 p-2 shadow-[var(--shadow)] backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-[16px] px-3 py-3 text-sm font-semibold text-[color:var(--muted)] transition-colors duration-200 hover:bg-[color:var(--panel)] hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
