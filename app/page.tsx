import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WhatIBringSection } from "@/components/sections/what-i-bring-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { PageShell } from "@/components/ui/page-shell";

export default function Home() {
  const Hr = (
    <hr className="mt-24 bg-accent/30 border-0 h-0.5 w-full max-w-screen-xl mx-auto" />
  );
  return (
    <PageShell>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          {Hr}
          <SkillsSection />
          {Hr}
          <WhatIBringSection />
          {Hr}
          <ProjectsSection />
          {Hr}
          <ContactSection />
          <Footer />
        </main>
      </div>
    </PageShell>
  );
}
