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
import ServiceStats from "@/components/service/stats-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import ServiceFAQ from "@/components/service/faq-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Logiciel sur mesure pour PME | Automatisez vos opérations | Oriana Solutions",
  description:
    "On développe des logiciels sur mesure pour les PME locales. Remplacez vos tableurs Excel, vos processus papier et vos outils déconnectés par une solution pensée pour votre réalité.",
  openGraph: {
    title: "Logiciel sur mesure pour PME | Automatisez vos opérations | Oriana Solutions",
    description:
      "L'IA a rendu le logiciel sur mesure accessible aux PME. On livre des solutions en 6 semaines, à des prix que vous ne pensiez pas possibles.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/pme-locales",
  },
};

const faqItems = [
  {
    id: 1,
    question: "On est une petite entreprise. Est-ce que le logiciel sur mesure est vraiment pour nous ?",
    answer:
      "C'est exactement pour vous. Grâce à l'IA, on développe maintenant des logiciels sur mesure 5 à 10 fois plus rapidement. Ce qui coûtait 50 000 $ avant peut aujourd'hui être livré entre 8 000 $ et 20 000 $ selon la complexité. Les PME locales sont notre clientèle principale.",
  },
  {
    id: 2,
    question: "Combien de temps ça prend pour développer notre logiciel ?",
    answer:
      "Pour un logiciel qui remplace un processus manuel bien défini, on livre généralement en 4 à 8 semaines. On commence toujours par un MVP qui règle le problème principal, puis on ajoute des fonctionnalités selon vos priorités.",
  },
  {
    id: 3,
    question: "Qu'est-ce qu'il se passe si quelque chose ne fonctionne pas après le lancement ?",
    answer:
      "On offre un support post-lancement pour tous nos projets. Les bogues sont corrigés sans frais supplémentaires dans les 30 jours suivant la livraison. Pour les mises à jour et l'évolution du logiciel, on propose des ententes de maintenance flexibles.",
  },
  {
    id: 4,
    question: "Est-ce que notre équipe va pouvoir utiliser le logiciel sans formation technique ?",
    answer:
      "C'est notre priorité numéro un. On conçoit des interfaces simples, pensées pour des utilisateurs qui ne sont pas des techniciens. On inclut aussi une formation de démarrage pour s'assurer que tout le monde est à l'aise dès le lancement.",
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

const problemCards = [
  {
    titre: "Les tableurs qui prennent le contrôle",
    desc: "Votre fichier Excel a 12 onglets, 3 versions différentes en circulation, et personne n'est sûr de quelle version est la bonne. Une erreur de formule et des heures de travail disparaissent.",
    couleur: "bg-red-50 border-red-100",
  },
  {
    titre: "Les outils qui ne se parlent pas",
    desc: "Votre CRM ne parle pas à votre logiciel comptable. Votre outil de commandes ne parle pas à votre inventaire. Chaque mise à jour doit être faite deux fois, trois fois, à la main.",
    couleur: "bg-orange-50 border-orange-100",
  },
  {
    titre: "Les processus qui dépendent d'une personne",
    desc: "Si Marie est absente, personne ne sait comment faire les rapports de fin de semaine. Si Jean part, il emmène avec lui 3 ans de connaissances sur les procédures internes.",
    couleur: "bg-yellow-50 border-yellow-100",
  },
];

export default function PMELocalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "PME locales" }]} />

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
              <Tag>Pour les PME locales</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Fini les tableurs. Un logiciel fait pour votre PME.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                On remplace vos processus manuels par un logiciel qui travaille pour vous.<br className="hidden md:block" /> Accessible, rapide à déployer, conçu pour votre réalité.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Discutons de vos besoins
                </Button>
                <Button
                  variant="outline"
                  href="/calculateur-prix"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Calculer mon budget
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </Container>

      {/* Points de douleur */}
      <div className="bg-white border-b border-black/6">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-4">
            Les problèmes qu&apos;on entend le plus souvent
          </p>
          <h2 className="font-heading font-normal text-2xl md:text-3xl text-heading mb-10 max-w-[600px]">
            Si vous vous reconnaissez dans l&apos;un de ces scénarios, on peut vous aider.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemCards.map(({ titre, desc, couleur }) => (
              <div key={titre} className={`flex flex-col gap-3 p-6 rounded-xl border ${couleur}`}>
                <span className="font-heading font-normal text-lg text-heading">{titre}</span>
                <p className="text-sm text-black/60 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Section principale */}
      <DynamicServiceSection
        title="Un logiciel conçu pour comment votre équipe travaille vraiment."
        description="Les grands logiciels SaaS sont faits pour des entreprises de 200 personnes. Vous avez 8 employés et des processus très spécifiques à votre industrie. On développe un outil qui s'adapte à votre réalité, pas l'inverse. Vos employés adoptent le logiciel parce qu'il ressemble à leur façon de travailler, pas parce que c'est obligatoire."
        image="/png/service2.png"
        imageAlt="Logiciel sur mesure pour PME québécoises développé par Oriana Solutions"
        // image on right (default)
        headingVariant="h2"
      />

      {/* Stats */}
      <ServiceStats
        service={{
          id: 0,
          title: "",
          slug: "",
          description: "",
          image: "",
          downloads: "3×",
          downloadsLabel: "Productivité gagnée en moyenne",
          countries: "6 sem.",
          countriesLabel: "Délai de livraison moyen",
          awards: "100 %",
          awardsLabel: "Propriété du code",
        }}
      />

      {/* Réalisations */}
      <RealisationsSection />

      {/* FAQ */}
      <ServiceFAQ
        title={
          <>
            Ce que les PME nous demandent <br />
            <span className="sm:block hidden">avant de se lancer</span>
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
          <Link href="/logiciel-erp" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Logiciel ERP sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/automatisation-des-procedes" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Automatisation des procédés <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/logiciel-crm" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            CRM sur mesure <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
