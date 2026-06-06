"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";

const culture = [
  {
    title: "On est en pleine croissance",
    desc: "On multiplie nos mandats chaque année. Rejoindre l'équipe maintenant, c'est avoir un impact direct sur la direction qu'on prend.",
  },
  {
    title: "Des projets qui ont de l'impact",
    desc: "Pas de code de remplissage. On livre des vraies applications à de vrais clients : des courtiers, des restos, des startups, des PME.",
  },
  {
    title: "Une équipe soudée",
    desc: "On est une petite équipe où chaque personne compte. Pas de silos, pas de bureaucratie. Si t'as une bonne idée, elle s'entend.",
  },
  {
    title: "Flexibilité et autonomie",
    desc: "On juge les gens sur leurs résultats, pas sur leurs heures. Remote possible, horaires flexibles, confiance mutuelle.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Développeur Full-Stack Senior",
    type: "Temps plein ou contrat",
    location: "Montréal / Remote",
    icon: "💻",
    teaser: "Tu prends en charge des projets web complexes de A à Z : architecture, développement et mise en production.",
    intro: "On cherche un développeur senior capable de prendre en charge des projets web complexes de A à Z. Tu travailleras directement avec les clients et l'équipe sur des projets variés : SaaS, portails clients, applications web sur mesure.",
    responsibilities: [
      "Développer des applications web avec Next.js, React et TypeScript",
      "Concevoir et implémenter des APIs en .NET Core (C#) ou Node.js",
      "Gérer le déploiement sur Microsoft Azure ou Vercel",
      "Participer aux appels clients pour comprendre les besoins et proposer des solutions",
      "Assurer la qualité du code et les bonnes pratiques de sécurité",
      "Encadrer des développeurs juniors au besoin",
    ],
    requirements: [
      "3 ans et plus d'expérience en développement web",
      "Maîtrise de TypeScript, React et Next.js",
      "Expérience avec PostgreSQL, Supabase ou Firebase",
      "Bonne compréhension des architectures cloud",
      "Autonomie et sens des responsabilités",
    ],
    bonus: [
      "Expérience avec .NET Core / C#",
      "Connaissance de Stripe ou d'autres intégrations tierces",
      "Expérience en startup ou agence",
    ],
  },
  {
    id: 2,
    title: "Chargé(e) de projet / Account Manager",
    type: "Temps plein",
    location: "Montréal (hybride)",
    icon: "🤝",
    teaser: "Tu es le lien entre nos clients et l'équipe tech. Tu coordonnes les projets, tu gères les suivis et tu t'assures que tout se passe bien.",
    intro: "On cherche quelqu'un pour prendre en charge la relation client et la coordination des projets. Ton rôle : t'assurer que les projets avancent, que les clients sont bien suivis et que l'équipe a tout ce qu'il lui faut pour livrer.",
    responsibilities: [
      "Gérer la relation client au quotidien : suivis, appels, comptes rendus",
      "Préparer et envoyer les livrables, soumissions et propositions",
      "Coordonner les sprints et les échéanciers avec l'équipe",
      "Qualifier les nouveaux prospects et participer aux appels exploratoires",
      "Assurer la satisfaction client et anticiper les enjeux",
      "Maintenir les outils de gestion à jour",
    ],
    requirements: [
      "2 ans et plus en gestion de projet ou account management",
      "Excellentes compétences de communication en français",
      "Capacité à gérer plusieurs projets en même temps",
      "À l'aise avec des outils comme Notion, Linear ou Asana",
      "Bilinguisme français/anglais",
    ],
    bonus: [
      "Expérience dans une agence numérique",
      "Connaissance de base des processus de développement",
      "Expérience en rédaction de soumissions",
    ],
  },
  {
    id: 3,
    title: "Développeur Mobile (Flutter / React Native)",
    type: "Temps plein ou contrat",
    location: "Montréal / Remote",
    icon: "📱",
    teaser: "Tu développes des applications iOS et Android sur des projets stimulants. Des apps grand public aux outils métier.",
    intro: "On cherche un développeur mobile passionné pour travailler sur des applications iOS et Android. Nos projets mobiles sont parmi nos mandats les plus stimulants : apps grand public, outils métier, projets innovants avec de vrais utilisateurs.",
    responsibilities: [
      "Développer des applications iOS et Android avec Flutter ou React Native",
      "Assurer la publication sur l'App Store et Google Play",
      "Intégrer des APIs, authentification et paiements",
      "Optimiser les performances et l'expérience utilisateur sur mobile",
      "Participer aux design reviews et proposer des améliorations UX",
      "Maintenir et mettre à jour les apps existantes",
    ],
    requirements: [
      "2 ans et plus en développement mobile (Flutter ou React Native)",
      "Expérience de publication sur App Store ou Google Play",
      "Bonne compréhension des guidelines Apple et Google",
      "Maîtrise de Dart ou TypeScript",
    ],
    bonus: [
      "Expérience avec Firebase ou Supabase",
      "Connaissance des tests automatisés sur mobile",
      "Portfolio d'applications publiées",
    ],
  },
];

const email = "info@orianasolutions.ca";

export default function CarrieresPage() {
  const [openJob, setOpenJob] = useState<number | null>(null);

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      {/* Hero */}
      <div className="bg-primary-light border-b border-black/6">
        <Breadcrumb items={[{ label: "À propos", href: "/about" }, { label: "Carrières" }]} />
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-12 pt-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">On recrute</p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl text-heading leading-tight mb-4">
            Rejoignez l'équipe<br />Oriana Solutions.
          </h1>
          <p className="text-black/50 text-base max-w-lg leading-relaxed">
            On est une agence de développement logiciel en croissance à Montréal. Si vous aimez livrer de vrais projets et avoir de l'impact, vous êtes au bon endroit.
          </p>
        </div>
      </div>

      <div className="bg-[#F8F9FB] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col gap-14">

          {/* Culture */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
            <div>
              <h2 className="font-heading font-normal text-2xl text-heading mb-2">Pourquoi nous rejoindre</h2>
              <p className="text-black/50 text-sm mb-6 max-w-lg">On n'est pas une grande corporation. On est une équipe qui construit quelque chose de sérieux, et on cherche des gens qui veulent en faire partie.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {culture.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-black/6 p-6 flex flex-col gap-2">
                    <p className="text-sm font-semibold text-heading">{item.title}</p>
                    <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/6 shadow-sm">
              <Image
                src="/png/finales_HR-11.jpg"
                alt="L'équipe Oriana Solutions"
                width={840}
                height={560}
                className="w-full h-[32rem] lg:h-[40rem] object-cover object-top"
              />
            </div>
          </div>

          {/* Job listings */}
          <div>
            <h2 className="font-heading font-normal text-2xl text-heading mb-2">Postes ouverts</h2>
            <p className="text-black/50 text-sm mb-6">Cliquez sur un poste pour voir les détails.</p>
            <div className="flex flex-col gap-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-black/8 overflow-hidden transition-shadow hover:shadow-sm">

                  {/* Card header — always visible */}
                  <button
                    onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-heading">{job.title}</p>
                      <div className="flex flex-wrap gap-3 mt-1">
                        <span className="text-xs text-black/40">{job.location}</span>
                        <span className="text-black/20 text-xs">·</span>
                        <span className="text-xs text-black/40">{job.type}</span>
                      </div>
                      {openJob !== job.id && (
                        <p className="text-sm text-black/50 mt-1.5 leading-relaxed">{job.teaser}</p>
                      )}
                    </div>
                    <span className={`text-black/30 text-xl shrink-0 transition-transform duration-200 ml-2 ${openJob === job.id ? "rotate-45" : ""}`}>+</span>
                  </button>

                  {/* Expanded content */}
                  {openJob === job.id && (
                    <div className="px-6 pb-7 flex flex-col gap-7 border-t border-black/6">
                      <p className="text-[15px] text-black/60 leading-7 pt-5">{job.intro}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <div>
                          <h3 className="text-sm font-semibold text-heading mb-3">Responsabilités</h3>
                          <ul className="flex flex-col gap-2">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-black/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                          <div>
                            <h3 className="text-sm font-semibold text-heading mb-3">Exigences</h3>
                            <ul className="flex flex-col gap-2">
                              {job.requirements.map((r, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-black/60">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-heading mb-3">Atouts</h3>
                            <ul className="flex flex-col gap-2">
                              {job.bonus.map((b, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-black/50">
                                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2 shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <a
                        href={`mailto:${email}?subject=Candidature : ${job.title}&body=Bonjour,%0A%0AJe vous fais parvenir ma candidature pour le poste de ${job.title}.%0A%0A`}
                        className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors w-fit"
                      >
                        Envoyer ma candidature à {email} →
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {/* Candidature spontanée */}
              <div className="bg-white rounded-2xl border border-black/8 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                    <p className="text-base font-semibold text-heading">Candidature spontanée</p>
                    <p className="text-sm text-black/50 mt-1 max-w-sm leading-relaxed">
                      Vous ne trouvez pas le poste idéal mais vous voulez faire partie de l'équipe ? On est toujours ouverts à rencontrer des gens talentueux.
                    </p>
                    <p className="text-xs text-black/35 mt-1.5">CV + quelques lignes sur ce que vous apportez à l'équipe</p>
                </div>
                <a
                  href={`mailto:${email}?subject=Candidature spontanée, Oriana Solutions&body=Bonjour,%0A%0AJe souhaite vous soumettre ma candidature spontanée.%0A%0A`}
                  className="shrink-0 inline-flex items-center gap-2 border border-black/15 text-heading text-sm font-medium px-5 py-2.5 rounded-xl hover:border-black/30 transition-colors whitespace-nowrap"
                >
                  Envoyer mon profil →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="contact"><Footer /></div>
    </>
  );
}
