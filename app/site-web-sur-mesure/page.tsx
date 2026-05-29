import type { Metadata } from "next";
import AboutSectionMobileBlock from "@/components/shared/about-section";

export const metadata: Metadata = {
  title: "Création de site web sur mesure à Montréal | Oriana Solutions",
  description:
    "Sites web sur mesure rapides, SEO-optimisés et 100 % responsives. Design moderne et développement Next.js par notre équipe basée à Montréal.",
  openGraph: {
    title: "Création de site web sur mesure à Montréal | Oriana Solutions",
    description:
      "Sites web sur mesure performants et optimisés SEO — design moderne, Next.js, 100 % responsive.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/site-web-sur-mesure",
  },
};
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import CalculatorBanner from "@/components/shared/calculator-banner";
import Navbar from "@/components/shared/navbar";
import { HeroSectionSite } from "@/components/site-web-sur-mesure/hero-section";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Site web sur mesure" }]} />
        <AboutSectionMobileBlock
          tag="Développement"
          title="Site web sur mesure"
          description="De l'idée au lancement — nous concevons des sites web sur mesure, performants et évolutifs."
        />
      </div>
      <HeroSectionSite />
      <div id="contact">
        <CalculatorBanner />
        <Footer />
      </div>
    </>
  );
}
