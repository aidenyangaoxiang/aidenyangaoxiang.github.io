import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/** Resolved at build time; missing images render an intentional placeholder. */
export function hasPublicAsset(assetPath: string): boolean {
  if (!assetPath.startsWith("/") || assetPath.includes("..")) return false;
  return existsSync(path.join(process.cwd(), "public", assetPath.slice(1)));
}
