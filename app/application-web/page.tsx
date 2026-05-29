import type { Metadata } from "next";
import AboutSectionMobileBlock from "@/components/shared/about-section";

export const metadata: Metadata = {
  title: "Développement d'application web & SaaS | Oriana Solutions",
  description:
    "Nous développons des applications web et plateformes SaaS performantes, sécurisées et évolutives avec Next.js, React et .NET — basés à Montréal.",
  openGraph: {
    title: "Développement d'application web & SaaS | Oriana Solutions",
    description:
      "Plateformes web et SaaS sur mesure — Next.js, React, .NET, déploiement cloud Azure.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/application-web",
  },
};
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import CalculatorBanner from "@/components/shared/calculator-banner";
import Navbar from "@/components/shared/navbar";
import { HeroSectionWeb } from "@/components/application-web/hero-section";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Application web" }]} />
        <AboutSectionMobileBlock
          tag="Service"
          title="Développement d'application web"
          description="Des plateformes web performantes, scalables et taillées pour votre croissance."
        />
      </div>
      <HeroSectionWeb />
      <div id="contact">
        <CalculatorBanner />
        <Footer />
      </div>
    </>
  );
}
