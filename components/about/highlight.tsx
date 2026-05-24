import Image from "next/image";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

export default function AboutHighlight() {
  return (
    <Container className="py-16 sm:max-w-[95%] w-full">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left sm:gap-8 gap-4">
          <Tag>À propos de nous</Tag>

          <div className="flex flex-col sm:gap-10 gap-6">
            <Typography variant="h2" className="max-w-[640px]">
              Tout a commencé avec une idée et un concours.
            </Typography>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#535353] sm:max-w-[460px] w-full">
              Après avoir remporté le défi OSEntreprendre 2025 avec une application mobile conçue de A à Z, on est tombés en amour avec le développement de solutions numériques. C&apos;est là qu&apos;Oriana Solutions est née.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-[420px]  rounded-[18px] overflow-hidden ">
            <Image
              src="/png/highlight.png"
              alt="Award photo"
              width={900}
              height={900}
              className="w-full h-auto object-cover block"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
