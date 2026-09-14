import { ConnectSection } from "@/components/contact/ConnectSection";
import { ExperienceEducationTabs } from "@/components/experience/ExperienceEducationTabs";
import { Hero } from "@/components/hero/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PublicationSection } from "@/components/publications/PublicationSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/og";

export const metadata = buildMetadata({
  title: siteConfig.fullName,
  description: siteConfig.positioning,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceEducationTabs />
      <ProjectGrid />
      <PublicationSection />
      <SkillsSection />
      <ConnectSection />
    </>
  );
}
