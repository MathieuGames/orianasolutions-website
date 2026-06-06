"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";
import Link from "next/link";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";
import AnimatedContent from "@/components/ui/animated-content";

export default function RealisationsSection() {
  const [active, setActive] = useState<Category>("Tous les projets");

  const filtered =
    active === "Tous les projets"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Container className="">
      <div className="flex flex-col gap-10 xl:gap-16">
        <AnimatedContent distance={40} duration={0.8} threshold={0.2} className="flex flex-col gap-5 lg:flex-row items-start justify-between md:gap-6">
          <div className="flex flex-col gap-2 text-center lg:text-left items-center lg:items-start">
            <Typography variant="h2" as="h3" className="sm:mb-2 shrink-0">
              Nos réalisations
            </Typography>
            <Typography variant="p-large" className="max-w-[550px] 3xl:max-w-[620px]">
              Quelques projets concrets qu&apos;on a livrés pour nos clients.
            </Typography>
          </div>

          <div className="hidden lg:flex flex-wrap gap-2 md:gap-3 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-[15px] cursor-pointer py-1.5 rounded-full text-[13px] md:text-[14px] font-medium transition-colors whitespace-nowrap
                  ${active === cat
                    ? "bg-primary text-white"
                    : "bg-[#F4F4F4] text-title hover:bg-[#E8E8E8]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedContent>

        <AnimatedContent distance={50} duration={0.8} delay={0.15} threshold={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:border border-surface-muted rounded-[40px] p-3 lg:p-10 xl:gap-8">
          {filtered.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              href={project.href}
              imageClassName={project.id === 1 ? "scale-115" : ""}
            />
          ))}
        </AnimatedContent>

        <AnimatedContent distance={30} duration={0.7} delay={0.2} threshold={0.1} className="flex justify-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black/15 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors"
          >
            Voir plus
          </Link>
        </AnimatedContent>
      </div>
    </Container>
  );
}
