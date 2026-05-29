import type { Metadata } from "next";
import AboutSectionMobileBlock from "@/components/shared/about-section";

export const metadata: Metadata = {
  title: "Développement d'application mobile iOS & Android | Oriana Solutions",
  description:
    "Applications mobiles iOS et Android sur mesure avec React Native et Flutter. De la conception au déploiement sur l'App Store et Google Play — Montréal.",
  openGraph: {
    title: "Développement d'application mobile iOS & Android | Oriana Solutions",
    description:
      "Apps iOS et Android sur mesure avec React Native ou Flutter, de la conception au déploiement.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/developpement-application-mobile",
  },
};
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import CalculatorBanner from "@/components/shared/calculator-banner";
import Navbar from "@/components/shared/navbar";
import { HeroSection } from "@/components/case-study/hero-section";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Application mobile" }]} />
        <AboutSectionMobileBlock
          tag="Service"
          title="Développement d'application mobile"
          description="De l'idée au lancement, on construit l'app qu'il vous faut."
        />
      </div>
      <HeroSection />
      <div id="contact">
        <CalculatorBanner />
        <Footer />
      </div>
    </>
  );
}
