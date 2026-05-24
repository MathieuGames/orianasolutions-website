import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import ServiceStats from "@/components/service/stats-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import AnimatedContent from "@/components/ui/animated-content";

const service = {
  id: 1,
  title: "Application mobile",
  slug: "quietnest",
  description: "Application mobile conçue et développée de A à Z.",
  image: "/png/real2-quietnest.png",
  downloads: "5 000+",
  countries: "22+ pays",
  awards: "#1 National",
};

export default function QuietnestPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb
          items={[
            { label: "Nos réalisations", href: "/realisations" },
            { label: "Quietnest" },
          ]}
        />
        <AboutSectionMobileBlock
          tag="Étude de cas"
          title="Quietnest"
          description="Application mobile conçue et développée de A à Z, primée #1 à l'échelle nationale."
          icon="/svg/app-icon.svg"
        />
      </div>

      {/* Desktop header */}
      <Container className="w-full max-w-[90%]">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2} className="sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Étude de cas</Tag>
          <Typography variant="h2" className="text-center">
            Application mobile | Quietnest
          </Typography>
          <p className="text-center text-black/50 text-lg max-w-[600px] leading-relaxed -mt-2">
            Conception et développement d&apos;une application mobile de A à Z. Primée #1 à l&apos;échelle nationale à Ose Entreprendre, présentée dans plus de 22 pays et téléchargée par plusieurs milliers d&apos;utilisateurs.
          </p>
        </AnimatedContent>
      </Container>

      {/* Section 1 */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>De l&apos;idée<br />au lancement</>}
          description="Nous avons pris en charge l'intégralité du projet Quietnest : conception UX/UI, développement iOS et Android, tests et déploiement sur l'App Store et Google Play. Chaque écran a été pensé pour offrir une expérience fluide et intuitive."
          image="/png/service1-1.png"
          reverse
          headingClassName="max-w-[350px]!"
        />
      </AnimatedContent>

      {/* Section 2 */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Une expérience<br />utilisateur soignée</>}
          description="Chaque détail de l'interface a été conçu pour maximiser l'engagement. Design moderne, navigation fluide et performance optimisée : Quietnest offre une expérience mobile qui se démarque et fidélise ses utilisateurs."
          image="/png/service1-2.png"
          headingClassName="max-w-[350px]!"
        />
      </AnimatedContent>

      {/* Stats */}
      <AnimatedContent distance={30} duration={0.7} delay={0.1} threshold={0.2}>
        <ServiceStats service={service} />
      </AnimatedContent>

      {/* Section 3 */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Prix #1 national<br />Ose Entreprendre</>}
          description="Quietnest a remporté la première place à l'échelle nationale lors du concours Ose Entreprendre, l'un des plus prestigieux concours d'entrepreneuriat au Canada. Une reconnaissance qui confirme la qualité et l'impact de l'application."
          image="/png/service1-4.png"
          icon="/svg/app-icon.svg"
          reverse
          headingClassName="max-w-[400px]!"
        />
      </AnimatedContent>

      {/* Section 4 */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15} className="lg:mt-10">
        <DynamicServiceSection
          title={<>Présente dans<br />plus de 22 pays</>}
          description="Depuis son lancement, Quietnest a été téléchargée et utilisée dans plus de 22 pays à travers le monde. Une portée internationale qui témoigne de l'universalité de l'expérience proposée et de la qualité du produit livré."
          image="/png/Création sans titre(5).png"
          headingClassName="max-w-[350px]!"
        />
      </AnimatedContent>

      <RealisationsSection excludeHref="/developpement-application-mobile/quietnest" />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
