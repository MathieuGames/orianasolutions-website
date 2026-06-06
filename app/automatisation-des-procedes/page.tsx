import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import CalculatorBanner from "@/components/shared/calculator-banner";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import Container from "@/components/shared/container";
import AnimatedContent from "@/components/ui/animated-content";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import ServiceStats from "@/components/service/stats-section";
import WhyUsSection from "@/components/service/why-us-section";
import ServiceFAQ from "@/components/service/faq-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Automatisation des procédés d'affaires sur mesure | Oriana Solutions",
  description:
    "On automatise vos procédés d'affaires avec du code sur mesure. Saisie de données, rapports, synchronisation de systèmes, déclencheurs automatiques. Pas du RPA. Du vrai code intégré.",
  openGraph: {
    title: "Automatisation des procédés d'affaires sur mesure | Oriana Solutions",
    description:
      "Éliminez la saisie manuelle, automatisez vos rapports et synchronisez vos systèmes. Des automatisations solides qui s'intègrent directement dans vos outils existants.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/automatisation-des-procedes",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Quel est le retour sur investissement typique d'une automatisation ?",
    answer:
      "La plupart de nos clients récupèrent leur investissement en 3 à 6 mois. Une automatisation qui élimine 2 heures de travail manuel par jour pour un employé à 50 000 $ par année génère une économie d'environ 12 000 $ par an. Le développement de l'automatisation coûte généralement entre 3 000 $ et 12 000 $.",
  },
  {
    id: 2,
    question: "Quels types de processus sont bons candidats pour l'automatisation ?",
    answer:
      "Les meilleurs candidats sont les tâches répétitives qui suivent toujours les mêmes règles : copier des données d'un système à un autre, générer des rapports sur un cycle régulier, envoyer des notifications quand une condition est remplie, valider des informations selon une liste de critères. Si un humain peut expliquer les étapes en moins de 10 minutes, on peut probablement l'automatiser.",
  },
  {
    id: 3,
    question: "Quelle est la différence entre votre approche et des outils comme Zapier ou Make ?",
    answer:
      "Zapier et Make sont excellents pour des automatisations simples entre des outils connus. Nos automatisations sont du code sur mesure qui s'intègre directement à vos systèmes existants, y compris vos logiciels maison, vos bases de données internes et vos ERP. On peut gérer des cas complexes, des volumes élevés et des logiques d'affaires spécifiques que les outils no-code ne peuvent pas gérer.",
  },
  {
    id: 4,
    question: "Combien de temps pour déployer une automatisation ?",
    answer:
      "Une automatisation bien définie peut être développée et déployée en 1 à 3 semaines. On commence par cartographier le processus actuel avec vous, on identifie les cas particuliers, puis on développe et on teste avant le déploiement en production.",
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

const procedesAutomatises = [
  {
    num: "01",
    titre: "Synchronisation de données entre systèmes",
    desc: "Votre CRM, votre ERP et votre logiciel comptable gardent toujours les mêmes informations à jour, sans copier-coller manuel. Une mise à jour dans un système se propage automatiquement.",
  },
  {
    num: "02",
    titre: "Génération automatique de rapports",
    desc: "Vos rapports hebdomadaires, mensuels et trimestriels sont générés automatiquement et envoyés aux bonnes personnes au bon moment. Sans intervention humaine.",
  },
  {
    num: "03",
    titre: "Validation et traitement de documents",
    desc: "Factures reçues, formulaires soumis, commandes entrantes. Les documents sont vérifiés, classifiés et acheminés selon vos règles d'affaires, sans lecture manuelle.",
  },
  {
    num: "04",
    titre: "Notifications et déclencheurs conditionnels",
    desc: "Alertes quand un stock tombe sous un seuil, quand une facture est en retard de paiement, quand un client n'a pas été contacté depuis X jours. Les événements importants ne passent plus inaperçus.",
  },
  {
    num: "05",
    titre: "Traitement des commandes et flux d'approbation",
    desc: "Les commandes clients, les demandes d'achat et les demandes de congé suivent un chemin d'approbation automatique avec les bonnes personnes notifiées à chaque étape.",
  },
];

export default function AutomatisationDesProcedesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-primary-light">
        <Breadcrumb items={[{ label: "Automatisation des procédés" }]} />
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
              <Tag>Développement logiciel · Automatisation</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Automatisez ce qui vous ralentit. Concentrez-vous sur ce qui compte.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Saisie de données, rapports, synchronisation, notifications.<br className="hidden md:block" /> On automatise vos procédés d&apos;affaires avec du code qui s&apos;intègre directement à vos systèmes.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Identifier quoi automatiser
                </Button>
                <Button
                  variant="outline"
                  href="#procedes"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Les procédés qu&apos;on automatise
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </Container>

      {/* Section principale */}
      <DynamicServiceSection
        title="Pas du RPA. Du code qui s'intègre vraiment à vos systèmes."
        description="Le RPA (Robotic Process Automation) simule des clics dans une interface graphique. C'est fragile, c'est lent et ça casse dès qu'une interface change. On développe des intégrations directes via API et base de données. Vos systèmes se parlent au niveau du code, pas à travers des captures d'écran. C'est plus rapide, plus fiable et ça évolue avec vos besoins."
        image="/png/automatisation.jpg"
        imageAlt="Automatisation des procédés d'affaires sur mesure pour entreprises québécoises"
        reverse
        headingVariant="h2"
      />

      {/* Procédés qu'on automatise */}
      <div className="bg-white border-b border-black/6" id="procedes">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Procédés qu&apos;on automatise
          </p>
          <div className="flex flex-col gap-4 max-w-3xl">
            {procedesAutomatises.map(({ num, titre, desc }) => (
              <div key={num} className="flex items-start gap-6 pb-6 border-b border-black/8 last:border-0 last:pb-0">
                <span className="font-heading text-sm text-black/25 shrink-0 w-6 text-right">{num}</span>
                <div className="flex flex-col gap-1.5">
                  <span className="font-heading font-normal text-base text-heading">{titre}</span>
                  <p className="text-sm text-black/55 leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Stats */}
      <ServiceStats
        service={{
          id: 0,
          title: "",
          slug: "",
          description: "",
          image: "",
          downloads: "80%",
          downloadsLabel: "Du temps manuel éliminé",
          countries: "2 sem.",
          countriesLabel: "Délai de déploiement moyen",
          awards: "0 erreur",
          awardsLabel: "Taux d'erreur cible",
        }}
      />

      {/* Pourquoi nous */}
      <WhyUsSection />

      {/* FAQ */}
      <ServiceFAQ
        title={
          <>
            Questions fréquentes <br />
            <span className="sm:block hidden">sur l&apos;automatisation des procédés</span>
          </>
        }
        items={faqItems}
      />

      {/* Liens internes */}
      <Container className="py-10! md:py-14!">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-8">
          Solutions connexes
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/integration-ia-agents" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Intégration IA et agents <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-erp" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel ERP sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/pme-locales" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel sur mesure pour PME <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <div id="contact">
        <CalculatorBanner />
        <Footer />
      </div>
    </>
  );
}
