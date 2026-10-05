import type { Experience } from "@/data/experience";

export function ExperienceTimeline({ entries }: { entries: Experience[] }) {
  return <ol className="experience-timeline">{entries.map((entry) => <li key={entry.id}>
    <div className="timeline-period">{entry.period}</div>
    <div className="timeline-content"><h3>{entry.organization}</h3><p className="timeline-role">{entry.role}</p><p>{entry.description}</p>{entry.technologies && <ul className="theme-tags" aria-label="Technologies">{entry.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>}</div>
  </li>)}</ol>;
}
