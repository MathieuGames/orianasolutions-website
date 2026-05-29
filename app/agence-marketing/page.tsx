import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import Container from "@/components/shared/container";
import AnimatedContent from "@/components/ui/animated-content";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import WhyUsSection from "@/components/service/why-us-section";
import ServiceFAQ from "@/components/service/faq-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Partenaire technique pour agences marketing | Développement web sur mesure | Oriana Solutions",
  description:
    "Oriana est le partenaire technique discret de votre agence. Pages d'atterrissage, microsites de campagne, portails clients, intégrations CRM. On livre sous votre marque.",
  openGraph: {
    title: "Partenaire technique pour agences marketing | Oriana Solutions",
    description:
      "Vous apportez les clients. On construit. White-label, NDA disponible, délais respectés. Le partenaire tech que votre agence cherchait.",
    url: "https://orianasolutions.com/agence-marketing",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Est-ce que vous acceptez de travailler en marque blanche pour notre agence ?",
    answer:
      "Oui. C'est notre modèle de travail préféré avec les agences. On développe sous votre marque, on ne communique pas directement avec vos clients sans votre accord, et on ne figure nulle part dans les livrables. NDA disponible sur demande.",
  },
  {
    id: 2,
    question: "Quel est votre délai de livraison habituel pour une page d'atterrissage ?",
    answer:
      "Une page d'atterrissage bien définie prend généralement 5 à 10 jours ouvrables. Pour un microsite de campagne de 3 à 5 pages, comptez 2 à 3 semaines. On respecte les délais parce que votre agence en dépend.",
  },
  {
    id: 3,
    question: "Comment se passe la communication pendant un projet ?",
    answer:
      "On travaille directement avec votre gestionnaire de projet ou votre équipe créative. On s'adapte à vos outils : Slack, Teams, courriel, Asana, peu importe. Vous restez l'interlocuteur principal de votre client.",
  },
  {
    id: 4,
    question: "Pouvez-vous intégrer avec les CRM de nos clients (HubSpot, Salesforce, Mailchimp) ?",
    answer:
      "Absolument. Les intégrations CRM sont une de nos spécialités. On connecte vos pages et formulaires aux outils marketing de vos clients pour que les leads tombent directement dans leurs pipelines.",
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

const livrables = [
  {
    icone: "01",
    titre: "Pages d'atterrissage haute conversion",
    desc: "Développées selon vos maquettes Figma ou vos wireframes. Performance, animations soignées et intégration avec les outils d'analyse de votre client.",
  },
  {
    icone: "02",
    titre: "Microsites de campagne",
    desc: "Sites temporaires ou permanents pour des lancements, des événements ou des campagnes. Livraison rapide sans compromettre la qualité.",
  },
  {
    icone: "03",
    titre: "Portails clients et extranets",
    desc: "Vos clients veulent offrir un espace en ligne à leurs clients. On développe des portails sécurisés avec authentification et gestion des accès.",
  },
  {
    icone: "04",
    titre: "Intégrations CRM et marketing",
    desc: "Connexion de formulaires, de pages et d'outils aux plateformes marketing. HubSpot, Salesforce, Mailchimp, ActiveCampaign et bien d'autres.",
  },
  {
    icone: "05",
    titre: "Automatisations marketing",
    desc: "Workflows automatiques, notifications, segmentation et déclencheurs basés sur le comportement des utilisateurs.",
  },
  {
    icone: "06",
    titre: "Tableaux de bord de performance",
    desc: "Des dashboards sur mesure pour que vos clients visualisent leurs métriques clés sans passer par 4 outils différents.",
  },
];

export default function AgenceMarketingPage() {
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
              <Tag>Pour les agences marketing</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Vous apportez les clients. On construit. Sous votre nom.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Partenaire technique discret pour agences marketing.<br className="hidden md:block" /> Pages d&apos;atterrissage, microsites, intégrations CRM et automatisations. Tout en marque blanche.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Devenir partenaire
                </Button>
                <Button
                  variant="outline"
                  href="#livrables"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Ce qu&apos;on livre
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </Container>

      {/* Ce qu'on livre */}
      <div className="bg-white border-b border-black/6" id="livrables">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Ce qu&apos;on livre aux agences
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {livrables.map(({ icone, titre, desc }) => (
              <div key={titre} className="flex flex-col gap-3 p-6 border border-black/8 rounded-xl hover:border-black/20 transition-colors">
                <span className="text-xs font-semibold text-black/25 font-heading">{icone}</span>
                <span className="font-heading font-normal text-lg text-heading">{titre}</span>
                <p className="text-sm text-black/55 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Section principale */}
      <DynamicServiceSection
        title="Votre agence grandit. Votre équipe technique aussi."
        description="Vous avez du mal à refuser des mandats techniques parce que vous n'avez pas les ressources internes pour les livrer ? Oriana devient votre département technique sur demande. Vous gérez la relation client et la stratégie. On se charge de l'exécution technique. Délais respectés, qualité irréprochable, aucune friction visible pour votre client."
        image="/png/service1-4.png"
        imageAlt="Partenariat technique en marque blanche pour agences marketing québécoises"
        reverse
        headingVariant="h2"
      />

      {/* Pourquoi nous */}
      <WhyUsSection />

      {/* Cross-sell : SalesPitch */}
      <Container className="py-14! md:py-18!">
        <div className="rounded-3xl bg-primary-light border border-primary/15 overflow-hidden flex flex-col md:flex-row">
          {/* Texte */}
          <div className="flex flex-col gap-5 p-8 md:p-12 flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Outil créé par Oriana
            </span>
            <h2 className="font-heading font-normal text-2xl md:text-3xl text-heading leading-snug">
              Votre agence veut convertir plus de prospects ?
            </h2>
            <p className="text-black/55 text-sm leading-7 max-w-lg">
              On a bâti SalesPitch, un SaaS qui aide les équipes de vente à structurer des pitchs percutants en quelques minutes. Moins d&apos;improvisation, meilleur taux de conversion.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="https://www.usesalespitch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Essayer gratuitement <Arrow className="w-4 h-4" />
              </Link>
              <Link
                href="/salespitch"
                className="inline-flex items-center gap-2 text-sm font-medium text-heading px-6 py-3 rounded-xl border border-black/12 hover:border-black/30 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          {/* Screenshot */}
          <div className="md:w-[55%] shrink-0 flex items-center justify-center p-6 md:p-8">
            <Image
              src="/png/saas-sales-pitch.png"
              alt="Interface de SalesPitch — outil de structuration de pitchs de vente"
              width={1430}
              height={777}
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </Container>

      {/* FAQ */}
      <ServiceFAQ
        title={
          <>
            Questions des agences <br />
            <span className="sm:block hidden">sur notre partenariat en marque blanche</span>
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
          <Link href="/site-web-sur-mesure" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Site web sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/portail-client-sur-mesure" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Portail client sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/automatisation-des-procedes" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Automatisation des procédés <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
