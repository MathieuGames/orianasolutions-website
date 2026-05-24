"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import values from "@/data/values";

export default function Values() {
  return (
    <Container parentStyle="bg-transparent" className="sm:max-w-[90%] w-full">
      <div className="flex flex-col gap-10 items-center text-center">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-4 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tag>Ce qui nous guide</Tag>
          <div className="flex flex-col gap-4">
            <Typography variant="h2">Nos valeurs</Typography>
            <Typography variant="p-hero" className="max-w-[620px]">
              Ce qui guide nos décisions, notre façon de travailler et les produits qu&apos;on livre.
            </Typography>
          </div>
        </motion.div>

        {/* Two-column: photo left, cards right */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Photo */}
          <motion.div
            className="lg:w-[35%] w-full rounded-2xl overflow-hidden min-h-[300px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/png/finales_HR-11.jpg"
              alt="Oriana Solutions valeurs"
              width={800}
              height={1000}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Cards stacked vertically */}
          <div className="flex-1 flex flex-col gap-4">
            {values.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-white border border-[#E6E6E6] rounded-2xl p-7 shadow-sm flex flex-col items-start text-left cursor-default transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-xl text-heading font-normal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-6">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Container>
  );
}
