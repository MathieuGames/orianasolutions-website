import Link from "next/link";
import Container from "./container";

export default function CalculatorBanner() {
  return (
    <Container className="py-10! md:py-14!">
      <div className="rounded-3xl bg-primary-light border border-primary/15 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-heading font-normal text-2xl md:text-3xl text-heading">
            Combien coûte votre projet ?
          </p>
          <p className="text-sm text-black/50 max-w-md">
            Obtenez une fourchette de prix en 2 minutes, sans parler à personne.
          </p>
        </div>
        <Link
          href="/calculateur-prix"
          className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-7 py-4 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Estimer mon projet →
        </Link>
      </div>
    </Container>
  );
}
