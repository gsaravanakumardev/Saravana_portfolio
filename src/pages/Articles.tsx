import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <div className="min-h-screen bg-background">
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Writing</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6" style={{ fontWeight: 400 }}>
            Articles & Insights
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            Thoughts on design craft, process, career, and the small decisions that shape great user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group h-full"
            >
              <Link href={`/articles/${article.slug}`} className="flex flex-col h-full border border-border bg-card transition-all duration-300 rounded-xl overflow-hidden hover:-translate-y-1">
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1 text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      <Tag size={12} /> {article.tag}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif text-foreground mb-3 leading-snug group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>
                    {article.title}
                  </h2>

                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-xs font-medium text-muted-foreground">{article.readTime}</span>
                    <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}
