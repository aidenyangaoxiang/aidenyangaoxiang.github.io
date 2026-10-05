import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { assetUrl } from "@/lib/urls";
import { Icon } from "@/components/Icon";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { researchExperience, industryExperience } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Curriculum Vitae", description: "Curriculum vitae and academic background of Aoxiang (Aiden) Yang, NYU Shanghai." };

export default function CVPage() {
  return <>
    <header className="page-heading"><p className="eyebrow">CV</p><h1>Curriculum vitae</h1><p>{siteConfig.name}<span aria-hidden="true"> · </span>{siteConfig.affiliation}</p></header>
    <div className="cv-document"><div><h2>Curriculum vitae · PDF</h2><p>{siteConfig.cvIsPlaceholder ? "The full CV will be added here. The current PDF is a clearly marked placeholder." : "A downloadable copy of my curriculum vitae."}</p></div><a className="button" href={assetUrl(siteConfig.cvPath)} target="_blank" rel="noopener noreferrer"><Icon name="document" />Open CV PDF<span className="sr-only"> (opens in a new tab)</span></a></div>
    <section className="experience-section" aria-labelledby="cv-education"><SectionHeading id="cv-education" title="Education" /><Education /></section>
    <section className="experience-section" aria-labelledby="cv-research"><SectionHeading id="cv-research" title="Research experience" /><ExperienceTimeline entries={researchExperience} /></section>
    <section className="experience-section" aria-labelledby="cv-industry"><SectionHeading id="cv-industry" title="Industry experience" /><ExperienceTimeline entries={industryExperience} /></section>
  </>;
}
