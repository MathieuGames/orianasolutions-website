import React from "react";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";
import AnimatedContent from "@/components/ui/animated-content";

const About = () => {
  return (
    <Container className="py-8!">
      <div className="flex flex-col justify-center items-center max-w-[755px] lg:h-[220px] mx-auto text-center gap-y-[16px]">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2}>
          <div className="flex">
            <Tag>Propulez votre entreprise</Tag>
          </div>
        </AnimatedContent>
        <AnimatedContent distance={50} duration={0.8} delay={0.1} threshold={0.2}>
          <Typography variant="h2" as="h3" className="sm:mb-4">
            Nos services
          </Typography>
        </AnimatedContent>
        <AnimatedContent distance={40} duration={0.8} delay={0.2} threshold={0.2}>
          <Typography variant="p-large" className="mt-3 max-w-[550px] 3xl:max-w-[620px]">
            Une expertise complète pour tous vos besoins en développement digital
          </Typography>
        </AnimatedContent>
      </div>
    </Container>
  );
};

export default About;
