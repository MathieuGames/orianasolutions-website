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

const resultData: Record<Category, { title: string; badge: string; desc: string; details: string[]; href: string }> = {
  site_web: {
    title: "Site web sur mesure",
    badge: "bg-emerald-100 text-emerald-800",
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
    badge: "bg-blue-100 text-blue-800",
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
    badge: "bg-violet-100 text-violet-800",
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
    badge: "bg-orange-100 text-orange-800",
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

const introCards = [
  { label: "Site web", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  { label: "Application web", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Application mobile", color: "bg-violet-50 border-violet-200 text-violet-800" },
  { label: "Logiciel sur mesure", color: "bg-orange-50 border-orange-200 text-orange-800" },
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

      <div className="min-h-[calc(100vh-80px)] bg-primary-light flex flex-col">

        {!isIntro && (
          <div className="w-full h-1.5 bg-black/8">
            <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        )}

        <div className="flex-1 flex items-center justify-center px-5 py-10">
          <div className="w-full max-w-xl">

            {/* Intro */}
            {isIntro && (
              <div className="flex flex-col items-center gap-7 text-center">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Quiz gratuit</p>
                  <h1 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight">
                    De quoi votre projet<br />a-t-il vraiment besoin ?
                  </h1>
                  <p className="text-black/50 text-base max-w-xs mx-auto leading-relaxed">
                    10 questions pour savoir si c'est un site web, une application web, mobile ou un logiciel sur mesure.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs">
                  {introCards.map((card) => (
                    <div key={card.label} className={`rounded-xl border px-4 py-3 text-center text-sm font-medium ${card.color}`}>
                      {card.label}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs text-black/40 flex-wrap justify-center">
                  <span>Gratuit</span>
                  <span className="text-black/20">·</span>
                  <span>2 minutes</span>
                  <span className="text-black/20">·</span>
                  <span>Résultat immédiat</span>
                  <span className="text-black/20">·</span>
                  <span>Sans inscription</span>
                </div>

                <button onClick={() => setStep(1)}
                  className="w-full max-w-xs inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Commencer le quiz →
                </button>
              </div>
            )}

            {/* Question */}
            {!isIntro && !isResult && currentQuestion && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary">{step} / {questions.length}</span>
                  <button onClick={reset} className="text-xs text-black/35 hover:text-black/60 transition-colors">Recommencer</button>
                </div>

                <div>
                  <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading leading-tight">{currentQuestion.question}</h2>
                  {currentQuestion.sub && <p className="text-sm text-black/45 mt-2">{currentQuestion.sub}</p>}
                </div>

                {/* MC */}
                {currentQuestion.format === "mc" && (
                  <div className="flex flex-col gap-3">
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all ${selected === i ? "border-primary bg-primary/8" : "border-black/12 bg-white hover:border-primary/40"}`}>
                        <span className="text-sm font-medium text-heading block">{answer.label}</span>
                        {answer.desc && <span className="text-xs text-black/40 mt-0.5 block">{answer.desc}</span>}
                      </button>
                    ))}
                  </div>
                )}

                {/* Visual */}
                {currentQuestion.format === "visual" && (
                  <div className={`grid gap-3 ${currentQuestion.answers.length === 4 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`text-left px-4 py-4 rounded-2xl border-2 transition-all flex flex-col gap-1 ${selected === i ? "border-primary bg-primary/8" : "border-black/12 bg-white hover:border-primary/40"}`}>
                        <span className="text-sm font-semibold text-heading">{answer.label}</span>
                        {answer.desc && <span className="text-xs text-black/40 leading-tight">{answer.desc}</span>}
                      </button>
                    ))}
                  </div>
                )}

                {/* Binary */}
                {currentQuestion.format === "binary" && (
                  <div className="flex flex-col gap-3">
                    {currentQuestion.answers.map((answer, i) => (
                      <button key={i} onClick={() => handleAnswer(answer, i)}
                        className={`w-full flex items-center px-6 py-4 rounded-2xl border-2 transition-all ${selected === i ? "border-primary bg-primary/8" : "border-black/12 bg-white hover:border-primary/40"}`}>
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

            {/* Result */}
            {isResult && result && (
              <div className="flex flex-col gap-6">
                <div className="text-center flex flex-col items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Votre résultat</p>
                  <span className={`inline-flex px-4 py-1.5 rounded-full text-sm font-semibold ${result.badge}`}>
                    {result.title}
                  </span>
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight">{result.title}</h2>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-6 flex flex-col gap-5 shadow-sm">
                  <p className="text-[15px] text-black/60 leading-7">{result.desc}</p>
                  <ul className="flex flex-col gap-2.5">
                    {result.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-black/70">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white shrink-0"><CheckIcon /></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Link href={result.href} className="flex-1 inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                      En savoir plus →
                    </Link>
                    <Link href="/contact" className="flex-1 inline-flex items-center justify-center border border-black/15 text-heading font-medium px-6 py-3 rounded-xl hover:border-black/30 transition-colors text-sm">
                      Parler à l'équipe
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-black/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-heading">Partagez ce quiz</p>
                    <p className="text-xs text-black/45 mt-0.5">Utile pour un collègue ou un associé qui hésite aussi</p>
                  </div>
                  <button onClick={handleShare}
                    className="shrink-0 inline-flex items-center gap-2 border border-black/15 text-heading font-medium px-5 py-2.5 rounded-xl hover:border-black/30 transition-colors text-sm">
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
