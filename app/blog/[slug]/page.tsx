import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { blogPosts } from "@/data/blog";
import { renderBold } from "@/lib/render-bold";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const headings = post.content.filter((s) => s.heading);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="w-full relative overflow-hidden bg-primary-light">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-black/40 mb-10">
            <Link href="/blog" className="hover:text-primary transition-colors">Blogue</Link>
            <span>/</span>
            <span className="text-black/60">{post.category}</span>
          </div>

          {/* Category badge + meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-white px-4 py-1.5 rounded-full border border-primary/25 shadow-sm">
              {post.category}
            </span>
            <span className="text-black/25">·</span>
            <span className="text-xs text-black/45">{post.readTime} de lecture</span>
            <span className="text-black/25">·</span>
            <span className="text-xs text-black/45">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-heading font-normal text-3xl sm:text-5xl xl:text-7xl text-heading leading-tight mb-8 max-w-4xl">
            {renderBold(post.title)}
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          {/* Excerpt */}
          <p className="text-black/60 text-base sm:text-xl leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

        </div>
      </div>

      {/* Content */}
      <main className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 items-start">

            {/* TOC — sticky sidebar */}
            {headings.length > 0 && (
              <aside className="lg:sticky lg:top-28 self-start">
                <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-5">
                  Table des matières
                </p>
                <nav className="flex flex-col gap-1">
                  {headings.map((section, i) => (
                    <a
                      key={i}
                      href={`#${slugify(section.heading!)}`}
                      className="text-sm text-black/50 hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </aside>
            )}

            {/* Article */}
            <article className="flex flex-col gap-12 min-w-0">
              {post.content.map((section, index) => (
                <div
                  key={index}
                  id={section.heading ? slugify(section.heading) : undefined}
                  className="flex flex-col gap-4"
                >
                  {section.heading && (
                    <h2 className="font-heading font-normal text-2xl md:text-3xl text-heading">
                      {section.heading}
                    </h2>
                  )}
                  <div className="flex flex-col gap-5">
                    {section.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-[17px] text-black/65 leading-8">
                        {renderBold(para)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

          </div>

          {/* CTA */}
          <div className="mt-20 rounded-3xl bg-primary-light border border-primary/15 p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="font-heading font-normal text-2xl text-heading">
                Prêt à lancer votre projet ?
              </h3>
              <p className="text-sm text-black/50">
                Parlons de vos besoins lors d&apos;une consultation gratuite.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Nous contacter →
            </Link>
          </div>

          {/* Other articles */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-8">
                Autres articles
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherPosts.map((other) => (
                  <Link
                    key={other.id}
                    href={`/blog/${other.slug}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-black/8 bg-white p-7 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {other.category}
                    </span>
                    <h3 className="font-heading font-normal text-lg text-heading leading-snug group-hover:text-primary transition-colors">
                      {renderBold(other.title)}
                    </h3>
                    <span className="text-xs text-primary group-hover:underline mt-auto">
                      Lire l&apos;article →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
