"use client";

import { useState } from "react";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-heading">{part}</strong> : part
  );
}
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import Breadcrumb from "@/components/shared/breadcrumb";
import { faqSections } from "@/data/faq";
import Link from "next/link";

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "FAQ" }]} />
      <main className="w-full py-14 md:py-20">
        <Container>

          {/* Header */}
          <div className="mb-16 md:mb-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              Ressources
            </p>
            <h1 className="font-heading font-normal text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-heading leading-tight mb-6">
              Questions{" "}
              <span className="text-primary">fréquentes</span>
            </h1>
            <p className="text-black/50 text-base max-w-lg">
              Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
            </p>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6">
            {faqSections.map((section, sectionIndex) => (
              <div key={section.category} className={`rounded-2xl border border-black/8 overflow-hidden ${sectionIndex === 0 ? "" : ""}`}>

                {/* Section header */}
                <div className="flex items-center gap-3 px-7 py-5 border-b border-black/8 bg-[#F8F9FB]">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-base font-semibold text-heading">
                    {section.category}
                  </p>
                  <span className="ml-auto text-xs text-black/30 font-medium">
                    {section.items.length} question{section.items.length > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Accordion */}
                <div className="flex flex-col px-2 sm:px-4">
                  {section.items.map((item) => {
                    const open = openId === item.id;
                    return (
                      <div key={item.id} className="border-b border-black/6 last:border-0">
                        <button
                          onClick={() => setOpenId(open ? null : item.id)}
                          className="flex items-start justify-between gap-6 py-6 text-left w-full group cursor-pointer px-3"
                          aria-expanded={open}
                        >
                          <span className={`font-heading font-normal text-base md:text-lg transition-colors ${open ? "text-primary" : "text-heading group-hover:text-primary"}`}>
                            {item.question}
                          </span>
                          <span className={`shrink-0 mt-0.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${open ? "border-primary bg-primary" : "border-black/20 group-hover:border-primary"}`}>
                            <span className={`text-base leading-none transition-colors ${open ? "text-white" : "text-black/40 group-hover:text-primary"}`}>
                              {open ? "−" : "+"}
                            </span>
                          </span>
                        </button>

                        <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                            <div className="px-3 pb-6 flex flex-col gap-4">
                              {item.answer.split("\n\n").map((paragraph, i) => (
                                <p key={i} className="text-[16px] text-black/60 leading-7 whitespace-pre-line">
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
          <div className="rounded-3xl bg-primary-light border border-primary/15 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h3 className="font-heading font-normal text-2xl md:text-3xl text-heading">
                Vous avez d&apos;autres questions ?
              </h3>
              <p className="text-sm text-black/50">
                Contactez-nous, il nous fera plaisir de vous répondre.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Nous contacter →
            </Link>
          </div>

        </Container>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
