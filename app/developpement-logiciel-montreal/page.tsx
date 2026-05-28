import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import Container from "@/components/shared/container";
import AnimatedContent from "@/components/ui/animated-content";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import ServicesSection from "@/components/service/services-section";
import ServiceStats from "@/components/service/stats-section";
import WhyUsSection from "@/components/service/why-us-section";
import ProcessSection from "@/components/service/process-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import LogosMarquee from "@/components/ui/logos-marquee";
import ServiceFAQ from "@/components/service/faq-section";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Développement logiciel à Montréal : application web, SaaS & logiciel sur mesure | Oriana Solutions",
  description:
    "Programmeurs et développeurs à Montréal. On conçoit des applications web, des logiciels sur mesure et des plateformes SaaS pour les startups, OBNL et PME de Montréal et du Grand Montréal.",
  openGraph: {
    title: "Développement logiciel à Montréal | Oriana Solutions",
    description:
      "Développeurs à Montréal spécialisés en application web, SaaS et logiciel sur mesure pour startups, OBNL et PME du Grand Montréal.",
    url: "https://orianasolutions.com/developpement-logiciel-montreal",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Vous travaillez avec des entreprises de Montréal et du Grand Montréal ?",
    answer:
      "Oui. On intervient partout à Montréal et dans le Grand Montréal, incluant Laval, la Rive-Sud et les couronnes. Les rencontres peuvent se faire en personne à Montréal ou à distance selon ce qui vous convient.",
  },
  {
    id: 2,
    question: "Quelle est la différence entre une application web et une application mobile ?",
    answer:
      "Une application web fonctionne dans un navigateur sur n'importe quel appareil, sans installation. Une application mobile est téléchargée via l'App Store ou Google Play et peut fonctionner hors ligne. On vous aide à choisir la bonne approche selon votre clientèle et vos objectifs.",
  },
  {
    id: 3,
    question: "Est-ce qu'on peut se rencontrer en personne à Montréal ?",
    answer:
      "Absolument. On est basé à Montréal et on offre des rencontres en personne pour le démarrage de projet, les revues d'avancement et la livraison finale. On peut aussi travailler entièrement à distance si vous préférez.",
  },
  {
    id: 4,
    question: "Combien ça coûte de développer une application ou un logiciel à Montréal ?",
    answer:
      "Un MVP simple peut démarrer autour de 5 000 $. Une plateforme plus complète se situe généralement entre 10 000 $ et 30 000 $. On vous donne un devis clair et détaillé dès le départ, sans surprises.",
  },
  {
    id: 5,
    question: "Comment débuter avec vous ?",
    answer:
      "On commence par un appel de 15 minutes, gratuit et sans obligation. On prend le temps de comprendre votre projet, on répond à vos questions et on voit ensemble si on est le bon partenaire pour vous.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Oriana Solutions",
  description:
    "Agence de développement logiciel à Montréal spécialisée en applications web, applications mobiles, logiciels sur mesure et plateformes SaaS.",
  url: "https://orianasolutions.com",
  telephone: "+14383657789",
  email: "info@orianasolutions.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montréal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Montréal" },
    { "@type": "City", name: "Laval" },
    { "@type": "City", name: "Longueuil" },
  ],
  knowsAbout: [
    "Développement logiciel",
    "Application web",
    "Application mobile",
    "Logiciel sur mesure",
    "SaaS",
    "ERP",
    "CRM",
  ],
};

const clients = [
  {
    label: "Startups",
    description:
      "Montréal regorge d'idées. On vous aide à transformer la vôtre en un produit numérique concret, solide et prêt à scaler.",
  },
  {
    label: "PME",
    description:
      "Vous gérez une entreprise en croissance à Montréal et vous avez besoin d'outils qui tiennent la route ? On conçoit des solutions sur mesure adaptées à vos opérations.",
  },
  {
    label: "OBNL",
    description:
      "On connaît les contraintes des organismes à but non lucratif. On livre des solutions utiles, accessibles et durables, même avec un budget limité.",
  },
];

export default function MontrealPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <Container
        parentStyle="bg-primary-light relative rounded-b-[30px] md:rounded-b-none overflow-hidden"
        className="relative overflow-hidden min-h-[calc(100dvh-68px)] flex md:items-center"
      >
        <div className="absolute -right-20 -bottom-10 2xl:-bottom-44 2xl:-right-24 w-[340px] h-[310px] md:w-[480px] xl:h-[420px] 2xl:w-[730px] 2xl:h-[730px] flex items-end pointer-events-none select-none">
          <Image
            src="/svg/Logo_Oriana_Symbole_Noir.svg"
            alt=""
            aria-hidden
            width={900}
            height={900}
            className="w-full translate-x-3 translate-y-3"
            style={{
              filter: "invert(27%) sepia(96%) saturate(1800%) hue-rotate(210deg) brightness(98%) contrast(88%)",
              opacity: 0.22,
            }}
            priority
          />
        </div>

        <div className="relative z-10 mt-3 md:-mt-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 md:gap-8 w-full md:max-w-[70%] 2xl:max-w-229.75">

            <AnimatedContent distance={20} duration={0.6} delay={0.05} threshold={0.01} className="flex items-center">
              <Tag>Développement logiciel · Montréal</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Des développeurs à Montréal pour votre prochain projet numérique.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Startup, OBNL ou PME du Grand Montréal, on conçoit des applications web,<br className="hidden md:block" /> des logiciels sur mesure et des plateformes SaaS basés à Montréal.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre projet
                </Button>
                <Button
                  variant="outline"
                  href="#services"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Nos services
                </Button>
              </div>
            </AnimatedContent>

          </div>
        </div>
      </Container>

      {/* On travaille avec */}
      <div className="bg-white border-b border-black/6" id="services">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            On travaille avec
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {clients.map(({ label, description }) => (
              <div key={label} className="flex flex-col gap-3 pt-6 border-t border-black/10">
                <span className="font-heading font-normal text-xl text-heading">{label}</span>
                <p className="text-sm text-black/50 leading-6">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Nos services */}
      <ServicesSection />

      {/* Section différenciante */}
      <DynamicServiceSection
        title="Une agence de développement logiciel basée à Montréal, disponible pour vous rencontrer."
        description="On n'est pas une agence à distance qui gère des dizaines de projets en même temps. On est une équipe de développeurs locaux à Montréal, disponibles, et impliqués dans chaque projet qu'on prend en charge. Rencontres en personne à Montréal, communication directe, livrables clairs."
        image="/png/service3.png"
        imageAlt="Équipe de développeurs logiciel basée à Montréal"
        headingVariant="h2"
        reverse
        priority
        parentStyle="bg-primary-light"
      />

      {/* Stats */}
      <ServiceStats
        service={{
          id: 0,
          title: "",
          slug: "",
          description: "",
          image: "",
          downloads: "1re place",
          downloadsLabel: "Défi OSEntreprendre",
          countries: "20+",
          countriesLabel: "Projets livrés",
          awards: "100 %",
          awardsLabel: "Clients satisfaits",
        }}
      />

      <WhyUsSection />
      <ProcessSection />
      <RealisationsSection />
      <LogosMarquee />

      {/* Liens internes */}
      <Container className="py-10! md:py-14!">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-8">
          Nos solutions à Montréal
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/logiciel-crm" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            CRM sur mesure à Montréal <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-erp" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            ERP sur mesure à Montréal <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-comptable" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel pour comptables <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <ServiceFAQ
        title={
          <>
            Questions fréquentes <br />
            <span className="sm:block hidden">sur le développement logiciel à Montréal</span>
          </>
        }
        items={faqItems}
      />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
