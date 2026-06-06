import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Oriana Solutions",
  description: "Conditions d'utilisation du site web d'Oriana Solutions.",
};

export default function ConditionsUtilisationPage() {
  return (
    <>
      <div className="sticky top-0 z-50"><Navbar /></div>

      <Container className="py-14 md:py-20">
        <div className="max-w-2xl flex flex-col gap-10">

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40">Légal</p>
            <h1 className="font-heading font-normal text-3xl md:text-4xl text-heading">Conditions d'utilisation</h1>
            <p className="text-sm text-black/40">Dernière mise à jour : juin 2025</p>
          </div>

          <div className="flex flex-col gap-8 text-sm text-black/60 leading-7">

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">1. Acceptation des conditions</h2>
              <p>En accédant et en utilisant le site web d'Oriana Solutions Inc., vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">2. Utilisation du site</h2>
              <p>Ce site est mis à disposition à titre informatif. Vous vous engagez à ne pas :</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc">Utiliser le site à des fins illégales ou frauduleuses</li>
                <li className="list-disc">Tenter d'accéder à des zones non autorisées du site</li>
                <li className="list-disc">Reproduire, copier ou distribuer le contenu sans autorisation écrite</li>
                <li className="list-disc">Transmettre des virus ou tout autre code malveillant</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">3. Propriété intellectuelle</h2>
              <p>L'ensemble du contenu présent sur ce site (textes, images, logos, graphiques, code) est la propriété exclusive d'Oriana Solutions Inc. ou de ses partenaires, et est protégé par les lois canadiennes et internationales sur la propriété intellectuelle.</p>
              <p>Toute reproduction ou utilisation sans autorisation écrite préalable est strictement interdite.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">4. Limitation de responsabilité</h2>
              <p>Les informations présentées sur ce site sont fournies à titre indicatif uniquement. Oriana Solutions Inc. ne garantit pas l'exactitude, l'exhaustivité ou l'actualité des informations publiées.</p>
              <p>Oriana Solutions Inc. ne pourra être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">5. Liens vers des sites tiers</h2>
              <p>Notre site peut contenir des liens vers des sites web de tiers. Ces liens sont fournis à titre informatif uniquement. Oriana Solutions Inc. n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">6. Droit applicable</h2>
              <p>Ces conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada applicables. Tout litige sera soumis à la juridiction exclusive des tribunaux de Montréal, Québec.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading font-normal text-lg text-heading">7. Contact</h2>
              <p>Pour toute question relative aux présentes conditions, contactez-nous à <a href="mailto:info@orianasolutions.ca" className="text-primary underline underline-offset-2">info@orianasolutions.ca</a>.</p>
            </section>

          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
