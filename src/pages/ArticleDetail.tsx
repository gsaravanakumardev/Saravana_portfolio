import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { articles } from "@/data/articles";

export default function ArticleDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Article not found</h1>
          <Link href="/articles" className="text-primary text-sm hover:underline">← Back to Articles</Link>
        </div>
      </div>
    );
  }

  // Suggested reads — other articles
  const suggested = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={15} /> Back to Articles
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Main content */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8"
          >
            {/* Header */}
            <header className="mb-12 pb-10 border-b border-border">
              <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-5">
                {article.tag}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6" style={{ fontWeight: 400 }}>
                {article.title}
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground font-light">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime}</span>
              </div>
            </header>

            {/* Sections */}
            <div className="space-y-12">
              {article.sections.map((section, i) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-serif text-foreground mb-5 leading-snug" style={{ fontWeight: 500 }}>
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((para, pi) => (
                      <p key={pi} className="text-base text-foreground/80 font-light leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Author strip */}
            <div className="mt-16 pt-10 border-t border-border flex items-center gap-5">
              <div className="w-14 h-14 flex-shrink-0 bg-primary/10 border border-border flex items-center justify-center">
                <span className="text-xl font-serif text-primary font-medium">S</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Saravanan G</p>
                <p className="text-xs text-muted-foreground font-light mt-0.5">
                  Design Technologist · UI/UX Designer
                </p>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-10">

              {/* Progress indicator (decorative) */}
              <div className="border border-border p-6">
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">In this article</p>
                <ul className="space-y-3">
                  {article.sections.map((section, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-4 h-px bg-primary/40 inline-block" />
                      <span className="text-xs text-muted-foreground font-light leading-snug">{section.heading}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More articles */}
              <div>
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-5">More Articles</p>
                <div className="space-y-4">
                  {suggested.map((a) => (
                    <Link key={a.slug} href={`/articles/${a.slug}`}
                      className="block border border-border p-4 hover:border-primary transition-colors group"
                    >
                      <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-1.5">{a.tag}</span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug block">
                        {a.title}
                      </span>
                      <span className="text-xs text-muted-foreground font-light mt-1 block">{a.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
