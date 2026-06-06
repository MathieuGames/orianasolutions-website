"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

type Category = "site_web" | "app_web" | "app_mobile" | "logiciel";
type Format = "mc" | "binary" | "visual";

interface Answer {
  label: string;
  desc?: string;
  scores: Partial<Record<Category, number>>;
}

interface Question {
  id: number;
  question: string;
  sub?: string;
  format: Format;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Vous êtes...",
    sub: "Choisissez ce qui vous décrit le mieux",
    format: "visual",
    answers: [
      { label: "Entrepreneur", desc: "Je lance un nouveau projet", scores: { app_web: 1, app_mobile: 1 } },
      { label: "Dirigeant", desc: "Je modernise mon entreprise", scores: { logiciel: 1, app_web: 1 } },
      { label: "Professionnel indépendant", desc: "Consultant, coach, expert", scores: { site_web: 2 } },
      { label: "Responsable d'équipe", desc: "Je gère une équipe ou un département", scores: { logiciel: 2 } },
    ],
  },
  {
    id: 2,
    question: "Quel est l'objectif principal de votre projet ?",
    format: "mc",
    answers: [
      { label: "Présenter mes services et attirer des clients", scores: { site_web: 3 } },
      { label: "Permettre à des utilisateurs de gérer leurs données", scores: { app_web: 2, app_mobile: 1 } },
      { label: "Automatiser des processus internes", scores: { logiciel: 3 } },
      { label: "Lancer un produit numérique ou un SaaS", scores: { app_web: 3 } },
    ],
  },
  {
    id: 3,
    question: "Qui va utiliser votre solution ?",
    format: "visual",
    answers: [
      { label: "Mes clients", desc: "Le grand public, des acheteurs", scores: { site_web: 1, app_web: 1, app_mobile: 1 } },
      { label: "Mon équipe interne", desc: "Employés, gestionnaires", scores: { logiciel: 3 } },
      { label: "Les deux", desc: "Clients et employés", scores: { app_web: 2, logiciel: 1 } },
    ],
  },
  {
    id: 4,
    question: "Les utilisateurs auront-ils un compte personnel ?",
    sub: "Connexion, profil, données sauvegardées",
    format: "binary",
    answers: [
      { label: "Oui", desc: "Chaque utilisateur a son profil", scores: { app_web: 2, app_mobile: 2 } },
      { label: "Non", desc: "Tout est public, pas de connexion", scores: { site_web: 3 } },
      { label: "Pas encore décidé", scores: {} },
    ],
  },
  {
    id: 5,
    question: "À quelle fréquence vos utilisateurs vont-ils s'en servir ?",
    format: "visual",
    answers: [
      { label: "Rarement", desc: "Quelques fois par année", scores: { site_web: 2 } },
      { label: "Régulièrement", desc: "Plusieurs fois par semaine", scores: { app_web: 2 } },
      { label: "Tous les jours", desc: "Utilisation quotidienne", scores: { app_mobile: 2, logiciel: 1 } },
    ],
  },
  {
    id: 6,
    question: "Le mobile est-il prioritaire pour vos utilisateurs ?",
    format: "binary",
    answers: [
      { label: "Oui, surtout sur téléphone", scores: { app_mobile: 3 } },
      { label: "Non, desktop suffit", scores: { app_web: 2, logiciel: 1 } },
      { label: "Les deux sont importants", scores: { app_web: 1, app_mobile: 1 } },
    ],
  },
  {
    id: 7,
    question: "Les utilisateurs devront-ils payer pour accéder ?",
    sub: "Abonnement, achat unique, transaction",
    format: "binary",
    answers: [
      { label: "Oui", scores: { app_web: 2, app_mobile: 1 } },
      { label: "Non, c'est gratuit", scores: { site_web: 1, logiciel: 1 } },
      { label: "Pas encore décidé", scores: {} },
    ],
  },
  {
    id: 8,
    question: "Vous partez de...",
    format: "binary",
    answers: [
      { label: "Zéro", desc: "Nouveau projet, rien en place", scores: { app_web: 1, app_mobile: 1 } },
      { label: "Un existant à améliorer", desc: "Site ou outil déjà en place", scores: { site_web: 1, logiciel: 1 } },
      { label: "Une idée seulement", desc: "Rien de concret encore", scores: {} },
    ],
  },
  {
    id: 9,
    question: "Quel est votre budget approximatif ?",
    format: "mc",
    answers: [
      { label: "Moins de 10 000 $", scores: { site_web: 3 } },
      { label: "10 000 $ à 30 000 $", scores: { app_web: 2, site_web: 1 } },
      { label: "30 000 $ et plus", scores: { app_mobile: 2, logiciel: 2 } },
      { label: "Je ne sais pas encore", scores: {} },
    ],
  },
  {
    id: 10,
    question: "Quelle est la complexité de votre projet ?",
    format: "mc",
    answers: [
      { label: "Simple", desc: "Informations, photos, formulaire de contact", scores: { site_web: 3 } },
      { label: "Moyen", desc: "Comptes utilisateurs, tableau de bord, données", scores: { app_web: 3 } },
      { label: "Complexe", desc: "Multi-rôles, intégrations, processus avancés", scores: { logiciel: 3 } },
      { label: "Je ne sais pas encore", scores: {} },
    ],
  },
];

const resultData: Record<Category, { title: string; color: string; bg: string; border: string; desc: string; details: string[]; href: string }> = {
  site_web: {
    title: "Site web sur mesure",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    desc: "Votre projet est principalement informatif ou vitrine. Un site web sur mesure vous donnera une présence professionnelle, optimisée pour Google et adaptée à votre image.",
    details: [
      "Design unique à votre image de marque",
      "Optimisé pour le référencement local",
      "Rapide, sécurisé et compatible mobile",
      "Idéal pour les PME, consultants et professionnels",
    ],
    href: "/site-web-sur-mesure",
  },
  app_web: {
    title: "Application web",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    desc: "Votre projet nécessite que des utilisateurs se connectent et interagissent avec une plateforme. Une application web est la solution idéale.",
    details: [
      "Authentification et gestion de profils",
      "Tableaux de bord et données en temps réel",
      "Accessible depuis n'importe quel navigateur",
      "Idéal pour les SaaS, portails clients et outils internes",
    ],
    href: "/application-web",
  },
  app_mobile: {
    title: "Application mobile",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
    desc: "Vos utilisateurs sont principalement sur mobile et utilisent votre solution régulièrement. Une application iOS/Android est ce qu'il vous faut.",
    details: [
      "Disponible sur App Store et Google Play",
      "Notifications push et expérience native",
      "Conçue pour une utilisation quotidienne",
      "Idéal pour les apps grand public et B2C",
    ],
    href: "/developpement-application-mobile",
  },
  logiciel: {
    title: "Logiciel sur mesure",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    desc: "Votre besoin est complexe ou interne à votre organisation. Un logiciel sur mesure vous donnera exactement ce qu'il vous faut.",
    details: [
      "Adapté à vos processus d'affaires spécifiques",
      "Intégrations avec vos outils existants",
      "Gestion des rôles et des permissions",
      "Idéal pour les entreprises en croissance",
    ],
    href: "/services",
  },
};

function computeResult(scores: Partial<Record<Category, number>>): Category {
  const cats: Category[] = ["site_web", "app_web", "app_mobile", "logiciel"];
  return cats.reduce((best, cat) => (scores[cat] ?? 0) > (scores[best] ?? 0) ? cat : best, cats[0]);
}

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6.5l3 3L10 3" />
  </svg>
);

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<Category, number>>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const currentQuestion = questions[step - 1];
  const isIntro = step === 0;
  const isResult = step > questions.length;
  const result = isResult ? resultData[computeResult(scores)] : null;
  const progress = isResult ? 100 : Math.round((step / questions.length) * 100);

  function handleAnswer(answer: Answer, index: number) {
    setSelected(index);
    setTimeout(() => {
      const newScores = { ...scores };
      for (const [cat, pts] of Object.entries(answer.scores) as [Category, number][]) {
        newScores[cat] = (newScores[cat] ?? 0) + pts;
      }
      setScores(newScores);
      setSelected(null);
      setStep((s) => s + 1);
    }, 220);
  }

  function reset() {
    setStep(0);
    setScores({});
    setSelected(null);
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Quiz Oriana Solutions", text: "Vous lancez un projet numérique ? Ce quiz gratuit vous dit exactement ce qu'il vous faut.", url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {}
  }

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      <div className="min-h-[calc(100vh-68px)] bg-primary-light flex flex-col">

        {/* Progress bar */}
        {!isIntro && (
          <div className="w-full h-1 bg-black/8">
            <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
        )}

        <div className="flex-1 flex items-center justify-center px-5 py-12 md:py-16">
          <div className="w-full max-w-lg">

            {/* ── INTRO ── */}
            {isIntro && (
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Quiz gratuit · 2 minutes</span>
                  <h1 className="font-heading font-normal text-4xl sm:text-5xl text-heading leading-tight">
                    De quoi votre projet<br />a-t-il vraiment besoin ?
                  </h1>
                  <p className="text-black/50 text-base leading-relaxed max-w-sm">
                    10 questions pour identifier si c'est un site web, une application, ou un logiciel sur mesure.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Site web", sub: "Vitrine et présence",
                      iconBg: "bg-emerald-50", iconColor: "text-emerald-600",
                      icon: (
                        <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="10" cy="10" r="8" />
                          <path d="M2 10h16M10 2c-2.5 3-4 5-4 8s1.5 5 4 8M10 2c2.5 3 4 5 4 8s-1.5 5-4 8" />
                        </svg>
                      ),
                    },
                    {
                      label: "Application web", sub: "Plateforme et SaaS",
                      iconBg: "bg-blue-50", iconColor: "text-blue-600",
                      icon: (
                        <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="16" height="13" rx="2" />
                          <path d="M6 7h4M6 10h6M6 13h3" />
                        </svg>
                      ),
                    },
                    {
                      label: "Application mobile", sub: "iOS et Android",
                      iconBg: "bg-violet-50", iconColor: "text-violet-600",
                      icon: (
                        <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="2" width="10" height="16" rx="2" />
                          <circle cx="10" cy="15" r="0.8" fill="currentColor" stroke="none" />
                        </svg>
                      ),
                    },
                    {
                      label: "Logiciel sur mesure", sub: "Outil interne",
                      iconBg: "bg-orange-50", iconColor: "text-orange-600",
                      icon: (
                        <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="10" cy="10" r="2.5" />
                          <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
                        </svg>
                      ),
                    },
                  ].map((card) => (
                    <div key={card.label} className="bg-white rounded-2xl p-4 border border-black/8 flex flex-col gap-3">
                      <div className={`w-9 h-9 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
                        {card.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-heading leading-tight block">{card.label}</span>
                        <span className="text-xs text-black/40">{card.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <button onClick={() => setStep(1)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors text-sm">
                    Commencer le quiz
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </button>
                  <p className="text-center text-xs text-black/35">Résultat immédiat · Sans inscription</p>
                </div>
              </div>
            )}

            {/* ── QUESTION ── */}
            {!isIntro && !isResult && currentQuestion && (
              <div className="flex flex-col gap-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {step} / {questions.length}
                    </span>
                  </div>
                  <button onClick={reset} className="text-xs text-black/35 hover:text-black/60 transition-colors">
                    Recommencer
                  </button>
                </div>

                {/* Question */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.sub && (
                    <p className="text-sm text-black/45 leading-relaxed">{currentQuestion.sub}</p>
                  )}
                </div>

                {/* MC */}
                {currentQuestion.format === "mc" && (
                  <div className="flex flex-col gap-2.5">
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`group w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-150 ${
                          selected === i
                            ? "border-primary bg-primary/6 shadow-sm"
                            : "border-black/10 bg-white hover:border-primary/50 hover:shadow-sm"
                        }`}>
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-sm font-semibold text-heading block">{answer.label}</span>
                            {answer.desc && <span className="text-xs text-black/40 mt-0.5 block">{answer.desc}</span>}
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                            selected === i ? "border-primary bg-primary text-white" : "border-black/20 group-hover:border-primary/50"
                          }`}>
                            {selected === i && <CheckIcon />}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Visual */}
                {currentQuestion.format === "visual" && (
                  <div className={`grid gap-3 ${currentQuestion.answers.length === 4 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`group text-left px-5 py-5 rounded-2xl border-2 transition-all duration-150 flex flex-col gap-2 ${
                          selected === i
                            ? "border-primary bg-primary/6 shadow-sm"
                            : "border-black/10 bg-white hover:border-primary/50 hover:shadow-sm"
                        }`}>
                        <div className={`w-2 h-2 rounded-full transition-all ${
                          selected === i ? "bg-primary" : "bg-black/20 group-hover:bg-primary/50"
                        }`} />
                        <span className="text-sm font-semibold text-heading leading-tight">{answer.label}</span>
                        {answer.desc && <span className="text-xs text-black/40 leading-relaxed">{answer.desc}</span>}
                      </button>
                    ))}
                  </div>
                )}

                {/* Binary */}
                {currentQuestion.format === "binary" && (
                  <div className="flex flex-col gap-2.5">
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`group w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all duration-150 ${
                          selected === i
                            ? "border-primary bg-primary/6 shadow-sm"
                            : "border-black/10 bg-white hover:border-primary/50 hover:shadow-sm"
                        }`}>
                        <div className="text-left">
                          <span className="text-sm font-semibold text-heading block">{answer.label}</span>
                          {answer.desc && <span className="text-xs text-black/40 mt-0.5 block">{answer.desc}</span>}
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                          selected === i ? "border-primary bg-primary text-white" : "border-black/20 group-hover:border-primary/50"
                        }`}>
                          {selected === i && <CheckIcon />}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── RESULT ── */}
            {isResult && result && (
              <div className="flex flex-col gap-6">

                {/* Badge résultat */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Votre résultat</span>
                  <div className={`inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${result.bg} ${result.border} ${result.color}`}>
                    <div className={`w-2 h-2 rounded-full ${result.bg.replace("bg-", "bg-").replace("50", "500")}`} />
                    {result.title}
                  </div>
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight">
                    Il vous faut un{" "}
                    <span className={result.color}>{result.title.toLowerCase()}</span>.
                  </h2>
                </div>

                {/* Carte principale */}
                <div className="bg-white rounded-3xl border border-black/8 p-7 flex flex-col gap-6 shadow-sm">
                  <p className="text-[15px] text-black/60 leading-7">{result.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {result.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-black/70">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                          <CheckIcon />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 pt-1 border-t border-black/6">
                    <Link href={result.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                      En savoir plus
                      <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                    <Link href="/contact"
                      className="flex-1 inline-flex items-center justify-center border border-black/12 text-heading font-medium px-6 py-3 rounded-xl hover:border-black/30 transition-colors text-sm bg-white">
                      Parler à l'équipe
                    </Link>
                  </div>
                </div>

                {/* Partager */}
                <div className="bg-white rounded-2xl border border-black/8 p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-heading">Partagez ce quiz</p>
                    <p className="text-xs text-black/40 mt-0.5">Utile pour un associé ou un collègue</p>
                  </div>
                  <button onClick={handleShare}
                    className="shrink-0 inline-flex items-center gap-2 border border-black/12 text-heading font-medium px-4 py-2.5 rounded-xl hover:border-black/30 transition-colors text-sm bg-white">
                    {copied ? "Lien copié" : (
                      <>
                        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM7 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13 4l-6 3.5M13 16l-6-3.5"/>
                        </svg>
                        Partager
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <button onClick={reset} className="text-sm text-black/35 hover:text-black/55 transition-colors">
                    Recommencer le quiz
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <div id="contact"><Footer /></div>
    </>
  );
}
