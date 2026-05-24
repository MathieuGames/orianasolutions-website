"use client";

import { useState } from "react";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { faqSections } from "@/data/faq";

const ABOUT_FAQ = faqSections[0].items;

export default function AboutFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Container className="w-full sm:max-w-[90%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left: title + contact info */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-28">
          <Typography variant="h2">
            Questions et réponses
          </Typography>

          <Typography variant="p-large" className="text-muted max-w-[380px]">
            Les réponses aux questions qu&apos;on reçoit le plus.
          </Typography>

        </div>

        {/* Right: FAQ accordion */}
        <div className="flex flex-col">
          {ABOUT_FAQ.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="w-full flex flex-col">
                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 py-6 cursor-pointer"
                  aria-expanded={open}
                >
                  <span className="text-left font-heading font-normal text-base md:text-lg text-title">
                    {item.question}
                  </span>
                  <span className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-md transition-colors duration-200 ${open ? "bg-primary text-white" : "bg-surface-muted text-title"}`}>
                    <span className="text-lg leading-none">{open ? "−" : "+"}</span>
                  </span>
                </button>

                <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="pb-6">
                      <p className="text-sm text-muted leading-6 whitespace-pre-line">
                        {item.answer.replace(/\*\*(.*?)\*\*/g, "$1")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`w-full border-b transition-colors duration-200 ${open ? "border-title" : "border-surface-muted"}`} />
              </div>
            );
          })}
        </div>

      </div>
    </Container>
  );
}
