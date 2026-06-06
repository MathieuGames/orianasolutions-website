import type { Metadata } from "next";
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
import Image from "next/image";

export const metadata: Metadata = {
  title: "Michel Morin Consultants | Étude de cas | Oriana Solutions",
  description:
    "Refonte complète du site web de Michel Morin, coach professionnel et ingénieur avec plus de 30 ans d'expérience. Modernisation, section partenaires et vitrine de certifications.",
};

const service = {
  id: 4,
  title: "Site web",
  slug: "michel-morin",
  description: "Refonte complète du site web d'un coach professionnel.",
  image: "/png/michel-morin.png",
  downloads: "3 mois",
  countries: "WordPress / Elementor",
  awards: "4",
  downloadsLabel: "Délai de livraison",
  countriesLabel: "Technologies utilisées",
  awardsLabel: "Partenaires intégrés",
};

const deliverables = [
  {
    title: "Refonte complète",
    description:
      "Chaque section du site a été entièrement revue et modernisée pour refléter l'expertise de Michel et ses 30 ans d'expérience.",
  },
  {
    title: "Section partenaires",
    description:
      "Mise en valeur des 4 collaborateurs clés avec des pages dédiées pour favoriser la collaboration et les co-mandats.",
  },
  {
    title: "Vitrine de certifications",
    description:
      "Toutes les certifications de Michel sont présentées de façon structurée pour renforcer sa crédibilité professionnelle.",
  },
];


export default function MichelMorinPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb
          items={[
            { label: "Nos réalisations", href: "/realisations" },
            { label: "Michel Morin Consultants" },
          ]}
        />
        <AboutSectionMobileBlock
          tag="Étude de cas"
          title="Michel Morin Consultants"
          description="Refonte complète du site web d'un coach professionnel et ingénieur avec plus de 30 ans d'expérience."
        />
      </div>

      {/* Desktop header */}
      <Container className="w-full max-w-[90%]">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2} className="sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Étude de cas</Tag>
          <Typography variant="h2" className="text-center">
            Site web | Michel Morin Consultants
          </Typography>
          <p className="text-center text-black/50 text-lg max-w-[600px] leading-relaxed -mt-2">
            Refonte complète du site web de Michel Morin, coach professionnel et ingénieur comptant plus de 30 ans d&apos;expérience. Modernisation, mise en valeur des partenaires et vitrine de certifications.
          </p>
          <a
            href="https://michelmorinconsultants.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
          >
            Visiter le site
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </AnimatedContent>
      </Container>

      {/* Section 1 — image + intro */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Une refonte à la<br />hauteur de l&apos;expertise</>}
          description="Nous sommes très fiers de vous présenter la refonte complète du site web de Michel, un coach professionnel et ingénieur comptant plus de 30 ans d'expérience. Michel est venu nous voir avec un mandat précis : moderniser son site, le mettre au goût du jour et mieux présenter ses services. Chaque section a été entièrement revue pour refléter l'envergure de sa carrière."
          image="/png/michel-morin.png"
          reverse
          headingClassName="max-w-[380px]!"
        />
      </AnimatedContent>

      {/* Stats */}
      <AnimatedContent distance={30} duration={0.7} delay={0.1} threshold={0.2}>
        <ServiceStats service={service} />
      </AnimatedContent>

      {/* Section 2 — partenaires */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Les partenaires<br />au c&oelig;ur du projet</>}
          description="Chacun des partenaires de Michel est présenté directement sur son site, ce qui met en valeur l'esprit de collaboration et facilite les co-mandats. Une manière concrète de renforcer la crédibilité et d'élargir les opportunités d'affaires."
          image="/png/Partenaires.png"
          imageContainerClassName="lg:w-[620px]! sm:w-[520px]!"
          headingClassName="max-w-[360px]!"
        />
      </AnimatedContent>


      {/* Ce qu'on a livré */}
      <AnimatedContent distance={40} duration={0.8} delay={0.1} threshold={0.1}>
        <Container className="w-full max-w-[90%]">
          <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

            {/* Image gauche */}
            <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 rounded-[24px] overflow-hidden bg-[#F3F3F3]">
              <Image
                src="/png/Michel ordi.png"
                alt="Site web Michel Morin sur ordinateur"
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Droite : titre + cartes */}
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-2">
                <Typography variant="h3">Ce qu&apos;on a livré</Typography>
                <p className="text-black/50 text-base max-w-[480px]">
                  Trois axes clés pour moderniser la présence en ligne de Michel et renforcer sa crédibilité.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {deliverables.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-2xl border border-black/8 bg-[#F8F8F8] p-6"
                  >
                    <span className="text-xs font-semibold text-primary/60 tracking-widest">0{i + 1}</span>
                    <h3 className="font-heading font-medium text-base text-heading">{item.title}</h3>
                    <p className="text-sm text-black/50 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
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
                Vous souhaitez aussi une refonte ?
              </h3>
              <p className="text-black/50 text-base max-w-[480px]">
                On analyse votre site gratuitement et on vous propose une stratégie adaptée à vos objectifs.
              </p>
            </div>
            <a
              href="/audit"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Obtenir mon audit gratuit
            </a>
          </div>
        </Container>
      </AnimatedContent>

      <RealisationsSection excludeHref="/realisations/michel-morin" />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
