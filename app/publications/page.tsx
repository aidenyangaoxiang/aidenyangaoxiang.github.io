import type { Metadata } from "next";
import { publications, publicationStatusOrder, researchRecords } from "@/data/publications";
import { PublicationItem } from "@/components/PublicationItem";
import { StatusBadge } from "@/components/StatusBadge";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Publications & Manuscripts", description: "Manuscripts and research records by Aoxiang (Aiden) Yang. Submission and publication statuses are explicitly distinguished." };
const titles = { Published: "Published", Preprint: "Preprints", "Under Review": "Manuscripts under review", "Research Project": "Research projects" };

export default function PublicationsPage() {
  const entries = [...publications, ...researchRecords];
  return <>
    <header className="page-heading"><p className="eyebrow">Academic work</p><h1>Publications & manuscripts</h1><p>Manuscripts and research projects, with their current status indicated below.</p></header>
    <div className="status-legend" aria-label="Publication status legend">{publicationStatusOrder.map((status) => <StatusBadge key={status} status={status} />)}</div>
    {publicationStatusOrder.map((status) => {
      const group = entries.filter((entry) => entry.status === status);
      if (!group.length) return null;
      return <section className="publication-group" key={status} aria-labelledby={`group-${status.replace(/ /g, "-")}`}><SectionHeading id={`group-${status.replace(/ /g, "-")}`} title={titles[status]} />{status === "Research Project" && <p className="section-intro">Ongoing and completed research work without publication metadata.</p>}<div>{group.map((publication) => <PublicationItem key={publication.id} publication={publication} />)}</div></section>;
    })}
  </>;
}
