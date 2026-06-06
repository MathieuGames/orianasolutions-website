"use client";

import React, { useState } from "react";
import Container from "../shared/container";
import Button from "../ui/button";
import Input from "../ui/input";
import Image from "next/image";
import Tag from "../ui/tag";
import { contactInfo, socialLinks } from "@/data/contact";


export default function ContactSection() {
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });

  const budgetOptions = [
    "Moins de 5 000 $",
    "5 000 – 10 000 $",
    "10 000 – 25 000 $",
    "25 000 – 50 000 $",
    "50 000 $ et plus",
  ];

  const handleFieldInput = (field: string) => () => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get("firstName")?.toString().trim() || "",
      lastName: formData.get("lastName")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      company: formData.get("company")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    const newErrors = {
      firstName: data.firstName ? "" : "Le prénom est requis",
      lastName: data.lastName ? "" : "Le nom est requis",
      email: data.email ? "" : "Le courriel est requis",
      phone: data.phone ? "" : "Le téléphone est requis",
      company: "",
      budget: budget ? "" : "Veuillez choisir un budget",
      message: data.message ? "" : "Le message est requis",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");
    if (hasError) return;

    console.log("Form Data:", { ...data, budget });
    e.currentTarget.reset();
    setBudget("");
  };

  return (
    <section className="pb-12 md:pb-24 bg-[#F8F9FB]">
      <Container className="w-full pt-4! xl:pt-8!">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-start">

          {/* Right — form card (order-first on mobile) */}
          <form
            onSubmit={handleSubmit}
            className="order-1 lg:order-2 bg-white rounded-3xl border border-black/6 shadow-sm p-5 sm:p-8 md:p-10 flex flex-col gap-5 sm:gap-6"
          >
            {/* Row 1 — Prénom / Nom */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1">
                <Input label="Prénom" placeholder="Votre prénom" name="firstName" required onChange={handleFieldInput("firstName")} />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="flex-1">
                <Input label="Nom de famille" placeholder="Votre nom de famille" name="lastName" required onChange={handleFieldInput("lastName")} />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Row 2 — Courriel / Téléphone */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1">
                <Input label="Courriel" placeholder="Votre courriel" name="email" type="email" required onChange={handleFieldInput("email")} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="flex-1">
                <Input
                  label="Téléphone"
                  placeholder="(438) 000-0000"
                  name="phone"
                  type="tel"
                  required
                  onChange={handleFieldInput("phone")}
                  suffix={
                    <span className="text-base leading-none" aria-hidden>🇨🇦</span>
                  }
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 3 — Compagnie */}
            <div>
              <Input label="Nom de la compagnie" placeholder="Votre compagnie" name="company" onChange={handleFieldInput("company")} />
            </div>

            {/* Budget — pill selector */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-heading">
                Budget <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => { setBudget(option); if (errors.budget) setErrors((p) => ({ ...p, budget: "" })); }}
                    className={`px-4 py-2 rounded-full text-sm border transition-all cursor-pointer ${
                      budget === option
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-black/60 border-black/15 hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
            </div>

            <div>
              <Input label="Description" variant="textarea" placeholder="Parlez-nous de votre projet..." name="message" onChange={handleFieldInput("message")} />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" variant="primary" className="w-full mt-2">
              Envoyer le message
            </Button>
          </form>

          {/* Left — info column (order-second on mobile) */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">

            {/* Title block — hidden on mobile (AboutSectionMobileBlock handles it) */}
            <div className="hidden md:flex flex-col gap-4 items-start">
              <Tag>On vous écoute</Tag>
              <h2 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl text-heading leading-tight">
                Tout commence<br />
                par une conversation.
              </h2>
              <p className="text-base text-black/50 leading-relaxed max-w-sm">
                Dites-nous ce que vous avez en tête. On vous revient rapidement.
              </p>
            </div>

            {/* Contact info card */}
            <div className="bg-white rounded-2xl border border-black/6 overflow-hidden">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 px-5 py-4 border-b border-black/6 last:border-0">
                  <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    {index === 0 && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs text-black/40">{item.title}</p>
                    <p className="text-heading text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-black/40 shrink-0">Suivez-nous :</p>
              <div className="flex gap-2.5 items-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:border-black/30 hover:bg-black/5 transition-all"
                  >
                    <Image src={social.icon} alt={social.alt} width={16} height={16} className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
