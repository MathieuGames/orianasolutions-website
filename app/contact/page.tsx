import type { Metadata } from "next";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import ContactSection from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contactez-nous | Oriana Solutions",
  description:
    "Discutez de votre projet avec notre équipe. Développement d'applications web, mobiles et SaaS à Montréal — répondons ensemble à vos questions.",
  openGraph: {
    title: "Contactez-nous | Oriana Solutions",
    description:
      "Parlez-nous de votre projet. Notre équipe basée à Montréal est disponible pour vous accompagner.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/contact",
  },
};

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
