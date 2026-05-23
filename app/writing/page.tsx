import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { writing } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Architecture notes and future essays from Jhelan Suggun on platform engineering, authorization, AI-ready knowledge systems, and enterprise data platforms.",
};

export default function WritingPage() {
  return (
    <div className="site-shell min-h-screen">
      <SiteHeader />
      <main className="section-container pb-24 pt-32">
        <Button asChild variant="ghost" className="mb-10">
          <Link href="/#writing">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </Button>
        <div className="max-w-3xl">
          <Badge>Architecture notebook</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Writing in progress, shaped with the same restraint as the systems.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
            A reserved space for essays on the engineering thinking behind data platforms,
            AI enablement, clean backend systems, governance, and production reality.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {writing.map((article) => (
            <article key={article.title} className="premium-card rounded-[24px] p-6">
              <p className="text-sm text-[color:var(--accent)]">{article.status}</p>
              <h2 className="mt-3 text-xl font-semibold">{article.title}</h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">{article.summary}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
