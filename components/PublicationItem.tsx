import Link from "next/link";
import { publicResearchLinks } from "@/data/research";
import type { Publication } from "@/data/publications";
import { safeExternalUrl } from "@/lib/urls";
import { Icon } from "./Icon";
import { StatusBadge } from "./StatusBadge";

export function PublicationItem({ publication }: { publication: Publication }) {
  const links = Object.entries(publicResearchLinks(publication)).filter(([, value]) => safeExternalUrl(value));
  return <article className="publication-item" aria-labelledby={`publication-${publication.id}`}>
    <div className="publication-year">{publication.year ?? <span aria-hidden="true">—</span>}</div>
    <div className="publication-content">
      <StatusBadge status={publication.status} />
      <h3 id={`publication-${publication.id}`}>{publication.title}</h3>
      {!publication.doubleBlind && publication.authors.length > 0 && <p className="authors">{publication.authors.join(", ")}</p>}
      {publication.statusDetail ? <p className="publication-venue">{publication.statusDetail}</p> : publication.venue && <p className="publication-venue">{publication.venue}</p>}
      {publication.reviewNote && <p className="review-note"><Icon name="document" />{publication.reviewNote}</p>}
      {publication.status === "Research Project" && <Link className="research-record-link" href={`/research/#${publication.id}`}>Research overview</Link>}
      {links.length > 0 && <div className="resource-links">{links.map(([key, value]) => <a key={key} href={safeExternalUrl(value)} target="_blank" rel="noopener noreferrer"><Icon name={key === "paper" ? "document" : key === "code" ? "code" : "link"} />{key === "paper" ? "Paper" : key === "code" ? "Code" : "Project page"}</a>)}</div>}
      {!publication.doubleBlind && publication.bibtex && <details className="bibtex"><summary>BibTeX</summary><pre><code>{publication.bibtex}</code></pre></details>}
    </div>
  </article>;
}
