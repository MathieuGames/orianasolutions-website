import DynamicServiceSection from "@/components/service/dynamic-service-section";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import RealisationsSection from "@/components/case-study/realisation-section";
import ServiceFAQ from "@/components/service/faq-section";
import ProcessSection from "@/components/service/process-section";
import WhyUsSection from "@/components/service/why-us-section";
import LogosMarquee from "@/components/ui/logos-marquee";

export const HeroSectionSite = () => {
  return (
    <>
      <Container className="w-full max-w-[90%]">
        <div className="sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Services</Tag>
          <Typography variant="h2" className="text-center">
            Développement de site web sur mesure
          </Typography>
          <p className="text-base md:text-lg text-black/50 text-center max-w-xl">
            Des sites web modernes, rapides et optimisés SEO, conçus pour convertir.
          </p>
        </div>
      </Container>

      <DynamicServiceSection
        title="Votre site web, pensé pour convertir"
        description="Un site web sur mesure, c'est bien plus qu'un design. On conçoit chaque page pour guider vos visiteurs vers l'action, avec une expérience fluide sur tous les appareils."
        image="/png/service3.png"
        reverse
      />

      <DynamicServiceSection
        title="Design, développement et mise en ligne"
        description="Maquettes, développement sur mesure, optimisation des performances et référencement naturel. On livre un site prêt à performer dès le premier jour."
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
              <span className="sm:block hidden">sur les sites web sur mesure</span>
            </>
          }
          items={[
            {
              id: 1,
              question: "Quelle technologie utilisez-vous pour créer des sites web ?",
              answer: "On développe avec Next.js et React pour des sites rapides, optimisés SEO et faciles à maintenir. Chaque site est conçu sur mesure — aucun template générique.",
            },
            {
              id: 2,
              question: "Combien de temps faut-il pour créer un site web sur mesure ?",
              answer: "Un site vitrine prend généralement 3 à 6 semaines. Un site plus complexe avec des fonctionnalités avancées peut prendre 6 à 12 semaines selon l'étendue du projet.",
            },
            {
              id: 3,
              question: "Combien coûte un site web sur mesure ?",
              answer: "Les prix débutent autour de 2 500 $ pour un site vitrine simple et varient selon la complexité, le nombre de pages et les intégrations requises. On vous fournit un devis détaillé dès le départ.",
            },
            {
              id: 4,
              question: "L'optimisation SEO est-elle incluse ?",
              answer: "Oui, chaque site est livré avec une base SEO solide : balises optimisées, structure sémantique, vitesse de chargement et compatibilité mobile. On peut aussi proposer une stratégie de contenu avancée.",
            },
            {
              id: 5,
              question: "Offrez-vous de la maintenance après le lancement ?",
              answer: "Oui, on propose des plans de maintenance pour les mises à jour, les ajustements de contenu et le support technique afin que votre site reste performant et sécurisé dans le temps.",
            },
          ]}
        />
      </div>
    </>
  );
};
