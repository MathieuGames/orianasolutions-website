import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur de prix — Développement logiciel & web | Oriana Solutions",
  description:
    "Estimez le coût de votre projet web, application mobile ou logiciel sur mesure en quelques clics. Outil gratuit basé sur des projets livrés à Montréal.",
  keywords: [
    "calculateur prix développement web",
    "coût application mobile Montréal",
    "prix logiciel sur mesure",
    "estimation développement logiciel",
    "tarif agence web Montréal",
  ],
  openGraph: {
    title: "Calculateur de prix — Développement logiciel & web | Oriana Solutions",
    description:
      "Estimez le coût de votre projet web, mobile ou SaaS en quelques clics. Outil gratuit basé sur des projets réels livrés à Montréal.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/calculateur-prix",
    type: "website",
  },
  alternates: {
    canonical: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/calculateur-prix",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculateur de prix — Oriana Solutions",
  description:
    "Estimez le coût de développement de votre projet web, mobile ou logiciel sur mesure.",
  url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/calculateur-prix",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
    description: "Outil gratuit d'estimation de prix",
  },
  provider: {
    "@type": "Organization",
    name: "Oriana Solutions",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app",
  },
};

export default function CalculateurLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
