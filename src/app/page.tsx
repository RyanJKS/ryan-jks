import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AmbientBackground } from "@/components/motion/ambient-background";
import { AboutSection } from "@/components/portfolio/about-section";
import { CodeSection } from "@/components/portfolio/code-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PrinciplesSection } from "@/components/portfolio/principles-section";
import { StackSection } from "@/components/portfolio/stack-section";
import { WorkflowSection } from "@/components/portfolio/workflow-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="site-shell">
        <AmbientBackground />
        <main className="pt-[4.25rem]">
          <HeroSection />
          <AboutSection />
          <WorkflowSection />
          <PrinciplesSection />
          <CodeSection />
          <StackSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
