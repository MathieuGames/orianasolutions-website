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
  title: "Développement logiciel à Laval — Application web, SaaS & logiciel sur mesure | Oriana Solutions",
  description:
    "Programmeurs et développeurs à Laval. On bâtit des applications web, des logiciels sur mesure et des plateformes SaaS pour les startups, OBNL et PME de Laval et de la région.",
  openGraph: {
    title: "Développement logiciel à Laval | Oriana Solutions",
    description:
      "Développeurs à Laval spécialisés en application web, SaaS et logiciel sur mesure pour startups, OBNL et PME.",
    url: "https://orianasolutions.com/developpement-logiciel-laval",
  },
};

const clients = [
  {
    label: "Startups",
    description:
      "Vous avez une idée et vous voulez la valider rapidement ? On vous aide à construire un MVP solide sans brûler votre budget.",
  },
  {
    label: "PME",
    description:
      "Vous avez besoin d'outils internes, d'un portail client ou d'une plateforme sur mesure ? On s'occupe de tout, de A à Z.",
  },
  {
    label: "OBNL",
    description:
      "Mission importante, budget serré. On comprend vos contraintes et on trouve des solutions qui ont du sens pour votre organisation.",
  },
];

export default function LavalPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero — même structure que la page d'accueil */}
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
              <Tag>Développement logiciel · Laval, Québec</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Des programmeurs à Laval pour bâtir votre prochain logiciel.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Startup, OBNL ou PME, on développe des applications web,<br className="hidden md:block" /> des logiciels sur mesure et des plateformes SaaS.
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
        title="Une équipe qui comprend les affaires, pas juste le code."
        description="Avant d'écrire la première ligne de code, on veut comprendre votre clientèle, vos contraintes et vos objectifs. C'est comme ça qu'on livre des logiciels qui servent vraiment à quelque chose. Pas juste des fonctionnalités qui s'accumulent."
        image="/png/service2.png"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Application web, SaaS ou logiciel : on gère tout."
        description="Architecture, design, développement, tests, déploiement. Que ce soit une plateforme SaaS, un outil interne ou une application web sur mesure, nos développeurs prennent en charge chaque étape pour que vous puissiez vous concentrer sur ce qui compte vraiment."
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
            <span className="sm:block hidden">sur le développement logiciel à Laval</span>
          </>
        }
        items={[
          {
            id: 1,
            question: "Vous travaillez vraiment avec des entreprises à Laval ?",
            answer:
              "Oui. On travaille avec des clients à Laval, Montréal et partout au Québec. On peut se rencontrer en personne ou travailler entièrement à distance. C'est vous qui choisissez ce qui vous convient le mieux.",
          },
          {
            id: 2,
            question: "Vous travaillez avec de petites startups ou des OBNL qui ont un budget limité ?",
            answer:
              "Absolument. On a l'habitude de travailler avec des organisations qui n'ont pas des budgets illimités. On commence toujours par une phase d'analyse pour bien cerner vos priorités et livrer un MVP ou une première version utile sans exploser les coûts.",
          },
          {
            id: 3,
            question: "Quelle est la différence entre une application web et un logiciel sur mesure ?",
            answer:
              "Une application web est accessible directement dans un navigateur, sans installation. Un logiciel sur mesure peut être une application bureau, un outil interne, une API ou n'importe quelle solution numérique taillée pour vos processus. Dans les deux cas, on adapte la solution à ce dont vous avez vraiment besoin.",
          },
          {
            id: 4,
            question: "Combien coûte le développement d'une application web ou d'un logiciel à Laval ?",
            answer:
              "Ça dépend de la complexité du projet. Un MVP simple peut démarrer autour de **5 000 $**, une plateforme complète se situe généralement entre **10 000 $ et 30 000 $**, et les projets plus complexes vont au-delà. On vous fournit un devis détaillé après avoir bien compris votre projet.",
          },
          {
            id: 5,
            question: "On peut vous contacter pour une simple question ou une consultation ?",
            answer:
              "Oui, sans aucune obligation. On offre un premier appel gratuit de 15 minutes pour discuter de votre projet, répondre à vos questions et voir si on est le bon fit pour vous.",
          },
        ]}
      />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
