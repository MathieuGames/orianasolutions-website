import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Oriana Solutions | Développement d'applications web et mobiles à Montréal",
  description:
    "Oriana Solutions — agence de développement logiciel à Montréal. Applications mobiles iOS/Android, web, SaaS et sites web sur mesure pour entrepreneurs et entreprises.",
  openGraph: {
    title: "Oriana Solutions | Développement d'applications web et mobiles à Montréal",
    description:
      "Agence de développement logiciel à Montréal spécialisée en applications mobiles, web, SaaS et sites web sur mesure.",
    url: "https://orianasolutions.com",
  },
};
import HeroSection from "@/components/home/hero-section";
import Experties from "@/components/home/experties";
import ServicesSection from "@/components/home/services-section";
import RealisationsSection from "@/components/home/realisations-section";
import About from "@/components/home/about";
import AboutSection from "@/components/home/about-section";
import Testimonial from "@/components/home/testimonial";
import FAQHome from "@/components/home/faq-home";
import Footer from "@/components/shared/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import FloatingCTA from "@/components/ui/floating-cta";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <Testimonial />
        <div id="a-propos">
          <Experties />
        </div>
        <div id="services">
          <About />
          <ServicesSection />
        </div>
        <div id="realisations">
          <RealisationsSection />
        </div>
        <AboutSection />
        <FAQHome />
        <div id="contact">
          <Footer />
        </div>
      </div>
      <ScrollToTop />
      <FloatingCTA />
    </>
  );
}
