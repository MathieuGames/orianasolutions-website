"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import { history } from "@/data/history";

const LINE_DURATION = 1400; 
const DOT_HOLD = 800; 
const RESTART_DELAY = 300; 
const INITIAL_DELAY = 500;

export default function History() {
  const timelineItems = history;

  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineProgress, setLineProgress] = useState<number[]>(
    new Array(timelineItems.length - 1).fill(0)
  );
  
  const rafRef = useRef<number | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAll = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const reset = useCallback(() => {
    setActiveIndex(-1);
    setLineProgress(new Array(timelineItems.length - 1).fill(0));
  }, [timelineItems.length]);

  const animateLine = useCallback((lineIndex: number, onDone: () => void) => {
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / LINE_DURATION, 1);
      setLineProgress((prev) => {
        const next = [...prev];
        next[lineIndex] = progress;
        return next;
      });
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDone();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const runSequence = useCallback(() => {
    const activateStep = (index: number) => {
      setActiveIndex(index);

      const isLast = index === timelineItems.length - 1;

      if (isLast) {
        const t = setTimeout(() => {
          reset();
          const t2 = setTimeout(() => runSequence(), RESTART_DELAY);
          timeoutsRef.current.push(t2);
        }, DOT_HOLD + 400);
        timeoutsRef.current.push(t);
      } else {
        const t = setTimeout(() => {
          animateLine(index, () => {
            const t2 = setTimeout(() => {
              setLineProgress((prev) => {
                const next = [...prev];
                next[index] = 0;
                return next;
              });
              activateStep(index + 1);
            }, 80);
            timeoutsRef.current.push(t2);
          });
        }, DOT_HOLD);
        timeoutsRef.current.push(t);
      }
    };

    activateStep(0);
  }, [animateLine, reset, timelineItems.length]);

  useEffect(() => {
    const t = setTimeout(() => runSequence(), INITIAL_DELAY);
    timeoutsRef.current.push(t);
    return () => clearAll();
  }, [runSequence]);

  return (
    <Container className="py-16 md:py-20 bg-[#f0efed] sm:rounded-none rounded-4xl">
      <section className="w-full px-6 py-8 flex flex-col sm:items-start items-center">
        <div className="mb-6 ">
          <Tag>À propos de nous</Tag>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:items-start items-center">
          <div className="flex flex-col sm:items-start items-center gap-20 h-full">
            <Typography variant="h2" className="max-w-[480px]">
              Notre histoire
            </Typography>
            <Typography
              variant="p-large"
              className="text-gray-500 leading-relaxed max-w-[480px] mt-4"
            >
              {"De l'université à l'entrepreneuriat, chaque étape nous a rapprochés de ce qu'on voulait vraiment bâtir."}
            </Typography>
          </div>

          <div className="flex flex-col font-heading">
            {timelineItems.map((item, index) => {
              const isDotActive = index === activeIndex;
              const isLast = index === timelineItems.length - 1;
              const progress = lineProgress[index] ?? 0;

              return (
                <div key={item.year} className="flex gap-8" style={{ minHeight: 0 }}>
                  <div className="flex flex-col items-center shrink-0 self-stretch">
                    <div
                      className="relative shrink-0 mt-2"
                      style={{ width: 12, height: 12, zIndex: 1 }}
                    >
                      <div
                        className="absolute inset-0 rounded-full border-2 border-gray-300"
                        style={{ background: "#d1d5dc" }}
                      />
                      <div
                        className="absolute inset-0 rounded-full bg-gray-900 border-2 border-gray-900"
                        style={{
                          transform: isDotActive ? "scale(1)" : "scale(0)",
                          transition: isDotActive
                            ? "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"
                            : "transform 0.2s ease-in",
                          transformOrigin: "center",
                        }}
                      />
                    </div>

                    {!isLast && (
                      <div
                        className="relative flex-1"
                        style={{ width: 2, background: "#e5e7eb", marginTop: -10 }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: `${progress * 100}%`,
                            background: "#111827",
                            transition: "none",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="pb-8 flex flex-col gap-5">
                    <h3
                      className="text-[42px]  leading-none"
                      style={{
                        color: isDotActive ? "#111827" : "#d1d5db",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {item.year}
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-gray-400 max-w-[450px] whitespace-pre-line"
                      style={{
                        color: isDotActive ? "#6b7280" : "#d1d5db",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
