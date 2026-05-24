"use client";

import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import Container from "../shared/container";
import { Typography } from "@/components/ui/typography";

export default function RealisationsSection() {
  const selectedProjects = projects.slice(1, 3);

  return (
    <Container>
      <div className="flex flex-col gap-10 xl:gap-16">

        {/* HEADER */}
       <Typography variant="h4" className="shrink-0 text-center">
            Nos autres réalisations
          </Typography>
          

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:border border-surface-muted rounded-[40px] p-3 lg:p-10 xl:gap-8">
          {selectedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>

      </div>
    </Container>
  );
};