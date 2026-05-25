"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CALENDLY = "https://calendly.com/mathieumorinlamy/appel-exploratoire-de-15-minutes-par-telephone";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("cta-dismissed")) return;

    const show = () => setVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 600) {
        show();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Also show after 3500ms even without scrolling (desktop)
    const timer = setTimeout(show, 3500);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem("cta-dismissed", "1");
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center gap-3 bg-white rounded-2xl shadow-2xl border border-black/8 px-4 py-3.5 pr-10 max-w-[230px]">
        {/* Pulsing dot */}
        <div className="relative flex-shrink-0">
          <span className="block w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
        </div>

        {/* Text */}
        <Link
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-0.5 group"
        >
          <span className="text-xs text-black/50 font-medium leading-tight">Un projet en tête ?</span>
          <span className="text-sm font-semibold text-black group-hover:text-primary transition-colors leading-tight">
            Parlons-en →
          </span>
        </Link>

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Fermer"
          className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full text-black/30 hover:text-black/60 hover:bg-black/5 transition-colors"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1l8 8M9 1L1 9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
