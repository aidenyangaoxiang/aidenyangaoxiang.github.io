/** Edit these values to personalize the site. Empty social profile URLs are hidden. */
export const siteConfig = {
  name: "Aoxiang (Aiden) Yang",
  shortName: "Aiden Yang",
  publicationAuthorName: "Aoxiang Yang",
  initials: "AY",
  role: "Undergraduate Researcher in AI",
  affiliation: "NYU Shanghai",
  email: "ay2710@nyu.edu",
  githubUrl: "https://github.com/aidenyangaoxiang", // Verified authenticated GitHub account
  scholarUrl: "", // TODO: Your full Google Scholar profile URL
  linkedinUrl: "", // TODO: Your full LinkedIn profile URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aidenyangaoxiang.github.io", // GitHub Pages; override for another host
  cvPath: "/Aoxiang_Yang_CV.pdf",
  cvIsPlaceholder: true, // Set false after replacing the supplied placeholder PDF
  copyrightYear: 2026,
  introduction:
    "My research interests lie broadly in multimodal learning, computer vision, and adaptive AI systems. I am particularly interested in how intelligent systems can learn from visual and multimodal information, interact with their environments, and leverage accumulated experience to improve future decisions.",
  about: [
    "I am a senior undergraduate student at NYU Shanghai majoring in Data Science with a focus on Artificial Intelligence. My research has spanned multimodal learning, computer vision, embodied navigation, and AI agents.",
    "Recently, I have been particularly interested in persistent and adaptive AI systems: rather than treating every task independently, how can intelligent systems accumulate useful experience and reuse it in future interactions?",
    "I am currently exploring PhD opportunities in artificial intelligence, computer vision, multimodal learning, and intelligent agents.",
  ],
  interests: ["Multimodal Learning", "Computer Vision", "AI Agents", "Continual / Adaptive Learning", "Embodied AI", "Vision-Language Models"],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "Publications", href: "/publications/" },
  { label: "Experience", href: "/experience/" },
];
