import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { IconInstagram, IconFacebook, IconLinkedIn, Arrow } from "@/svgs/index"
import Button from "../ui/button";
import { navColumns, bottomLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <section className="overflow-hidden">
      <Container
        parentStyle="bg-primary rounded-t-3xl"
        className="relative py-14!"
      >
        <div className="hidden lg:flex absolute -right-10 -top-12 inset-y-0 w-[320px] md:w-120 xl:w-155 2xl:h-[539px] 2xl:w-[695px] flex items-center pointer-events-none select-none">
          <Image
            src="/svg/Logo_Oriana_Symbole_Noir.svg"
            alt=""
            aria-hidden
            width={900}
            height={900}
            className="w-full translate-x-3"
            style={{
              filter:
                "invert(20%) sepia(90%) saturate(1200%) hue-rotate(210deg) brightness(60%) contrast(100%)",
              opacity: 0.45,
            }}
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="flex flex-col gap-2.5 w-full lg:max-w-[700px] text-center lg:text-left">
            <h2 className="text-[38px] leading-10 font-medium w-full  md:text-[59px] md:leading-14.75 tracking-[-0.06em] text-white">
              Donnez vie à vos ambitions numériques.
            </h2>

            <p className="mt-2  leading-[31px]  text-[20.44px] md:leading-[29.39px] tracking-[-3.6%] font-normal text-white/90 sm:max-w-130 max-w-[90%] mx-auto lg:mx-0">
              Nous bâtissons des solutions logicielles intuitives et des sites
              vitrines prestigieux qui reflètent l&apos;excellence de votre
              organisation.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4 mt-4 w-full">
              <Button
                href="https://calendly.com/mathieumorinlamy/appel-exploratoire-de-15-minutes-par-telephone"
                target="_blank"
                variant="outline"
                className="bg-primary-light border-transparent text-heading font-medium hover:bg-white w-full sm:w-fit! rounded-xl xl:rounded-2xl!"
              >
                Prendre rendez-vous
              </Button>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-white text-[15px] md:text-[17px] leading-6 tracking-[-0.3px] hover:underline transition-opacity hover:opacity-80"
              >
                Découvrir nos services
                <Arrow className="h-[20px]! w-[20px]! text-white" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container parentStyle="bg-primary" className="py-10!">

        <footer className="flex flex-col gap-13">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr_auto] gap-10 lg:gap-12 2xl:gap-20">
            {/* Logo + description */}
            <div className="flex flex-col gap-5">
              <Link href="/" aria-label="Oriana Solutions – accueil">
                <Image
                  src="/svg/Logo_Oriana_Primaire_Blanc.svg"
                  alt="Oriana Solutions"
                  width={319}
                  height={96}
                  className="w-50 md:w-65 xl:w-79.75"
                  style={{ height: "auto" }}
                  priority
                />
              </Link>
              <p className="text-base leading-6 tracking-[-0.02em] font-normal text-[#B7B7B7] max-w-[280px]">
                Votre partenaire en développement web et mobile au Québec.
              </p>
            </div>

            {/* Nav columns */}
            <nav
              aria-label="Footer navigation"
              className="flex gap-8 md:gap-6 lg:gap-10 flex-wrap md:flex-nowrap md:col-span-1 lg:col-span-1 lg:justify-center"
            >
              {navColumns.map((col, i) => (
                <ul key={i} className="flex flex-col gap-3 min-w-[120px]">
                  {col.title && (
                    <li className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
                      {col.title}
                    </li>
                  )}
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-base py-1 leading-6 font-normal text-white hover:opacity-70 transition-opacity whitespace-nowrap"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>

            {/* Contact + socials */}
            <address className="not-italic z-10 flex flex-col gap-4 text-base leading-6 text-white">
              <span className="font-medium">Nous contacter</span>

              <span className="text-white/80">
                Basé à Montréal,<br />Québec, Canada
              </span>

              <div className="flex flex-col gap-1 text-white/80">
                <a href="mailto:info@orianasolutions.ca" className="hover:underline transition-opacity hover:opacity-80">
                  info@orianasolutions.ca
                </a>
                <a href="tel:+14383657789" className="hover:underline transition-opacity hover:opacity-80">
                  438-365-7789
                </a>
              </div>

              <div className="flex items-center gap-4 mt-1">
                <Link href="https://www.instagram.com/oriana.solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                  <IconInstagram />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61585300808083" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                  <IconFacebook />
                </Link>
                <Link href="https://www.linkedin.com/company/oriana-solutions-inc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                  <IconLinkedIn />
                </Link>
              </div>
            </address>
          </div>

          <div className=" flex flex-col gap-4 sm:flex-row items-center sm:items-center sm:justify-between">
            <p className="text-sm leading-6 tracking-[-0.02em] text-[#B7B7B7]">
              © 2026 Oriana Solutions. Tous droits réservés.
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-6">
              {bottomLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm leading-6 text-[#B7B7B7] hover:text-white hover:underline transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </Container>
    </section>
  );
}
