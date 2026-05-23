import { Code2, Mail, Network } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <Reveal as="section" id="contact" className="section-container pb-16 pt-24">
      <div className="premium-surface rounded-[32px] p-8 md:p-12">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[color:var(--accent)]">
              Open to serious platform conversations
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-balance md:text-5xl">
              Product polish. Cloud depth. Governance that feels designed.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              The interesting work is where they stop being separate conversations.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Network className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Code2 className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Email Jhelan
              </a>
            </Button>
          </div>
        </div>
      </div>
      <footer className="flex flex-col justify-between gap-4 py-8 text-sm text-[color:var(--muted)] md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built as a static-first Next.js portfolio.</p>
        <p>Data platforms. AI enablement. Clean architecture. Enterprise reality.</p>
      </footer>
    </Reveal>
  );
}
