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
import ServiceFAQ from "@/components/service/faq-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Arrow } from "@/svgs";

export const metadata: Metadata = {
  title: "Partenaire technique pour Startup | MVP & SaaS | Oriana Solutions",
  description:
    "On devient le partenaire technique de votre startup. Développement de MVP, produits SaaS, itération rapide et IA assistée pour réduire les coûts. Pour les fondateurs sans CTO.",
  openGraph: {
    title: "Partenaire technique pour Startup | MVP & SaaS | Oriana Solutions",
    description:
      "Votre startup a une idée. On a l'équipe pour la construire. MVP rapide, SaaS évolutif, propriété du code à 100%. Pour les fondateurs qui veulent avancer vite.",
    url: "https://orianasolutions.com/startup-mvp-saas",
  },
};

const faqItems = [
  {
    id: 1,
    question: "On n'a pas de CTO. Comment vous intégrez-vous dans notre équipe ?",
    answer:
      "On prend le rôle de partenaire technique au complet. On fait les choix d'architecture, on gère le développement et on vous explique chaque décision en termes clairs. Vous n'avez pas besoin de comprendre le code pour prendre de bonnes décisions sur votre produit.",
  },
  {
    id: 2,
    question: "À qui appartient le code après le projet ?",
    answer:
      "Le code vous appartient à 100%. Dès le premier jour, on travaille dans votre repository. Quand le projet se termine, vous avez accès à tout : code source, documentation, configurations. Aucune dépendance envers nous si vous décidez de changer de partenaire.",
  },
  {
    id: 3,
    question: "Combien de temps pour avoir un MVP fonctionnel ?",
    answer:
      "Pour un MVP ciblé avec 3 à 5 fonctionnalités clés, on livre généralement en 6 à 10 semaines. L'IA nous permet d'aller beaucoup plus vite que les agences traditionnelles. On priorise ce qui valide votre hypothèse de marché, pas ce qui est impressionnant techniquement.",
  },
  {
    id: 4,
    question: "Comment gérez-vous les pivots et les changements de direction ?",
    answer:
      "C'est la nature d'une startup. On travaille en sprints courts de 2 semaines pour que les changements de priorité aient un impact minimal. Si vous pivotez, on s'adapte. On évite aussi de sur-construire au départ pour que les changements restent peu coûteux.",
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

const etapesMVP = [
  {
    num: "01",
    titre: "Analyse et priorisation",
    desc: "On identifie les 3 fonctionnalités qui valident votre hypothèse. Tout le reste attend la phase 2.",
  },
  {
    num: "02",
    titre: "Architecture et stack technique",
    desc: "On choisit les technologies en fonction de votre roadmap, pas de nos préférences. Évolutivité dès le départ.",
  },
  {
    num: "03",
    titre: "Développement par itérations",
    desc: "Des livrables fonctionnels toutes les deux semaines. Vous voyez le produit se construire en temps réel.",
  },
  {
    num: "04",
    titre: "Tests utilisateurs et ajustements",
    desc: "On intègre les retours de vos premiers utilisateurs directement dans le cycle de développement.",
  },
];

export default function StartupMVPSaaSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Startup & MVP SaaS" }]} />

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
              <Tag>Pour les fondateurs</Tag>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.2}>
              <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
                Votre partenaire technique. De l&apos;idée au produit qui se vend.
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={0} duration={0.7} delay={0.35}>
              <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
                MVP rapide, SaaS évolutif, code 100% à vous.<br className="hidden md:block" /> Pour les fondateurs qui veulent valider vite sans brûler leur runway.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
              <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
                <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">
                  Parler de votre projet
                </Button>
                <Button
                  variant="outline"
                  href="#approche"
                  className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                  icon={<Arrow />}
                >
                  Notre approche MVP
                </Button>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </Container>

      {/* Ce qu'on fait en phase MVP */}
      <div className="bg-white border-b border-black/6" id="approche">
        <Container className="py-14! md:py-20!">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/35">
                Ce qu&apos;on fait en phase MVP
              </p>
              <h2 className="font-heading font-normal text-3xl md:text-4xl text-heading leading-tight">
                On construit ce qui valide, pas ce qui impressionne.
              </h2>
              <p className="text-base text-black/60 leading-7">
                Trop de startups dépensent 6 mois et 80 000 $ pour construire un produit que personne n&apos;utilise. On fait le contraire. On identifie les 3 fonctionnalités qui testent votre hypothèse, on les livre rapidement, et on ajuste selon les retours réels.
              </p>
              <p className="text-base text-black/60 leading-7">
                L&apos;IA réduit nos coûts de développement de 60 à 70%. On vous transfère ces économies directement. Un MVP qui aurait coûté 50 000 $ il y a deux ans coûte aujourd&apos;hui 15 000 $ à 25 000 $.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {etapesMVP.map(({ num, titre, desc }) => (
                <div key={num} className="flex items-start gap-5 p-5 bg-primary-light rounded-xl">
                  <span className="text-sm font-heading text-black/30 shrink-0 mt-0.5">{num}</span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-heading font-normal text-base text-heading">{titre}</span>
                    <p className="text-sm text-black/55 leading-6">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Section principale */}
      <DynamicServiceSection
        title="De la validation au SaaS qui scale."
        description="Un MVP, c'est un point de départ. La vraie question, c'est : est-ce que votre architecture peut supporter 10 000 utilisateurs si ça décolle ? On conçoit votre produit pour qu'il soit solide dès le départ sans sur-construire. Quand vos métriques prouvent la traction, on est déjà prêts pour la prochaine phase. Pas besoin de tout réécrire."
        image="/png/service1-3.png"
        imageAlt="Développement de produit SaaS pour startups québécoises"
        // image on right (default)
        headingVariant="h2"
      />

      {/* Notre engagement */}
      <div className="bg-primary-light border-b border-black/6">
        <Container className="py-14! md:py-18!">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-10 text-center md:text-left">
            Notre engagement envers les fondateurs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titre: "Transparence totale",
                desc: "Vous avez accès au code, aux outils de gestion et aux décisions techniques en tout temps. Aucune boîte noire. Si quelque chose prend plus de temps que prévu, vous le savez avant nous.",
              },
              {
                titre: "Coûts prévisibles",
                desc: "On travaille avec des budgets fixes par phase, pas des factures à l'heure. Vous savez exactement ce que chaque étape coûte avant qu'on commence.",
              },
              {
                titre: "Propriété complète",
                desc: "Le code, les données, les domaines et les comptes cloud sont à votre nom dès le premier jour. Vous n'êtes jamais otage de notre relation.",
              },
            ].map(({ titre, desc }) => (
              <div key={titre} className="flex flex-col gap-3 pt-6 border-t border-black/10">
                <span className="font-heading font-normal text-xl text-heading">{titre}</span>
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
            Questions des fondateurs <br />
            <span className="sm:block hidden">sur notre partenariat technique</span>
          </>
        }
        items={faqItems}
      />

      {/* Cross-sell : SalesPitch */}
      <Container className="py-10! md:py-14!">
        <div className="rounded-2xl bg-primary-light border border-primary/15 p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">Outil créé par Oriana</span>
            <h2 className="font-heading font-normal text-2xl text-heading leading-snug">
              Bâtissez votre processus de vente dès le départ.
            </h2>
            <p className="text-sm text-black/55 leading-7">
              Les startups qui réussissent ne vendent pas à l&apos;improviste. SalesPitch vous aide à structurer un discours de vente répétable pour convertir vos premiers clients et aligner toute votre équipe sur le même message.
            </p>
            <Link
              href="https://www.usesalespitch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity w-fit mt-1"
            >
              Essayer SalesPitch <Arrow className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-3 bg-white rounded-xl border border-black/8 px-6 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/35">Pourquoi dès le MVP</p>
            {[
              "Un pitch testé dès les premiers appels",
              "Objections anticipées et préparées",
              "Message cohérent entre cofondateurs",
            ].map((p) => (
              <div key={p} className="flex items-start gap-2.5 text-sm text-black/60">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA bar */}
      <div className="bg-primary-light border-t border-black/6">
        <Container className="py-12! md:py-16!">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="font-heading font-normal text-2xl md:text-3xl text-heading">
                Prêt à construire votre MVP ?
              </h2>
              <p className="text-sm text-black/55">Un appel de 30 minutes suffit pour voir si on est le bon fit.</p>
            </div>
            <Button href="/contact" className="shrink-0">
              Réserver un appel gratuit
            </Button>
          </div>
        </Container>
      </div>

      {/* Liens internes */}
      <Container className="py-10! md:py-14!">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/35 mb-8">
          Vous pourriez aussi aimer
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/application-web" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Application web sur mesure <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/integration-ia-agents" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Intégration IA et agents <Arrow className="w-4 h-4" />
          </Link>
          <Link href="/developpement-application-mobile" className="inline-flex items-center gap-2 text-sm font-medium text-heading border border-black/10 rounded-full px-5 py-2.5 hover:border-black/30 transition-colors">
            Application mobile <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </Container>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
