"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";

export default function RealisationsFilter() {
  const [active, setActive] = useState<Category>("Tous les projets");

  const filtered = useMemo(
    () =>
      active === "Tous les projets"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((cat) => [
          cat,
          cat === "Tous les projets"
            ? projects.length
            : projects.filter((p) => p.category === cat).length,
        ])
      ) as Record<Category, number>,
    []
  );

  const countFor = (cat: Category) => counts[cat];

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 md:mb-14">
        {categories.map((cat) => {
          const count = countFor(cat);
          if (count === 0 && cat !== "Tous les projets") return null;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm transition-colors whitespace-nowrap ${
                active === cat
                  ? "text-black font-semibold"
                  : "text-black/40 hover:text-black/70"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
        {filtered.map((project) => (
          <Link key={project.id} href={project.href} className="group block">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                  project.id === 1 ? "scale-115" : ""
                }`}
              />
              <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-black text-xs font-medium px-3 py-1.5 rounded-full">
                {project.badge}
              </span>
            </div>
            <p className="text-xs text-black/40 uppercase tracking-wider mb-1">
              {project.label ?? project.category}
            </p>
            <h2 className="font-heading font-normal text-xl md:text-2xl text-heading transition-colors">
              {project.title}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}
