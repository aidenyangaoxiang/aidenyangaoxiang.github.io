export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
};

export const researchExperience: Experience[] = [
  {
    id: "nyuad",
    organization: "NYU Abu Dhabi",
    role: "Visiting Research Assistant",
    period: "2026",
    description: "Research in multimodal learning and sign language understanding, investigating visual-language correspondence and explicit cross-modal representation alignment using entropy-regularized Optimal Transport.",
  },
  // TODO: Add other research experiences with verified dates, affiliations, and roles.
];

export const industryExperience: Experience[] = [
  {
    id: "sap",
    organization: "SAP China",
    role: "STAR / VT Consultant",
    period: "2026 – Present",
    description: "Worked on enterprise AI and data solutions, including the design, testing, and deployment of AI-assisted workflows for enterprise clients. Experience includes financial-system automation and intelligent enterprise systems.",
    technologies: ["SAP BTP", "LLMs", "Python", "SAP HANA", "APIs"],
  },
];

export const education = {
  institution: "NYU Shanghai",
  degree: "B.S. in Data Science, AI Track",
  graduation: "Expected 2027",
  minor: "", // Optional: Set to "Minor in Economics" if you wish to display it
  // GPA intentionally omitted. Add only if you explicitly decide to include it.
};
