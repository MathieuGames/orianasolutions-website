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
import ProcessSection from "@/components/service/process-section";
import ServiceFAQ from "@/components/service/faq-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Portail client sur mesure | Espace client sécurisé | Oriana Solutions",
  description:
    "On développe des portails clients sur mesure pour partager des documents, envoyer des factures, suivre les projets et communiquer avec vos clients. Un espace sécurisé à votre image.",
  openGraph: {
    title: "Portail client sur mesure | Espace client sécurisé | Oriana Solutions",
    description:
      "Remplacez vos échanges par courriel par un portail client professionnel. Documents, factures, suivi de projet et messagerie dans un seul espace sécurisé.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/portail-client-sur-mesure",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Quelle est la différence entre un portail client sur mesure et un outil générique comme Notion ou Google Drive ?",
    answer:
      "Les outils génériques sont pratiques pour un usage interne, mais ils ne sont pas conçus pour vos clients. Un portail sur mesure est à votre image, sécurisé avec des accès par client, et intégré à vos processus existants. Vos clients ne voient que ce qui les concerne, pas tout votre espace de travail.",
  },
  {
    id: 2,
    question: "Est-ce qu'on peut intégrer la facturation et les paiements dans le portail ?",
    answer:
      "Oui. On peut connecter votre portail à Stripe ou un autre processeur de paiement pour que vos clients règlent leurs factures directement en ligne. Vous pouvez aussi envoyer des relevés, suivre les paiements en attente et envoyer des rappels automatiques.",
  },
  {
    id: 3,
    question: "Chaque client voit-il seulement ses propres informations ?",
    answer:
      "Absolument. Chaque client a son propre espace sécurisé avec ses documents, ses factures et son historique. Personne ne peut accéder aux données d'un autre client. Les accès sont gérés par authentification et vous contrôlez les permissions à tout moment.",
  },
  {
    id: 4,
    question: "Peut-on personnaliser l'apparence du portail avec notre marque ?",
    answer:
      "C'est une priorité. Votre portail reprend vos couleurs, votre logo et votre identité visuelle. Vos clients ont l'impression d'utiliser un outil développé en interne par votre entreprise, pas un outil générique.",
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
    label: "Partage de documents",
    description:
      "Contrats, rapports, livrables, devis. Vos clients accèdent à leurs fichiers à tout moment, depuis n'importe quel appareil. Fini les pièces jointes perdues dans les courriels.",
  },
  {
    label: "Facturation et paiements",
    description:
      "Envoyez des factures, recevez des paiements en ligne et gardez un historique complet des transactions directement dans le portail.",
  },
  {
    label: "Suivi de projet en temps réel",
    description:
      "Vos clients voient l'avancement de leurs mandats, les étapes complétées et les prochaines actions prévues. Moins d'appels de suivi, plus de confiance.",
  },
  {
    label: "Messagerie intégrée",
    description:
      "Centralisez toutes vos communications avec chaque client dans leur espace dédié. Chaque échange est enregistré et accessible en tout temps.",
  },
  {
    label: "Signatures électroniques",
    description:
      "Faites signer vos contrats et approbations directement dans le portail. Vos documents signés sont archivés automatiquement.",
  },
  {
    label: "Notifications automatiques",
    description:
      "Alertes par courriel ou SMS quand un document est disponible, quand une facture est en attente ou quand une étape est franchie.",
  },
];

export default function PortailClientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Portail client sur mesure" }]} />

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
              <Tag>Développement logiciel · Portail client</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Un espace client professionnel, à votre image.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Documents, factures, suivi de projet et messagerie dans un portail sécurisé.<br className="hidden md:block" /> Vos clients ont tout en main. Vous avez la paix d&apos;esprit.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre portail
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

      {/* Stats */}
      <ServiceStats
        service={{
          id: 0,
          title: "",
          slug: "",
          description: "",
          image: "",
          downloads: "48h",
          downloadsLabel: "Délai de mise en ligne moyen",
          countries: "100 %",
          countriesLabel: "Données hébergées en propre",
          awards: "0 $",
          awardsLabel: "Frais d'abonnement mensuel",
        }}
      />

      {/* Fonctionnalités */}
      <div className="bg-white border-b border-black/6" id="fonctionnalites">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Ce qu&apos;inclut votre portail client
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        title="Un portail qui parle à vos clients, pas à vos collègues."
        description="La plupart des professionnels envoient encore des documents par courriel, répondent aux questions via WhatsApp et gardent leurs suivis dans un tableur. Ça fonctionne, jusqu'à ce que ça ne fonctionne plus. Un portail client centralisé vous fait gagner des heures chaque semaine et projette une image de professionnalisme que vos concurrents n'ont pas. On le développe selon vos processus actuels, pas selon un modèle préfabriqué."
        image="/png/service1.png"
        imageAlt="Portail client sur mesure développé pour firmes professionnelles québécoises"
        // image on right (default)
        headingVariant="h2"
      />

      {/* Processus */}
      <ProcessSection />

      {/* Industries */}
      <div className="bg-white border-b border-black/6">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Industries qui en bénéficient
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { titre: "Services professionnels", desc: "Comptables, avocats, consultants, notaires. Un espace client remplace des dizaines de fils de courriels par semaine." },
              { titre: "Construction et rénovation", desc: "Soumissions, plans, avenants, photos de chantier. Vos clients suivent l'avancement en temps réel." },
              { titre: "Agences et créatifs", desc: "Livrables, approbations, facturation. Vos clients commentent directement dans le portail, plus dans leurs courriels." },
              { titre: "Consultation et coaching", desc: "Ressources partagées, notes de session, suivi des objectifs. Une relation client plus structurée et plus efficace." },
            ].map(({ titre, desc }) => (
              <div key={titre} className="bg-primary-light rounded-xl p-6 flex flex-col gap-3">
                <span className="font-heading font-normal text-lg text-heading">{titre}</span>
                <p className="text-sm text-black/55 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <ServiceFAQ
        title={
          <>
            Questions fréquentes <br />
            <span className="sm:block hidden">sur les portails clients sur mesure</span>
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
          <Link href="/logiciel-crm" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            CRM sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/application-web" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Application web sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/automatisation-des-procedes" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Automatisation des procédés <Arrow className="w-4 h-4" />
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
