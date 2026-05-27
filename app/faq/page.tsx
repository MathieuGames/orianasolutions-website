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

      {/* Hero */}
      <div className="relative overflow-hidden bg-primary-light">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-2xl pointer-events-none" />

        <Container className="relative py-16! md:py-24!">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
            Ressources
          </p>
          <h1 className="font-heading font-normal text-4xl sm:text-5xl xl:text-6xl text-heading leading-tight mb-5">
            Questions <span className="text-primary">fréquentes</span>
          </h1>
          <p className="text-black/50 text-base sm:text-lg max-w-lg mb-10">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-heading font-normal text-heading">20</span>
              <span className="text-xs text-black/40 uppercase tracking-wider">questions</span>
            </div>
            <div className="w-px h-10 bg-black/10" />
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-heading font-normal text-heading">4</span>
              <span className="text-xs text-black/40 uppercase tracking-wider">catégories</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <main className="w-full bg-[#F8F9FB]">
        <Container className="py-14! md:py-20!">
          <FAQContent />
        </Container>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
