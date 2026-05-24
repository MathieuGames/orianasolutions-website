import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
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
        <Footer />
      </div>
    </>
  );
}
