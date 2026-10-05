import Link from "next/link";

export default function NotFound() {
  return <div className="not-found"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you’re looking for is unavailable.</p><Link className="button" href="/">Back to home</Link></div>;
}
