import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import RealisationsSection from "@/components/case-study/realisation-section";
import LogosMarquee from "@/components/ui/logos-marquee";
import ServiceFAQ from "@/components/service/faq-section";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Développement CRM sur mesure : gestion de la relation client | Oriana Solutions",
  description:
    "On développe des CRM sur mesure pour gérer vos prospects, automatiser vos suivis et centraliser l'historique de vos clients. Un outil pensé pour votre équipe, pas pour une équipe de 500 personnes.",
  openGraph: {
    title: "CRM sur mesure : gestion relation client | Oriana Solutions",
    description:
      "Un CRM développé selon votre processus de vente. Ne perdez plus de prospects, automatisez vos suivis, et prenez de meilleures décisions avec vos données.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/logiciel-crm",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Pourquoi développer un CRM sur mesure plutôt qu'utiliser HubSpot ou Pipedrive ?",
    answer:
      "Les CRM SaaS sont excellents pour des équipes standards, mais ils viennent avec des limitations : fonctionnalités dont vous n'avez pas besoin, manque de personnalisation, coûts qui explosent avec la croissance, et dépendance à un tiers pour vos données. Un CRM sur mesure vous donne exactement ce qu'il vous faut, rien de plus.",
  },
  {
    id: 2,
    question: "Peut-on intégrer le CRM avec nos outils actuels (courriel, ERP, comptabilité) ?",
    answer:
      "Oui. L'intégration avec vos outils existants est souvent une priorité. On peut connecter votre CRM à votre messagerie (Gmail, Outlook), votre logiciel comptable, votre ERP ou tout autre outil via API.",
  },
  {
    id: 3,
    question: "Combien de temps ça prend pour développer un CRM sur mesure ?",
    answer:
      "Un CRM de base (pipeline, fiches clients, historique) prend généralement entre 2 et 4 mois selon la complexité. On livre par étapes pour que vous puissiez commencer à utiliser votre CRM rapidement, avant même que toutes les fonctionnalités soient complètes.",
  },
  {
    id: 4,
    question: "Combien coûte un CRM sur mesure ?",
    answer:
      "Un CRM fonctionnel de base démarre autour de 8 000 $. Avec les automatisations, les intégrations et les tableaux de bord avancés, le budget se situe généralement entre 15 000 $ et 40 000 $ selon les fonctionnalités.",
  },
  {
    id: 5,
    question: "Comment débuter avec vous ?",
    answer:
      "On commence par un appel de 15 minutes pour comprendre votre processus de vente actuel et identifier les irritants principaux. C'est gratuit et sans engagement. On vous propose ensuite une solution CRM adaptée.",
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

const fonctionnalites = [
  {
    label: "Pipeline de vente",
    description:
      "Visualisez chaque opportunité CRM par étape. Glissez-déposez, filtrez, et sachez exactement où en est chaque prospect à tout moment.",
  },
  {
    label: "Suivi automatique",
    description:
      "Rappels automatiques, courriels de suivi personnalisés, notifications d'inactivité. Votre équipe ne laisse plus rien passer.",
  },
  {
    label: "Historique client",
    description:
      "Chaque appel, courriel, réunion et note au même endroit dans votre CRM. N'importe qui dans l'équipe peut reprendre un dossier sans demander un briefing.",
  },
];

export default function LogicielCRMPage() {
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
              <Tag>Développement logiciel · CRM sur mesure</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Ne perdez plus jamais un prospect. Un CRM sur mesure fait pour vous.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Pipeline de vente, automatisation des suivis, historique client complet dans votre CRM.<br className="hidden md:block" /> Conçu selon votre processus, pas celui d&apos;une grande entreprise.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre projet CRM
                </Button>
                <Button
                  variant="outline"
                  href="#fonctionnalites"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Fonctionnalités
                </Button>
              </div>
            </AnimatedContent>

          </div>
        </div>
      </Container>

      {/* Fonctionnalités CRM */}
      <div className="bg-white border-b border-black/6" id="fonctionnalites">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Fonctionnalités clés du CRM
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {fonctionnalites.map(({ label, description }) => (
              <div key={label} className="flex flex-col gap-3 pt-6 border-t border-black/10">
                <span className="font-heading font-normal text-xl text-heading">{label}</span>
                <p className="text-sm text-black/50 leading-6">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Section principale */}
      <DynamicServiceSection
        title="Un CRM sur mesure adapté à votre équipe, pas à la théorie."
        description="HubSpot et Salesforce sont des outils puissants, mais conçus pour des équipes de vente de grandes entreprises. On développe un CRM qui correspond exactement à la taille de votre équipe, à votre cycle de vente et à vos habitudes de travail. Adoption rapide, impact immédiat. Les agents immobiliers, comptables et PME qui nous font confiance voient des résultats dès le premier mois."
        image="/png/service1-1.png"
        imageAlt="CRM sur mesure développé pour PME et startups québécoises"
        headingVariant="h2"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Vos données CRM vous appartiennent. Pas à un tiers."
        description="Avec un CRM sur mesure, vous hébergez vos propres données clients, vous contrôlez les accès et vous n'êtes dépendant d'aucun abonnement tiers. Si votre équipe grandit ou si vos besoins changent, on fait évoluer le CRM avec vous. Aucune limite d'utilisateurs, aucune surprise de facturation."
        image="/png/real2.png"
        imageAlt="Gestion des données clients dans un CRM hébergé en propre"
        headingVariant="h2"
        parentStyle="bg-primary-light"
        className="pt-20"
      />

      {/* Stats */}
      <ServiceStats
        service={{
          id: 0,
          title: "",
          slug: "",
          description: "",
          image: "",
          downloads: "2 à 4 mois",
          downloadsLabel: "Délai de livraison moyen",
          countries: "100 %",
          countriesLabel: "Données vous appartenant",
          awards: "0 $",
          awardsLabel: "Frais d'abonnement mensuel",
        }}
      />

      <WhyUsSection />

      {/* Cross-sell : SalesPitch */}
      <Container className="py-10! md:py-12!">
        <div className="rounded-2xl border border-black/8 bg-white px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">Outil créé par Oriana</span>
            <p className="font-heading font-normal text-xl text-heading">
              Votre CRM suit vos clients. SalesPitch vous aide à les convertir.
            </p>
            <p className="text-sm text-black/50 mt-1 max-w-lg">
              On a bâti un SaaS pour structurer des pitchs de vente percutants en quelques minutes. Le complément naturel d&apos;un bon CRM.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="https://www.usesalespitch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Voir SalesPitch <Arrow className="w-4 h-4" />
            </Link>
            <Link
              href="/salespitch"
              className="inline-flex items-center gap-2 text-sm font-medium text-heading px-5 py-2.5 rounded-xl border border-black/12 hover:border-black/30 transition-colors whitespace-nowrap"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </Container>

      <RealisationsSection />
      <LogosMarquee />

      {/* Liens internes */}
      <Container className="py-10! md:py-14!">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-8">
          Solutions connexes
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/logiciel-erp" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel ERP sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-agent-immobilier" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            CRM pour agents immobiliers <Arrow className="w-4 h-4" />
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
            <span className="sm:block hidden">sur le développement d&apos;un CRM sur mesure</span>
          </>
        }
        items={faqItems}
      />

      <div id="contact">
        <CalculatorBanner />
        <Footer />
      </div>
    </>
  );
}
