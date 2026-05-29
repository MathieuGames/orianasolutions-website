import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import Breadcrumb from "@/components/shared/breadcrumb";
import FAQContent from "@/components/faq/faq-content";
import { faqSections } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | Oriana Solutions",
  description:
    "Tout ce que vous devez savoir avant de démarrer votre projet avec Oriana Solutions : délais, technologies, tarifs, processus et plus.",
  openGraph: {
    title: "FAQ — Questions fréquentes | Oriana Solutions",
    description:
      "Tout ce que vous devez savoir avant de démarrer votre projet avec Oriana Solutions.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((s) => s.items).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/\*\*/g, ""),
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
          <p className="text-black/50 text-base sm:text-lg max-w-lg">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>
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
