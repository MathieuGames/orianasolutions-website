"use client";

import { useState } from "react";
import { faqSections } from "@/data/faq";
import Link from "next/link";
import { renderBold } from "@/lib/render-bold";

const ALL = "Toutes les questions";
const categoryList = [ALL, ...faqSections.map((s) => s.category)];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQContent() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(ALL);

  const visibleSections =
    activeCategory === ALL
      ? faqSections
      : faqSections.filter((s) => s.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setOpenId(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-16 items-start">

      {/* Sidebar */}
      <aside className="lg:sticky lg:top-28 self-start">
        <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-4">
          Catégories
        </p>
        <nav className="flex flex-row flex-wrap lg:flex-col gap-1.5">
          {categoryList.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-left text-sm px-3.5 py-2 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal ${
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-black/50 hover:text-black hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Accordion */}
      <div className="flex flex-col gap-8 min-w-0">
        {visibleSections.map((section) => (
          <div key={section.category}>
            {activeCategory === ALL && (
              <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-4">
                {section.category}
              </p>
            )}

            <div className="flex flex-col gap-2">
              {section.items.map((item) => {
                const open = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                      open
                        ? "border-primary/30 bg-white shadow-sm"
                        : "border-black/8 bg-white hover:border-black/15"
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(open ? null : item.id)}
                      className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left group"
                      aria-expanded={open}
                    >
                      <span
                        className={`font-heading font-normal text-base md:text-lg leading-snug transition-colors ${
                          open ? "text-primary" : "text-heading group-hover:text-primary"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 mt-1 w-7 h-7 flex items-center justify-center rounded-full transition-all ${
                          open
                            ? "bg-primary text-white"
                            : "bg-black/6 text-black/40 group-hover:bg-primary/15 group-hover:text-primary"
                        }`}
                      >
                        <ChevronIcon open={open} />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pt-1 pb-6 border-t border-black/5 flex flex-col gap-3 mt-0">
                          {item.answer.split("\n\n").map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-sm md:text-base text-black/55 leading-7"
                            >
                              {renderBold(paragraph)}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-2 rounded-2xl bg-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="font-heading font-normal text-2xl md:text-3xl text-white">
              Vous avez d&apos;autres questions ?
            </h3>
            <p className="text-sm text-white/60">
              Contactez-nous, il nous fera plaisir de vous répondre.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-heading text-sm font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Nous contacter →
          </Link>
        </div>
      </div>

    </div>
  );
}
