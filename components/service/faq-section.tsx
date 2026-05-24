"use client";

import { useState } from "react";
import Container from "@/components/shared/container";
import { Typography } from "../ui/typography";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: React.ReactNode;
  items?: FAQItem[];
}

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Quelle technologie utilisez-vous pour développer des apps mobiles ?",
    answer:
      "React Native et Flutter principalement, ce qui permet de couvrir iOS et Android avec une seule base de code. On choisit la technologie selon les besoins spécifiques de votre projet.",
  },
  {
    id: 2,
    question: "Combien de temps faut-il pour développer une application mobile ?",
    answer:
      "Un MVP simple prend généralement 6 à 12 semaines. Une application complète avec back-end, authentification et fonctionnalités avancées peut prendre 3 à 6 mois selon la complexité.",
  },
  {
    id: 3,
    question: "Combien coûte le développement d'une application mobile ?",
    answer:
      "Les prix débutent autour de 5 000 $ pour un MVP simple et peuvent aller jusqu'à 50 000 $+ pour une plateforme complète. On établit un devis détaillé après avoir compris votre projet.",
  },
  {
    id: 4,
    question: "Gérez-vous la publication sur l'App Store et Google Play ?",
    answer:
      "Oui, on s'occupe de tout le processus de soumission, des captures d'écran aux descriptions en passant par la conformité aux guidelines d'Apple et Google.",
  },
  {
    id: 5,
    question: "Offrez-vous de la maintenance après le lancement ?",
    answer:
      "Oui, on propose des plans de maintenance adaptés pour les mises à jour, la surveillance et le support technique afin que votre app reste performante et à jour.",
  },
];

export default function ServiceFAQ({ title, items = FAQ_ITEMS }: ServiceFAQProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Container className="w-full flex flex-col sm:gap-8 gap-4">
      {title && (
        <Typography variant="h4" className="shrink-0 sm:text-start text-center">
          {title}
        </Typography>
      )}
      <div className="flex justify-center">
        <div className="w-full flex flex-col sm:max-w-[80%]">
          {items.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="w-full flex flex-col">
                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 py-6 cursor-pointer"
                  aria-expanded={open}
                >
                  <span className={`text-left font-heading font-normal text-base md:text-lg 2xl:text-xl 3xl:text-2xl`}>
                    {item.question}
                  </span>
                  <span className={`ml-4 shrink-0 flex items-center justify-center sm:w-11 w-10 sm:h-11 h-10 rounded-md ${open ? "bg-blue-600" : "bg-blue-600/90"}`}>
                    <span className="text-white text-xl leading-none">
                      {open ? "−" : "+"}
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-3 pb-6">
                      <p className="text-xs 2xl:text-sm 3xl:text-base text-[#333333] leading-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full border-b ${open ? "border-black" : "border-[#D0D0D0]"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
