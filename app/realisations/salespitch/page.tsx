import type { Metadata } from "next";
import Image from "next/image";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import ServiceStats from "@/components/service/stats-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import AnimatedContent from "@/components/ui/animated-content";

export const metadata: Metadata = {
  title: "SalesPitch | Logiciel de pitch de vente IA | Étude de cas | Oriana Solutions",
  description:
    "SalesPitch est un logiciel de pitch de vente développé par Oriana Solutions. Bâtisseur de pitch, insights IA, templates et tableau de bord pour augmenter le taux de conversion des représentants. +27 % de conversion en moyenne.",
};

const service = {
  id: 5,
  title: "Application web",
  slug: "salespitch",
  description: "Logiciel de pitch de vente propulsé par l'IA.",
  image: "/png/Salespitchs.png",
  downloads: "+27 %",
  countries: "+1 400 $",
  awards: "5 h",
  downloadsLabel: "Taux de conversion moyen",
  countriesLabel: "Revenus additionnels / mois",
  awardsLabel: "Économisées par vendeur",
};

const deliverables = [
  {
    num: "01",
    title: "Bâtisseur de pitch",
    description: "Structurez votre pitch en sections par profil client : intro, arguments, objections, close. Chaque vendeur dispose d'un script adapté à sa réalité.",
    featured: true,
  },
  {
    num: "02",
    title: "Templates courriel et texto",
    description: "Une bibliothèque de modèles prêts à envoyer pour chaque étape du suivi : relance, confirmation, closing. Personnalisables en un clic.",
    featured: false,
  },
  {
    num: "03",
    title: "Tableau de bord et insights IA",
    description: "Suivi des conversions avec analyse IA pour identifier ce qui fonctionne et recommander des améliorations concrètes à chaque vendeur.",
    featured: false,
  },
  {
    num: "04",
    title: "Onglet Entreprise",
    description: "Centralisez les informations clés, les battlecards concurrentiels et les partenaires pour que toute l'équipe soit alignée.",
    featured: false,
  },
  {
    num: "05",
    title: "Pitchs multiples",
    description: "Gérez plusieurs contextes de vente : secteurs différents, produits, types de clients. Un seul outil pour toutes vos situations.",
    featured: false,
  },
];

const sectors = ["Assurances", "Fintech", "Immobilier", "SaaS", "Télécom"];

export default function SalesPitchPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb
          items={[
            { label: "Nos réalisations", href: "/realisations" },
            { label: "SalesPitch" },
          ]}
        />
        <AboutSectionMobileBlock
          tag="Projet personnel par Oriana Solutions"
          title="SalesPitch"
          description="Logiciel de pitch de vente propulsé par l'IA. Conçu et développé par Oriana Solutions."
        />
      </div>

      {/* Desktop header */}
      <Container className="w-full max-w-[90%]">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2} className="sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Projet personnel par Oriana Solutions</Tag>
          <Typography variant="h2" className="text-center max-w-3xl">
            SalesPitch. Closez plus de deals.<br />Gagnez plus chaque mois.
          </Typography>
          <p className="text-center text-black/50 text-lg max-w-[640px] leading-relaxed -mt-2">
            SalesPitch est un logiciel de pitch de vente développé et propulsé par{" "}
            <span className="text-black font-medium">Oriana Solutions</span>. Il donne à chaque représentant les bons arguments, les bonnes réponses aux objections et les insights IA pour augmenter son taux de conversion et ses commissions.
          </p>
          <a
            href="https://www.usesalespitch.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
          >
            Visiter usesalespitch.com
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </AnimatedContent>
      </Container>

      {/* Section 1 — mockup + intro */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Un SaaS de vente<br />conçu de A à Z</>}
          description="SalesPitch est né d'un constat simple : les représentants de vente perdent des deals non pas parce qu'ils manquent de motivation, mais parce qu'ils manquent des bons outils au bon moment. On a conçu, développé et lancé SalesPitch en partant de zéro, de l'idée au produit live, opérationnel en 10 minutes."
          image="/png/Salespitchs.png"
          reverse
          headingClassName="max-w-[350px]!"
        />
      </AnimatedContent>

      {/* Stats produit */}
      <AnimatedContent distance={30} duration={0.7} delay={0.1} threshold={0.2}>
        <ServiceStats service={service} />
      </AnimatedContent>

      {/* Ce qu'on a livré — bento visuel */}
      <AnimatedContent distance={40} duration={0.8} delay={0.1} threshold={0.1}>
        <Container className="w-full max-w-[90%]">
          <div className="flex flex-col gap-10">

            {/* Header */}
            <div className="flex flex-col gap-2">
              <Typography variant="h3">Ce qu&apos;on a livré</Typography>
              <p className="text-black/50 text-base max-w-[480px]">
                Cinq fonctionnalités clés qui couvrent l&apos;ensemble du processus de vente, du premier appel au closing.
              </p>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">

              {/* Card 1 — featured, fond primary */}
              <div className="lg:col-span-2 bg-primary rounded-[20px] p-8 flex flex-col justify-between gap-6 min-h-[200px] group cursor-default transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20">
                <span className="text-5xl font-heading font-bold text-white/15 leading-none transition-all duration-300 group-hover:text-white/25">01</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-medium text-xl text-white">{deliverables[0].title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90">{deliverables[0].description}</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F8F8F8] rounded-[20px] p-8 flex flex-col justify-between gap-6 min-h-[200px] group cursor-default transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-black/8">
                <span className="text-5xl font-heading font-bold text-black/8 leading-none transition-all duration-300 group-hover:text-black/15">02</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-medium text-base text-heading">{deliverables[1].title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed transition-colors duration-300 group-hover:text-black/70">{deliverables[1].description}</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F8F8F8] rounded-[20px] p-8 flex flex-col justify-between gap-6 min-h-[200px] group cursor-default transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg hover:shadow-black/8">
                <span className="text-5xl font-heading font-bold text-black/8 leading-none transition-all duration-300 group-hover:text-black/15">03</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-medium text-base text-heading">{deliverables[2].title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed transition-colors duration-300 group-hover:text-black/70">{deliverables[2].description}</p>
                </div>
              </div>

              {/* Card 4 — featured, fond primary-light */}
              <div className="lg:col-span-2 bg-primary-light rounded-[20px] p-8 flex flex-col justify-between gap-6 min-h-[200px] group cursor-default transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10">
                <span className="text-5xl font-heading font-bold text-primary/15 leading-none transition-all duration-300 group-hover:text-primary/25">04</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-medium text-base text-heading">{deliverables[3].title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed transition-colors duration-300 group-hover:text-black/70">{deliverables[3].description}</p>
                </div>
              </div>

              {/* Card 5 — pleine largeur */}
              <div className="lg:col-span-3 bg-white border border-black/8 rounded-[20px] p-8 flex flex-col md:flex-row items-start md:items-center gap-6 group cursor-default transition-all duration-300 hover:border-black/20 hover:shadow-md">
                <span className="text-6xl font-heading font-bold text-black/6 leading-none shrink-0 transition-all duration-300 group-hover:text-black/12">05</span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-medium text-lg text-heading">{deliverables[4].title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed max-w-[600px] transition-colors duration-300 group-hover:text-black/70">{deliverables[4].description}</p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </AnimatedContent>

      {/* Secteurs cibles */}
      <AnimatedContent distance={30} duration={0.7} threshold={0.2}>
        <Container className="w-full max-w-[90%]">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Secteurs cibles</p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full border border-black/10 text-sm text-black/60 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedContent>

      {/* Bloc projet personnel */}
      <AnimatedContent distance={40} duration={0.8} threshold={0.15}>
        <Container className="w-full max-w-[90%]">
          <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Projet interne</p>
            <h3 className="font-heading font-normal text-2xl md:text-3xl text-white leading-snug">
              SalesPitch est propulsé<br className="hidden md:block" /> par Oriana Solutions.
            </h3>
            <p className="text-white/80 text-base leading-relaxed max-w-[600px]">
              En plus d&apos;accompagner nos clients dans leurs projets, on construit nos propres produits. SalesPitch est la preuve concrète de notre capacité à concevoir, développer et lancer un{" "}
              <a href="https://www.usesalespitch.com" target="_blank" rel="noreferrer noopener" className="text-white font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity">
                logiciel SaaS de vente
              </a>{" "}
              de A à Z, de l&apos;idée au produit live, en production, utilisé par de vrais vendeurs.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {["Next.js", "Supabase", "OpenAI", "Vercel"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedContent>

      {/* CTA final */}
      <AnimatedContent distance={30} duration={0.7} delay={0.1} threshold={0.2}>
        <Container className="w-full max-w-[90%]">
          <div className="bg-primary-light rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="font-heading font-normal text-2xl md:text-3xl text-heading">
                Vous avez un projet SaaS en tête ?
              </h3>
              <p className="text-black/50 text-base max-w-[480px]">
                On transforme votre idée en produit fonctionnel, rapide à lancer et prêt à scaler.
              </p>
            </div>
            <a
              href="/audit-gratuit"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Obtenir mon audit gratuit
            </a>
          </div>
        </Container>
      </AnimatedContent>

      <RealisationsSection excludeHref="/realisations/salespitch" />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
