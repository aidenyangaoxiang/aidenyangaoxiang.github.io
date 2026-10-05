import Image from "next/image";
import { publicResearchLinks, type ResearchProject } from "@/data/research";
import { hasPublicAsset } from "@/lib/assets";
import { assetUrl, safeExternalUrl } from "@/lib/urls";
import { AuthorList } from "./AuthorList";
import { Icon } from "./Icon";
import { ResearchFigure } from "./ResearchFigure";
import { StatusBadge } from "./StatusBadge";

export function ResearchCard({ project }: { project: ResearchProject }) {
  const links = Object.entries(publicResearchLinks(project)).filter(([, value]) => safeExternalUrl(value));
  return <article id={project.id} className="research-card" aria-labelledby={`${project.id}-title`}>
    <div className="research-visual">{hasPublicAsset(project.image) ? <Image src={assetUrl(project.image)} alt={project.imageAlt} width={560} height={400} className="project-image" /> : <ResearchFigure id={project.id} />}</div>
    <div className="research-content">
      <div className="research-meta"><StatusBadge status={project.status} />{project.statusDetail && <span>{project.statusDetail}</span>}{project.affiliation && <span>{project.affiliation}</span>}</div>
      <h3 id={`${project.id}-title`}>{project.title}</h3>
      {!project.doubleBlind && project.authors.length > 0 && <AuthorList authors={project.authors} />}
      <p className="research-description">{project.description}</p>
      {project.roleNote && <p className="role-note"><strong>My role.</strong> {project.roleNote}</p>}
      {project.highlights && <p className="project-highlights">{project.highlights.join(" · ")}</p>}
      <ul className="theme-tags" aria-label="Research themes">{project.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
      {project.reviewNote && <p className="review-note"><Icon name="document" />{project.reviewNote}</p>}
      {links.length > 0 && <div className="resource-links">{links.map(([key, value]) => <a key={key} href={safeExternalUrl(value)} target="_blank" rel="noopener noreferrer"><Icon name={key === "paper" ? "document" : key === "code" ? "code" : "link"} />{key === "paper" ? "Paper" : key === "code" ? "Code" : "Project page"}</a>)}</div>}
    </div>
  </article>;
}
