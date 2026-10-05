import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return <footer className="site-footer">
    <div className="site-container footer-inner">
      <div><p>© {siteConfig.copyrightYear} {siteConfig.name}</p><p className="footer-affiliation">{siteConfig.affiliation}<span aria-hidden="true"> · </span><Link href="/cv/">Curriculum vitae</Link></p></div>
      <SocialLinks compact />
    </div>
  </footer>;
}
