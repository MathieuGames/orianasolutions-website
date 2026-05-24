"use client";

import { useState } from "react";
import { faqSections } from "@/data/faq";
import Link from "next/link";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-heading">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function FAQContent() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col gap-4">
        {faqSections.map((section) => (
          <div
            key={section.category}
            className="bg-white rounded-2xl border border-black/6 shadow-sm overflow-hidden"
          >
            {/* Category label */}
            <div className="px-6 md:px-8 py-4 border-b border-black/6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-sm font-semibold text-heading tracking-wide">
                {section.category}
              </span>
            </div>

            {/* Items */}
            <div className="divide-y divide-black/5">
              {section.items.map((item) => {
                const open = openId === item.id;
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setOpenId(open ? null : item.id)}
                      className="w-full flex items-start justify-between gap-6 px-6 md:px-8 py-5 text-left cursor-pointer group"
                      aria-expanded={open}
                    >
                      <span
                        className={`font-heading font-normal text-base md:text-lg leading-snug transition-colors ${
                          open
                            ? "text-primary"
                            : "text-heading group-hover:text-primary"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          open
                            ? "bg-primary border-primary"
                            : "border-black/20 group-hover:border-primary"
                        }`}
                      >
                        <span
                          className={`text-sm leading-none ${
                            open ? "text-white" : "text-black/40"
                          }`}
                        >
                          {open ? "−" : "+"}
                        </span>
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 md:px-8 pb-6 flex flex-col gap-3">
                          {item.answer.split("\n\n").map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-sm md:text-base text-black/55 leading-7 whitespace-pre-line"
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
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-2xl bg-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
    </>
  );
}
