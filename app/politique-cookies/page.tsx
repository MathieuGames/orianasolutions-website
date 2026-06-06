import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Politique de cookies | Oriana Solutions",
  description: "Politique d'utilisation des cookies sur le site web d'Oriana Solutions.",
};

export default function PolitiqueCookiesPage() {
  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      <Container className="py-14 md:py-20">
        <div className="max-w-2xl flex flex-col gap-10">

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Légal</p>
            <h1 className="font-heading font-normal text-3xl md:text-4xl text-heading">Politique de cookies</h1>
            <p className="text-sm text-black/40">Dernière mise à jour : juin 2025</p>
          </div>

          <div className="flex flex-col gap-8 text-sm text-black/60 leading-7">

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">1. Qu'est-ce qu'un cookie ?</h2>
              <p>Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, téléphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences sur une période donnée.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">2. Cookies que nous utilisons</h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="font-semibold text-heading">Cookies essentiels</span>
                  <p>Nécessaires au fonctionnement du site. Ils permettent la navigation et l'accès aux fonctionnalités de base. Ils ne peuvent pas être désactivés.</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-semibold text-heading">Cookies analytiques</span>
                  <p>Utilisés pour comprendre comment les visiteurs interagissent avec notre site (pages visitées, durée de la visite, sources de trafic). Nous utilisons Google Analytics à cette fin. Ces données sont anonymes et agrégées.</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-semibold text-heading">Cookies de préférences</span>
                  <p>Permettent au site de mémoriser vos choix (comme la fermeture d'une bannière) pour améliorer votre expérience lors de visites ultérieures.</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">3. Cookies tiers</h2>
              <p>Certains services intégrés à notre site peuvent déposer leurs propres cookies :</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc"><strong>Google Analytics</strong> — analyse d'audience anonyme</li>
                <li className="list-disc"><strong>Calendly</strong> — prise de rendez-vous en ligne</li>
              </ul>
              <p>Ces services sont soumis à leurs propres politiques de confidentialité.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">4. Gestion des cookies</h2>
              <p>Vous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter le bon fonctionnement du site.</p>
              <p>Instructions pour les navigateurs courants :</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc">Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li className="list-disc">Firefox : Options &gt; Vie privée et sécurité</li>
                <li className="list-disc">Safari : Préférences &gt; Confidentialité</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">5. Contact</h2>
              <p>Pour toute question concernant notre utilisation des cookies, contactez-nous à <a href="mailto:info@orianasolutions.ca" className="text-primary underline underline-offset-2">info@orianasolutions.ca</a>.</p>
            </section>

          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
