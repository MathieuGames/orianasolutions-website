import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogue | Ressources & conseils | Oriana Solutions",
  description:
    "Conseils pratiques, tendances tech et guides pour prendre les meilleures décisions numériques pour votre entreprise.",
  openGraph: {
    title: "Blogue | Ressources & conseils | Oriana Solutions",
    description:
      "Conseils, tendances et guides tech pour entrepreneurs et PME au Québec.",
    url: "https://orianasolutions.com/blog",
  },
};
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Breadcrumb from "@/components/shared/breadcrumb";
import { blogPosts } from "@/data/blog";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part
  );
}

export default function BlogPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Breadcrumb items={[{ label: "Blogue" }]} />
      <main className="w-full px-6 sm:px-16 xl:px-25 2xl:px-35 py-14 md:py-20 max-w-[1980px] mx-auto">
        <div className="mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-4">
            Blogue
          </p>
          <h1 className="font-heading font-normal text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-heading leading-tight">
            Ressources &{" "}
            <span className="text-primary">conseils</span>
          </h1>
          <p className="mt-6 text-black/50 text-sm sm:text-base max-w-xl">
            Conseils pratiques, tendances et guides pour vous aider à prendre les meilleures décisions technologiques pour votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-black/8 bg-white p-7 hover:shadow-md transition-shadow"
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
