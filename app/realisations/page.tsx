import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import RealisationsFilter from "@/components/realisations/realisations-filter";

export const metadata: Metadata = {
  title: "Nos réalisations | Oriana Solutions",
  description:
    "Découvrez nos projets : applications mobiles, plateformes web, SaaS et sites web sur mesure réalisés pour des entrepreneurs et entreprises au Québec.",
  openGraph: {
    title: "Nos réalisations | Oriana Solutions",
    description:
      "Applications mobiles, web et sites sur mesure — découvrez notre portfolio de projets réalisés.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app/realisations",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Nos réalisations" }]} />
      <main className="w-full px-6 sm:px-16 xl:px-25 2xl:px-35 py-14 md:py-20 max-w-[1980px] mx-auto">
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
            Nos projets
          </p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-heading leading-tight mb-8">
            Découvrez une sélection<br />
            de nos réalisations
          </h1>
        </div>

        <RealisationsFilter />
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
