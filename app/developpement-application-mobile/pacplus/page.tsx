import AboutSectionMobileBlock from "@/components/shared/about-section";
import Breadcrumb from "@/components/shared/breadcrumb";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import DynamicServiceSection from "@/components/service/dynamic-service-section";
import RealisationsSection from "@/components/case-study/realisation-section";
import AnimatedContent from "@/components/ui/animated-content";

export default function PacPlusPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb
          items={[
            { label: "Nos réalisations", href: "/realisations" },
            { label: "PacPlus" },
          ]}
        />
        {/* Mobile header */}
        <AboutSectionMobileBlock
          tag="Étude de cas"
          title="PacPlus"
          description="Application web de comparaison et commande d'épicerie en ligne."
        />
      </div>

      {/* Desktop header */}
      <Container className="w-full max-w-[90%]">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2} className="sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Étude de cas</Tag>
          <Typography variant="h2" className="text-center">
            Application web | PacPlus
          </Typography>
          <p className="text-center text-black/50 text-lg max-w-[600px] leading-relaxed -mt-2">
            Conception et développement d&apos;une application web complète permettant de comparer les prix d&apos;épicerie, sélectionner les meilleurs produits et commander en ligne. Authentification sécurisée, paiement Stripe et image de marque sur mesure.
          </p>
        </AnimatedContent>
      </Container>

      {/* Section 1 — Comparateur de prix */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Comparer les prix,<br />économiser à chaque commande</>}
          description="PacPlus est une application web qui permet aux utilisateurs de comparer les prix d'épicerie entre plusieurs grandes chaînes, de sélectionner automatiquement les produits au meilleur prix et de commander en ligne directement depuis la plateforme."
          image="/png/PACPLUS.png"
          reverse
          headingClassName="max-w-[400px]!"
        />
      </AnimatedContent>

      {/* Stats */}
      <AnimatedContent distance={30} duration={0.7} delay={0.1} threshold={0.2}>
        <Container className="sm:bg-primary-light w-full lg:mb-10">
          <div className="rounded-xl lg:py-8">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Épiceries intégrées", value: "Super C & Maxi" },
                { label: "Paiement en ligne", value: "Stripe" },
                { label: "Sécurité", value: "100% sécurisé" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-[#F1F7FF] rounded-lg p-6 flex flex-col gap-4"
                >
                  <p className="sm:text-sm text-xs 2xl:text-base uppercase text-black">
                    {stat.label}
                  </p>
                  <Typography variant="h3">{stat.value}</Typography>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedContent>

      {/* Section 2 — Authentification & sécurité */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Authentification<br />& serveurs sécurisés</>}
          description="Nous avons mis en place un système d'authentification robuste et des serveurs sécurisés pour protéger les données des utilisateurs et garantir la fiabilité de la plateforme à chaque utilisation."
          image="/png/authen1.png"
          headingClassName="max-w-[380px]!"
        />
      </AnimatedContent>

      {/* Section 3 — Image de marque & maquettes */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Image de marque,<br />logo & maquettes</>}
          description="Nous avons conçu l'identité visuelle complète de PacPlus : logo, charte graphique et toutes les maquettes UI/UX. Chaque écran a été pensé pour offrir une expérience simple, moderne et intuitive."
          image="/png/Logo pac.png"
          reverse
          headingClassName="max-w-[380px]!"
        />
      </AnimatedContent>

      {/* Section 4 — Paiement Stripe */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15} className="lg:mt-10">
        <DynamicServiceSection
          title={<>Système de paiement<br />Stripe intégré</>}
          description="Les utilisateurs peuvent finaliser leurs commandes directement depuis PacPlus grâce à une intégration Stripe sécurisée. Le processus de paiement est rapide, fiable et entièrement conforme aux standards de sécurité bancaire."
          image="/png/stripe.png"
          headingClassName="max-w-[380px]!"
        />
      </AnimatedContent>

      <RealisationsSection excludeHref="/developpement-application-mobile/pacplus" />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
