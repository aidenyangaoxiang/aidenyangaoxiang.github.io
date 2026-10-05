import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { news } from "@/data/news";
import { orderedResearchProjects } from "@/data/research";
import { SocialLinks } from "@/components/SocialLinks";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Education } from "@/components/Education";
import { hasPublicAsset } from "@/lib/assets";
import { assetUrl } from "@/lib/urls";

export default function Home() {
  return <>
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-copy"><p className="eyebrow">{siteConfig.affiliation}</p><h1 id="intro-title">Aoxiang <span className="name-nickname">(Aiden)</span> Yang</h1><p className="intro-role">{siteConfig.role}</p><p className="intro-description">{siteConfig.introduction}</p><SocialLinks includeCV includeLinkedIn /></div>
      <figure className="portrait"><div className="portrait-image">{hasPublicAsset(siteConfig.profileImage) ? <Image src={assetUrl(siteConfig.profileImage)} alt={siteConfig.profileAlt} width={480} height={540} priority /> : <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Aoxiang (Aiden) Yang"><span className="portrait-initials">AY</span><span className="portrait-placeholder-label">Portrait forthcoming</span></div>}</div><figcaption>{siteConfig.affiliation}<span>Data Science · AI Track</span></figcaption></figure>
    </section>

    <div className="about-news-grid">
      <section aria-labelledby="about-title"><SectionHeading id="about-title" title="About me" /><div className="about-copy">{siteConfig.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
      <section className="news-section" aria-labelledby="news-title"><SectionHeading id="news-title" title="News" /><ol className="news-list">{news.map((item) => <li key={item.text}><span className="news-date">{item.date}</span><p>{item.text}{item.projectId && <Link href={`/research/#${item.projectId}`} className="news-project-link" aria-label={`Research overview for ${item.projectId}`}>Details</Link>}</p></li>)}</ol></section>
    </div>

    <section className="research-section" aria-labelledby="selected-title"><SectionHeading id="selected-title" title="Selected research" link={{ href: "/research/", label: "All research" }} /><p className="section-intro">Multimodal learning, visual understanding, and experience-driven intelligence.</p><div className="research-list">{orderedResearchProjects.filter((project) => project.selected).map((project) => <ResearchCard key={project.id} project={project} />)}</div></section>

    <section className="home-education" aria-labelledby="education-title"><SectionHeading id="education-title" title="Education" /><Education /></section>
  </>;
}
