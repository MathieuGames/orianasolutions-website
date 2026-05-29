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
  icon?: string;
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
      { label: "Entrepreneur", desc: "Je lance un nouveau projet", icon: "🚀", scores: { app_web: 1, app_mobile: 1 } },
      { label: "Dirigeant", desc: "Je modernise mon entreprise", icon: "💼", scores: { logiciel: 1, app_web: 1 } },
      { label: "Professionnel indépendant", desc: "Consultant, coach, expert", icon: "👤", scores: { site_web: 2 } },
      { label: "Responsable d'équipe", desc: "Je gère une équipe ou un département", icon: "🏢", scores: { logiciel: 2 } },
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
      { label: "Mes clients", desc: "Le grand public, des acheteurs", icon: "🧑‍💻", scores: { site_web: 1, app_web: 1, app_mobile: 1 } },
      { label: "Mon équipe interne", desc: "Employés, gestionnaires", icon: "👥", scores: { logiciel: 3 } },
      { label: "Les deux", desc: "Clients et employés", icon: "🔄", scores: { app_web: 2, logiciel: 1 } },
    ],
  },
  {
    id: 4,
    question: "Les utilisateurs auront-ils un compte personnel ?",
    sub: "Connexion, profil, données sauvegardées",
    format: "binary",
    answers: [
      { label: "Oui", desc: "Chaque utilisateur a son profil", icon: "✅", scores: { app_web: 2, app_mobile: 2 } },
      { label: "Non", desc: "Tout est public, pas de connexion", icon: "🚫", scores: { site_web: 3 } },
      { label: "Pas encore décidé", icon: "🤔", scores: {} },
    ],
  },
  {
    id: 5,
    question: "À quelle fréquence vos utilisateurs vont-ils s'en servir ?",
    format: "visual",
    answers: [
      { label: "Rarement", desc: "Quelques fois par année", icon: "📅", scores: { site_web: 2 } },
      { label: "Régulièrement", desc: "Plusieurs fois par semaine", icon: "📆", scores: { app_web: 2 } },
      { label: "Tous les jours", desc: "Utilisation quotidienne", icon: "⚡", scores: { app_mobile: 2, logiciel: 1 } },
    ],
  },
  {
    id: 6,
    question: "Le mobile est-il prioritaire pour vos utilisateurs ?",
    format: "binary",
    answers: [
      { label: "Oui, surtout sur téléphone", icon: "📱", scores: { app_mobile: 3 } },
      { label: "Non, desktop suffit", icon: "🖥️", scores: { app_web: 2, logiciel: 1 } },
      { label: "Les deux sont importants", icon: "💻", scores: { app_web: 1, app_mobile: 1 } },
    ],
  },
  {
    id: 7,
    question: "Les utilisateurs devront-ils payer pour accéder ?",
    sub: "Abonnement, achat unique, transaction",
    format: "binary",
    answers: [
      { label: "Oui", icon: "💳", scores: { app_web: 2, app_mobile: 1 } },
      { label: "Non, c'est gratuit", icon: "🎁", scores: { site_web: 1, logiciel: 1 } },
      { label: "Pas encore décidé", icon: "🤔", scores: {} },
    ],
  },
  {
    id: 8,
    question: "Vous partez de...",
    format: "binary",
    answers: [
      { label: "Zéro", desc: "Nouveau projet, rien en place", icon: "✨", scores: { app_web: 1, app_mobile: 1 } },
      { label: "Un existant à améliorer", desc: "Site ou outil déjà en place", icon: "🔧", scores: { site_web: 1, logiciel: 1 } },
      { label: "Une idée seulement", desc: "Rien de concret encore", icon: "💡", scores: {} },
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

const resultData: Record<Category, { title: string; icon: string; color: string; bg: string; desc: string; details: string[]; href: string }> = {
  site_web: {
    title: "Site web sur mesure",
    icon: "🌐",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200",
    desc: "Votre projet est principalement informatif ou vitrine. Un site web sur mesure vous donnera une présence professionnelle, optimisée pour Google et parfaitement adaptée à votre image.",
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
    icon: "💻",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
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
    icon: "📱",
    color: "text-violet-700",
    bg: "bg-violet-50 border-violet-200",
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
    icon: "⚙️",
    color: "text-orange-700",
    bg: "bg-orange-50 border-orange-200",
    desc: "Votre besoin est complexe ou interne à votre organisation. Un logiciel sur mesure vous donnera exactement ce qu'il vous faut, sans compromis.",
    details: [
      "Adapté à vos processus d'affaires spécifiques",
      "Intégrations avec vos outils existants",
      "Gestion des rôles et des permissions",
      "Idéal pour les entreprises en croissance",
    ],
    href: "/services",
  },
};

const previewCards = [
  { icon: "🌐", label: "Site web", color: "bg-emerald-50 border-emerald-100" },
  { icon: "💻", label: "App web", color: "bg-blue-50 border-blue-100" },
  { icon: "📱", label: "App mobile", color: "bg-violet-50 border-violet-100" },
  { icon: "⚙️", label: "Logiciel", color: "bg-orange-50 border-orange-100" },
];

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
    }, 260);
  }

  function reset() {
    setStep(0);
    setScores({});
    setSelected(null);
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = "Vous lancez un projet numérique ? Ce quiz gratuit vous dit exactement ce qu'il vous faut.";
    try {
      if (navigator.share) {
        await navigator.share({ title: "Quiz Oriana Solutions", text, url });
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

      <div className="min-h-[calc(100vh-80px)] bg-primary-light flex flex-col">

        {/* Progress bar */}
        {!isIntro && (
          <div className="w-full h-1.5 bg-black/8">
            <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        )}

        <div className="flex-1 flex items-center justify-center px-5 py-10">
          <div className="w-full max-w-xl">

            {/* ── Intro ── */}
            {isIntro && (
              <div className="flex flex-col gap-8">
                <div className="text-center flex flex-col items-center gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Outil gratuit</p>
                  <h1 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight">
                    De quoi votre projet<br />a-t-il vraiment besoin ?
                  </h1>
                  <p className="text-black/50 text-base max-w-sm leading-relaxed">
                    Site web, application web, app mobile ou logiciel sur mesure — 10 questions pour trouver la bonne réponse.
                  </p>
                </div>

                {/* Preview cards */}
                <div className="grid grid-cols-2 gap-3">
                  {previewCards.map((card) => (
                    <div key={card.label} className={`rounded-2xl border ${card.color} px-5 py-4 flex items-center gap-3`}>
                      <span className="text-2xl">{card.icon}</span>
                      <span className="text-sm font-medium text-heading">{card.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                  >
                    Commencer le quiz →
                  </button>
                  <p className="text-xs text-black/35">Sans inscription. Résultat immédiat. 2 minutes.</p>
                </div>
              </div>
            )}

            {/* ── Question ── */}
            {!isIntro && !isResult && currentQuestion && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary">{step} / {questions.length}</span>
                  </div>
                  <button onClick={reset} className="text-xs text-black/35 hover:text-black/60 transition-colors">
                    Recommencer
                  </button>
                </div>

                <div>
                  <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading leading-tight">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.sub && (
                    <p className="text-sm text-black/45 mt-2">{currentQuestion.sub}</p>
                  )}
                </div>

                {/* MC format */}
                {currentQuestion.format === "mc" && (
                  <div className="flex flex-col gap-3">
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all ${
                          selected === i ? "border-primary bg-primary/8" : "border-black/12 bg-white hover:border-primary/40"
                        }`}
                      >
                        <span className="text-sm font-medium text-heading block">{answer.label}</span>
                        {answer.desc && <span className="text-xs text-black/40 mt-0.5 block">{answer.desc}</span>}
                      </button>
                    ))}
                  </div>
                )}

                {/* Visual format — big cards with icon */}
                {currentQuestion.format === "visual" && (
                  <div className={`grid gap-3 ${currentQuestion.answers.length === 4 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`text-center px-4 py-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                          selected === i ? "border-primary bg-primary/8" : "border-black/12 bg-white hover:border-primary/40"
                        }`}
                      >
                        <span className="text-3xl">{answer.icon}</span>
                        <span className="text-sm font-semibold text-heading">{answer.label}</span>
                        {answer.desc && <span className="text-xs text-black/40 leading-tight">{answer.desc}</span>}
                      </button>
                    ))}
                  </div>
                )}

                {/* Binary format — large 2-3 options */}
                {currentQuestion.format === "binary" && (
                  <div className="flex flex-col gap-3">
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all ${
                          selected === i ? "border-primary bg-primary/8" : "border-black/12 bg-white hover:border-primary/40"
                        }`}
                      >
                        {answer.icon && <span className="text-2xl shrink-0">{answer.icon}</span>}
                        <div className="text-left">
                          <span className="text-sm font-semibold text-heading block">{answer.label}</span>
                          {answer.desc && <span className="text-xs text-black/45 mt-0.5 block">{answer.desc}</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── Result ── */}
            {isResult && result && (
              <div className="flex flex-col gap-6">
                <div className="text-center flex flex-col items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Votre résultat</p>
                  <span className="text-6xl">{result.icon}</span>
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading">{result.title}</h2>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col gap-5 shadow-sm">
                  <p className="text-[15px] text-black/60 leading-7">{result.desc}</p>
                  <ul className="flex flex-col gap-2.5">
                    {result.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-black/70">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                          <CheckIcon />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Link href={result.href}
                      className="flex-1 inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                      En savoir plus →
                    </Link>
                    <Link href="/contact"
                      className="flex-1 inline-flex items-center justify-center border border-black/15 text-heading font-medium px-6 py-3 rounded-xl hover:border-black/30 transition-colors text-sm">
                      Parler à l'équipe
                    </Link>
                  </div>
                </div>

                {/* Share */}
                <div className="bg-white rounded-2xl border border-black/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-heading">Partagez ce quiz</p>
                    <p className="text-xs text-black/45 mt-0.5">Utile pour un collègue ou un associé qui hésite aussi</p>
                  </div>
                  <button onClick={handleShare}
                    className="shrink-0 inline-flex items-center gap-2 border border-black/15 text-heading font-medium px-5 py-2.5 rounded-xl hover:border-black/30 transition-colors text-sm">
                    {copied ? "✓ Lien copié !" : (
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
                  <button onClick={reset} className="text-sm text-black/40 hover:text-black/60 transition-colors underline underline-offset-2">
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
