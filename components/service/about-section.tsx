"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { Arrow } from "@/svgs";

export default function ServiceAboutSection() {
  return (
    <Container>
      <div className="w-full flex flex-col lg:flex-row items-center gap-10">

        {/* Left */}
        <motion.div
          className="flex-1 flex flex-col sm:items-start items-center gap-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-5 sm:items-start items-center sm:text-left text-center">
            <Tag>À propos de nous</Tag>

            <Typography variant="h3" className="max-w-[460px]">
              Pourquoi travailler<br />avec nous
            </Typography>

            <p className="text-base leading-7 text-[#535353] sm:max-w-[400px] w-full">
              Parce qu&apos;on traite chaque projet comme le nôtre. Une équipe impliquée dès le premier jour, des délais respectés et un produit qui performe vraiment.
            </p>
          </div>

          <Button
            href="/about"
            variant="outline"
            icon={<Arrow />}
            className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
          >
            À propos
          </Button>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="flex-1 w-full flex justify-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sm:w-[320px] w-full lg:w-[420px] h-[340px] lg:h-[400px] rounded-[20px] overflow-hidden">
            <Image
              src="/png/about2.png"
              alt="about"
              width={900}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

      </div>
    </Container>
  );
}
