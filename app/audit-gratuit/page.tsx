"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import AnimatedContent from "@/components/ui/animated-content";

const auditPoints = [
  { title: "Référencement naturel (SEO)", desc: "Balises title et meta, structure des titres, mots-clés, données structurées, indexation Google." },
  { title: "Vitesse et performance", desc: "Score PageSpeed et Core Web Vitals — les métriques que Google utilise pour classer les sites." },
  { title: "Expérience mobile", desc: "Affichage sur téléphone et tablette, taille des éléments, navigation tactile." },
  { title: "Conversion et clarté", desc: "Votre message est-il clair en 5 secondes ? Vos boutons d'action sont-ils visibles et efficaces ?" },
  { title: "Sécurité de base", desc: "HTTPS actif, certificat SSL valide, formulaires protégés, redirections correctes." },
  { title: "Présence locale et technique", desc: "Google Business, sitemap XML, robots.txt, balises Open Graph pour les réseaux sociaux." },
];

const faqItems = [
  { q: "Combien de temps ça prend ?", a: "On vous revient dans les 72 heures ouvrables avec un rapport complet et une proposition de créneau pour en discuter." },
  { q: "C'est vraiment gratuit ?", a: "Oui, sans condition. On ne facture rien et on ne vous vend rien sans votre accord explicite." },
  { q: "Qu'est-ce que je reçois exactement ?", a: "Un rapport structuré avec vos points forts, vos lacunes prioritaires et des recommandations concrètes. Suivi d'un appel de 30 minutes." },
  { q: "Mon site doit-il être fait par Oriana Solutions ?", a: "Non. On audite n'importe quel site : WordPress, Wix, sur mesure ou autre." },
];

const concerns = [
  "Mon site ne génère pas assez de trafic",
  "Mon site est lent ou peu performant",
  "Mon site n'est pas bien affiché sur mobile",
  "Mon site ne convertit pas les visiteurs en clients",
  "Je veux juste savoir où j'en suis",
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

      <div className="bg-primary-light md:bg-transparent">
        <Breadcrumb items={[{ label: "Audit gratuit" }]} />
        <AboutSectionMobileBlock
          tag="Gratuit, sans engagement"
          title="Audit de site web gratuit"
          description="On analyse votre site de fond en comble et on vous dit exactement ce qui cloche."
        />
      </div>

      <Container className="w-full pt-6! pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Gauche — titre + ce qu'on analyse + FAQ */}
          <AnimatedContent distance={40} duration={0.8} threshold={0.1} className="flex flex-col gap-10">

            {/* Desktop title */}
            <div className="hidden md:flex flex-col gap-4 items-start">
              <Tag>Gratuit, sans engagement</Tag>
              <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl text-heading leading-tight">
                On analyse votre site.<br />On vous dit ce qui cloche.
              </h1>
              <p className="text-base text-black/50 leading-relaxed max-w-sm">
                SEO, vitesse, mobile, conversion et sécurité. Vous recevez un rapport clair et un appel de 30 minutes pour en discuter.
              </p>
            </div>

            {/* Ce qu'on analyse */}
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Ce qu&apos;on analyse</p>
              <div className="flex flex-col divide-y divide-black/6">
                {auditPoints.map((p, i) => (
                  <div key={i} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                    <span className="text-xs font-semibold text-primary/50 tracking-widest mt-0.5 shrink-0 w-5">0{i + 1}</span>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-heading">{p.title}</p>
                      <p className="text-sm text-black/45 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Questions fréquentes</p>
              <div className="flex flex-col divide-y divide-black/6 border-y border-black/6">
                {faqItems.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-4 text-left gap-4"
                    >
                      <span className="text-sm font-medium text-heading">{item.q}</span>
                      <span className={`text-black/30 text-xl transition-transform duration-200 shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <p className="text-sm text-black/50 leading-relaxed pb-4">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </AnimatedContent>

          {/* Droite — formulaire sticky */}
          <AnimatedContent distance={40} duration={0.8} delay={0.15} threshold={0.1} className="lg:sticky lg:top-24">
            {submitted ? (
              <div className="bg-white rounded-3xl border border-black/6 shadow-sm p-10 flex flex-col gap-4 text-center items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 12 12" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6.5l3 3L10 3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-normal text-xl text-heading mb-1">Demande reçue</h3>
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
                  <Input label="Industrie" placeholder="Ex : immobilier, restauration, services..." name="industry" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-heading">Votre principale préoccupation</label>
                  <div className="flex flex-wrap gap-2">
                    {concerns.map((c) => (
                      <button key={c} type="button"
                        onClick={() => toggleConcern(c)}
                        className={`text-left text-xs px-3 py-2 rounded-xl border transition-all ${
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

                <Button type="submit" variant="primary" className="w-full">
                  Recevoir mon audit gratuit
                </Button>

                <p className="text-[11px] text-black/30 text-center">Aucun engagement. On ne vend rien sans votre accord.</p>
              </form>
            )}
          </AnimatedContent>

        </div>
      </Container>

      <div id="contact"><Footer /></div>
    </>
  );
}
