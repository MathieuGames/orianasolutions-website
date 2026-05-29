"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import Input from "@/components/ui/input";
import Link from "next/link";

const auditPoints = [
  {
    icon: "🔍",
    title: "SEO on-page",
    desc: "Balises title, meta descriptions, structure des titres, mots-clés, données structurées.",
  },
  {
    icon: "⚡",
    title: "Vitesse et performance",
    desc: "Temps de chargement, poids des images, score Core Web Vitals.",
  },
  {
    icon: "📱",
    title: "Compatibilité mobile",
    desc: "Affichage sur téléphone, navigation, boutons et lisibilité.",
  },
  {
    icon: "🎯",
    title: "Conversion",
    desc: "Clarté du message, appels à l'action, parcours utilisateur.",
  },
  {
    icon: "🔒",
    title: "Sécurité de base",
    desc: "HTTPS, certificat SSL, formulaires sécurisés.",
  },
  {
    icon: "🗺️",
    title: "Présence locale",
    desc: "Google Business, cohérence NAP, sitemap et robots.txt.",
  },
];

const deliverables = [
  "Un rapport clair avec vos points forts et vos lacunes",
  "Des recommandations concrètes classées par priorité",
  "Un appel de 30 minutes pour vous expliquer les résultats",
  "Aucun engagement — 100% gratuit",
];

export default function AuditGratuitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value.trim(),
      url: (form.elements.namedItem("url") as HTMLInputElement)?.value.trim(),
    };

    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Votre nom est requis";
    if (!data.email) newErrors.email = "Votre courriel est requis";
    if (!data.url) newErrors.url = "L'URL de votre site est requise";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
  }

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      {/* Hero */}
      <div className="bg-primary-light border-b border-black/6">
        <Breadcrumb items={[{ label: "Audit gratuit" }]} />
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-12 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Gratuit, sans engagement</p>
              <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl text-heading leading-tight mb-4">
                Votre site web<br />perd peut-être des clients.
              </h1>
              <p className="text-black/50 text-base leading-relaxed">
                On analyse votre site gratuitement et on vous dit exactement ce qui nuit à votre visibilité, votre vitesse et votre conversion.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-black/60">
                  <span className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="bg-[#F8F9FB] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* Left — what we audit */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading font-normal text-2xl text-heading">Ce qu'on analyse</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {auditPoints.map((point, i) => (
                <div key={i} className="bg-white rounded-2xl border border-black/6 p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{point.icon}</span>
                    <p className="text-sm font-semibold text-heading">{point.title}</p>
                  </div>
                  <p className="text-xs text-black/45 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-black/6 p-6 flex items-start gap-4">
              <span className="text-3xl shrink-0">⏱️</span>
              <div>
                <p className="text-sm font-semibold text-heading mb-1">Délai de livraison</p>
                <p className="text-sm text-black/50 leading-relaxed">
                  On vous revient en moins de 72 heures ouvrables avec votre rapport et une proposition de créneau pour en discuter.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:sticky lg:top-24">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-black/6 shadow-sm p-8 flex flex-col items-center gap-5 text-center">
                <span className="text-5xl">🎉</span>
                <div>
                  <h3 className="font-heading font-normal text-2xl text-heading mb-2">Demande reçue !</h3>
                  <p className="text-sm text-black/50 leading-relaxed">
                    On analyse votre site et on vous revient dans les 72 heures avec votre rapport gratuit.
                  </p>
                </div>
                <Link href="/"
                  className="text-sm text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                  Retour à l'accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-black/6 shadow-sm p-6 sm:p-8 flex flex-col gap-5">
                <div>
                  <h3 className="font-heading font-normal text-xl text-heading mb-1">Demander mon audit gratuit</h3>
                  <p className="text-xs text-black/40">On vous répond en moins de 72h ouvrables.</p>
                </div>

                <div>
                  <Input label="Votre nom" placeholder="Prénom et nom" name="name" required
                    onChange={() => errors.name && setErrors(p => ({ ...p, name: "" }))} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input label="Courriel" placeholder="votre@courriel.com" name="email" type="email" required
                    onChange={() => errors.email && setErrors(p => ({ ...p, email: "" }))} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input label="URL de votre site web" placeholder="https://votresite.com" name="url" type="url" required
                    onChange={() => errors.url && setErrors(p => ({ ...p, url: "" }))} />
                  {errors.url && <p className="text-red-500 text-xs mt-1">{errors.url}</p>}
                </div>

                <div>
                  <Input label="Industrie (optionnel)" placeholder="Ex: immobilier, restauration, services..." name="industry" />
                </div>

                <button type="submit"
                  className="w-full inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm mt-1">
                  Recevoir mon audit gratuit →
                </button>

                <p className="text-[11px] text-black/30 text-center leading-relaxed">
                  Aucun engagement. On ne vend rien sans votre accord.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

      <div id="contact"><Footer /></div>
    </>
  );
}
