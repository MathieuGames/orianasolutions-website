import DynamicServiceSection from "../service/dynamic-service-section";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "../ui/typography";
import RealisationsSection from "./realisation-section";
import ServiceFAQ from "../service/faq-section";
import ProcessSection from "./process-section";
import WhyUsSection from "../service/why-us-section";
import LogosMarquee from "@/components/ui/logos-marquee";

export const HeroSection = ({ title = "Développement d'application mobile" }: { title?: string }) => {
  return (
    <>
      <Container className="w-full max-w-[90%]">
        <div className=" sm:flex hidden flex-col items-center gap-6 pt-10 ">
          <Tag>Service</Tag>

          <Typography variant="h2" className="text-center">
            {title}
          </Typography>
          <p className="text-base md:text-lg text-black/50 text-center max-w-xl">
            De l&apos;idée au lancement, on construit l&apos;app qu&apos;il vous faut.
          </p>
        </div>
      </Container>

      <DynamicServiceSection
        title="Votre app, pensée pour vos utilisateurs"
        description="Une bonne application mobile, c'est d'abord une expérience fluide. On conçoit chaque écran en gardant l'utilisateur final au centre, puis on développe avec les meilleures technologies cross-platform pour iOS et Android simultanément."
        image="/png/Group 51.png"
        reverse
        priority
      />

      <div className="">
        <DynamicServiceSection
          title="De l'idée au déploiement, on s'occupe de tout"
          description="Conception UX/UI, développement, tests sur appareils réels, publication sur l'App Store et Google Play. Notre équipe gère chaque étape pour que vous puissiez vous concentrer sur votre business."
          image="/png/real5.png"
          parentStyle="bg-primary-light"
          className="pt-20"
        />
      </div>
      <ProcessSection />
      <WhyUsSection />
      <RealisationsSection />
      <LogosMarquee />

      <div>
        <ServiceFAQ
          title={
            <>
              Questions fréquentes <br />
              <span className="sm:block hidden">
                sur les applications mobiles
              </span>
            </>
          }
        />
      </div>
    </>
  );
};
