import Link from "next/link";

export function SectionHeading({ id, title, link }: { id: string; title: string; link?: { href: string; label: string } }) {
  return <div className="section-heading"><h2 id={id}>{title}</h2>{link && <Link href={link.href}>{link.label}</Link>}</div>;
}
