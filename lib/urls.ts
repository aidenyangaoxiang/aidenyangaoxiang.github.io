/** Next Link handles basePath; plain asset/PDF links need this helper. */
export function assetUrl(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) return value;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${value}`;
}

export function safeExternalUrl(value?: string): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const parsed = new URL(value);
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : undefined;
  } catch {
    return undefined;
  }
}
