"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import Input from "@/components/ui/input";

const concerns = [
  "Mon site ne génère pas assez de trafic",
  "Mon site est lent ou peu performant",
  "Mon site n'est pas bien affiché sur mobile",
  "Mon site ne convertit pas les visiteurs en clients",
  "Je veux juste savoir où j'en suis",
];

const auditPoints = [
  {
    icon: "🔍",
    title: "Référencement naturel (SEO)",
    desc: "Balises title et meta, structure des titres H1-H6, mots-clés ciblés, données structurées, indexation Google.",
  },
  {
    icon: "⚡",
    title: "Vitesse et Core Web Vitals",
    desc: "Score PageSpeed, LCP, CLS, FID — les métriques que Google utilise pour classer les sites.",
  },
  {
    icon: "📱",
    title: "Expérience mobile",
    desc: "Affichage sur téléphone et tablette, taille des éléments, navigation tactile.",
  },
  {
    icon: "🎯",
    title: "Conversion et clarté",
    desc: "Est-ce que votre message est clair en 5 secondes ? Les boutons d'action sont-ils visibles et efficaces ?",
  },
  {
    icon: "🔒",
    title: "Sécurité de base",
    desc: "HTTPS actif, certificat SSL valide, formulaires protégés, redirections correctes.",
  },
  {
    icon: "🗺️",
    title: "Présence locale et technique",
    desc: "Google Business, sitemap XML, robots.txt, balises Open Graph pour les réseaux sociaux.",
  },
];

const faqItems = [
  {
    q: "Combien de temps ça prend ?",
    a: "On vous revient dans les 72 heures ouvrables suivant votre demande avec un rapport complet et une proposition de créneau pour en discuter.",
  },
  {
    q: "C'est vraiment gratuit ?",
    a: "Oui, sans condition. On ne facture rien et on ne vous vend rien sans votre accord explicite. L'audit est notre façon de vous montrer ce qu'on peut faire.",
  },
  {
    q: "Qu'est-ce que je reçois exactement ?",
    a: "Un rapport structuré qui identifie vos points forts, vos lacunes prioritaires et des recommandations concrètes. Le tout suivi d'un appel de 30 minutes pour tout expliquer.",
  },
  {
    q: "Mon site doit-il être fait par Oriana Solutions ?",
    a: "Non. On audite n'importe quel site, peu importe qui l'a construit — WordPress, Wix, sur mesure ou autre.",
  },
];

export default function AuditGratuitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function toggleConcern(c: string) {
    setSelectedConcerns(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement)?.value.trim() || "";

    const data = { name: get("name"), email: get("email"), url: get("url") };
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Requis";
    if (!data.email) newErrors.email = "Requis";
    if (!data.url) newErrors.url = "Requis";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitted(true);
  }

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      <div className="bg-primary-light border-b border-black/6">
        <Breadcrumb items={[{ label: "Audit gratuit" }]} />
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-12 pt-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Gratuit, sans engagement</p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl text-heading leading-tight mb-4 max-w-2xl">
            Audit de site web gratuit à Montréal — on vous dit ce qui cloche.
          </h1>
          <p className="text-black/55 text-base leading-relaxed max-w-xl">
            On regarde votre site de fond en comble : SEO, vitesse, mobile, conversion et sécurité. Vous recevez un rapport clair et un appel de 30 minutes pour en discuter.
          </p>
        </div>
      </div>

      <div className="bg-[#F8F9FB]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* Left */}
          <div className="flex flex-col gap-10">

            {/* What we check */}
            <div>
              <h2 className="font-heading font-normal text-2xl text-heading mb-6">Ce qu'on analyse</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {auditPoints.map((p, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-black/6 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{p.icon}</span>
                      <p className="text-sm font-semibold text-heading">{p.title}</p>
                    </div>
                    <p className="text-xs text-black/45 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What you get */}
            <div className="bg-white rounded-2xl border border-black/6 p-6 flex flex-col gap-4">
              <h2 className="font-heading font-normal text-xl text-heading">Ce que vous recevez</h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "📄", label: "Un rapport complet", desc: "Points forts, lacunes et recommandations classées par priorité." },
                  { icon: "📞", label: "Un appel de 30 minutes", desc: "On vous explique les résultats et on répond à vos questions." },
                  { icon: "🗓️", label: "Dans les 72h ouvrables", desc: "On vous revient rapidement, pas dans trois semaines." },
                  { icon: "🎁", label: "Sans frais, sans obligation", desc: "On ne facture rien. Si la suite vous intéresse, on en parle à ce moment-là." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-heading">{item.label}</p>
                      <p className="text-xs text-black/45 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-heading font-normal text-2xl text-heading mb-4">Questions fréquentes</h2>
              <div className="flex flex-col gap-2">
                {faqItems.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-black/6 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-heading">{item.q}</span>
                      <span className={`text-black/30 text-lg transition-transform duration-200 shrink-0 ml-4 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4">
                        <p className="text-sm text-black/55 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
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
                  <p className="text-sm text-black/50 leading-relaxed">On analyse votre site et on vous revient dans les 72 heures avec votre rapport.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-black/6 shadow-sm p-6 sm:p-8 flex flex-col gap-5">
                <div>
                  <h3 className="font-heading font-normal text-xl text-heading mb-1">Demander mon audit gratuit</h3>
                  <p className="text-xs text-black/40">Réponse en moins de 72h ouvrables.</p>
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
                  <Input label="URL de votre site web" placeholder="https://votresite.com" name="url" required
                    onChange={() => errors.url && setErrors(p => ({ ...p, url: "" }))} />
                  {errors.url && <p className="text-red-500 text-xs mt-1">{errors.url}</p>}
                </div>

                <div>
                  <Input label="Industrie" placeholder="Ex: immobilier, restauration, services..." name="industry" />
                </div>

                <div>
                  <Input label="Depuis combien de temps votre site est en ligne ?" placeholder="Ex: 2 ans, 6 mois..." name="age" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#111111]">Votre principale préoccupation</label>
                  <div className="flex flex-col gap-2">
                    {concerns.map((c) => (
                      <button key={c} type="button"
                        onClick={() => toggleConcern(c)}
                        className={`text-left text-xs px-3 py-2.5 rounded-xl border transition-all ${
                          selectedConcerns.includes(c)
                            ? "border-primary bg-primary/8 text-primary font-medium"
                            : "border-black/12 text-black/55 hover:border-primary/40"
                        }`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Input label="Autre chose à nous dire ? (optionnel)" variant="textarea" rows={3}
                    placeholder="Contexte, objectifs, problèmes spécifiques..." name="message" />
                </div>

                <button type="submit"
                  className="w-full inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Recevoir mon audit gratuit →
                </button>

                <p className="text-[11px] text-black/30 text-center">Aucun engagement. On ne vend rien sans votre accord.</p>
              </form>
            )}
          </div>
        </div>
      </div>

      <div id="contact"><Footer /></div>
    </>
  );
}
