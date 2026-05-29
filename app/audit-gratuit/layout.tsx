import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit de site web gratuit | Oriana Solutions",
  description:
    "Obtenez une analyse gratuite de votre site web : SEO, vitesse, mobile, UX et conversion. On vous revient avec un rapport clair et des recommandations concrètes.",
  openGraph: {
    title: "Audit de site web gratuit | Oriana Solutions",
    description:
      "Analyse complète de votre site web : SEO, performance, mobile et conversion. Gratuit, sans engagement.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/audit-gratuit",
  },
  alternates: {
    canonical: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/audit-gratuit",
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
