"use client";

import { useState } from "react";
import Container from "@/components/shared/container";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Quels types de solutions proposez-vous ?",
    answer:
      "Nous proposons une gamme complète de solutions de développement d'applications web et mobiles, incluant la conception UX/UI, le développement front-end et back-end, l'intégration de systèmes, la migration vers le cloud, ainsi que la maintenance et les mises à jour continues pour assurer performance et sécurité.",
  },
  {
    id: 2,
    question: "Quelles technologies utilisez-vous pour concevoir vos applications ?",
    answer:
      "Nous utilisons des technologies modernes adaptées selon les besoins du projet afin d'assurer performance, sécurité et évolutivité. La majorité du temps, nous utilisons TypeScript avec Next.js pour le web et les sites web. Nos solutions sont déployées sur Microsoft Azure. Nous utilisons Stripe pour les paiements, Firebase pour l'authentification back-end, Python avec Flask pour les LLM, .NET Core avec C# pour les API, et Flutter ou React Native avec Dart ou TypeScript pour les applications mobiles.",
  },
  {
    id: 3,
    question: "Combien coûte le développement d'une application ou d'un site web ?",
    answer:
      "Les prix varient selon le type de projet et les fonctionnalités requises. Voici une grille indicative de nos tarifs :\n\n• Moins de 5 000 $ : MVP simple, site vitrine, fonctionnalités de base\n• 5 000 $ à 10 000 $ : Application simple avec authentification, base de données et interface utilisateur\n• 10 000 $ à 25 000 $ : Plateforme complète avec back-end structuré, API et fonctionnalités avancées\n• 25 000 $ à 50 000 $ : Produit SaaS évolutif, architecture cloud, intégrations tierces et performance optimisée\n• 50 000 $ et plus : Solution sur mesure complexe avec scalabilité avancée et développement continu",
  },
  {
    id: 4,
    question: "Comment gérez-vous les données sensibles des projets ?",
    answer:
      "La sécurité est intégrée dès le début du cycle de développement logiciel. Elle est une priorité continue tout au long du projet afin d'assurer la protection des données et la fiabilité des systèmes.",
  },
  {
    id: 5,
    question: "Quels services offrez-vous pour la maintenance des systèmes ?",
    answer:
      "Nous offrons des plans de maintenance adaptés à la taille et à la complexité de chaque projet, incluant des mises à jour régulières, une surveillance continue et un support technique pour assurer la stabilité et l'évolution des systèmes.",
  },
];

export default function FAQHome() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F8F9FB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

          {/* Left — header */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40">
              FAQ
            </p>
            <Typography variant="h3">
              Les questions qu&apos;on<br />nous pose souvent
            </Typography>
            <p className="text-sm text-black/50 leading-relaxed max-w-xs">
              Vous avez d&apos;autres questions ? Consultez notre FAQ complète ou contactez-nous directement.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:opacity-60 transition-opacity"
            >
              Voir toutes les questions →
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col">
            {FAQ_ITEMS.map((item) => {
              const open = openId === item.id;
              return (
                <div key={item.id} className="border-t border-black/8">
                  <button
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex items-start justify-between gap-6 py-6 text-left w-full group cursor-pointer"
                    aria-expanded={open}
                  >
                    <span className="font-heading font-normal text-base md:text-lg text-heading">
                      {item.question}
                    </span>
                    <span className={`shrink-0 mt-0.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${open ? "border-black bg-black" : "border-black/20"}`}>
                      <span className={`text-base leading-none ${open ? "text-white" : "text-black/40"}`}>
                        {open ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="pb-6 pr-4 sm:pr-12">
                        {item.answer.split("\n\n").map((paragraph, i) => (
                          <p key={i} className="text-sm text-black/60 leading-7 whitespace-pre-line mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-black/8" />
          </div>

        </div>
      </Container>
    </section>
  );
}
