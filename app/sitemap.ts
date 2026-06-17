import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";
  const lastModified = new Date("2026-06-17");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/proposta-comercial/alciellen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
