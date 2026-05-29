"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

type Category = "site_web" | "app_web" | "app_mobile" | "logiciel";

interface Answer {
  label: string;
  desc?: string;
  scores: Partial<Record<Category, number>>;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel est l'objectif principal de votre projet ?",
    answers: [
      { label: "Présenter mon entreprise et mes services", desc: "Vitrine, portfolio, landing page", scores: { site_web: 3 } },
      { label: "Permettre à des utilisateurs de se connecter et gérer des données", desc: "Profils, tableaux de bord, interactions", scores: { app_web: 2, app_mobile: 1 } },
      { label: "Automatiser ou digitaliser un processus interne", desc: "Gestion, workflows, équipe", scores: { logiciel: 3 } },
      { label: "Vendre des produits ou des services en ligne", desc: "Commerce, réservations, abonnements", scores: { app_web: 2, site_web: 1 } },
    ],
  },
  {
    id: 2,
    question: "Qui va utiliser votre solution ?",
    answers: [
      { label: "Mes clients et le grand public", scores: { site_web: 1, app_web: 1, app_mobile: 1 } },
      { label: "Mon équipe interne seulement", scores: { logiciel: 3 } },
      { label: "Les deux — clients et employés", scores: { app_web: 2, logiciel: 1 } },
    ],
  },
  {
    id: 3,
    question: "Les utilisateurs doivent-ils créer un compte ?",
    answers: [
      { label: "Non, c'est de l'information publique", scores: { site_web: 3 } },
      { label: "Oui, ils ont un profil et des données personnelles", scores: { app_web: 2, app_mobile: 2 } },
      { label: "Pas encore décidé", scores: {} },
    ],
  },
  {
    id: 4,
    question: "À quelle fréquence vos utilisateurs vont-ils l'utiliser ?",
    answers: [
      { label: "Rarement", desc: "Une ou deux fois par an", scores: { site_web: 2 } },
      { label: "Quelques fois par semaine", scores: { app_web: 2 } },
      { label: "Tous les jours", scores: { app_mobile: 2, logiciel: 1 } },
    ],
  },
  {
    id: 5,
    question: "La version mobile (téléphone) est-elle essentielle ?",
    answers: [
      { label: "Oui, la majorité sera sur mobile", scores: { app_mobile: 3 } },
      { label: "Non, desktop suffit", scores: { app_web: 2, logiciel: 1 } },
      { label: "Ce serait bien, mais pas obligatoire", scores: { app_web: 1, app_mobile: 1 } },
    ],
  },
  {
    id: 6,
    question: "C'est quoi la complexité de votre projet ?",
    answers: [
      { label: "Simple", desc: "Afficher du contenu, formulaire de contact", scores: { site_web: 3 } },
      { label: "Moyen", desc: "Authentification, base de données, tableau de bord", scores: { app_web: 3 } },
      { label: "Complexe", desc: "Plusieurs rôles, intégrations, processus avancés", scores: { logiciel: 3 } },
      { label: "Je ne sais pas encore", scores: {} },
    ],
  },
];

const results: Record<Category, { title: string; icon: string; desc: string; details: string[]; href: string; color: string }> = {
  site_web: {
    title: "Site web sur mesure",
    icon: "🌐",
    desc: "Votre projet est principalement informatif ou vitrine. Un site web sur mesure vous donnera une présence professionnelle, optimisée SEO, et parfaitement adaptée à votre image.",
    details: [
      "Design unique à votre image de marque",
      "Optimisé pour Google et le référencement local",
      "Rapide, sécurisé et compatible mobile",
      "Idéal pour les PME, consultants et professionnels",
    ],
    href: "/site-web-sur-mesure",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  app_web: {
    title: "Application web",
    icon: "💻",
    desc: "Votre projet nécessite que des utilisateurs se connectent et interagissent avec une plateforme. Une application web est la solution idéale.",
    details: [
      "Authentification et gestion de profils",
      "Tableaux de bord et données en temps réel",
      "Accessible depuis n'importe quel navigateur",
      "Idéal pour les SaaS, portails clients et outils internes",
    ],
    href: "/application-web",
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  app_mobile: {
    title: "Application mobile",
    icon: "📱",
    desc: "Vos utilisateurs sont principalement sur mobile et utilisent votre solution régulièrement. Une application iOS/Android est ce qu'il vous faut.",
    details: [
      "Disponible sur App Store et Google Play",
      "Notifications push et expérience native",
      "Conçue pour une utilisation quotidienne",
      "Idéal pour les apps grand public et B2C",
    ],
    href: "/developpement-application-mobile",
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
  logiciel: {
    title: "Logiciel sur mesure",
    icon: "⚙️",
    desc: "Votre besoin est complexe ou interne à votre organisation. Un logiciel sur mesure vous donnera exactement ce qu'il vous faut, sans compromis.",
    details: [
      "Adapté à vos processus d'affaires spécifiques",
      "Intégrations avec vos outils existants",
      "Gestion des rôles et des permissions",
      "Idéal pour les entreprises en croissance",
    ],
    href: "/services",
    color: "bg-orange-50 border-orange-200 text-orange-800",
  },
};

function computeResult(answers: Partial<Record<Category, number>>): Category {
  const categories: Category[] = ["site_web", "app_web", "app_mobile", "logiciel"];
  return categories.reduce((best, cat) =>
    (answers[cat] ?? 0) > (answers[best] ?? 0) ? cat : best
  , categories[0]);
}

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6.5l3 3L10 3" />
  </svg>
);

export default function QuizPage() {
  const [step, setStep] = useState(0); // 0 = intro, 1-6 = questions, 7 = result
  const [scores, setScores] = useState<Partial<Record<Category, number>>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const currentQuestion = questions[step - 1];
  const isIntro = step === 0;
  const isResult = step > questions.length;
  const result = isResult ? results[computeResult(scores)] : null;
  const progress = isResult ? 100 : Math.round((step / questions.length) * 100);

  function handleAnswer(answer: Answer) {
    setSelected(questions[step - 1].answers.indexOf(answer));
    setTimeout(() => {
      const newScores = { ...scores };
      for (const [cat, pts] of Object.entries(answer.scores) as [Category, number][]) {
        newScores[cat] = (newScores[cat] ?? 0) + pts;
      }
      setScores(newScores);
      setSelected(null);
      setStep((s) => s + 1);
    }, 280);
  }

  function reset() {
    setStep(0);
    setScores({});
    setSelected(null);
  }

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      <div className="min-h-[calc(100vh-80px)] bg-primary-light flex flex-col">

        {/* Progress bar */}
        {!isIntro && (
          <div className="w-full h-1 bg-black/8">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <div className="flex-1 flex items-center justify-center px-5 py-12">
          <div className="w-full max-w-xl">

            {/* Intro */}
            {isIntro && (
              <div className="text-center flex flex-col items-center gap-6">
                <span className="text-4xl">🤔</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Outil gratuit</p>
                  <h1 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight mb-4">
                    App ou site web ?<br />Trouvez la bonne solution.
                  </h1>
                  <p className="text-black/50 text-base max-w-sm mx-auto leading-relaxed">
                    6 questions, 2 minutes. On vous dit exactement ce dont votre projet a besoin.
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                >
                  Commencer le quiz →
                </button>
                <p className="text-xs text-black/35">Sans inscription. Résultat immédiat.</p>
              </div>
            )}

            {/* Question */}
            {!isIntro && !isResult && currentQuestion && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Question {step} sur {questions.length}
                  </span>
                  <button onClick={reset} className="text-xs text-black/35 hover:text-black/60 transition-colors">
                    Recommencer
                  </button>
                </div>

                <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading leading-tight">
                  {currentQuestion.question}
                </h2>

                <div className="flex flex-col gap-3">
                  {currentQuestion.answers.map((answer, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(answer)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                        selected === i
                          ? "border-primary bg-primary/8"
                          : "border-black/12 bg-white hover:border-primary/40 hover:bg-white"
                      }`}
                    >
                      <span className="text-sm font-medium text-heading block">{answer.label}</span>
                      {answer.desc && (
                        <span className="text-xs text-black/40 mt-0.5 block">{answer.desc}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Result */}
            {isResult && result && (
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Votre résultat</p>
                  <span className="text-5xl block mb-4">{result.icon}</span>
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight">
                    {result.title}
                  </h2>
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

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href={result.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                    >
                      En savoir plus →
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-black/15 text-heading font-medium px-6 py-3 rounded-xl hover:border-black/30 transition-colors text-sm"
                    >
                      Parler à l'équipe
                    </Link>
                  </div>
                </div>

                <div className="text-center">
                  <button onClick={reset} className="text-sm text-black/40 hover:text-black/70 transition-colors underline underline-offset-2">
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
