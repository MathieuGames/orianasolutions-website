import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://orianasolutions.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/application-web`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/developpement-application-mobile`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/site-web-sur-mesure`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/realisations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/collaborateurs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
