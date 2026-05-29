import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrières | Oriana Solutions",
  description:
    "Rejoignez l'équipe Oriana Solutions à Montréal. Postes ouverts en développement web, mobile et gestion de projet. Candidature spontanée bienvenue.",
  openGraph: {
    title: "Carrières | Oriana Solutions",
    description:
      "Rejoignez une agence de développement logiciel en pleine croissance à Montréal.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/carrieres",
  },
};

export default function CarrieresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
