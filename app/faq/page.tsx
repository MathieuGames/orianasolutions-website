import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import Breadcrumb from "@/components/shared/breadcrumb";
import FAQContent from "@/components/faq/faq-content";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | Oriana Solutions",
  description:
    "Tout ce que vous devez savoir avant de démarrer votre projet avec Oriana Solutions : délais, technologies, tarifs, processus et plus.",
  openGraph: {
    title: "FAQ — Questions fréquentes | Oriana Solutions",
    description:
      "Tout ce que vous devez savoir avant de démarrer votre projet avec Oriana Solutions.",
    url: "https://orianasolutions.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "FAQ" }]} />

      <main className="w-full bg-[#F8F9FB] min-h-screen">
        {/* Hero */}
        <div className="bg-white border-b border-black/6">
          <Container className="py-12! md:py-20!">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Ressources
            </p>
            <h1 className="font-heading font-normal text-4xl sm:text-5xl xl:text-6xl text-heading leading-tight mb-4">
              Questions fréquentes
            </h1>
            <p className="text-black/50 text-base max-w-md">
              Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
            </p>
          </Container>
        </div>

        {/* FAQ sections */}
        <Container className="py-12! md:py-16!">
          <FAQContent />
        </Container>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
