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
import ProcessSection from "@/components/service/process-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import LogosMarquee from "@/components/ui/logos-marquee";
import ServiceFAQ from "@/components/service/faq-section";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Logiciel sur mesure pour agents immobiliers et courtiers | Oriana Solutions",
  description:
    "On développe des outils numériques sur mesure pour les agents immobiliers et courtiers : CRM immobilier, gestion de prospects, portail client et automatisation du suivi des transactions.",
  openGraph: {
    title: "Logiciel pour agents immobiliers : CRM et outil sur mesure | Oriana Solutions",
    description:
      "Gérez vos prospects, vos listings et vos clients dans un seul outil pensé pour la réalité des agents immobiliers.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/logiciel-agent-immobilier",
  },
};

const faqItems = [
  {
    id: 1,
    question: "En quoi votre solution se distingue des CRM génériques comme HubSpot ou Salesforce ?",
    answer:
      "Les CRM génériques demandent des heures de configuration et vous forcent à adapter votre processus à leur outil. On fait l'inverse : on comprend exactement comment vous travaillez comme agent immobilier et on construit un outil qui s'y adapte. Résultat : une adoption rapide et un vrai gain de temps dès le premier mois.",
  },
  {
    id: 2,
    question: "Est-ce qu'on peut intégrer l'outil avec Centris ou d'autres plateformes immobilières ?",
    answer:
      "Oui, dans la mesure où ces plateformes offrent une API ou une façon d'exporter les données. On évalue les possibilités d'intégration dès le départ pour éviter la double saisie entre votre CRM immobilier et Centris.",
  },
  {
    id: 3,
    question: "Je travaille seul comme agent immobilier. Est-ce que ça vaut le coup pour moi ?",
    answer:
      "Souvent oui, surtout si vous gérez plus de 10 à 15 dossiers en parallèle. Un outil bien conçu peut vous faire gagner plusieurs heures par semaine sur le suivi et l'administration, ce qui se traduit directement en capacité à servir plus de clients.",
  },
  {
    id: 4,
    question: "Combien ça coûte de développer un CRM immobilier sur mesure ?",
    answer:
      "Une version de base (gestion de prospects, suivi des dossiers, rappels automatiques) peut démarrer autour de 8 000 $. Une plateforme complète avec portail client et signature en ligne se situe généralement entre 15 000 $ et 35 000 $.",
  },
  {
    id: 5,
    question: "Comment débuter avec vous ?",
    answer:
      "On commence par un appel de 15 minutes pour comprendre votre processus de travail actuel comme agent immobilier. C'est gratuit et sans engagement. On vous propose ensuite une approche adaptée à votre réalité.",
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

const avantages = [
  {
    label: "Gestion des prospects",
    description:
      "Centralisez tous vos contacts d'acheteurs et vendeurs, suivez chaque interaction et ne laissez plus aucun lead immobilier tomber entre les mailles.",
  },
  {
    label: "Suivi des transactions",
    description:
      "Offres, contre-offres, conditions, délais. Gardez une vue claire sur chaque dossier immobilier en cours sans jongler entre vos outils.",
  },
  {
    label: "Expérience client",
    description:
      "Un portail dédié où vos clients voient l'avancement de leur dossier, reçoivent leurs documents et signent en ligne.",
  },
];

export default function LogicielAgentImmobilierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <Tag>Solutions numériques · Agents immobiliers & courtiers</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Plus de temps avec vos clients. Moins de temps sur les tableaux Excel.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                CRM immobilier, gestion de prospects et portail client pour agents immobiliers.<br className="hidden md:block" /> On développe l&apos;outil qui correspond à votre façon de travailler.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre projet
                </Button>
                <Button
                  variant="outline"
                  href="#avantages"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Ce qu&apos;on fait
                </Button>
              </div>
            </AnimatedContent>

          </div>
        </div>
      </Container>

      {/* Avantages */}
      <div className="bg-white border-b border-black/6" id="avantages">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Ce qu&apos;on développe pour les agents immobiliers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {avantages.map(({ label, description }) => (
              <div key={label} className="flex flex-col gap-3 pt-6 border-t border-black/10">
                <span className="font-heading font-normal text-xl text-heading">{label}</span>
                <p className="text-sm text-black/50 leading-6">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Sections */}
      <DynamicServiceSection
        title="Un CRM immobilier qui correspond à votre réalité, pas à celle d'une grande entreprise."
        description="Les CRM génériques sont conçus pour des équipes de vente de 50 personnes. Un agent immobilier a besoin d'un outil simple, rapide, adapté au cycle immobilier : premiers contacts, visites, offres, notarisation. On le bâtit selon votre processus exact."
        image="/png/service1-2.png"
        imageAlt="CRM immobilier sur mesure pour agents et courtiers"
        headingVariant="h2"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Automatisez vos suivis. Ne perdez plus un seul prospect immobilier."
        description="Rappels automatiques, courriels de suivi personnalisés, tableau de bord des dossiers actifs. Vos prospects reçoivent la bonne communication au bon moment, sans que vous ayez à y penser manuellement. Le même principe qu'un CRM d'entreprise, adapté à la réalité d'un agent immobilier."
        image="/png/real1.png"
        imageAlt="Automatisation du suivi de prospects pour agent immobilier"
        headingVariant="h2"
        parentStyle="bg-primary-light"
        className="pt-20"
      />

      <ProcessSection />
      <RealisationsSection />
      <LogosMarquee />

      {/* Liens internes */}
      <Container className="py-10! md:py-14!">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-8">
          Solutions connexes
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/logiciel-crm" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel CRM sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-comptable" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel pour comptables <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/application-web" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Développement d&apos;applications web <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <ServiceFAQ
        title={
          <>
            Questions fréquentes <br />
            <span className="sm:block hidden">sur le logiciel pour agents immobiliers</span>
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
