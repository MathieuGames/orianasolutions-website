import Container from "../shared/container";
import TestimonialCard from "../ui/testimonial-card";
import HoverLift from "../ui/hover-lift";
import { testimonials } from "@/data/testimonials";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import AnimatedContent from "@/components/ui/animated-content";
import LogosMarquee from "@/components/ui/logos-marquee";

const Testimonial = () => {
  return (
    <Container className="py-0!  ">
      <div className="flex flex-col justify-center items-center py-14 md:py-20 mx-auto text-center gap-5 lg:gap-6.75">
        <AnimatedContent distance={30} duration={0.7} threshold={0.2}>
          <div className="lg:hidden flex">
            <Tag>Propulez votre entreprise</Tag>
          </div>
        </AnimatedContent>
        <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.2}>
          <Typography variant="h2" as="h3">
            Ce que nos clients disent
          </Typography>
        </AnimatedContent>
        <AnimatedContent distance={40} duration={0.8} delay={0.2} threshold={0.2}>
          <Typography variant="p-large">
            Ils nous ont fait confiance. Voici ce qu&apos;ils en pensent.
          </Typography>
        </AnimatedContent>
      </div>

      <div className="flex flex-col items-center w-full  lg:gap-30">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 lg:gap-16">
          {testimonials.map((testimonial, i) => (
            <HoverLift key={testimonial.id}>
              <AnimatedContent distance={50} duration={0.8} delay={i * 0.1} threshold={0.1}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedContent>
            </HoverLift>
          ))}
        </div>

        <LogosMarquee />
      </div>

      <div className="flex md:hidden items-center justify-center py-8">
        <AnimatedContent distance={50} duration={0.8} threshold={0.15} className="relative w-full xs:w-95 h-92.5 rounded-[30px] overflow-hidden group">
          <Image
            src="/png/about.png"
            alt={"title"}
            fill
            sizes="(max-width: 480px) 100vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AnimatedContent>
      </div>
    </Container>
  );
};

export default Testimonial;
