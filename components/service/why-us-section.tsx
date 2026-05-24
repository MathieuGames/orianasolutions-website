import Image from "next/image";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import Tag from "@/components/ui/tag";

export default function WhyUsSection() {
  return (
    <Container className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: text */}
        <div className="flex flex-col gap-6 sm:text-left text-center items-center sm:items-start">
          <Tag>Pourquoi nous choisir</Tag>

          <Typography variant="h3">
            Pourquoi faire affaires avec nous&nbsp;?
          </Typography>

          <p className="text-base xl:text-lg text-muted max-w-[540px] leading-relaxed">
            En 2025, notre équipe a remporté la première place nationale au défi OSEntreprendre, le plus grand concours d&apos;entrepreneuriat au Québec. On a conçu et livré une application mobile de A à Z, face aux meilleures équipes du Québec. Si on a pu gagner à l&apos;échelle nationale, on peut livrer votre projet.
          </p>
        </div>

        {/* Right: image */}
        <div className="w-full flex lg:justify-end justify-center">
          <div className="w-full max-w-[560px] rounded-[24px] overflow-hidden">
            <Image
              src="/png/Test.jpg"
              alt="Oriana Solutions — 1re place nationale Défi OSEntreprendre 2025"
              width={900}
              height={700}
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>
    </Container>
  );
}
