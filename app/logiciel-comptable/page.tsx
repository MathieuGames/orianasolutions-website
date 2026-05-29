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
import WhyUsSection from "@/components/service/why-us-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import LogosMarquee from "@/components/ui/logos-marquee";
import ServiceFAQ from "@/components/service/faq-section";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Logiciel sur mesure pour comptables et firmes comptables | Oriana Solutions",
  description:
    "On développe des outils numériques sur mesure pour les comptables et firmes comptables : portail client, automatisation de rapports, logiciel de gestion et tableaux de bord financiers.",
  openGraph: {
    title: "Logiciel pour comptables : application sur mesure | Oriana Solutions",
    description:
      "Automatisez vos tâches répétitives et offrez une meilleure expérience à vos clients avec un logiciel comptable développé selon vos besoins réels.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/logiciel-comptable",
  },
};

const faqItems = [
  {
    id: 1,
    question: "Vous développez des intégrations avec les logiciels comptables existants ?",
    answer:
      "Oui. On peut intégrer votre solution sur mesure avec des outils comme QuickBooks, Sage, Xero ou d'autres plateformes via API. L'objectif est que tout fonctionne ensemble sans double saisie.",
  },
  {
    id: 2,
    question: "Est-ce que le portail client peut être sécurisé pour des documents financiers sensibles ?",
    answer:
      "Absolument. La sécurité est une priorité dans tout ce qu'on développe : chiffrement des données, authentification à deux facteurs, contrôle d'accès par rôle. Vos données et celles de vos clients sont protégées.",
  },
  {
    id: 3,
    question: "On a une petite firme de 3 comptables. Est-ce trop petit pour vous ?",
    answer:
      "Pas du tout. On travaille avec des firmes comptables de toutes tailles. Pour une petite équipe, l'objectif est souvent de gagner quelques heures par semaine grâce à l'automatisation. L'impact est rapide et mesurable.",
  },
  {
    id: 4,
    question: "Combien coûte le développement d'un logiciel comptable sur mesure ?",
    answer:
      "Un outil simple (portail client, automatisation de base) peut démarrer autour de 5 000 $. Une plateforme plus complète se situe entre 10 000 $ et 30 000 $. On établit un devis clair après une première conversation.",
  },
  {
    id: 5,
    question: "Comment débuter avec vous ?",
    answer:
      "On commence par un appel de 15 minutes pour comprendre votre réalité. Aucune obligation, aucun jargon technique. Juste une conversation pour voir si on peut vous aider.",
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

const painPoints = [
  {
    label: "Trop de temps sur l'admin",
    description:
      "Saisie manuelle, fichiers Excel qui traînent, relances par courriel. On automatise ce qui peut l'être pour que vous vous concentriez sur vos clients comptables.",
  },
  {
    label: "Des outils qui ne se parlent pas",
    description:
      "Votre logiciel comptable, votre CRM et votre outil de facturation fonctionnent en silo. On les connecte ou on bâtit une plateforme unifiée.",
  },
  {
    label: "Aucun portail client digne de ce nom",
    description:
      "Vos clients envoient leurs documents par courriel et vous perdez du temps à les chercher. On vous construit un portail sécurisé et simple à utiliser.",
  },
];

export default function LogicielComptablePage() {
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
              <Tag>Solutions numériques · Comptables & firmes comptables</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Un logiciel sur mesure pour les comptables qui veulent gagner du temps.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Portail client, automatisation de rapports, tableaux de bord financiers pour comptables.<br className="hidden md:block" /> On développe les outils dont votre firme comptable a besoin.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de votre projet
                </Button>
                <Button
                  variant="outline"
                  href="#problemes"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Ce qu&apos;on règle
                </Button>
              </div>
            </AnimatedContent>

          </div>
        </div>
      </Container>

      {/* Ce qu'on règle */}
      <div className="bg-white border-b border-black/6" id="problemes">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Ce qu&apos;on règle
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {painPoints.map(({ label, description }) => (
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
        title="Votre portail client comptable, pensé pour l'efficacité."
        description="Vos clients déposent leurs documents directement dans leur portail sécurisé, vous les traitez, et tout le monde suit l'avancement en temps réel. Fini les fils de courriel interminables. Le logiciel s'intègre à vos outils comptables existants comme QuickBooks ou Sage."
        image="/png/service1.png"
        imageAlt="Portail client pour firme comptable développé sur mesure"
        headingVariant="h2"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Automatisez ce qui peut l'être. Facturez ce qui compte."
        description="Génération de rapports comptables automatique, rappels de documents manquants, tableaux de bord financiers en temps réel. On identifie les tâches répétitives dans votre flux de travail et on les automatise pour libérer votre équipe. Besoin d'un ERP complet ? Consultez aussi notre page sur les logiciels ERP."
        image="/png/real4.png"
        imageAlt="Automatisation et tableaux de bord financiers pour comptables"
        headingVariant="h2"
        parentStyle="bg-primary-light"
        className="pt-20"
      />

      <WhyUsSection />
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
          <Link href="/logiciel-crm" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel CRM sur mesure <Arrow className="w-4 h-4" />
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
            <span className="sm:block hidden">sur le logiciel pour comptables</span>
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
