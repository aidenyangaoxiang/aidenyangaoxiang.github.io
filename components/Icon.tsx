type IconName = "email" | "github" | "scholar" | "linkedin" | "document" | "code" | "link" | "menu" | "close";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 5a5 5 0 0 0-.1-3s-1.2-.4-4 1.5a13 13 0 0 0-7 0C5.4 1.6 4.2 2 4.2 2a5 5 0 0 0-.1 3 5.4 5.4 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A3.5 3.5 0 0 0 8.5 18v4" /></>,
    scholar: <><path d="m2 8 10-5 10 5-10 5-10-5Z" /><path d="M6 10v7c4 3 8 3 12 0v-7M22 8v8" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 12h8m-8 4h6" /></>,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7 .1l3-3a5 5 0 0 0-7-7l-2 2m3 6a5 5 0 0 0-7-.1l-3 3a5 5 0 0 0 7 7l2-2" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M6 18 18 6" /></>,
  };
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{paths[name]}</svg>;
}
