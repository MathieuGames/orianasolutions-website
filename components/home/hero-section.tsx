import Image from "next/image";
import Button from "@/components/ui/button";
import Container from "@/components/shared/container";
import Tag from "../ui/tag";
import { Arrow } from "@/svgs";
import AnimatedContent from "@/components/ui/animated-content";

export default function HeroSection() {
  return (
    <Container parentStyle=" bg-primary-light relative rounded-b-[30px] md:rounded-b-none overflow-hidden " className=" relative overflow-hidden 4xl:h-auto min-h-[calc(100dvh-68px)] flex md:items-center">
      <div className="  absolute -right-20 -bottom-10 2xl:-bottom-44 3xl:-bottom-64 4xl:-bottom-80 2xl:-right-24 3xl:-right-40 4xl:-right-40 w-[340px] h-[310px] md:w-[480px] xl:h-[420px] 2xl:w-[730px] 2xl:h-[730px] 3xl:w-[830px] 3xl:h-[830px] 4xl:w-[1010px] 4xl:h-[1010px] flex items-end">
        <Image
          src="/svg/Logo_Oriana_Symbole_Noir.svg"
          alt=""
          aria-hidden
          width={900}
          height={900}
          className="w-full translate-x-3 translate-y-3 xl:translate-y-3"
          style={{
            filter:
              "invert(27%) sepia(96%) saturate(1800%) hue-rotate(210deg) brightness(98%) contrast(88%)",
            opacity: 0.22,
          }}
          priority
        />
      </div>

      <div className=" relative z-10 mt-3 md:-mt-16 ">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 md:gap-8 w-full md:max-w-[70%] 2xl:max-w-229.75 md:mx-auto">

          <AnimatedContent distance={20} duration={0.6} delay={0.05} threshold={0.01} className="flex items-center">
            <Tag>Agence de développement logiciel</Tag>
          </AnimatedContent>

          <AnimatedContent distance={0} duration={0.7} delay={0.2}>
            <h1 className="font-heading leading-none text-[42px] xs:text-[54px] xl:text-[72px] 2xl:text-[71px] 3xl:text-[91px] 3xl:leading-[91px] text-title sm:max-w-[85%] 3xl:max-w-full">
              Développement d&apos;applications web et mobiles sur mesure.
            </h1>
          </AnimatedContent>

          <AnimatedContent distance={0} duration={0.7} delay={0.35}>
            <p className="md:leading-7 text-[16px] md:text-[22px] xl:leading-8 2xl:text-[24px] 3xl:text-[31px] 3xl:leading-[43px] 2xl:tracking-[-1.1px] text-body md:max-w-[520px] lg:max-w-none">
              Spécialistes en applications mobiles, plateformes SaaS<br className="hidden md:block" /> et sites web, basés à Montréal.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={20} duration={0.7} delay={0.9} threshold={0.01} className="w-full">
            <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
              <Button href="/contact" className="px-2! sm:px-4! 3xl:px-5!">Nous contacter</Button>
              <Button
                variant="outline"
                href="/services"
                className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                icon={<Arrow />}
              >
                Nos services
              </Button>
            </div>
          </AnimatedContent>

        </div>
      </div>
    </Container>
  );
}
