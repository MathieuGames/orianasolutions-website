import DynamicServiceSection from "@/components/service/dynamic-service-section";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import RealisationsSection from "@/components/case-study/realisation-section";
import ServiceFAQ from "@/components/service/faq-section";
import ProcessSection from "@/components/service/process-section";
import WhyUsSection from "@/components/service/why-us-section";
import LogosMarquee from "@/components/ui/logos-marquee";

export const HeroSectionWeb = () => {
  return (
    <>
      <Container className="w-full max-w-[90%]">
        <div className="flex flex-col items-center gap-6 pt-10">
          <Tag>Service</Tag>
          <Typography variant="h2" className="text-center">
            Développement d&apos;application web
          </Typography>
          <p className="text-base md:text-lg text-black/50 text-center max-w-xl">
            Des plateformes web performantes, scalables et taillées pour votre croissance.
          </p>
        </div>
      </Container>

      <DynamicServiceSection
        title="Votre plateforme web, pensée pour vos utilisateurs"
        description="Une bonne application web, c'est d'abord une expérience fluide et rapide. On conçoit chaque interface en gardant l'utilisateur au centre, puis on développe avec des technologies modernes et évolutives."
        image="/png/service2.png"
        reverse
        priority
      />

      <DynamicServiceSection
        title="Du design au déploiement, on gère tout"
        description="Architecture back-end, API, authentification, base de données, hébergement cloud. Notre équipe prend en charge chaque étape pour que vous puissiez vous concentrer sur votre business."
        image="/png/real5.png"
        parentStyle="bg-primary-light"
        className="pt-20"
      />

      <ProcessSection />
      <WhyUsSection />
      <RealisationsSection />

      <LogosMarquee />

      <div>
        <ServiceFAQ
          title={
            <>
              Questions fréquentes <br />
              <span className="sm:block hidden">sur les applications web</span>
            </>
          }
          items={[
            {
              id: 1,
              question: "Quelle technologie utilisez-vous pour développer des applications web ?",
              answer: "On travaille principalement avec React, Next.js et Node.js. On choisit la stack selon vos besoins : performance, scalabilité, intégrations spécifiques. On privilégie des technologies modernes et éprouvées.",
            },
            {
              id: 2,
              question: "Combien de temps faut-il pour développer une application web ?",
              answer: "Un MVP simple prend généralement 4 à 8 semaines. Une plateforme complète avec back-end, authentification et fonctionnalités avancées peut prendre 2 à 5 mois selon la complexité du projet.",
            },
            {
              id: 3,
              question: "Combien coûte le développement d'une application web ?",
              answer: "Les prix débutent autour de 5 000 $ pour une application simple et peuvent aller jusqu'à 50 000 $+ pour une plateforme complexe. On établit un devis détaillé après avoir bien compris votre projet.",
            },
            {
              id: 4,
              question: "Pouvez-vous intégrer des paiements en ligne et des APIs tierces ?",
              answer: "Oui, on intègre Stripe, PayPal et d'autres passerelles de paiement. On connecte aussi des APIs tierces (CRM, ERP, outils marketing, etc.) selon vos besoins métier.",
            },
            {
              id: 5,
              question: "Offrez-vous de la maintenance après le lancement ?",
              answer: "Oui, on propose des plans de maintenance adaptés pour les mises à jour, la surveillance des performances et le support technique afin que votre application reste stable et sécurisée.",
            },
          ]}
        />
      </div>
    </>
  );
};
