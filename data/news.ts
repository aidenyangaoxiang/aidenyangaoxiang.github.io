export type NewsItem = { date: string; text: string; projectId?: string };
export const news: NewsItem[] = [
  { date: "2026.09", text: "Submitted our work on persistent visual experience for GUI agents, PAVE, to ICLR 2027.", projectId: "pave" },
  { date: "2026", text: "Worked on multimodal sign language understanding at NYU Abu Dhabi.", projectId: "sign-language" },
  { date: "2026", text: "Worked on embodied image-goal navigation research.", projectId: "memnav" },
];
