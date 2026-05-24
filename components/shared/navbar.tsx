"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import LogoAnimation from "@/components/shared/logo-animation";

import { navbarLinks } from "@/data/navigation";

const SERVICE_LINKS = [
  { label: "Application web", href: "/application-web" },
  { label: "Application mobile", href: "/developpement-application-mobile" },
  { label: "Site web sur mesure", href: "/site-web-sur-mesure" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ActiveNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <div className="relative">
      <Link
        href={href}
        className={`text-sm xl:text-base 3xl:text-lg leading-[32.14px] tracking-[-0.22px] transition-colors whitespace-nowrap ${active ? "text-black font-medium" : "text-black/60 hover:text-black"}`}
      >
        {children}
      </Link>
    </div>
  );
}

const SERVICE_PREFIXES = ["/services", "/application-web", "/developpement-application-mobile", "/site-web-sur-mesure"];

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = SERVICE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));

  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        <div className="relative">
          <Link
            href="/services"
            className={`text-sm xl:text-base 3xl:text-lg leading-[32.14px] tracking-[-0.22px] transition-colors whitespace-nowrap ${active ? "text-black font-medium" : "text-black/60 hover:text-black"}`}
          >
            Nos services
          </Link>
        </div>
        <ChevronIcon open={open} />
      </div>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-black/8 py-2 w-52">
            {SERVICE_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-black/4 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AboutDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = pathname === "/about" || pathname.startsWith("/about/") || pathname === "/collaborateurs";

  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        <div className="relative">
          <Link
            href="/about"
            className={`text-sm xl:text-base 3xl:text-lg leading-[32.14px] tracking-[-0.22px] transition-colors whitespace-nowrap ${active ? "text-black font-medium" : "text-black/60 hover:text-black"}`}
          >
            À propos
          </Link>
        </div>
        <ChevronIcon open={open} />
      </div>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-black/8 py-2 w-48">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-black/4 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/collaborateurs"
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-black/4 transition-colors"
            >
              Nos collaborateurs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ResourcesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = pathname === "/blog" || pathname.startsWith("/blog/") || pathname === "/faq";

  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        <div className="relative">
          <button className={`text-sm xl:text-base 3xl:text-lg leading-[32.14px] tracking-[-0.22px] transition-colors whitespace-nowrap ${active ? "text-black font-medium" : "text-black/60 hover:text-black"}`}>
            Ressources
          </button>
        </div>
        <ChevronIcon open={open} />
      </div>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-black/8 py-2 w-44">
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-black/4 transition-colors"
            >
              Blogue
            </Link>
            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-2.5 text-sm text-black/70 hover:text-black hover:bg-black/4 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className={`backdrop-blur-[19.56px] transition-all duration-300 ${scrolled ? "bg-white border-b border-black/15" : "bg-primary-light border-b border-transparent"}`}>
      <nav className="relative z-50 w-full px-6 sm:px-16 xl:px-25 py-3 2xl:px-35 max-w-[1980px] mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={close}>
            <LogoAnimation />
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-10">
            <ServicesDropdown />
            <ActiveNavLink href="/realisations">Nos réalisations</ActiveNavLink>
            <AboutDropdown />
            <ResourcesDropdown />
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button href="/contact" className="text-sm! xl:text-base! 3xl:text-lg!">Contactez-nous</Button>
          </div>

          {/* Hamburger / Close button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="xl:hidden p-2 z-50 relative"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Dark overlay */}
      <div
        onClick={close}
        aria-hidden
        className={`xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed top-0 left-0 right-0 z-40 bg-primary-light shadow-xl transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="h-25 sm:h-30" />

        <div className="flex flex-col px-6 sm:px-16 py-10 gap-2">
          {navbarLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="text-lg font-medium text-title py-3 border-b border-black/10 hover:opacity-70 transition-opacity"
            >
              {label}
            </Link>
          ))}

          {/* Services mobile */}
          <div className="border-b border-black/10">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-lg font-medium text-title py-3"
            >
              Nos services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pb-3 pl-3 flex flex-col gap-1">
                {SERVICE_LINKS.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={close} className="text-base text-black/60 py-1.5 hover:text-black transition-colors">
                    {label}
                  </Link>
                ))}
                <Link href="/services" onClick={close} className="text-sm text-black/40 py-1.5 mt-1 hover:text-black transition-colors">
                  Voir tous les services →
                </Link>
              </div>
            )}
          </div>

          {/* À propos mobile */}
          <div className="border-b border-black/10">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full text-lg font-medium text-title py-3"
            >
              À propos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="pb-3 pl-3 flex flex-col gap-1">
                <Link href="/about" onClick={close} className="text-base text-black/60 py-1.5 hover:text-black transition-colors">
                  À propos
                </Link>
                <Link href="/collaborateurs" onClick={close} className="text-base text-black/60 py-1.5 hover:text-black transition-colors">
                  Nos collaborateurs
                </Link>
              </div>
            )}
          </div>

          {/* Ressources mobile */}
          <div className="border-b border-black/10">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between w-full text-lg font-medium text-title py-3"
            >
              Ressources
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="pb-3 pl-3 flex flex-col gap-1">
                <Link href="/blog" onClick={close} className="text-base text-black/60 py-1.5 hover:text-black transition-colors">
                  Blogue
                </Link>
                <Link href="/faq" onClick={close} className="text-base text-black/60 py-1.5 hover:text-black transition-colors">
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <div className="mt-4">
            <Link href="/contact" onClick={close}>
              <Button>Contactez-nous</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
