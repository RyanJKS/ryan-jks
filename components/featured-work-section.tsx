import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { work } from "@/content/work";

export function FeaturedWorkSection() {
  return (
    <Reveal as="section" id="work" className="section-container py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <SectionHeading
        eyebrow="Selected systems"
        title="Selected work, presented as"
        accent="platform products."
        body="Public-safe project frames with the polish, restraint, and systems thinking expected from serious enterprise products."
      />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {work.map((item, index) => (
          <article
            key={item.slug}
            className="premium-card group rounded-[28px] p-5 transition duration-300 hover:translate-y-[-4px] hover:border-[color:var(--accent)]/50"
          >
            <div className="relative z-10">
              <div className="relative mb-6 min-h-48 overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-[color:var(--foreground)] p-4 text-[color:var(--background)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_34%),linear-gradient(120deg,var(--accent),transparent_44%),linear-gradient(310deg,var(--signal),transparent_46%)] opacity-40" />
                <div className="relative flex items-center justify-between text-xs font-semibold opacity-80">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.type}</span>
                </div>
                <div className="relative mt-12 grid gap-3">
                  <div className="h-3 w-3/5 rounded-full bg-[color:var(--background)]/80" />
                  <div className="h-3 w-4/5 rounded-full bg-[color:var(--background)]/34" />
                  <div className="h-3 w-2/5 rounded-full bg-[color:var(--background)]/24" />
                </div>
                <div className="relative mt-9 grid grid-cols-3 gap-2">
                  {item.signals.map((signal) => (
                    <div key={signal} className="h-16 rounded-[16px] border border-white/15 bg-white/10" />
                  ))}
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <Badge>{item.type}</Badge>
                <ArrowUpRight className="h-5 w-5 text-[color:var(--muted)] transition group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:text-[color:var(--accent)]" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-balance">{item.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted)]">{item.summary}</p>
              <div className="mt-6 grid gap-3 border-y border-[color:var(--border)] py-5 text-sm leading-6 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase text-[color:var(--muted)]">Intent</p>
                  <p className="mt-1 font-semibold">{item.signals[0]}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-[color:var(--muted)]">Move</p>
                  <p className="mt-1 font-semibold">{item.signals[1]}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-[color:var(--muted)]">Path</p>
                  <p className="mt-1 font-semibold">{item.signals[2]}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <Badge key={technology} variant="secondary">
                    {technology}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="secondary" className="mt-7">
                <Link href={`/work/${item.slug}`}>
                  View details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
