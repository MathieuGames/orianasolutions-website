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
  title: "Développement logiciel à Trois-Rivières — Application web, SaaS & logiciel sur mesure | Oriana Solutions",
  description:
    "Programmeurs et développeurs à Trois-Rivières. On conçoit des applications web, des logiciels sur mesure et des plateformes SaaS pour les startups, OBNL et PME de Trois-Rivières et de la Mauricie.",
  openGraph: {
    title: "Développement logiciel à Trois-Rivières | Oriana Solutions",
    description:
      "Développeurs à Trois-Rivières spécialisés en application web, SaaS et logiciel sur mesure pour startups, OBNL et PME de la Mauricie.",
    url: "https://orianasolutions.com/developpement-logiciel-trois-rivieres",
  },
};

const clients = [
  {
    label: "Startups",
    description:
      "Vous avez une idée et vous voulez passer à l'action ? On vous aide à construire un premier produit solide, sans vous faire dépenser plus que nécessaire.",
  },
  {
    label: "PME",
    description:
      "Vous avez des processus à automatiser ou un outil interne à bâtir ? On s'occupe du développement de A à Z pendant que vous gérez votre business.",
  },
  {
    label: "OBNL",
    description:
      "Ressources limitées, impact important. On s'adapte à votre réalité pour livrer des solutions qui fonctionnent vraiment sur le terrain.",
  },
];

export default function TroisRivieresPage() {
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
              <Tag>Développement logiciel · Trois-Rivières, Mauricie</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Des programmeurs pour les entreprises de Trois-Rivières.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Startup, OBNL ou PME en Mauricie, on développe des applications web,<br className="hidden md:block" /> des logiciels sur mesure et des plateformes SaaS.
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
        title="La technologie au service de votre croissance."
        description="Que vous cherchiez à automatiser des tâches répétitives, à offrir un meilleur service à vos clients ou à lancer un nouveau produit numérique, on part de vos besoins concrets avant de parler de solutions. Pas de technologie pour la technologie."
        image="/png/service2.png"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Un projet livré dans les temps, sans mauvaises surprises."
        description="On s'occupe du design, du développement, des tests et du déploiement. Vous avez une visibilité claire sur l'avancement à chaque étape. Pas besoin d'être techno pour savoir où en est votre projet."
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
            <span className="sm:block hidden">sur le développement logiciel à Trois-Rivières</span>
          </>
        }
        items={[
          {
            id: 1,
            question: "Vous travaillez avec des entreprises à Trois-Rivières et en Mauricie ?",
            answer:
              "Oui. On collabore avec des clients à Trois-Rivières, Shawinigan et partout en Mauricie. On travaille à distance ou en personne selon ce qui vous convient le mieux.",
          },
          {
            id: 2,
            question: "On est une petite entreprise en région. Vous pouvez nous aider ?",
            answer:
              "Absolument. On aime travailler avec des entreprises en région qui ont des projets concrets à réaliser. On s'adapte à votre contexte et à votre budget pour vous livrer quelque chose qui fait vraiment une différence.",
          },
          {
            id: 3,
            question: "C'est quoi la différence entre une application web et un logiciel sur mesure ?",
            answer:
              "Une application web s'utilise dans un navigateur, sans installation. Un logiciel sur mesure peut être un outil interne, un système de gestion, une API ou une application de bureau. On choisit la bonne approche selon ce que vous avez vraiment besoin de faire.",
          },
          {
            id: 4,
            question: "Quel est le coût d'un projet de développement logiciel ?",
            answer:
              "Un premier produit simple peut démarrer autour de **5 000 $**. Une plateforme plus complète se situe généralement entre **10 000 $ et 30 000 $**. On vous donne un estimé honnête et détaillé avant de commencer quoi que ce soit.",
          },
          {
            id: 5,
            question: "Comment est-ce qu'on commence ?",
            answer:
              "Un appel de 15 minutes, gratuit et sans engagement. On discute de votre projet, on répond à vos questions et on évalue si on peut vous aider. Simple.",
          },
        ]}
      />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
