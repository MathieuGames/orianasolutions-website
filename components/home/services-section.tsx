import Image from "next/image";
import ServiceCard from "@/components/ui/service-card";
import { services } from "@/data/services";
import Container from "../shared/container";
import AnimatedContent from "@/components/ui/animated-content";

export default function ServicesSection() {
  return (
    <Container className="w-full py-0! 2xl:px-[120px]! 3xl:px-[140px]!">
      <div className="flex flex-col lg:flex-row 2xl:pl-20 gap-12 md:gap-16">
        <AnimatedContent direction="horizontal" reverse distance={60} duration={0.9} threshold={0.1} className="hidden lg:flex flex-1 max-w-[532px] relative min-h-[599px]">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
            <Image
              src="/png/about.png"
              alt="À propos de Oriana Solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </AnimatedContent>

        <div className="flex flex-col gap-12 md:gap-4 w-full lg:w-[50%] 2xl:w-[700px] 3xl:w-[776px] shrink-0 justify-center py-5">
          {services.map((service, i) => (
            <AnimatedContent key={service.id} distance={35} duration={0.7} delay={i * 0.08} threshold={0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </Container>
  );
}
