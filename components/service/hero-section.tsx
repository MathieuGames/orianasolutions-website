"use client";

import { motion } from "motion/react";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";

export default function ServicesHero() {
  return (
    <Container className="hidden sm:block pb-10! xl:pb-14!">
      <div className="flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="h1">
            Nos services
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="p-hero" className="max-w-[550px]">
            Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation IA sur mesure.
          </Typography>
        </motion.div>
      </div>
    </Container>
  );
}
