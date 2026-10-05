import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { safeExternalUrl } from "@/lib/urls";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = safeExternalUrl(siteConfig.siteUrl)?.replace(/\/$/, "");
  if (!origin) return [];
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return ["/", "/research/", "/publications/", "/experience/", "/cv/"].map((route) => ({ url: `${origin}${prefix}${route}` }));
}
