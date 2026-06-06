import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogue | Ressources & conseils | Oriana Solutions",
  description:
    "Conseils pratiques, tendances tech et guides pour prendre les meilleures décisions numériques pour votre entreprise.",
  openGraph: {
    title: "Blogue | Ressources & conseils | Oriana Solutions",
    description:
      "Conseils, tendances et guides tech pour entrepreneurs et PME au Québec.",
    url: "https://orianasolutions.ca/blogue",
  },
};
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import { blogPosts } from "@/data/blog";
import { renderBold } from "@/lib/render-bold";

export default function Blogue() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Blogue" }]} />
      <main className="w-full px-6 sm:px-16 xl:px-25 2xl:px-35 py-14 md:py-20 max-w-[1980px] mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
            Blogue
          </p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-heading leading-tight">
            Ressources & conseils
          </h1>
          <p className="mt-6 text-black/50 text-sm sm:text-base max-w-xl">
            Conseils pratiques, tendances et guides pour vous aider à prendre les meilleures décisions technologiques pour votre entreprise.
          </p>
        </div>

        {/* Article vedette */}
        <Link
          href={`/blogue/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_360px] rounded-2xl border border-black/8 bg-white overflow-hidden hover:shadow-lg transition-all hover:border-black/12 mb-10"
        >
          <div className="flex flex-col gap-5 p-8 md:p-10 xl:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/8 text-xs font-semibold uppercase tracking-widest text-primary">
                {featured.category}
              </span>
              <span className="text-black/20">·</span>
              <span className="text-xs text-black/40">{featured.readTime} de lecture</span>
            </div>

            <h2 className="font-heading font-normal text-2xl md:text-3xl xl:text-[2rem] 2xl:text-4xl text-heading leading-snug group-hover:text-primary transition-colors max-w-2xl">
              {renderBold(featured.title)}
            </h2>

            <p className="text-base text-black/50 leading-relaxed max-w-xl flex-1">
              {featured.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-black/6 mt-auto">
              <span className="text-sm text-black/30">{featured.date}</span>
              <span className="text-sm font-medium text-primary group-hover:underline">
                Lire l&apos;article →
              </span>
            </div>
          </div>

          {/* Panneau visuel */}
          <div className="hidden lg:block border-l border-black/6 overflow-hidden relative bg-primary-light">
            {featured.image ? (
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                sizes="360px"
              />
            ) : (
              <div className="flex flex-col items-end justify-between h-full p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/30 z-10">
                  {featured.category}
                </span>
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-normal leading-none select-none text-primary/[0.07]"
                  style={{ fontSize: "clamp(80px, 12vw, 160px)" }}
                  aria-hidden
                >
                  {String(featured.id).padStart(2, "0")}
                </span>
                <span className="text-xs text-black/25 z-10">{featured.readTime} de lecture</span>
              </div>
            )}
          </div>
        </Link>

        {/* Reste des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blogue/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-black/8 bg-white p-7 hover:shadow-md hover:border-black/12 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {post.category}
                </span>
                <span className="text-black/20">·</span>
                <span className="text-xs text-black/40">{post.readTime} de lecture</span>
              </div>

              <h2 className="font-heading font-normal text-xl text-heading leading-snug group-hover:text-primary transition-colors">
                {renderBold(post.title)}
              </h2>

              <p className="text-sm text-black/50 leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-black/6">
                <span className="text-xs text-black/30">{post.date}</span>
                <span className="text-xs text-primary group-hover:underline">
                  Lire l&apos;article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
