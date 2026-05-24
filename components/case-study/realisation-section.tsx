"use client";

import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import Container from "../shared/container";
import { Typography } from "@/components/ui/typography";
import AnimatedContent from "@/components/ui/animated-content";

interface Props {
  excludeHref?: string;
}

export default function RealisationsSection({ excludeHref }: Props) {
  const filtered = projects
    .filter((p) => p.href !== excludeHref)
    .slice(0, 3);

  return (
    <Container>
      <div className="flex flex-col gap-10 xl:gap-16">
        {/* HEADER */}
        <AnimatedContent distance={30} duration={0.7} threshold={0.2}>
          <Typography variant="h4" className={`shrink-0 text-center ${filtered.length >= 3 ? "sm:text-start" : ""}`}>
            Nos autres réalisations
          </Typography>
        </AnimatedContent>

        {/* CARDS */}
        <AnimatedContent distance={50} duration={0.8} delay={0.15} threshold={0.1}>
          <div className={`grid grid-cols-1 gap-6 lg:border border-surface-muted rounded-[40px] p-3 lg:p-10 xl:gap-8 ${filtered.length === 2 ? "sm:grid-cols-2 max-w-[800px] mx-auto w-full" : "sm:grid-cols-3"}`}>
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </Container>
  );
}
