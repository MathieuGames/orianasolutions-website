import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";

const jobs = [
  {
    id: 1,
    title: "Développeur Full-Stack Senior",
    type: "Temps plein ou contrat",
    location: "Montréal / Remote",
    icon: "💻",
    intro:
      "On cherche un développeur senior capable de prendre en charge des projets web complexes de A à Z — de la conception de l'architecture à la mise en production. Tu travailleras directement avec les clients et l'équipe sur des projets variés : SaaS, portails clients, applications web sur mesure.",
    responsibilities: [
      "Développer des applications web avec Next.js, React et TypeScript",
      "Concevoir et implémenter des APIs en .NET Core (C#) ou Node.js",
      "Gérer l'hébergement et le déploiement sur Microsoft Azure ou Vercel",
      "Participer aux appels clients pour comprendre les besoins et proposer des solutions",
      "Assurer la qualité du code et les bonnes pratiques de sécurité",
      "Encadrer des développeurs juniors au besoin",
    ],
    requirements: [
      "3 ans et plus d'expérience en développement web",
      "Maîtrise de TypeScript, React et Next.js",
      "Expérience avec des bases de données (PostgreSQL, Supabase ou Firebase)",
      "Bonne compréhension des architectures cloud",
      "Autonomie et sens des responsabilités",
      "Bilinguisme français/anglais (atout)",
    ],
    bonus: [
      "Expérience avec .NET Core / C#",
      "Connaissance de l'intégration d'API tierces (Stripe, etc.)",
      "Expérience en startup ou agence",
    ],
  },
  {
    id: 2,
    title: "Chargé(e) de projet / Account Manager",
    type: "Temps plein",
    location: "Montréal (hybride)",
    icon: "🤝",
    intro:
      "On cherche quelqu'un pour prendre en charge la relation client et la coordination des projets. Ton rôle : t'assurer que les projets avancent, que les clients sont bien suivis et que l'équipe a tout ce qu'il lui faut pour livrer. Tu es le lien entre le client et l'équipe technique.",
    responsibilities: [
      "Gérer la relation client au quotidien : suivis, appels, comptes rendus",
      "Préparer et envoyer les livrables, soumissions et propositions",
      "Coordonner les sprints et les échéanciers avec l'équipe de développement",
      "Qualifier les nouveaux prospects entrants et participer aux appels exploratoires",
      "Assurer la satisfaction client et anticiper les enjeux",
      "Documenter les projets et maintenir les outils de gestion à jour",
    ],
    requirements: [
      "2 ans et plus en gestion de projet, service client ou account management",
      "Excellentes compétences de communication écrite et orale en français",
      "Capacité à gérer plusieurs projets simultanément",
      "À l'aise avec des outils comme Notion, Linear ou Asana",
      "Intérêt pour la technologie (pas besoin de coder)",
      "Bilinguisme français/anglais",
    ],
    bonus: [
      "Expérience dans une agence numérique ou en développement logiciel",
      "Connaissance de base des processus de développement (Agile, Scrum)",
      "Expérience en rédaction de soumissions",
    ],
  },
  {
    id: 3,
    title: "Développeur Mobile (Flutter / React Native)",
    type: "Temps plein ou contrat",
    location: "Montréal / Remote",
    icon: "📱",
    intro:
      "On cherche un développeur mobile passionné pour travailler sur des applications iOS et Android. Nos projets mobiles sont parmi nos mandats les plus stimulants — tu travailleras sur des apps grand public, des outils métier et des projets innovants avec de vrais utilisateurs.",
    responsibilities: [
      "Développer des applications iOS et Android avec Flutter ou React Native",
      "Assurer la publication sur l'App Store et Google Play",
      "Intégrer des APIs back-end, des systèmes d'authentification et des paiements",
      "Optimiser les performances et l'expérience utilisateur sur mobile",
      "Participer aux design reviews et proposer des améliorations UX",
      "Maintenir et mettre à jour les apps existantes",
    ],
    requirements: [
      "2 ans et plus de développement mobile (Flutter ou React Native)",
      "Expérience de publication sur l'App Store et/ou Google Play",
      "Bonne compréhension des guidelines Apple et Google",
      "Maîtrise de Dart ou TypeScript",
      "Souci du détail sur la qualité visuelle et les performances",
    ],
    bonus: [
      "Expérience avec Firebase, Supabase ou des services cloud",
      "Connaissance des tests automatisés sur mobile",
      "Portfolio d'applications publiées",
    ],
  },
];

export default function CarrieresPage() {
  const email = "info@orianasolutions.ca";

  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      {/* Hero */}
      <div className="bg-primary-light border-b border-black/6">
        <Breadcrumb items={[{ label: "À propos", href: "/about" }, { label: "Carrières" }]} />
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-12 pt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">On recrute</p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl text-heading leading-tight mb-4">
            Rejoignez l'équipe<br />Oriana Solutions.
          </h1>
          <p className="text-black/50 text-base max-w-lg leading-relaxed">
            On est une équipe jeune, ambitieuse et en pleine croissance à Montréal. Si vous aimez livrer de vrais projets, travailler proche des clients et avoir de l'impact, vous êtes au bon endroit.
          </p>
        </div>
      </div>

      {/* Jobs */}
      <div className="bg-[#F8F9FB] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col gap-8">

          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-3xl border border-black/6 shadow-sm overflow-hidden">
              {/* Job header */}
              <div className="p-6 sm:p-8 border-b border-black/6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center text-2xl shrink-0">
                    {job.icon}
                  </div>
                  <div>
                    <h2 className="font-heading font-normal text-xl text-heading">{job.title}</h2>
                    <div className="flex flex-wrap gap-3 mt-1.5">
                      <span className="text-xs text-black/45 flex items-center gap-1">
                        <span>📍</span> {job.location}
                      </span>
                      <span className="text-black/20">·</span>
                      <span className="text-xs text-black/45 flex items-center gap-1">
                        <span>🕐</span> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={`mailto:${email}?subject=Candidature — ${job.title}&body=Bonjour,%0A%0AJe vous fais parvenir ma candidature pour le poste de ${job.title}.%0A%0A`}
                  className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Postuler →
                </a>
              </div>

              {/* Job body */}
              <div className="p-6 sm:p-8 flex flex-col gap-7">
                <p className="text-[15px] text-black/60 leading-7">{job.intro}</p>

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

                {/* Apply CTA */}
                <div className="bg-primary-light rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-heading mb-1">Intéressé(e) ?</p>
                    <p className="text-xs text-black/50">Envoyez votre CV et lettre de présentation à <span className="font-medium text-heading">{email}</span></p>
                  </div>
                  <a
                    href={`mailto:${email}?subject=Candidature — ${job.title}&body=Bonjour,%0A%0AJe vous fais parvenir ma candidature pour le poste de ${job.title}.%0A%0A`}
                    className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Envoyer ma candidature →
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Candidature spontanée */}
          <div className="bg-white rounded-3xl border border-black/6 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center text-2xl shrink-0">
                ✉️
              </div>
              <div>
                <h2 className="font-heading font-normal text-xl text-heading mb-1">Candidature spontanée</h2>
                <p className="text-sm text-black/50 leading-relaxed max-w-md">
                  Vous ne trouvez pas le poste idéal mais vous voulez faire partie de l'équipe ? On est toujours ouverts à rencontrer des gens talentueux. Envoyez-nous votre profil.
                </p>
                <p className="text-xs text-black/40 mt-2">CV + quelques lignes sur ce que vous apportez à l'équipe</p>
              </div>
            </div>
            <a
              href={`mailto:${email}?subject=Candidature spontanée — Oriana Solutions&body=Bonjour,%0A%0AJe souhaite vous soumettre ma candidature spontanée.%0A%0A`}
              className="shrink-0 inline-flex items-center gap-2 border border-black/15 text-heading text-sm font-medium px-5 py-2.5 rounded-xl hover:border-black/30 transition-colors whitespace-nowrap"
            >
              Envoyer mon profil →
            </a>
          </div>

        </div>
      </div>

      <div id="contact"><Footer /></div>
    </>
  );
}
