import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos collaborateurs | Oriana Solutions",
  description:
    "Découvrez les partenaires de confiance d'Oriana Solutions : designers, développeurs et experts marketing qui partagent notre vision.",
  openGraph: {
    title: "Nos collaborateurs | Oriana Solutions",
    description:
      "Partenaires de confiance en design, développement et marketing au Québec.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/collaborateurs",
  },
};
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const PARTNERS = [
  {
    id: 1,
    name: "Alexie Doucet",
    role: "Designer Graphique",
    description:
      "Designer graphique basée à Montréal, spécialisée en stratégie de marque, identité visuelle, design web et création de contenu.",
    href: "https://alexiedoucet.ca/",
    logo: "https://framerusercontent.com/images/UuJn7G23Lc2mDwNXYleVxjAZE4.png",
    logoDark: true,
  },
  {
    id: 2,
    name: "Witify",
    role: "Développement logiciel",
    description:
      "Firme montréalaise spécialisée dans le développement de logiciels sur mesure, sécurisés et évolutifs pour des organisations ambitieuses.",
    href: "https://witify.io/",
    logo: "https://witify.imgix.net/logo/logo-full-side-primary-black.svg?fit=clip&q=80&w=300",
    logoDark: false,
  },
  {
    id: 3,
    name: "Abbie Richer",
    role: "Marketing 360",
    description:
      "Fondatrice du Kollectif de talents — solutions marketing sur mesure pour les entreprises québécoises, combinant agilité et expertise en web, SEO et automatisation.",
    href: "https://www.abbiericher.com/",
    logo: "/png/logo-abbie-richer.png",
    logoDark: false,
  },
  {
    id: 4,
    name: "LM Agence",
    role: "Design et création",
    description:
      "Agence créative spécialisée en conception graphique, identité visuelle et production de contenu pour entreprises et entrepreneurs québécois.",
    href: "https://portfoliotemporairelmagence.my.canva.site/portfolio-lm-agence/",
    logo: undefined,
    logoDark: false,
  },
  {
    id: 5,
    name: "SalesPitch",
    role: "Logiciel SaaS de vente",
    description:
      "Logiciel de pitch de vente propulsé par l'IA, conçu pour augmenter le taux de conversion et les commissions des représentants. Un projet interne d'Oriana Solutions.",
    href: "https://www.usesalespitch.com",
    logo: "/png/salespitch-icon.png",
    logoWithName: true,
    logoDark: false,
  },
  {
    id: 6,
    name: "Marie-Claire Talbot",
    role: "Photographie professionnelle",
    description:
      "Photographe professionnelle spécialisée en portrait, événementiel et photographie de marque pour entrepreneurs et entreprises.",
    href: "https://marieclairetalbot.myportfolio.com/work",
    logo: undefined,
    logoDark: false,
  },
  {
    id: 7,
    name: "Asprods",
    role: "Production audiovisuelle",
    description:
      "Studio de production créatif spécialisé en contenu audiovisuel pour marques, entrepreneurs et projets numériques.",
    href: "",
    logo: undefined,
    logoDark: false,
  },
];

export default function CollaborateursPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="w-full px-6 sm:px-16 xl:px-25 2xl:px-35 py-14 md:py-20 max-w-[1980px] mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
            Partenaires
          </p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-heading leading-tight">
            Nos{" "}
            <span className="text-primary">collaborateurs</span>
          </h1>
          <p className="mt-6 text-black/50 text-sm sm:text-base max-w-xl">
            Nous collaborons avec des partenaires de confiance qui partagent
            notre vision de l&apos;excellence et de l&apos;innovation.
          </p>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {PARTNERS.map((partner) => {
            const cardContent = (
              <>
                {/* Logo */}
                <div className="h-14 flex items-center">
                  {partner.logo && partner.logoWithName ? (
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain"
                        unoptimized
                      />
                      <span className="font-heading font-normal text-2xl text-heading">
                        {partner.name}
                      </span>
                    </div>
                  ) : partner.logo ? (
                    <div className={`flex items-center ${partner.logoDark ? "rounded-lg overflow-hidden" : ""}`}>
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={160}
                        height={56}
                        className="h-10 w-auto object-contain"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <span className="font-heading font-normal text-2xl text-heading">
                      {partner.name}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-black/40">
                    {partner.role}
                  </p>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {partner.href && (
                  <span className="text-xs text-primary group-hover:underline mt-auto">
                    Visiter le site →
                  </span>
                )}
              </>
            );

            return partner.href ? (
              <Link
                key={partner.id}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 rounded-2xl border border-black/8 bg-white p-8 hover:shadow-md transition-shadow"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={partner.id}
                className="group flex flex-col gap-5 rounded-2xl border border-black/8 bg-white p-8"
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Devenir collaborateur CTA */}
        <div className="mt-16 rounded-2xl bg-primary-light border border-primary/15 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="font-heading font-normal text-2xl md:text-3xl text-heading">
              Devenir un collaborateur
            </h2>
            <p className="text-sm text-black/50 max-w-md">
              Vous partagez notre vision et souhaitez collaborer avec nous ?
              Écrivez-nous, nous serons ravis d&apos;en discuter.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Envoyez-nous un courriel →
          </Link>
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
