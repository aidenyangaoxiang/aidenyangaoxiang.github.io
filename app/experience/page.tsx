import type { Metadata } from "next";
import { researchExperience, industryExperience } from "@/data/experience";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Education } from "@/components/Education";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Experience", description: "Research experience at NYU Abu Dhabi, enterprise AI work at SAP China, and education at NYU Shanghai." };

export default function ExperiencePage() {
  return <>
    <header className="page-heading"><p className="eyebrow">Background</p><h1>Experience & education</h1><p>Research in multimodal learning, alongside experience in enterprise AI and intelligent systems.</p></header>
    <section className="experience-section" aria-labelledby="research-experience"><SectionHeading id="research-experience" title="Research experience" /><ExperienceTimeline entries={researchExperience} /></section>
    <section className="experience-section" aria-labelledby="industry-experience"><SectionHeading id="industry-experience" title="Industry experience" /><ExperienceTimeline entries={industryExperience} /></section>
    <section className="experience-section" aria-labelledby="education"><SectionHeading id="education" title="Education" /><Education /></section>
  </>;
}
