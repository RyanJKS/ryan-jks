import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { writing } from "@/content/writing";

export function WritingSection() {
  return (
    <Reveal as="section" id="writing" className="section-container py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Field notes"
          title="Architecture notes with"
          accent="production taste."
          body="Short topics for future writing: practical, grounded, and focused on what survives contact with real systems."
        />
        <Button asChild variant="secondary">
          <Link href="/writing">
            View notebook
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {writing.slice(0, 5).map((article) => (
          <article key={article.title} className="premium-card rounded-[24px] p-5">
            <Badge variant="secondary">{article.status}</Badge>
            <h3 className="mt-4 text-xl font-semibold leading-tight">{article.title}</h3>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
