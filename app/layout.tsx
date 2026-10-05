import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import { assetUrl, safeExternalUrl } from "@/lib/urls";
import "./globals.css";

const origin = safeExternalUrl(siteConfig.siteUrl);
export const metadata: Metadata = {
  ...(origin ? { metadataBase: new URL(origin) } : {}),
  title: { default: `${siteConfig.name} | AI Research · NYU Shanghai`, template: `%s | ${siteConfig.name}` },
  description: "Aoxiang (Aiden) Yang is an undergraduate researcher at NYU Shanghai interested in multimodal learning, computer vision, adaptive AI, and intelligent agents.",
  authors: [{ name: siteConfig.name }],
  keywords: [siteConfig.name, "Aiden Yang", "NYU Shanghai", ...siteConfig.interests],
  icons: { icon: assetUrl("/favicon.svg") },
  openGraph: { title: `${siteConfig.name} | AI Research`, description: "Research in multimodal learning, computer vision, adaptive AI, and intelligent agents at NYU Shanghai.", type: "website", locale: "en_US", siteName: siteConfig.name },
  twitter: { card: "summary", title: `${siteConfig.name} | AI Research`, description: "Multimodal learning, computer vision, adaptive AI, and intelligent agents." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content" className="site-container main-content" tabIndex={-1}>{children}</main><Footer /></body></html>;
}
