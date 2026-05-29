import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import Container from "@/components/shared/container";
import AnimatedContent from "@/components/ui/animated-content";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import ProcessSection from "@/components/service/process-section";
import WhyUsSection from "@/components/service/why-us-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import LogosMarquee from "@/components/ui/logos-marquee";
import ServiceFAQ from "@/components/service/faq-section";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Développement logiciel à Québec — Application web, SaaS & logiciel sur mesure | Oriana Solutions",
  description:
    "Programmeurs et développeurs à Québec. On bâtit des applications web, des logiciels sur mesure et des plateformes SaaS pour les startups, OBNL et PME de la région de Québec.",
  openGraph: {
    title: "Développement logiciel à Québec | Oriana Solutions",
    description:
      "Développeurs à Québec spécialisés en application web, SaaS et logiciel sur mesure pour startups, OBNL et PME.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/developpement-logiciel-quebec",
  },
};

const clients = [
  {
    label: "Startups",
    description:
      "Vous lancez quelque chose de nouveau ? On vous aide à bâtir un produit initial bien pensé, testé et prêt à grandir avec vous.",
  },
  {
    label: "PME",
    description:
      "Vous avez besoin d'un logiciel interne, d'une plateforme client ou d'un outil sur mesure ? On prend en charge le développement complet.",
  },
  {
    label: "OBNL",
    description:
      "On travaille avec des organismes à but non lucratif depuis le début. On connaît vos réalités et on livre des solutions adaptées à votre mission.",
  },
];

export default function QuebecPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <Container
        parentStyle="bg-primary-light relative rounded-b-[30px] md:rounded-b-none overflow-hidden"
        className="relative overflow-hidden min-h-[calc(100dvh-68px)] flex md:items-center"
      >
        {/* Watermark logo */}
        <div className="absolute -right-20 -bottom-10 2xl:-bottom-44 2xl:-right-24 w-[340px] h-[310px] md:w-[480px] xl:h-[420px] 2xl:w-[730px] 2xl:h-[730px] flex items-end pointer-events-none select-none">
          <Image
            src="/svg/Logo_Oriana_Symbole_Noir.svg"
            alt=""
            aria-hidden
            width={900}
            height={900}
            className="w-full translate-x-3 translate-y-3"
            style={{
              filter:
                "invert(27%) sepia(96%) saturate(1800%) hue-rotate(210deg) brightness(98%) contrast(88%)",
              opacity: 0.22,
            }}
            priority
          />
        </div>

        <div className="relative z-10 mt-3 md:-mt-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 md:gap-8 w-full md:max-w-[70%] 2xl:max-w-229.75 md:mx-auto">

            <AnimatedContent distance={20} duration={0.6} delay={0.05} threshold={0.01} className="flex items-center">
              <Tag>Développement logiciel · Québec, Capitale-Nationale</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Des développeurs à Québec pour vos projets logiciels.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Startup, OBNL ou PME dans la région de Québec, on conçoit<br className="hidden md:block" /> des applications web, des logiciels sur mesure et des plateformes SaaS.
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

      {/* Sections service */}
      <DynamicServiceSection
        title="On construit ce dont vous avez besoin, pas ce qui fait beau sur papier."
        description="Beaucoup d'agences proposent des solutions complexes quand une approche simple suffirait. Nous, on prend le temps de comprendre votre organisation avant de recommander quoi que ce soit. Le bon outil, pour le bon problème."
        image="/png/service2.png"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Du premier appel à la mise en ligne, on reste avec vous."
        description="Conception, développement, tests et déploiement. Vous avez un interlocuteur clair à chaque étape et une visibilité complète sur l'avancement. On livre ce qu'on promet, dans les délais qu'on annonce."
        image="/png/real5.png"
        parentStyle="bg-primary-light"
        className="pt-20"
      />

      <ProcessSection />
      <WhyUsSection />
      <RealisationsSection />
      <LogosMarquee />

      <ServiceFAQ
        title={
          <>
            Questions fréquentes <br />
            <span className="sm:block hidden">sur le développement logiciel à Québec</span>
          </>
        }
        items={[
          {
            id: 1,
            question: "Vous travaillez avec des entreprises de la région de Québec ?",
            answer:
              "Oui. On collabore avec des clients à Québec, Lévis, Sainte-Foy et partout dans la Capitale-Nationale. On s'adapte selon vos préférences : en personne ou entièrement à distance.",
          },
          {
            id: 2,
            question: "On a un projet en tête mais on ne sait pas par où commencer. Vous pouvez nous guider ?",
            answer:
              "C'est souvent comme ça que ça commence. On offre un premier appel gratuit où on prend le temps d'écouter votre idée, de poser les bonnes questions et de vous orienter. Aucune obligation de votre côté.",
          },
          {
            id: 3,
            question: "Quelle est la différence entre une application web et un logiciel sur mesure ?",
            answer:
              "Une application web fonctionne directement dans un navigateur. Un logiciel sur mesure peut prendre plusieurs formes : outil interne, système de gestion, API, tableau de bord. On détermine ensemble la meilleure approche selon vos besoins.",
          },
          {
            id: 4,
            question: "Quels sont vos tarifs pour le développement d'un logiciel à Québec ?",
            answer:
              "Un MVP simple démarre autour de **5 000 $**. Une plateforme complète se situe généralement entre **10 000 $ et 30 000 $**. Vous recevez un devis clair et détaillé avant le début des travaux, sans frais cachés.",
          },
          {
            id: 5,
            question: "Combien de temps prend le développement d'une application ?",
            answer:
              "Un MVP peut être livré en 4 à 8 semaines. Une plateforme plus complète prend généralement 2 à 5 mois. Tout dépend de la complexité et des fonctionnalités prévues. On vous donne un échéancier réaliste dès le départ.",
          },
        ]}
      />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
