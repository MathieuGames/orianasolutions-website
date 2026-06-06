"use client";

import Script from "next/script";

export default function CalendlyInline() {
  return (
    <div className="w-full bg-primary-light border-t border-black/6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Gauche — widget Calendly */}
        <div className="w-full">
          <div
            className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
            data-url="https://calendly.com/mathieumorinlamy/appel-exploratoire-de-15-minutes-par-telephone"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>

        {/* Droite — mise en contexte */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-24">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Réservez un appel</p>
            <h2 className="font-heading font-normal text-3xl md:text-4xl text-heading leading-tight">
              Vous préférez un appel plutôt que remplir un formulaire ?
            </h2>
            <p className="text-base text-black/50 leading-relaxed">
              15 minutes pour discuter de votre projet, avoir des réponses claires et voir si on est le bon fit. Gratuit, sans engagement.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              "On répond à toutes vos questions sur les délais et les prix",
              "On évalue la faisabilité de votre idée ensemble",
              "Vous repartez avec une direction claire",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span className="text-sm text-black/55 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
