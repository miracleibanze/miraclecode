import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WhatIBringSection } from "@/components/sections/what-i-bring-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { PageShell } from "@/components/ui/page-shell";
import { AboutSection } from "../app/about-section-placeholder";

export default function Home() {
  return (
    <PageShell>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <SkillsSection />
          <AboutSection />
          <WhatIBringSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </PageShell>
  );
}
