import React from "react";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "../ui/typography";
import DynamicServiceSection from "./dynamic-service-section";
import { ServiceType, ServiceSection } from "@/types/service";
import ServiceStats from "./stats-section";
import RealisationsSection from "./realisation-section";

interface ServiceDetailPageProps {
  service: ServiceType;
}

export const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  return (
    <>
      <Container className="w-full max-w-[90%]">
        <div className=" sm:flex hidden flex-col items-center gap-6 pt-10">
          <Tag>Étude de cas</Tag>

          <Typography variant="h2" className="text-center">
            {service.title}
            <span> | Quietnest</span>
          </Typography>
        </div>
      </Container>

      {service.sections?.map((section: ServiceSection, index: number) => (
        <DynamicServiceSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
          headingClassName="max-w-[350px]!"
        />
      ))}

      <ServiceStats service={service} />

      <DynamicServiceSection
        title={
          <>
            Tout a commencé
            <br />
            en 2022 lors d'une défi
          </>
        }
        description={
            <>
              {/* Mobile */}
              <span className="block sm:hidden">
                Tout a commencé en 2020, nous avons <br /> décidé de créer une
                application mobile.<br /> Tout a commencé en 2020, nous avons<br /> décidé
                de créer une application mobile.<br /><br />
                 Tout a commencé en 2020, nous
                avons<br />
                 décidé de créer une application mobile.
              </span>

              {/* Desktop */}
              <span className="hidden sm:block">
                Tout a commencé en 2020, nous avons décidé <br />
                de créer une application mobile. Tout a <br />
                commencé en 2020, nous avons décidé de créer <br />
                une application mobile.
                <br />
                <br />
                Tout a commencé en 2020, nous avons décidé <br />
                de créer une application mobile.
              </span>
            </>
          }
        image="/png/service1-3.png"
        icon="/svg/app-icon.svg"
        reverse
        headingClassName="max-w-[400px]!"
      />

      <div className="lg:mt-10">
        <DynamicServiceSection
          title={
            <>
              Tout a commencé
              <br />
              en 2022 lors d'une défi
            </>
          }
          description={
            <>
              {/* Mobile */}
              <span className="block sm:hidden">
                Tout a commencé en 2020, nous avons <br /> décidé de créer une
                application mobile.<br /> Tout a commencé en 2020, nous avons<br /> décidé
                de créer une application mobile.<br /><br />
                 Tout a commencé en 2020, nous
                avons<br />
                 décidé de créer une application mobile.
              </span>

              {/* Desktop */}
              <span className="hidden sm:block">
                Tout a commencé en 2020, nous avons décidé <br />
                de créer une application mobile. Tout a <br />
                commencé en 2020, nous avons décidé de créer <br />
                une application mobile.
                <br />
                <br />
                Tout a commencé en 2020, nous avons décidé <br />
                de créer une application mobile.
              </span>
            </>
          }
          image="/png/service1-4.png"
          headingClassName="max-w-[350px]!"
        />
      </div>

      <RealisationsSection />
    </>
  );
};
