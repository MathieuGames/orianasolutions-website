import React from "react";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { ServiceType } from "@/types/service";

interface Props {
  service?: ServiceType;
}

export default function ServiceStats({ service }: Props) {
  const downloads = service?.downloads ?? "5000+";
  const countries = service?.countries ?? "26 pays";
  const awards = service?.awards ?? "4";
  const items = [
    { key: "downloads", label: service?.downloadsLabel ?? "Téléchargements", value: downloads },
    { key: "countries", label: service?.countriesLabel ?? "Présente dans", value: countries },
    { key: "awards", label: service?.awardsLabel ?? "Prix et distinction", value: awards },
  ];

  return (
    <Container className="sm:bg-primary-light w-full lg:mb-20">
      <div className="rounded-xl lg:py-8">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-6 items-stretch">
          {items.map((it) => (
            <div key={it.key} className="flex-1 bg-[#F1F7FF] rounded-lg p-6 flex flex-col gap-4">
              <p  className="sm:text-sm text-xs 2xl:text-base 3xl:text-xl uppercase text-black">
                {it.label}
              </p>
              <Typography variant="h3">
                {it.value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
