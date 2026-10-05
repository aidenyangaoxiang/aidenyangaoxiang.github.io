export type ResearchStatus = "Published" | "Preprint" | "Under Review" | "Research Project";
export type ResearchLinks = { paper?: string; code?: string; project?: string };

export type ResearchProject = {
  id: string;
  title: string;
  shortName?: string;
  description: string;
  status: ResearchStatus;
  statusDetail?: string;
  authors: string[];
  affiliation?: string;
  year?: number;
  image: string;
  imageAlt: string;
  themes: string[];
  links: ResearchLinks;
  highlights?: string[];
  roleNote?: string;
  doubleBlind?: boolean;
  reviewNote?: string;
  selected: boolean;
};

export const researchProjects: ResearchProject[] = [
  {
    id: "pave",
    title: "Don't Look Twice: Leveraging Visual Experience for Token-Efficient GUI Agents",
    shortName: "PAVE",
    description: "PAVE investigates persistent cross-episode visual experience for efficient GUI agents. Instead of processing every interface entirely from scratch, the framework retrieves relevant experience from previously completed interactions and uses it to guide adaptive visual-token selection while keeping the underlying action model frozen.",
    status: "Under Review",
    statusDetail: "Under review at ICLR 2027",
    authors: [], // TODO: Add authors only when appropriate to disclose
    year: 2026,
    image: "/projects/pave.png",
    imageAlt: "Research figure for PAVE: persistent visual experience for GUI agents",
    themes: ["GUI Agents", "Multimodal Agents", "Persistent Experience", "Visual Token Efficiency", "Agent Memory"],
    links: {}, // Deliberately unavailable during double-blind review
    doubleBlind: true,
    reviewNote: "Under double-blind review — manuscript link currently unavailable.",
    selected: true,
  },
  {
    id: "clip-lora",
    title: "Robust LoRA Fusion for CLIP",
    description: "Research on parameter-efficient adaptation of CLIP using few-shot LoRA modules, with a focus on combining adapted representations while preserving robustness under distribution shift.",
    status: "Research Project",
    authors: [], // TODO: Add collaborators when provided
    image: "/projects/clip-lora.png",
    imageAlt: "Research figure for parameter-efficient CLIP adaptation and robust LoRA fusion",
    themes: ["Computer Vision", "Vision-Language Models", "CLIP", "Parameter-Efficient Fine-Tuning", "Distribution Robustness"],
    links: {}, // TODO: Add only real public URLs
    selected: true,
  },
  {
    id: "memnav",
    title: "Image-Goal Navigation / MemNav",
    description: "Research on image-goal navigation for embodied agents. The project involved integrating perception, navigation, and planning components and evaluating the system in simulated robotic environments.",
    status: "Research Project",
    authors: [],
    image: "/projects/memnav.png",
    imageAlt: "Research figure for image-goal navigation in simulated environments",
    themes: ["Embodied AI", "Robotics", "Navigation", "Computer Vision"],
    highlights: ["Habitat", "NVIDIA Omniverse", "Isaac Sim", "Simulation-based experiments"],
    roleNote: "Research assistant focused on simulation, integration, experimentation, and debugging.",
    links: {},
    selected: true,
  },
  {
    id: "sign-language",
    title: "Vision–Text Alignment for Sign Language Translation",
    description: "Research on explicit cross-modal alignment between visual sign-language sequences and language representations using entropy-regularized Optimal Transport. The work investigated visual-language correspondence and multimodal representation alignment.",
    affiliation: "NYU Abu Dhabi",
    year: 2026,
    status: "Research Project",
    authors: [],
    image: "/projects/sign-language.png",
    imageAlt: "Research figure for visual-language correspondence using Optimal Transport",
    themes: ["Multimodal Learning", "Sign Language Translation", "Optimal Transport", "Vision-Language Alignment"],
    links: {},
    selected: true,
  },
];

/** No submission links or author information may leak while double-blind is enabled. */
export function publicResearchLinks(item: Pick<ResearchProject, "doubleBlind" | "links">): ResearchLinks {
  return item.doubleBlind ? {} : item.links;
}

export const researchThemes = [
  {
    number: "01",
    title: "Multimodal Learning & Computer Vision",
    topics: ["Vision-language models", "Multimodal representation learning", "Cross-modal alignment", "Parameter-efficient adaptation", "Robust visual representations"],
  },
  {
    number: "02",
    title: "Adaptive & Continual AI",
    topics: ["Experience reuse", "Continual learning", "Adaptation", "Persistent knowledge", "Learning from interaction"],
  },
  {
    number: "03",
    title: "Interactive & Embodied Agents",
    topics: ["GUI agents", "Embodied navigation", "Vision-language-action systems", "Agent memory", "Interactive multimodal systems"],
  },
];
