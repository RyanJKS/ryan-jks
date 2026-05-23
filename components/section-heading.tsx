import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
  accent?: string;
};

export function SectionHeading({ eyebrow, title, body, className, accent }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <Badge>{eyebrow}</Badge>
        <span className="hidden h-px w-16 bg-gradient-to-r from-[color:var(--accent)]/60 to-transparent sm:block" />
      </div>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance md:text-5xl">
        {title}
      </h2>
      {accent ? (
        <div className="mt-2 bg-gradient-to-r from-[color:var(--accent-strong)] via-[color:var(--signal)] to-[color:var(--accent)] bg-clip-text text-2xl font-semibold text-transparent md:text-4xl">
          {accent}
        </div>
      ) : null}
      {body ? <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{body}</p> : null}
    </div>
  );
}
