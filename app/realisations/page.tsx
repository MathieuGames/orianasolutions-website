"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";

export default function RealisationsPage() {
  const [active, setActive] = useState<Category>("Tous les projets");

  const filtered =
    active === "Tous les projets"
      ? projects
      : projects.filter((p) => p.category === active);

  const countFor = (cat: Category) =>
    cat === "Tous les projets"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Nos réalisations" }]} />
      <main className="w-full px-6 sm:px-16 xl:px-25 2xl:px-35 py-14 md:py-20 max-w-[1980px] mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
            Nos projets
          </p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-heading leading-tight mb-8">
            Découvrez une sélection<br />
            de nos réalisations
          </h1>

          {/* Category filters */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {filtered.map((project) => (
            <Link key={project.id} href={project.href} className="group block">
              {/* Image */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${project.id === 1 ? "scale-115" : ""}`}
                />
                {/* Badge */}
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-black text-xs font-medium px-3 py-1.5 rounded-full">
                  {project.badge}
                </span>
              </div>

              {/* Info */}
              <p className="text-xs text-black/40 uppercase tracking-wider mb-1">
                {project.label ?? project.category}
              </p>
              <h2 className="font-heading font-normal text-xl md:text-2xl text-heading transition-colors">
                {project.title}
              </h2>
            </Link>
          ))}
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
