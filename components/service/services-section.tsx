"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/shared/container";
import Button from "@/components/ui/button";
import { servicesPage } from "@/data/servicesPage";
import { Arrow } from "@/svgs";

export default function ServicesSection() {
  return (
    <Container className="w-full sm:max-w-[90%] pt-10! xl:pt-14!">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {servicesPage.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-5 rounded-2xl border border-black/8 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full h-56 md:h-52 lg:h-60 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 px-6 pb-6 flex-1">
              <h3 className="font-heading font-normal text-xl md:text-2xl text-heading">
                {item.title}
              </h3>

              <p className="text-[#535353] text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              <div className="flex items-center gap-3 flex-wrap pt-1">
                <Button href={item.href} className="w-fit text-sm!">
                  En savoir plus
                </Button>
                <Button
                  href="/realisations"
                  variant="outline"
                  className="w-fit text-sm! whitespace-nowrap"
                  icon={<Arrow />}
                >
                  Études de cas
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
