import type { Metadata } from "next";
import ServicesHero from "@/components/service/hero-section";

export const metadata: Metadata = {
  title: "Nos services | Oriana Solutions",
  description:
    "Applications mobiles, web, SaaS et sites web sur mesure. Découvrez tous les services de développement logiciel d'Oriana Solutions à Montréal.",
  openGraph: {
    title: "Nos services | Oriana Solutions",
    description:
      "Applications mobiles iOS/Android, applications web & SaaS, sites web sur mesure — experts en développement logiciel à Montréal.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/services",
  },
};
import ServicesSection from "@/components/service/services-section";
import ProcessSection from "@/components/service/process-section";
import ServiceAboutSection from "@/components/service/about-section";
import ServiceFAQ from "@/components/service/faq-section";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Services" }]} />
        <AboutSectionMobileBlock
          title="Nos services"
          description="Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation IA sur mesure."
        />
      </div>

      <ServicesHero />

      <ServicesSection />

      <ProcessSection />

      <ServiceAboutSection />

      <ServiceFAQ
        title="Questions fréquentes"
        items={[
          {
            id: 1,
            question: "Quels types de projets développez-vous ?",
            answer:
              "On développe des applications mobiles iOS et Android, des applications web et plateformes SaaS, ainsi que des sites web sur mesure. Chaque projet est construit de zéro, sans template, selon vos besoins spécifiques.",
          },
          {
            id: 2,
            question: "Quelle technologie utilisez-vous pour vos projets ?",
            answer:
              "Pour les apps mobiles, on utilise React Native ou Flutter. Pour le web et les SaaS, on travaille avec Next.js, React et Node.js. Pour les sites web, on privilégie Next.js pour ses performances et son SEO natif. On choisit toujours la stack la mieux adaptée à votre projet.",
          },
          {
            id: 3,
            question: "Quels sont les délais et les coûts selon le type de projet ?",
            answer:
              "Un site web sur mesure : 3 à 6 semaines, à partir de 2 500 $. Une application web ou SaaS : 4 à 12 semaines, à partir de 5 000 $. Une application mobile : 6 à 16 semaines, à partir de 5 000 $. Les délais et prix varient selon la complexité et on vous fournit un devis détaillé dès le départ.",
          },
          {
            id: 4,
            question: "Comment se déroule le processus de développement ?",
            answer:
              "On commence par une session de découverte pour bien comprendre votre projet. Ensuite : maquettes UX/UI que vous validez, développement, tests rigoureux, puis déploiement. Vous êtes impliqué à chaque étape clé.",
          },
          {
            id: 5,
            question: "Offrez-vous de la maintenance après le lancement ?",
            answer:
              "Oui, pour tous nos services. On propose des plans de maintenance adaptés : mises à jour, ajustements, surveillance des performances et support technique. Votre produit reste performant, sécurisé et évolutif dans le temps.",
          },
        ]}
      />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
