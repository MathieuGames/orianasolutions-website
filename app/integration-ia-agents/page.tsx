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
  title: "Intégration IA sur mesure & agents autonomes | Oriana Solutions",
  description:
    "On intègre l'IA dans vos processus d'affaires. Agents autonomes, systèmes RAG, automatisation documentaire et intégration de modèles de langage. Pas des chatbots. Des agents qui agissent.",
  openGraph: {
    title: "Intégration IA sur mesure & agents autonomes | Oriana Solutions",
    description:
      "L'IA qui fait vraiment quelque chose dans votre entreprise. Agents autonomes, RAG, traitement de documents et workflows intelligents. On comprend l'IA pour les affaires.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/integration-ia-agents",
  },
};

const faqItems = [
  {
    id: 1,
    question: "C'est quoi la différence entre un agent IA et un chatbot ?",
    answer:
      "Un chatbot répond à des questions. Un agent IA fait des choses. Un agent peut aller chercher de l'information dans plusieurs sources, décider de la prochaine action à poser, remplir un formulaire, envoyer un courriel, mettre à jour une base de données ou déclencher un processus. C'est la différence entre parler à quelqu'un et avoir quelqu'un qui travaille pour vous.",
  },
  {
    id: 2,
    question: "Est-ce que l'IA va avoir accès à nos données confidentielles ?",
    answer:
      "On conçoit nos intégrations avec la sécurité comme priorité. L'IA n'a accès qu'aux données dont elle a besoin pour accomplir sa tâche. Tout est hébergé dans votre infrastructure ou dans des environnements cloud sécurisés. On ne passe pas vos données à des modèles publics sans votre accord explicite.",
  },
  {
    id: 3,
    question: "Combien ça coûte d'intégrer l'IA dans nos opérations ?",
    answer:
      "Ça dépend de la complexité du cas d'usage. Une automatisation documentaire simple peut démarrer à 5 000 $. Un agent autonome qui gère un flux de travail complet se situe généralement entre 15 000 $ et 40 000 $. On commence toujours par identifier le cas d'usage avec le meilleur retour sur investissement pour vous.",
  },
  {
    id: 4,
    question: "L'IA peut-elle vraiment se tromper et causer des erreurs dans nos processus ?",
    answer:
      "Oui, et c'est pourquoi on conçoit toujours avec des mécanismes de validation humaine pour les décisions importantes. Un agent IA bien conçu a des garde-fous intégrés. Il sait quand escalader une décision à un humain. On ne remet jamais 100% du contrôle à un modèle sans supervision.",
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

const integrations = [
  {
    titre: "Agents autonomes",
    desc: "Des agents qui prennent des décisions, exécutent des actions et gèrent des flux de travail complexes sans intervention humaine constante. Pas un chatbot. Un collaborateur numérique qui fait vraiment le travail.",
  },
  {
    titre: "Systèmes RAG (Retrieval-Augmented Generation)",
    desc: "Connectez vos documents internes, vos manuels, vos procédures et vos données à un modèle de langage. Vos employés posent des questions, l'IA répond avec vos propres informations. Précis, sourcé, privé.",
  },
  {
    titre: "Automatisation documentaire",
    desc: "Extraction de données de factures, contrats, formulaires et rapports. Classification automatique, validation et intégration dans vos systèmes. Des heures de travail manuel éliminées.",
  },
  {
    titre: "Intégration de LLM dans vos logiciels",
    desc: "On intègre GPT-4, Claude, Gemini ou des modèles open source directement dans vos applications existantes. Analyse de texte, génération de contenu, résumés automatiques, détection d'anomalies.",
  },
];

const casUsage = [
  {
    titre: "Traitement des soumissions fournisseurs",
    desc: "Un agent lit les soumissions reçues par courriel, extrait les informations clés, les compare à vos critères et prépare un rapport de recommandation en quelques secondes.",
  },
  {
    titre: "Support client de niveau 1 automatisé",
    desc: "Un agent répond aux questions fréquentes en utilisant vos politiques et vos procédures. Il escalade à un humain uniquement pour les cas complexes. Disponible 24 heures sur 24, 7 jours sur 7.",
  },
  {
    titre: "Analyse de contrats et de documents légaux",
    desc: "Identifiez automatiquement les clauses importantes, les dates clés et les obligations contractuelles dans vos contrats. Fini les lectures manuelles de 50 pages.",
  },
];

export default function IntegrationIAAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-primary-light">
        <Breadcrumb items={[{ label: "Intégration IA et agents autonomes" }]} />
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
              <Tag>Intelligence artificielle</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                L&apos;IA qui fait quelque chose dans votre entreprise.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                Pas des chatbots. Des agents autonomes qui agissent, décident et s&apos;intègrent à vos systèmes.<br className="hidden md:block" /> On comprend l&apos;IA pour les affaires. Vraiment.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Explorer les possibilités
                </Button>
                <Button
                  variant="outline"
                  href="#ce-quon-integre"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Ce qu&apos;on intègre
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </Container>

      {/* Ce qu'on intègre */}
      <div className="bg-white border-b border-black/6" id="ce-quon-integre">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Ce qu&apos;on intègre
          </p>
          <div className="flex flex-col gap-6">
            {integrations.map(({ titre, desc }, idx) => (
              <div key={titre} className="flex items-start gap-6 p-6 bg-primary-light rounded-xl">
                <span className="text-xl font-heading text-black/20 shrink-0 w-8 text-right">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="font-heading font-normal text-lg text-heading">{titre}</span>
                  <p className="text-sm text-black/55 leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Section principale */}
      <DynamicServiceSection
        title="On ne vend pas du buzz IA. On livre des résultats mesurables."
        description="Beaucoup d'agences proposent de l'IA parce que c'est à la mode. On le fait parce qu'on comprend comment les modèles de langage fonctionnent, quelles sont leurs limites et comment les intégrer de façon fiable dans des processus d'affaires réels. On évalue d'abord si l'IA est vraiment la bonne solution pour votre problème. Si ce n'est pas le cas, on vous le dit. Si c'est le cas, on livre quelque chose qui fonctionne encore dans 18 mois."
        image="/png/integration-ia.jpg"
        imageAlt="Intégration d'agents IA autonomes dans des processus d'affaires au Québec"
        // image on right (default)
        headingVariant="h2"
      />

      {/* Cas d'usage */}
      <div className="bg-primary-light border-b border-black/6">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10">
            Cas d&apos;usage concrets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casUsage.map(({ titre, desc }) => (
              <div key={titre} className="bg-white rounded-xl p-6 flex flex-col gap-3 border border-black/6">
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
            <span className="sm:block hidden">sur l&apos;intégration IA en entreprise</span>
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
          <Link href="/automatisation-des-procedes" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Automatisation des procédés <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/startup-mvp-saas" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Partenaire technique pour startups <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/application-web" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Application web sur mesure <Arrow className="w-4 h-4" />
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
