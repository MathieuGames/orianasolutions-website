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
  title: "Développement logiciel à Longueuil — Application web, SaaS & logiciel sur mesure | Oriana Solutions",
  description:
    "Programmeurs et développeurs à Longueuil. On conçoit des applications web, des logiciels sur mesure et des plateformes SaaS pour les startups, OBNL et PME de Longueuil et de la Rive-Sud.",
  openGraph: {
    title: "Développement logiciel à Longueuil | Oriana Solutions",
    description:
      "Développeurs à Longueuil spécialisés en application web, SaaS et logiciel sur mesure pour startups, OBNL et PME de la Rive-Sud.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/developpement-logiciel-longueuil",
  },
};

const clients = [
  {
    label: "Startups",
    description:
      "Vous avez un projet et vous voulez avancer vite ? On vous aide à bâtir un MVP fonctionnel, testé et prêt à évoluer.",
  },
  {
    label: "PME",
    description:
      "Portail client, outil interne, plateforme sur mesure. On prend en charge tout le volet technologique pour que vous puissiez vous concentrer sur votre cœur de métier.",
  },
  {
    label: "OBNL",
    description:
      "On comprend les réalités des organismes à but non lucratif. Budget limité ne veut pas dire solution au rabais.",
  },
];

export default function LongueuilPage() {
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
              <Tag>Développement logiciel · Longueuil, Rive-Sud</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Des développeurs à Longueuil pour votre prochain projet numérique.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Startup, OBNL ou PME de la Rive-Sud, on conçoit des applications web,<br className="hidden md:block" /> des logiciels sur mesure et des plateformes SaaS.
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
        title="On code. Mais on pense business en premier."
        description="On ne se lance pas dans le développement avant d'avoir bien cerné votre situation. Vos clients, vos opérations, vos contraintes budgétaires. C'est ce travail en amont qui fait la différence entre un logiciel qu'on utilise tous les jours et un projet qui prend la poussière."
        image="/png/service2.png"
        reverse
        priority
      />

      <DynamicServiceSection
        title="De la première maquette au déploiement final."
        description="Design, développement, tests, mise en ligne. Nos programmeurs s'occupent de chaque étape du projet. Vous gardez une visibilité complète sur l'avancement sans avoir à gérer les détails techniques."
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
            <span className="sm:block hidden">sur le développement logiciel à Longueuil</span>
          </>
        }
        items={[
          {
            id: 1,
            question: "Vous travaillez avec des entreprises de Longueuil et de la Rive-Sud ?",
            answer:
              "Oui. On intervient à Longueuil, Brossard, Saint-Hubert et partout sur la Rive-Sud. Les rencontres peuvent se faire en personne ou à distance selon ce qui vous convient.",
          },
          {
            id: 2,
            question: "On a un budget serré. Vous pouvez quand même nous aider ?",
            answer:
              "Oui. On travaille souvent avec des PME et des OBNL qui ont des contraintes budgétaires réelles. L'important, c'est de bien prioriser. On commence par ce qui a le plus d'impact et on construit ensuite selon votre rythme.",
          },
          {
            id: 3,
            question: "Quelle est la différence entre une application web et un logiciel sur mesure ?",
            answer:
              "Une application web fonctionne dans un navigateur, sans installation. Un logiciel sur mesure peut prendre plusieurs formes : outil interne, application de bureau, API, système de gestion. Dans les deux cas, on adapte la solution à vos besoins réels.",
          },
          {
            id: 4,
            question: "Combien ça coûte de développer une application ou un logiciel ?",
            answer:
              "Un MVP simple peut démarrer autour de **5 000 $**. Une plateforme plus complète se situe généralement entre **10 000 $ et 30 000 $**. On vous donne un devis clair et détaillé dès le départ, sans surprises.",
          },
          {
            id: 5,
            question: "Comment débuter avec vous ?",
            answer:
              "On commence par un appel de 15 minutes, gratuit et sans obligation. On prend le temps de comprendre votre projet, on répond à vos questions et on voit ensemble si on est le bon partenaire pour vous.",
          },
        ]}
      />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
