import { researchProjects, type ResearchLinks, type ResearchStatus } from "./research";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  status: ResearchStatus;
  statusDetail?: string;
  links: ResearchLinks;
  bibtex?: string;
  doubleBlind?: boolean;
  reviewNote?: string;
};

/** Add verified published/preprint records here. Never infer publication metadata. */
export const publications: Publication[] = [
  {
    id: "pave",
    title: researchProjects[0].title,
    authors: [], // TODO: Add verified author names after review restrictions are lifted
    venue: "ICLR 2027",
    year: 2026,
    status: "Under Review",
    statusDetail: "Under review at ICLR 2027",
    doubleBlind: true,
    reviewNote: researchProjects[0].reviewNote,
    links: {}, // No anonymous manuscript, code, submission ID, or project URL
    bibtex: undefined, // TODO: Add public BibTeX when available
  },
];

/** These records remain research projects, not publications. */
export const researchRecords: Publication[] = researchProjects
  .filter((project) => project.status === "Research Project")
  .map((project) => ({
    id: project.id,
    title: project.title,
    authors: project.authors,
    year: project.year,
    status: project.status,
    links: project.links,
  }));

export const publicationStatusOrder: ResearchStatus[] = ["Published", "Preprint", "Under Review", "Research Project"];
