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
import ServiceFAQ from "@/components/service/faq-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Logiciel de réservation sur mesure | Système de booking | Oriana Solutions",
  description:
    "On développe des systèmes de réservation en ligne sur mesure. Calendrier, paiements, rappels SMS, gestion du personnel et multi-succursales. Pour restaurants, cliniques, salons et plus.",
  openGraph: {
    title: "Logiciel de réservation sur mesure | Système de booking | Oriana Solutions",
    description:
      "Votre propre système de réservation, sans frais de transaction, sans limitations. Calendrier synchronisé, paiements en ligne, rappels automatiques.",
    url: "https://orianasolutions.com/logiciel-booking-reservation",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Est-ce qu'on peut synchroniser avec Google Calendar ou Outlook ?",
    answer:
      "Oui. La synchronisation bidirectionnelle avec Google Calendar et Outlook est une fonctionnalité standard de nos systèmes de réservation. Les disponibilités sont mises à jour en temps réel et les conflits de calendrier sont évités automatiquement.",
  },
  {
    id: 2,
    question: "Comment se font les paiements en ligne ?",
    answer:
      "On intègre Stripe ou Square selon vos préférences. Vos clients peuvent payer lors de la réservation, laisser une caution ou régler au moment du service. Vous recevez les fonds directement dans votre compte, sans intermédiaire.",
  },
  {
    id: 3,
    question: "Est-ce qu'on peut envoyer des rappels automatiques aux clients ?",
    answer:
      "Absolument. On configure des rappels automatiques par courriel et SMS selon vos préférences. 24 heures avant, 2 heures avant, 30 minutes avant. Vous choisissez le moment et le message. Les rappels réduisent les no-shows de 40 à 60% en moyenne.",
  },
  {
    id: 4,
    question: "Peut-on gérer plusieurs employés ou ressources avec des disponibilités différentes ?",
    answer:
      "Oui. Chaque membre du personnel a son propre calendrier et ses propres disponibilités. Les clients peuvent choisir un prestataire spécifique ou réserver avec le premier disponible. Parfait pour les salons, cliniques et studios.",
  },
  {
    id: 5,
    question: "On a plusieurs succursales. Est-ce possible de tout gérer au même endroit ?",
    answer:
      "Tout à fait. On développe des systèmes multi-sites où chaque succursale a ses propres disponibilités, son propre personnel et ses propres règles, mais tout est géré depuis un tableau de bord central.",
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

const industries = [
  { emoji: "🍽️", titre: "Restaurants et tables d'hôte", desc: "Réservations de tables, gestion des allées, listes d'attente et confirmation automatique." },
  { emoji: "🏥", titre: "Cliniques et professionnels de la santé", desc: "Prise de rendez-vous en ligne, rappels patients, gestion de plusieurs praticiens." },
  { emoji: "✂️", titre: "Salons de coiffure et spas", desc: "Réservation par prestataire, services multiples, dépôts obligatoires pour réduire les no-shows." },
  { emoji: "🏋️", titre: "Studios fitness et yoga", desc: "Inscription aux cours, listes d'attente, abonnements et gestion de la capacité." },
  { emoji: "🏠", titre: "Immobilier et visites", desc: "Calendrier de visites, confirmations automatiques et intégration avec les outils des agents." },
  { emoji: "🎓", titre: "Formations et consultants", desc: "Réservation de sessions individuelles ou en groupe, paiement en avance et accès aux ressources." },
];

export default function LogicielBookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Logiciel de booking et réservation" }]} />

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
              <Tag>Développement logiciel · Réservation en ligne</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Votre propre système de réservation. Sans frais de transaction.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Calendrier synchronisé, paiements en ligne, rappels automatiques.<br className="hidden md:block" /> Un système fait pour votre flux de travail, pas pour la moyenne des entreprises.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre système
                </Button>
                <Button
                  variant="outline"
                  href="#industries"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Votre industrie
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </Container>

      {/* Industries */}
      <div className="bg-white border-b border-black/6" id="industries">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Industries qu&apos;on sert
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(({ emoji, titre, desc }) => (
              <div key={titre} className="flex flex-col gap-3 p-6 bg-primary-light rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-hidden>{emoji}</span>
                  <span className="font-heading font-normal text-base text-heading">{titre}</span>
                </div>
                <p className="text-sm text-black/55 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Section 1 : ce qu'on développe */}
      <DynamicServiceSection
        title="Un système qui réduit vos no-shows et vos appels téléphoniques."
        description="La plupart des petites entreprises perdent entre 15 et 25% de leur revenus à cause de no-shows et d'annulations de dernière minute. Un système de réservation bien conçu, avec des rappels automatiques par SMS et la possibilité de prendre un dépôt en ligne, change la donne du jour au lendemain. Vos clients réservent à 23h depuis leur cellulaire. Vous dormez. Le lendemain matin, votre calendrier est rempli."
        image="/png/service1-1.png"
        imageAlt="Système de réservation en ligne sur mesure pour petites entreprises québécoises"
        // image on right (default)
        headingVariant="h2"
      />

      {/* Section 2 : avantage sur mesure */}
      <DynamicServiceSection
        title="Calendly, SimplyBook... et leurs limitations."
        description="Les outils génériques de réservation fonctionnent bien pour des cas simples. Mais dès que vous avez des ressources spécifiques à gérer, des règles particulières pour certains types de rendez-vous, ou que vous voulez intégrer votre système à votre logiciel de caisse ou à votre CRM, vous vous heurtez aux murs de ces plateformes. Un système sur mesure n'a pas ces limites. Il s'adapte à vous, maintenant et dans 3 ans."
        image="/png/service2.png"
        imageAlt="Avantages d'un logiciel de réservation sur mesure versus les outils génériques"
        reverse
        headingVariant="h2"
      />

      {/* FAQ */}
      <ServiceFAQ
        title={
          <>
            Questions fréquentes <br />
            <span className="sm:block hidden">sur les systèmes de réservation sur mesure</span>
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
          <Link href="/portail-client-sur-mesure" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Portail client sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-crm" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            CRM sur mesure <Arrow className="w-4 h-4" />
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
