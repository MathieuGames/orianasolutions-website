import ContactSection from "@/components/contact/contact-section";
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
      <div className="bg-primary-light md:bg-[#F8F9FB]">
        <Breadcrumb items={[{ label: "Contact" }]} />
        <AboutSectionMobileBlock
          tag="Nous joindre"
          title="Contactez-nous"
          description="On est là pour répondre à vos questions et discuter de votre projet."
        />
      </div>
      <ContactSection />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
