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
import ProcessSection from "@/components/service/process-section";
import WhyUsSection from "@/components/service/why-us-section";
import ServiceFAQ from "@/components/service/faq-section";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Développement ERP sur mesure : système de gestion intégré | Oriana Solutions",
  description:
    "On développe des systèmes ERP sur mesure pour centraliser vos opérations : gestion des stocks, RH, finances, production et reporting. Un seul outil, toutes vos données.",
  openGraph: {
    title: "ERP sur mesure : système de gestion intégré | Oriana Solutions",
    description:
      "Remplacez vos outils disparates par un ERP développé selon vos processus réels. Centralisez, automatisez, décidez mieux.",
    url: "https://orianasolutions.com/logiciel-erp",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Quelle est la différence entre un ERP sur mesure et un ERP générique comme SAP ?",
    answer:
      "Un ERP générique est une solution standardisée que vous devez configurer pour correspondre à vos processus. Un ERP sur mesure est conçu autour de votre organisation dès le départ. Il est plus rapide à adopter, moins coûteux à l'opération, et évolue exactement selon vos besoins.",
  },
  {
    id: 2,
    question: "Par où commence-t-on ? Est-ce qu'on doit tout implanter d'un coup ?",
    answer:
      "Non. On recommande une approche modulaire : on commence par le module ERP qui aura le plus d'impact immédiat (souvent la gestion des stocks ou la facturation), et on ajoute les autres modules au fil du temps. Ça réduit les risques et accélère le retour sur investissement.",
  },
  {
    id: 3,
    question: "Est-ce qu'on peut migrer nos données depuis nos outils actuels vers le nouvel ERP ?",
    answer:
      "Oui. La migration des données fait partie du projet. On analyse vos sources actuelles (Excel, logiciels existants, bases de données) et on planifie la migration pour assurer la continuité de vos opérations.",
  },
  {
    id: 4,
    question: "Combien coûte le développement d'un ERP sur mesure ?",
    answer:
      "Un ERP modulaire de base (1 à 2 modules) démarre autour de 15 000 $. Un système ERP complet multi-départements se situe généralement entre 30 000 $ et 80 000 $ selon la complexité. On établit un devis détaillé après avoir bien compris vos besoins.",
  },
  {
    id: 5,
    question: "Comment débuter avec vous ?",
    answer:
      "On commence par un appel de 15 minutes pour comprendre votre organisation et identifier les priorités. Ensuite, on vous présente une proposition claire avec les modules ERP recommandés, les délais et les coûts.",
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

const modules = [
  {
    label: "Gestion des stocks",
    description:
      "Inventaire en temps réel, alertes de réapprovisionnement, traçabilité des lots. Fini les ruptures surprises et les commandes en double.",
  },
  {
    label: "Finances & facturation",
    description:
      "Factures automatiques, suivi des paiements, rapports financiers consolidés. Vos chiffres sont toujours à jour, en un seul endroit.",
  },
  {
    label: "Opérations & production",
    description:
      "Planification des ressources, suivi des commandes, gestion des fournisseurs. Chaque département travaille à partir des mêmes données ERP.",
  },
];

export default function LogicielERPPage() {
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
              <Tag>Développement logiciel · ERP sur mesure</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Centralisez toutes vos opérations dans un seul système ERP.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Stocks, finances, RH, production. On développe un ERP sur mesure adapté<br className="hidden md:block" /> à vos processus réels. Pas à l&apos;inverse.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre projet ERP
                </Button>
                <Button
                  variant="outline"
                  href="#modules"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Voir les modules
                </Button>
              </div>
            </AnimatedContent>

          </div>
        </div>
      </Container>

      {/* Modules ERP */}
      <div className="bg-white border-b border-black/6" id="modules">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Modules ERP disponibles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {modules.map(({ label, description }) => (
              <div key={label} className="flex flex-col gap-3 pt-6 border-t border-black/10">
                <span className="font-heading font-normal text-xl text-heading">{label}</span>
                <p className="text-sm text-black/50 leading-6">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Section différenciante */}
      <DynamicServiceSection
        title="Un ERP sur mesure qui évolue avec vous, pas contre vous."
        description="Les ERP génériques comme SAP ou Oracle coûtent des centaines de milliers de dollars et demandent des années d'implantation. On développe un système ERP modulaire qui part de vos besoins actuels et grandit avec votre organisation. Vous payez ce dont vous avez besoin, quand vous en avez besoin. Besoin aussi d'un CRM intégré ? On peut le développer en même temps."
        image="/png/service1-3.png"
        imageAlt="Système ERP sur mesure développé pour PME québécoise"
        headingVariant="h2"
        reverse
        priority
      />

      {/* Nos services */}
      <ServicesSection />

      {/* Stats */}
      <ServiceStats
        service={{
          id: 0,
          title: "",
          slug: "",
          description: "",
          image: "",
          downloads: "3 à 6 mois",
          downloadsLabel: "Délai de livraison moyen",
          countries: "20+",
          countriesLabel: "Projets livrés",
          awards: "100 %",
          awardsLabel: "Sur mesure",
        }}
      />

      <ProcessSection />
      <WhyUsSection />

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
            <span className="sm:block hidden">sur le développement d&apos;un ERP sur mesure</span>
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
