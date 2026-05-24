import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
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
          tag="Développement"
          title="Application web"
          description="De l'idée au lancement — nous concevons des applications web sur mesure, performantes et évolutives."
        />
      </div>
      <HeroSectionWeb />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
