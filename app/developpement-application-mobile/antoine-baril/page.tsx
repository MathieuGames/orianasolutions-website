"use client";

import { useState } from "react";
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
import Image from "next/image";

const service = {
  id: 99,
  title: "Site web",
  slug: "antoine-baril",
  description: "Conception et développement d'un site web sur mesure.",
  image: "/png/Antoine.png",
  downloads: "2 mois",
  countries: "3",
  awards: "98 / 100",
  downloadsLabel: "Délai de livraison",
  countriesLabel: "Intégrations sur mesure",
  awardsLabel: "Score performance",
};

const features = [
  {
    title: "Intégration Centris",
    description: "Propriétés affichées en temps réel, synchronisées avec sa fiche Centris.",
    image: "/png/centris.png",
  },
  {
    title: "Calculateur hypothécaire",
    description: "Outil interactif permettant d'estimer les paiements directement sur le site.",
    image: "/png/hypi.png",
  },
  {
    title: "Avis Google intégrés",
    description: "Les avis de sa page Google My Business s'affichent automatiquement.",
    image: "/png/avis.png",
  },
];

export default function AntoineBarilPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Nos réalisations", href: "/realisations" }, { label: "Antoine Baril" }]} />
        <AboutSectionMobileBlock
          tag="Étude de cas"
          title="Antoine Baril"
          description="Site web sur mesure pour un courtier immobilier classé dans le top 10 individuel chez Proprio Direct."
        />
      </div>

      {/* Desktop header */}
      <Container className="w-full max-w-[90%]">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2} className="sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Étude de cas</Tag>
          <Typography variant="h2" className="text-center">
            Site web | Antoine Baril
          </Typography>
          <p className="text-center text-black/50 text-lg max-w-[600px] leading-relaxed -mt-2">
            Conception et développement d&apos;un site web sur mesure pour Antoine Baril, courtier immobilier classé dans le top 10 individuel chez Proprio Direct. Intégration Centris, calculateur hypothécaire et avis Google, tout pensé pour convertir les visiteurs en clients.
          </p>
        </AnimatedContent>
      </Container>

      {/* Section 1 — Photo + intro */}
      <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.15}>
        <DynamicServiceSection
          title={<>Un site web à<br />son image</>}
          description="Nous avons conçu et développé un site web entièrement personnalisé pour Antoine Baril, courtier immobilier classé dans le top 10 individuel chez Proprio Direct. Le site reflète son identité professionnelle et est optimisé pour convertir les visiteurs en clients."
          image="/png/Antoine.png"
          reverse
          headingClassName="max-w-[350px]!"
        />
      </AnimatedContent>

      {/* Stats */}
      <AnimatedContent distance={30} duration={0.7} delay={0.1} threshold={0.2}>
        <ServiceStats service={service} />
      </AnimatedContent>

      {/* Ce qu'on a livré — image principale + liste */}
      <AnimatedContent distance={40} duration={0.8} delay={0.1} threshold={0.1}>
        <Container className="w-full max-w-[90%]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center">
              <Typography variant="h3">Ce qu&apos;on a livré</Typography>
              <p className="text-black/50 text-base max-w-[480px] mx-auto">
                Trois intégrations sur mesure pensées pour maximiser l&apos;expérience client et la conversion.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Image principale — change selon le hover */}
              <div className="lg:w-1/2 rounded-3xl overflow-hidden bg-[#F8F8F8] min-h-[320px]">
                <Image
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </div>

              {/* Liste de fonctionnalités */}
              <div className="lg:w-1/2 flex flex-col gap-4 justify-center">
                {features.map((feature, i) => (
                  <div
                    key={feature.title}
                    onMouseEnter={() => setActiveFeature(i)}
                    className={`flex gap-5 items-start p-5 rounded-2xl cursor-pointer transition-colors ${
                      activeFeature === i ? "bg-[#F0F4FF] border border-primary/10" : "bg-[#F8F8F8] hover:bg-[#F0F4FF]"
                    }`}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-primary/60 tracking-widest">0{i + 1}</span>
                        <h3 className="font-heading font-medium text-base text-heading">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-black/50 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </AnimatedContent>

      {/* Témoignage */}
      <AnimatedContent distance={40} duration={0.8} delay={0.1} threshold={0.15}>
        <Container className="w-full max-w-[90%]">
          <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white/20">
                <Image
                  src="/png/antoine1.webp"
                  alt="Antoine Baril"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 text-center md:text-left">
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                &ldquo;Je recommande{" "}
                <span className="text-white font-semibold">Oriana Solutions</span>.
                {" "}Ils ont mis à jour mon site web en fonction de mes demandes. Ils sont{" "}
                <span className="text-white font-semibold">professionnels, disponibles</span>
                {" "}et à l&apos;écoute des besoins de leur client.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">Antoine Baril</p>
                <p className="text-sm text-white/60">Courtier immobilier — Proprio Direct</p>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedContent>

      <RealisationsSection excludeHref="/developpement-application-mobile/antoine-baril" />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
