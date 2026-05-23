import Link from "next/link";
import { Activity, ArrowDown, DatabaseZap, GitBranch, Mail, Network, ShieldCheck } from "lucide-react";
import { KineticHeadline } from "@/components/kinetic-headline";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { HeroSystemGraph } from "@/components/hero-system-graph";

const standards = [
  { label: "Secure", icon: ShieldCheck },
  { label: "Observable", icon: Activity },
  { label: "Governed", icon: DatabaseZap },
  { label: "Durable", icon: GitBranch },
];

export function HeroSection() {
  return (
    <section className="hero-container relative min-h-[calc(100vh-4rem)] pb-16 pt-32 md:pt-36">
      <div className="grid min-h-[720px] items-center gap-12 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="signal">{profile.role}</Badge>
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)] backdrop-blur-xl">
              London, UK · Enterprise platform focus
            </span>
          </div>
          <KineticHeadline />
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            I design polished enterprise platform experiences where cloud, data, AI, identity,
            APIs, and operations feel like one product instead of a stack of tools.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition duration-200 hover:translate-y-[-1px] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
            >
              View Work
              <ArrowDown className="h-4 w-4" />
            </Link>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] shadow-[0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-200 hover:translate-y-[-1px] hover:border-[color:var(--accent)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              <Network className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[color:var(--muted)] transition duration-200 hover:bg-[color:var(--panel)] hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:max-w-3xl">
            {standards.map((standard) => {
              const Icon = standard.icon;
              return (
                <div
                  key={standard.label}
                  className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-3 text-sm font-semibold shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)] text-[color:var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {standard.label}
                </div>
              );
            })}
          </div>
        </div>
        <HeroSystemGraph />
      </div>
    </section>
  );
}
