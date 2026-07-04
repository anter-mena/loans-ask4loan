export function buildArticleKeywords(title: string, extra: string[] = []): string[] {
  const keywords = [
    title,
    `${title} Canada`,
    ...extra,
    "personal loans Canada",
    "ask4loan",
  ];

  return Array.from(new Set(keywords.map((k) => k.trim()).filter(Boolean)));
}
