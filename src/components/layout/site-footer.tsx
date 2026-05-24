import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            {portfolio.fullName}
          </p>
          <p className="mt-1 max-w-md text-sm leading-7 text-[color:var(--muted)]">
            {portfolio.footer.tagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[color:var(--muted)]">
          <Link
            href="#process"
            className="transition-colors hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          >
            Process
          </Link>
          <Link
            href="#principles"
            className="transition-colors hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          >
            Rules
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          >
            Contact
          </Link>
          <span aria-hidden="true">·</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
