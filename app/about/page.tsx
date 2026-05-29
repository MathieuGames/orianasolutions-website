import type { Metadata } from "next";
import AboutHero from "@/components/about/hero-section";

export const metadata: Metadata = {
  title: "À propos | Oriana Solutions",
  description:
    "Découvrez Oriana Solutions : une jeune équipe montréalaise spécialisée en développement d'applications web, mobiles et SaaS sur mesure.",
  openGraph: {
    title: "À propos | Oriana Solutions",
    description:
      "Jeune équipe montréalaise spécialisée en développement logiciel — applications mobiles, web, SaaS et automatisation IA.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/about",
  },
};
import AboutHighlight from "@/components/about/highlight";
import AboutFAQ from "@/components/about/faq-section";
import History from "@/components/about/history";
import Mission from "@/components/about/mission";
import Team from "@/components/about/team";
import Values from "@/components/about/values";
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
        <Breadcrumb items={[{ label: "À propos" }]} />
        <AboutSectionMobileBlock
          tag="À propos de nous"
          title="À propos"
          description="On construit des applications mobiles, web et SaaS sur mesure pour des entrepreneurs et entreprises qui veulent aller plus loin."
        />
      </div>
      <AboutHero />
      <Mission />
      <Team />
      <AboutHighlight />
      <History />
      <Values />
      <AboutFAQ />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
