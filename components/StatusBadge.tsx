import type { ResearchStatus } from "@/data/research";

export function StatusBadge({ status }: { status: ResearchStatus }) {
  const style = { Published: "published", Preprint: "preprint", "Under Review": "review", "Research Project": "project" }[status];
  return <span className={`status-badge status-badge--${style}`}>{status}</span>;
}
