import { researchProjects, researchStatusOrder, type ResearchLinks, type ResearchStatus } from "./research";

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
const pave = researchProjects.find((project) => project.id === "pave");
if (!pave) throw new Error("The PAVE manuscript requires a matching research project.");
const vtamo = researchProjects.find((project) => project.id === "sign-language");
if (!vtamo) throw new Error("The VTaMo publication requires a matching research project.");

export const publications: Publication[] = [
  {
    id: vtamo.id,
    title: vtamo.title,
    authors: vtamo.authors,
    venue: "ECCV 2026",
    year: 2026,
    status: "Accepted",
    statusDetail: "Accepted at ECCV 2026",
    links: vtamo.links,
    // Public author order and acceptance verified at https://arxiv.org/abs/2607.09126.
    // Cite the public arXiv record until proceedings metadata is available.
    bibtex: `@misc{hu2026vtamo,
  title = {VTaMo: Video-Text Alignment Model for Sign Language Translation},
  author = {Junyi Hu and Zhewen He and Haomian Huang and Aoxiang Yang and Yi Fang},
  year = {2026},
  eprint = {2607.09126},
  archivePrefix = {arXiv},
  primaryClass = {cs.CV},
  url = {https://arxiv.org/abs/2607.09126}
}`,
  },
  {
    id: "pave",
    title: pave.title,
    authors: [], // TODO: Add verified author names after review restrictions are lifted
    venue: "ICLR 2027",
    year: 2026,
    status: "Under Review",
    statusDetail: "Under review at ICLR 2027",
    doubleBlind: true,
    reviewNote: pave.reviewNote,
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

export const publicationStatusOrder = researchStatusOrder;
