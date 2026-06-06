import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Oriana Solutions",
  description: "Politique de confidentialité d'Oriana Solutions. Comment nous collectons, utilisons et protégeons vos informations personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      <Container className="py-14 md:py-20">
        <div className="max-w-2xl flex flex-col gap-10">

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Légal</p>
            <h1 className="font-heading font-normal text-3xl md:text-4xl text-heading">Politique de confidentialité</h1>
            <p className="text-sm text-black/40">Dernière mise à jour : juin 2025</p>
          </div>

          <div className="flex flex-col gap-8 text-sm text-black/60 leading-7">

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">1. Qui nous sommes</h2>
              <p>Oriana Solutions Inc. (ci-après "Oriana Solutions", "nous" ou "notre") est une agence de développement logiciel basée à Montréal, Québec, Canada. Vous pouvez nous joindre à <a href="mailto:info@orianasolutions.ca" className="text-primary underline underline-offset-2">info@orianasolutions.ca</a>.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">2. Informations que nous collectons</h2>
              <p>Nous collectons uniquement les informations que vous nous fournissez volontairement :</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc">Nom et prénom</li>
                <li className="list-disc">Adresse courriel</li>
                <li className="list-disc">Numéro de téléphone (si fourni)</li>
                <li className="list-disc">Description de votre projet ou de votre demande</li>
              </ul>
              <p>Nous collectons également des données de navigation anonymes (pages visitées, durée de la visite) via des outils d'analyse comme Google Analytics.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">3. Utilisation de vos informations</h2>
              <p>Vos informations personnelles sont utilisées exclusivement pour :</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc">Répondre à vos demandes de contact ou de soumission</li>
                <li className="list-disc">Vous envoyer des informations sur nos services si vous avez consenti à les recevoir</li>
                <li className="list-disc">Améliorer notre site web et nos services</li>
              </ul>
              <p>Nous ne vendons, ne louons et ne partageons jamais vos informations personnelles avec des tiers à des fins commerciales.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">4. Conservation des données</h2>
              <p>Vos informations sont conservées le temps nécessaire pour répondre à votre demande, ou aussi longtemps que requis par la loi. Vous pouvez demander la suppression de vos données à tout moment en nous écrivant à <a href="mailto:info@orianasolutions.ca" className="text-primary underline underline-offset-2">info@orianasolutions.ca</a>.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">5. Sécurité</h2>
              <p>Nous prenons des mesures raisonnables pour protéger vos informations contre tout accès non autorisé, divulgation ou modification. Notre site est hébergé sur des infrastructures sécurisées.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">6. Vos droits</h2>
              <p>Conformément à la Loi 25 (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels) et au RGPD pour les résidents de l'Union européenne, vous avez le droit :</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc">D'accéder à vos informations personnelles</li>
                <li className="list-disc">De corriger des informations inexactes</li>
                <li className="list-disc">De demander la suppression de vos données</li>
                <li className="list-disc">De vous opposer à leur traitement</li>
              </ul>
              <p>Pour exercer ces droits, contactez-nous à <a href="mailto:info@orianasolutions.ca" className="text-primary underline underline-offset-2">info@orianasolutions.ca</a>.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">7. Modifications</h2>
              <p>Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page.</p>
            </section>

          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
