import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
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
          tag="Développement"
          title="Application mobile"
          description="De l'idée au lancement — nous concevons des applications mobiles sur mesure, performantes et évolutives."
        />
      </div>
      <HeroSection />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
