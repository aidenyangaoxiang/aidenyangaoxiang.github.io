import { education } from "@/data/experience";

export function Education() {
  return <div className="education-entry"><div><h3>{education.institution}</h3><p>{education.degree}</p>{education.minor && <p className="education-minor">{education.minor}</p>}</div><p className="education-date">{education.graduation}</p></div>;
}
