import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz — De quoi votre projet a-t-il besoin ? | Oriana Solutions",
  description:
    "Site web, application web, app mobile ou logiciel sur mesure ? Répondez à 6 questions et découvrez la bonne solution pour votre projet. Gratuit, 2 minutes.",
  openGraph: {
    title: "Quiz — De quoi votre projet a-t-il besoin ?",
    description:
      "Site web, app web, mobile ou logiciel sur mesure ? 6 questions pour trouver la bonne réponse. Gratuit et sans inscription.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/quiz",
  },
  alternates: {
    canonical: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/quiz",
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
