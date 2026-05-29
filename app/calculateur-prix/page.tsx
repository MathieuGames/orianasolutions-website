"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Arrow } from "@/svgs";

type ProjectType = "site_web" | "app_web" | "app_mobile";
type Complexity  = "mvp" | "standard" | "avance" | "entreprise";
type Integration = "auth" | "paiement" | "db" | "hebergement" | "support" | "domaine";
type PageCount   = "small" | "medium" | "large";

const typeScores: Record<ProjectType, number> = { site_web: 1, app_web: 3, app_mobile: 5 };
const complexityScores: Record<Complexity, number> = { mvp: 0, standard: 2, avance: 4, entreprise: 8 };
const pageCountScores: Record<PageCount, number>   = { small: 0, medium: 2, large: 4 };
const integrationDevScores: Partial<Record<Integration, number>> = { auth: 1, paiement: 1, db: 0.5 };

const monthlyRanges: Record<Complexity, { hebergement: [number, number]; support: [number, number] }> = {
  mvp:        { hebergement: [30, 80],    support: [150, 300] },
  standard:   { hebergement: [60, 150],   support: [300, 600] },
  avance:     { hebergement: [100, 250],  support: [500, 1000] },
  entreprise: { hebergement: [200, 500],  support: [1000, 2500] },
};


type Tier = { range: string; label: string };

function getDevTier(score: number): Tier {
  if (score < 2)  return { range: "2 000 $ à 8 000 $",     label: "Projet simple"        };
  if (score < 4)  return { range: "8 000 $ à 15 000 $",    label: "Projet standard"      };
  if (score < 6)  return { range: "15 000 $ à 30 000 $",   label: "Projet intermédiaire" };
  if (score < 8)  return { range: "30 000 $ à 60 000 $",   label: "Projet avancé"        };
  if (score < 10) return { range: "60 000 $ à 100 000 $",  label: "Projet complexe"      };
  if (score < 14) return { range: "100 000 $ à 200 000 $", label: "Projet entreprise"    };
  return           { range: "200 000 $+",                   label: "Grand projet"         };
}

function getMonthlyItems(complexity: Complexity, integrations: Set<Integration>) {
  const r = monthlyRanges[complexity];
  const items: { label: string; min: number; max: number }[] = [];
  if (integrations.has("hebergement")) items.push({ label: "Hébergement", min: r.hebergement[0], max: r.hebergement[1] });
  if (integrations.has("support"))     items.push({ label: "Support",     min: r.support[0],     max: r.support[1] });
  if (integrations.has("domaine"))     items.push({ label: "Domaine",     min: 5,                 max: 15 });
  return items;
}

function fmt(n: number) { return n.toLocaleString("fr-CA") + " $"; }

const Checkmark = () => (
  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6.5l3.5 3L10 3" />
  </svg>
);

const projectTypeOptions: { id: ProjectType; label: string; desc: string }[] = [
  { id: "site_web",   label: "Site web",           desc: "Vitrine, landing page, institutionnel" },
  { id: "app_web",    label: "Application web",    desc: "SaaS, portail client, sur mesure"      },
  { id: "app_mobile", label: "Application mobile", desc: "iOS, Android ou les deux"              },
];

const pageCountOptions: { id: PageCount; label: string; desc: string }[] = [
  { id: "small",  label: "1 à 5 pages",   desc: "Accueil, contact..." },
  { id: "medium", label: "6 à 15 pages",  desc: "Services, blogue..." },
  { id: "large",  label: "16 pages et +", desc: "Institutionnel..." },
];

const complexityLevels: { id: Complexity; label: string; desc: string }[] = [
  { id: "mvp",        label: "MVP",        desc: "2 à 4 écrans, valider une idée" },
  { id: "standard",   label: "Standard",   desc: "5 à 8 écrans, produit complet" },
  { id: "avance",     label: "Avancé",     desc: "Tableaux de bord, multi-rôles" },
  { id: "entreprise", label: "Entreprise", desc: "Grande équipe, intégrations complexes" },
];

const integrationOptions: { id: Integration; label: string; desc: string; monthly: boolean }[] = [
  { id: "auth",        label: "Authentification",          desc: "Connexion, rôles, profils",          monthly: false },
  { id: "paiement",    label: "Paiement en ligne",         desc: "Stripe, facturation, abonnements",   monthly: false },
  { id: "db",          label: "Base de données sécurisée", desc: "Chiffrement, sauvegardes",           monthly: false },
  { id: "hebergement", label: "Hébergement & infra",       desc: "Serveurs, déploiement",              monthly: true  },
  { id: "support",     label: "Support après-vente",       desc: "Bogues, maintenance continue",       monthly: true  },
  { id: "domaine",     label: "Gestion du domaine",        desc: "Achat et renouvellement",            monthly: true  },
];

export default function CalculateurPrixPage() {
  const [selectedTypes,     setSelectedTypes]     = useState<Set<ProjectType>>(new Set(["app_web"]));
  const [pageCount,         setPageCount]         = useState<PageCount>("small");
  const [complexity,        setComplexity]        = useState<Complexity>("standard");
  const [needsBranding,     setNeedsBranding]     = useState(false);
  const [integrations,      setIntegrations]      = useState<Set<Integration>>(new Set());

  function toggleType(t: ProjectType) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(t)) { next.delete(t); } else { next.add(t); }
      return next;
    });
  }
  function toggleIntegration(id: Integration) {
    setIntegrations((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }

  const typeScore           = Array.from(selectedTypes).reduce((s, t) => s + typeScores[t], 0);
  const pageScore           = selectedTypes.has("site_web") ? pageCountScores[pageCount] : 0;
  const brandingScore       = needsBranding ? 2 : 0;
  const integrationDevScore = Array.from(integrations).reduce((s, id) => s + (integrationDevScores[id] ?? 0), 0);
  const hasApp              = selectedTypes.has("app_web") || selectedTypes.has("app_mobile");
  const devScore            = typeScore + pageScore + (hasApp ? complexityScores[complexity] : 0) + brandingScore + integrationDevScore;
  const tier                = getDevTier(devScore);
  const monthlyItems = getMonthlyItems(complexity, integrations);
  const monthlyTotal = monthlyItems.reduce((acc, i) => ({ min: acc.min + i.min, max: acc.max + i.max }), { min: 0, max: 0 });

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      {/* Compact header */}
      <div className="bg-primary-light border-b border-black/6 px-6 md:px-10 xl:px-16 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/40 mb-0.5">Outil gratuit</p>
            <h1 className="font-heading text-xl md:text-2xl text-heading leading-tight">Calculateur de prix</h1>
          </div>
          <p className="hidden md:block text-sm text-black/45 max-w-xs text-right leading-relaxed">
            Le prix se met à jour en temps réel.
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="px-6 md:px-10 xl:px-16 py-5 md:py-7 pb-24 lg:pb-7 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_310px] xl:grid-cols-[1fr_330px] gap-7 xl:gap-10 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-4">

            {/* Step 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">1</span>
                <h2 className="font-heading text-base text-heading">Type de projet</h2>
              </div>
              <div className="rounded-xl border border-black/12 overflow-hidden bg-white">
                {projectTypeOptions.map((type, i) => {
                  const active = selectedTypes.has(type.id);
                  const hasBorderB = i < projectTypeOptions.length - 1 || (type.id === "site_web" && active);
                  return (
                    <div key={type.id}>
                      <button
                        onClick={() => toggleType(type.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all hover:bg-black/[0.02] ${hasBorderB ? "border-b border-black/8" : ""}`}
                      >
                        <div className={`shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                          active ? "bg-primary border-primary" : "border-black/25"
                        }`}>
                          {active && <Checkmark />}
                        </div>

                        <span className="text-sm font-medium text-heading flex-1">{type.label}</span>
                        <span className="text-xs text-black/35 hidden sm:block">{type.desc}</span>
                      </button>

                      {type.id === "site_web" && active && (
                        <div className="px-4 py-2.5 bg-black/[0.015] border-b border-black/8">
                          <p className="text-[11px] text-black/40 mb-1.5">Nombre de pages :</p>
                          <div className="flex gap-2">
                            {pageCountOptions.map((opt) => (
                              <button key={opt.id} onClick={() => setPageCount(opt.id)}
                                className={`flex-1 text-center px-2 py-1.5 rounded-lg border-2 transition-all ${
                                  pageCount === opt.id
                                    ? "border-primary bg-primary text-white"
                                    : "border-black/12 bg-white text-heading hover:border-primary/50"
                                }`}
                              >
                                <span className="font-medium text-[11px] block">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {(selectedTypes.has("app_web") || selectedTypes.has("app_mobile")) && (
                  <div className="px-4 py-3 bg-black/[0.015] border-t border-black/8">
                    <p className="text-[11px] text-black/40 mb-2">Taille de votre application :</p>
                    <div className="grid grid-cols-2 gap-2">
                      {complexityLevels.map((level) => {
                        const active = complexity === level.id;
                        return (
                          <button key={level.id} onClick={() => setComplexity(level.id)}
                            className={`relative text-left px-3 py-2 rounded-lg border-2 transition-all overflow-hidden ${
                              active
                                ? "border-primary bg-primary/[0.07]"
                                : "border-black/12 bg-white hover:border-primary/50 hover:bg-primary/[0.02]"
                            }`}
                          >
                            {active && (
                              <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
                                <Checkmark />
                              </span>
                            )}
                            <span className={`font-semibold text-xs block pr-4 ${active ? "text-primary" : "text-heading"}`}>{level.label}</span>
                            <span className="text-[10px] block leading-tight mt-0.5 text-black/40">{level.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 — Branding */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">2</span>
                <h2 className="font-heading text-base text-heading">Logo & branding</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: false, label: "J'ai déjà mon branding", sub: "Logo, couleurs et identité prêts" },
                  { value: true,  label: "Vous créez mon branding", sub: "Logo, palette, typographie inclus" },
                ].map(({ value, label, sub }) => {
                  const active = needsBranding === value;
                  return (
                    <button key={String(value)} onClick={() => setNeedsBranding(value)}
                      className={`relative text-left px-4 py-3 rounded-xl border-2 transition-all overflow-hidden ${
                        active
                          ? "border-primary bg-primary/[0.07]"
                          : "border-black/12 bg-white hover:border-primary/50 hover:bg-primary/[0.02]"
                      }`}
                    >
                      {active && (
                        <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                          <Checkmark />
                        </span>
                      )}
                      <span className={`text-sm block pr-5 transition-all ${active ? "font-semibold text-primary" : "font-medium text-heading"}`}>{label}</span>
                      <span className="text-xs text-black/45 mt-0.5 block">{sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 — Intégrations */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">3</span>
                <h2 className="font-heading text-base text-heading">Intégrations & services</h2>
              </div>

              <div className="rounded-xl border border-black/12 overflow-hidden bg-white">
                {integrationOptions.map((opt, i) => {
                  const active = integrations.has(opt.id);
                  return (
                    <button key={opt.id} onClick={() => toggleIntegration(opt.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all ${
                        i < integrationOptions.length - 1 ? "border-b border-black/8" : ""
                      } ${active ? "bg-primary/[0.07]" : "hover:bg-black/[0.02]"}`}
                    >
                      <div className={`shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                        active ? "bg-primary border-primary" : "border-black/25"
                      }`}>
                        {active && <Checkmark />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`text-sm transition-all ${active ? "font-semibold text-primary" : "font-medium text-heading"}`}>{opt.label}</span>
                        <span className="text-xs text-black/40 ml-2 hidden sm:inline">{opt.desc}</span>
                      </div>
                      {opt.monthly && (
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-black/30 bg-black/5 px-2 py-0.5 rounded-full">mensuel</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── Right: result ── */}
          <div className="lg:sticky lg:top-20 rounded-2xl border border-black/10 bg-white p-5 flex flex-col gap-4">

            {/* Total */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1.5 text-black/40">
                Développement (coût unique)
              </p>
              <div className="text-2xl xl:text-3xl font-heading font-normal text-heading transition-all duration-300">
                {tier.range}<span className="text-base align-super text-black/30">*</span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mt-1 text-primary">{tier.label}</p>
            </div>

            {/* Frais mensuels */}
            {monthlyItems.length > 0 && (
              <>
                <div className="w-full h-px bg-black/8" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-black/40">Frais mensuels</p>
                  <div className="flex flex-col gap-1 mb-2">
                    {monthlyItems.map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-xs text-heading">
                        <span className="text-black/55">{item.label}</span>
                        <span className="font-medium">{fmt(item.min)} à {fmt(item.max)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold pt-1.5 border-t border-black/8 text-heading">
                    <span>Total / mois</span>
                    <span>{fmt(monthlyTotal.min)} à {fmt(monthlyTotal.max)}</span>
                  </div>
                </div>
              </>
            )}

            <p className="text-[10px] leading-relaxed text-black/35">
              * Estimation approximative basée sur nos projets livrés. Ne remplace pas une rencontre, on vous donne un vrai devis après un premier appel.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-2">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Discutons de votre projet
              </Link>
              <Link href="https://calendly.com/mathieumorinlamy/appel-exploratoire-de-15-minutes-par-telephone"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-black/15 font-medium text-heading hover:border-black/30 transition-colors text-sm"
              >
                Prendre rendez-vous <Arrow className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      <div id="contact"><Footer /></div>

      {/* Sticky mobile price bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-black/10 px-5 py-3 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-black/40">Estimation</p>
          <p className="text-base font-heading text-heading leading-tight">{tier.range}</p>
        </div>
        <Link href="/contact"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Discutons
        </Link>
      </div>
    </>
  );
}
