import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz — App ou site web ? Trouvez la bonne solution | Oriana Solutions",
  description:
    "Répondez à 6 questions et découvrez si vous avez besoin d'un site web, d'une application web, d'une app mobile ou d'un logiciel sur mesure. Gratuit, 2 minutes.",
  openGraph: {
    title: "Quiz — App ou site web ? Trouvez la bonne solution",
    description:
      "6 questions pour savoir de quoi votre projet a vraiment besoin. Gratuit et sans inscription.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/quiz",
  },
  alternates: {
    canonical: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/quiz",
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
