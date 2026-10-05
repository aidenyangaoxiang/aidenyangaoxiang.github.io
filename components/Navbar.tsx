"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { assetUrl } from "@/lib/urls";
import { Icon } from "./Icon";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return <header className="site-header">
    <div className="site-container header-inner">
      <Link href="/" className="wordmark" aria-label={`${siteConfig.name}, home`} onClick={() => setOpen(false)}><span className="monogram">AY</span><span>{siteConfig.shortName}</span></Link>
      <button className="nav-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)} ref={toggleRef}><Icon name={open ? "close" : "menu"} /></button>
      <nav id="main-navigation" className={open ? "main-nav main-nav--open" : "main-nav"} aria-label="Main navigation">
        {navigation.map((item) => {
          const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace(/\/$/, ""));
          return <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>;
        })}
        <a href={assetUrl(siteConfig.cvPath)} className="cv-nav" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><Icon name="document" />CV<span className="sr-only"> PDF (opens in a new tab)</span></a>
      </nav>
    </div>
  </header>;
}
