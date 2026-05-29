import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "SalesPitch : Bâtissez des pitchs qui convertissent | Oriana Solutions",
  description:
    "SalesPitch est l'outil créé par Oriana pour aider les équipes de vente à structurer des pitchs percutants, personnalisés et efficaces. Augmentez votre taux de conversion dès la première semaine.",
  openGraph: {
    title: "SalesPitch : Bâtissez des pitchs qui convertissent",
    description:
      "Créé par Oriana Solutions. Structurez vos pitchs, personnalisez votre approche et fermez plus de deals.",
    url: "https://orianasolutions.com/salespitch",
  },
};

const features = [
  {
    num: "01",
    titre: "Pitchs structurés en quelques minutes",
    desc: "Une méthode de vente éprouvée intégrée directement dans l'outil. Remplissez les informations du client, SalesPitch génère une structure de présentation claire et percutante.",
  },
  {
    num: "02",
    titre: "Personnalisation pour chaque prospect",
    desc: "Chaque client est différent. Adaptez votre pitch selon l'industrie, la taille de l'entreprise et les objections anticipées, sans repartir de zéro à chaque fois.",
  },
  {
    num: "03",
    titre: "Bibliothèque de réponses aux objections",
    desc: "Accédez à des réponses préparées aux objections les plus courantes. Ne soyez plus pris au dépourvu en pleine présentation.",
  },
  {
    num: "04",
    titre: "Suivi et historique des pitchs",
    desc: "Gardez un historique de tous vos pitchs. Voyez ce qui a fonctionné, identifiez les patterns de vos closes et améliorez votre approche en continu.",
  },
];

const audiences = [
  { label: "Agences marketing", desc: "Convertissez plus de prospects en clients avec des pitchs calibrés pour vendre vos services." },
  { label: "Équipes de vente B2B", desc: "Donnez à chaque vendeur la structure et la confiance pour présenter comme un pro." },
  { label: "Consultants indépendants", desc: "Professionnalisez vos présentations clients sans y passer des heures." },
  { label: "Startups en croissance", desc: "Alignez toute votre équipe sur un même message de vente cohérent et efficace." },
];

export default function SalesPitchPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="w-full relative overflow-hidden bg-primary-light">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-2xl pointer-events-none" />

        <Container className="py-24! md:py-32! relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                Créé par Oriana Solutions
              </span>
            </div>

            <h1 className="font-heading font-normal text-4xl sm:text-6xl xl:text-7xl text-heading leading-tight mb-6">
              Des pitchs qui convertissent, à chaque fois.
            </h1>

            <p className="text-black/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              SalesPitch est l&apos;outil qu&apos;on a bâti pour arrêter d&apos;improviser en présentation client. Structurez vos pitchs, personnalisez votre approche et fermez plus de deals, sans y passer des heures.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.usesalespitch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Essayer SalesPitch gratuitement <Arrow className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.usesalespitch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-heading font-medium px-6 py-4 rounded-xl border border-black/15 hover:border-black/30 transition-colors text-sm"
              >
                Voir SalesPitch <Arrow className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Stat bar */}
      <div className="bg-primary">
        <Container className="py-6!">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-white/20">
            {[
              { val: "2×", label: "Taux de conversion moyen" },
              { val: "15 min", label: "Pour bâtir un pitch complet" },
              { val: "0 $", label: "Pour commencer" },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col items-center text-center px-6 gap-1">
                <span className="font-heading text-3xl text-white">{val}</span>
                <span className="text-xs text-white/60 uppercase tracking-wider font-medium">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Problème */}
      <Container className="py-16! md:py-24!">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-5">Le problème</p>
            <h2 className="font-heading font-normal text-3xl md:text-4xl text-heading leading-tight mb-6">
              Vos vendeurs improvisent. Vos résultats s&apos;en ressentent.
            </h2>
            <div className="flex flex-col gap-5 text-black/60 text-base leading-7">
              <p>
                La plupart des équipes de vente passent des heures à préparer des présentations qui ne ressemblent pas à grand chose. Chaque vendeur a sa propre approche, ses propres arguments, ses propres réponses aux objections.
              </p>
              <p>
                Résultat : des pitchs incohérents, des occasions manquées et un taux de conversion qui plafonne alors qu&apos;il pourrait facilement doubler avec la bonne structure.
              </p>
              <p>
                SalesPitch règle exactement ce problème. On a pris ce qu&apos;on connaît du développement de produits et on a bâti un outil simple, rapide et efficace pour que chaque membre de votre équipe présente comme votre meilleur vendeur.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-primary-light rounded-3xl p-8 flex flex-col gap-4 border border-primary/15">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-2">Sans SalesPitch</p>
            {[
              "Chaque vendeur improvise sa présentation",
              "Arguments inconsistants d'un appel à l'autre",
              "Pas de réponses préparées aux objections",
              "Impossible de savoir pourquoi un deal a été perdu",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-xs font-bold text-red-500">✕</span>
                <span className="text-sm text-black/65 leading-6">{item}</span>
              </div>
            ))}

            <div className="border-t border-primary/15 my-2" />

            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Avec SalesPitch</p>
            {[
              "Structure de vente éprouvée pour chaque pitch",
              "Personnalisation rapide selon le prospect",
              "Réponses aux objections à portée de main",
              "Historique et analyse de performance",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-xs font-bold text-emerald-600">✓</span>
                <span className="text-sm text-black/65 leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Fonctionnalités */}
      <div className="bg-black/[0.02] border-y border-black/6">
        <Container className="py-16! md:py-24!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-4">Fonctionnalités</p>
          <h2 className="font-heading font-normal text-3xl md:text-4xl text-heading leading-tight mb-12 max-w-xl">
            Tout ce qu&apos;il faut pour vendre mieux, dans un seul outil.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ num, titre, desc }) => (
              <div key={num} className="flex flex-col gap-3 p-7 bg-white border border-black/8 rounded-2xl hover:border-black/20 transition-colors">
                <span className="text-xs font-semibold text-black/20 font-heading">{num}</span>
                <h3 className="font-heading font-normal text-xl text-heading">{titre}</h3>
                <p className="text-sm text-black/55 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Pour qui */}
      <Container className="py-16! md:py-24!">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-4">Pour qui</p>
        <h2 className="font-heading font-normal text-3xl md:text-4xl text-heading leading-tight mb-12 max-w-xl">
          Conçu pour les équipes qui vendent des services.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map(({ label, desc }) => (
            <div key={label} className="flex flex-col gap-3 p-6 border border-black/8 rounded-xl">
              <span className="font-heading font-normal text-lg text-heading">{label}</span>
              <p className="text-sm text-black/50 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA final */}
      <div className="bg-primary-light">
        <Container className="py-16! md:py-20!">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-normal text-3xl md:text-4xl text-heading leading-tight mb-3">
                Prêt à doubler votre taux de conversion ?
              </h2>
              <p className="text-black/55 text-base max-w-lg">
                Commencez gratuitement sur SalesPitch, l&apos;outil de vente qu&apos;on a bâti chez Oriana. Aucune carte de crédit requise.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="https://www.usesalespitch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
              >
                Essayer gratuitement <Arrow className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-heading font-medium px-6 py-4 rounded-xl border border-black/15 hover:border-black/30 transition-colors text-sm whitespace-nowrap"
              >
                Nous parler du projet
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
