import { CapabilitySection } from "@/components/capability-section";
import { ContactSection } from "@/components/contact-section";
import { FeaturedWorkSection } from "@/components/featured-work-section";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { PrinciplesSection } from "@/components/principles-section";
import { SiteHeader } from "@/components/site-header";
import { SystemsMapSection } from "@/components/systems-map-section";
import { TrustStripSection } from "@/components/trust-strip-section";
import { WritingSection } from "@/components/writing-section";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStripSection />
        <PhilosophySection />
        <CapabilitySection />
        <FeaturedWorkSection />
        <SystemsMapSection />
        <PrinciplesSection />
        <WritingSection />
        <ContactSection />
      </main>
    </div>
  );
}
