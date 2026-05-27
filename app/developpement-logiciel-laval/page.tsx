import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import Container from "@/components/shared/container";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import ProcessSection from "@/components/service/process-section";
import WhyUsSection from "@/components/service/why-us-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import LogosMarquee from "@/components/ui/logos-marquee";
import ServiceFAQ from "@/components/service/faq-section";

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
    icon: "🚀",
    description: "Vous avez une idée et vous voulez la valider rapidement ? On vous aide à construire un MVP solide sans brûler votre budget.",
  },
  {
    label: "PME",
    icon: "🏢",
    description: "Vous avez besoin d'outils internes, d'un portail client ou d'une plateforme sur mesure ? On s'occupe de tout, de A à Z.",
  },
  {
    label: "OBNL",
    icon: "🤝",
    description: "Mission importante, budget serré. On comprend vos contraintes et on trouve des solutions qui ont du sens pour votre organisation.",
  },
];

export default function LavalPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-primary-light">
        {/* Watermark logo */}
        <div className="absolute -right-20 -bottom-10 2xl:-bottom-44 w-[340px] h-[310px] md:w-[480px] xl:h-[420px] 2xl:w-[680px] 2xl:h-[680px] pointer-events-none select-none">
          <Image
            src="/svg/Logo_Oriana_Symbole_Noir.svg"
            alt=""
            aria-hidden
            width={900}
            height={900}
            className="w-full"
            style={{
              filter: "invert(27%) sepia(96%) saturate(1800%) hue-rotate(210deg) brightness(98%) contrast(88%)",
              opacity: 0.18,
            }}
            priority
          />
        </div>

        <Container className="relative z-10 py-20! md:py-32!">
          <div className="flex flex-col items-start gap-6 md:gap-8 max-w-3xl">
            <Tag>Développement logiciel · Laval, Québec</Tag>

            <h1 className="font-heading font-normal text-[40px] sm:text-5xl xl:text-6xl 2xl:text-7xl text-heading leading-tight">
              Des programmeurs à Laval pour bâtir votre prochain logiciel.
            </h1>

            <p className="text-base md:text-xl text-black/55 leading-relaxed max-w-2xl">
              Startup, OBNL ou PME — on développe des applications web, des logiciels sur mesure et des plateformes SaaS qui s&apos;adaptent à votre réalité, pas l&apos;inverse.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mt-2">
              <Button href="/contact">
                Discutons de votre projet
              </Button>
              <Link
                href="#services"
                className="inline-flex items-center gap-1.5 text-black/60 text-base hover:text-black transition-colors"
              >
                Voir nos services →
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Who we work with */}
      <div className="bg-white border-b border-black/6" id="services">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-8">
            On travaille avec
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {clients.map(({ label, icon, description }) => (
              <div
                key={label}
                className="flex flex-col gap-3 rounded-2xl border border-black/8 p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-heading font-normal text-lg text-heading">
                  {label}
                </span>
                <p className="text-sm text-black/50 leading-6">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Service sections */}
      <DynamicServiceSection
        title="Une équipe qui comprend les affaires, pas juste le code."
        description="Avant d'écrire la première ligne de code, on veut comprendre votre clientèle, vos contraintes et vos objectifs. C'est comme ça qu'on livre des logiciels qui servent vraiment à quelque chose — et pas juste des fonctionnalités qui s'accumulent."
        image="/png/service2.png"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Application web, SaaS ou logiciel — on gère tout."
        description="Architecture, design, développement, tests, déploiement. Que ce soit une plateforme SaaS, un outil interne ou une application web sur mesure, nos développeurs prennent en charge chaque étape pour que vous puissiez vous concentrer sur ce qui compte vraiment."
        image="/png/real5.png"
        parentStyle="bg-primary-light"
        className="pt-20"
      />

      <ProcessSection />
      <WhyUsSection />
      <RealisationsSection />
      <LogosMarquee />

      {/* FAQ */}
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
              "Oui. On travaille avec des clients à Laval, Montréal et partout au Québec. On peut se rencontrer en personne ou travailler entièrement à distance — c'est vous qui choisissez ce qui vous convient le mieux.",
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
