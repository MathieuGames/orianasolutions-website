import { ServiceDetailPage } from "@/components/service/service-detail-page";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { servicesPage } from "@/data/servicesPage";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: Params) {
  const { slug } = await params;

  const service = servicesPage.find((s) => s.slug === slug);

  if (!service) {
    return <div className="py-20 text-center">Service non trouvé</div>;
  }

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Nos réalisations", href: "/realisations" }, { label: service.title }]} />
        <AboutSectionMobileBlock
          tag="Étude de cas"
          title="Quietnest"
          description="Développement d'une application mobile sur mesure"
          icon="/svg/app-icon.svg"
        />
      </div>
      <ServiceDetailPage service={service} />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
