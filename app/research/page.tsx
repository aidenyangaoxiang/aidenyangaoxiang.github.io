import type { Metadata } from "next";
import { orderedResearchProjects, researchThemes } from "@/data/research";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Research", description: "Research interests and projects spanning multimodal learning, computer vision, continual and adaptive AI, and interactive and embodied agents." };

export default function ResearchPage() {
  return <>
    <header className="page-heading"><p className="eyebrow">Research</p><h1>Research interests</h1><p>My research broadly focuses on how intelligent systems can learn useful representations from multimodal information and use experience to adapt their behavior over time.</p></header>
    <ul className="interest-list" aria-label="Primary research interests">{siteConfig.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
    <section className="research-themes" aria-label="Three research themes">{researchThemes.map((theme) => <article key={theme.number}><span className="theme-number">{theme.number}</span><h2>{theme.title}</h2><ul>{theme.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></article>)}</section>
    <section aria-labelledby="projects-title"><SectionHeading id="projects-title" title="Research projects" /><div className="research-list">{orderedResearchProjects.map((project) => <ResearchCard key={project.id} project={project} />)}</div></section>
  </>;
}
