import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
          Erreur 404
        </p>
        <h1 className="font-heading font-normal text-5xl md:text-7xl text-heading mb-6 leading-tight">
          Page introuvable
        </h1>
        <p className="text-black/50 text-base max-w-md mb-10">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou contactez-nous.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button variant="outline" href="/contact">Nous contacter</Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
