import { siteConfig } from "@/data/site";
import { assetUrl, safeExternalUrl } from "@/lib/urls";
import { Icon } from "./Icon";

export function SocialLinks({ includeCV = false, includeLinkedIn = false, compact = false }: { includeCV?: boolean; includeLinkedIn?: boolean; compact?: boolean }) {
  const items = [
    { label: "Email", icon: "email" as const, href: siteConfig.email ? `mailto:${siteConfig.email}` : undefined },
    ...(includeCV ? [{ label: "CV", icon: "document" as const, href: assetUrl(siteConfig.cvPath) }] : []),
    { label: "GitHub", icon: "github" as const, href: safeExternalUrl(siteConfig.githubUrl) },
    { label: "Google Scholar", icon: "scholar" as const, href: safeExternalUrl(siteConfig.scholarUrl) },
    ...(includeLinkedIn ? [{ label: "LinkedIn", icon: "linkedin" as const, href: safeExternalUrl(siteConfig.linkedinUrl) }] : []),
  ].filter((item) => item.href);
  if (items.length === 0) return null;
  return <ul className={`social-links ${compact ? "social-links--compact" : ""}`} aria-label="Contact and academic profiles">
    {items.map((item) => <li key={item.label}>
      <a href={item.href} target={item.icon === "email" ? undefined : "_blank"} rel={item.icon === "email" ? undefined : "noopener noreferrer"}><Icon name={item.icon} />{item.label}</a>
    </li>)}
  </ul>;
}
