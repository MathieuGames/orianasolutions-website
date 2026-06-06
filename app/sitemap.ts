import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/data/blog";

export const revalidate = 86400; // regenerate once per day

export default function sitemap(): MetadataRoute.Sitemap {
  const blogArticles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogue/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/application-web`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/developpement-application-mobile`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/site-web-sur-mesure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/realisations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/collaborateurs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blogue`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/developpement-logiciel-laval`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/developpement-logiciel-longueuil`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/developpement-logiciel-trois-rivieres`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/developpement-logiciel-quebec`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/developpement-logiciel-montreal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/logiciel-comptable`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/logiciel-agent-immobilier`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/logiciel-erp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/logiciel-crm`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/calculateur-prix`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/quiz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/audit-gratuit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/carrieres`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/portail-client-sur-mesure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/startup-mvp-saas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/agence-marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/pme-locales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/logiciel-booking-reservation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/integration-ia-agents`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/automatisation-des-procedes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/realisations/salespitch`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/realisations/michel-morin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...blogArticles,
  ];
}
