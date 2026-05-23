import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { work } from "@/content/work";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((entry) => entry.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `/work/${item.slug}`,
    },
    openGraph: {
      title: `${item.title} | ${profile.name}`,
      description: item.summary,
      type: "article",
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const item = work.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main className="section-container pb-24 pt-32">
        <Button asChild variant="ghost" className="mb-10">
          <Link href="/#work">
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
        </Button>
        <article className="grid gap-10 lg:grid-cols-[0.9fr_0.45fr]">
          <div>
            <Badge>{item.type}</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-balance md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
              {item.summary}
            </p>
            <div className="mt-12 grid gap-5">
              {[
                ["Problem", item.problem],
                ["Approach", item.approach],
                ["Outcome", item.outcome],
              ].map(([label, value]) => (
                <section key={label} className="premium-card rounded-[24px] p-6">
                  <h2 className="text-lg font-semibold">{label}</h2>
                  <p className="mt-3 leading-7 text-[color:var(--muted)]">{value}</p>
                </section>
              ))}
            </div>
          </div>
          <aside className="premium-card h-fit rounded-[24px] p-6">
            <h2 className="text-sm font-semibold uppercase text-[color:var(--muted)]">
              Platform Signals
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <Badge key={technology} variant="secondary">
                  {technology}
                </Badge>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              {item.signals.map((signal) => (
                <div key={signal} className="flex gap-3 text-sm leading-6 text-[color:var(--muted)]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </aside>
        </article>
      </main>
    </div>
  );
}
