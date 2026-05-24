import Image from "next/image";
import Button from "@/components/ui/button";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import { Arrow } from "@/svgs";

export default function AboutHero() {
  return (
    <Container className="relative flex items-center sm:max-w-[90%] w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1 mt-6 md:mt-0">
          <div className="flex flex-col gap-4 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Tag>À propos de nous</Tag>
            </div>

            <Typography
              variant="h4"
              className="text-[24px]!  md:text-[36px]!  lg:text-[36px]! 2xl:text-[40px]! 3xl:text-[44px]! 4xl:text-[48px]! "
            >
              De l'idée au déploiement,
              <br /> nous créons les solutions
              <br /> technologiques qui <br />
              soutiennent votre croissance.
            </Typography>

            <Typography variant="p-base" className="sm:max-w-[420px] w-full text-[13px]! sm:text-base! lg:text-[21px]! 3xl:text-[24px]! 4xl:text-[28px]!">
              {
                " Oriana Solutions est une agence digitale spécialisée dans le développement d'applications sur mesure."
              }
            </Typography>

            <Button
              href="/contact"
              icon={<Arrow className="h-[27.98px] w-[27.98px] text-white" />}
            >
              Nous contacter
            </Button>
          </div>
        </div>

        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          <div className="w-full rounded-[18px] overflow-hidden max-w-[400px]   ">
            <Image
              src="/png/about1.png"
              alt="Équipe en réunion"
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
