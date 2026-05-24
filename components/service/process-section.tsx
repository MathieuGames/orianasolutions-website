"use client";

import { motion } from "motion/react";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  const firstRow = processSteps.slice(0, 2);
  const secondRow = processSteps.slice(2);

  return (
    <Container parentStyle="bg-primary-light" className="sm:max-w-[85%] w-full">
      <div className="flex flex-col sm:items-start sm:text-left gap-8 sm:gap-10">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="h3" className="sm:text-start text-center">
            Notre processus
          </Typography>
          <Typography variant="p-large" className="max-w-[580px] text-muted sm:text-left text-center">
            De la première conversation au lancement, voici comment on travaille avec vous.
          </Typography>
        </motion.div>

        {/* Mobile — 1 colonne */}
        <div className="w-full grid grid-cols-1 sm:hidden gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-3 transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="text-sm text-muted font-heading">{String(step.id).padStart(2, "0")}</span>
              <h3 className="font-heading font-normal text-lg text-title">{step.title}</h3>
              <p className="text-sm text-muted leading-6">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop — grid 2 + 3 */}
        <div className="hidden sm:flex flex-col gap-4 w-full">
          <div className="w-full grid grid-cols-2 gap-4">
            {firstRow.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-2xl p-7 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="text-sm text-muted font-heading">{String(step.id).padStart(2, "0")}</span>
                <h3 className="font-heading font-normal text-xl md:text-2xl text-title">{step.title}</h3>
                <p className="text-sm text-muted leading-6">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
            {secondRow.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white rounded-2xl p-7 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="text-sm text-muted font-heading">{String(step.id).padStart(2, "0")}</span>
                <h3 className="font-heading font-normal text-xl md:text-2xl text-title">{step.title}</h3>
                <p className="text-sm text-muted leading-6">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Container>
  );
}
