import { SiBehance, SiGithub, SiDribbble } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight, ArrowRight, Mail } from "lucide-react";

const slidingWords = ["design", "research", "prototype", "create", "iterate"];

const designQuotes = [
  { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
  { quote: "The details are not the details. They make the design.", author: "Charles Eames" },
  { quote: "Design is thinking made visual.", author: "Saul Bass" },
  { quote: "A user interface is like a joke. If you have to explain it, it's not that good.", author: "Martin LeBlanc" },
  { quote: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteDir, setQuoteDir] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % slidingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteDir(1);
      setQuoteIndex((i) => (i + 1) % designQuotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevQuote = useCallback(() => {
    setQuoteDir(-1);
    setQuoteIndex((i) => (i - 1 + designQuotes.length) % designQuotes.length);
  }, []);

  const nextQuote = useCallback(() => {
    setQuoteDir(1);
    setQuoteIndex((i) => (i + 1) % designQuotes.length);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-1">
              Hi there, I'm Saravanan!
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground leading-tight flex items-baseline gap-3 flex-wrap">
              I love to{" "}
              <span className="relative inline-block overflow-hidden" style={{ minWidth: "7ch" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slidingWords[wordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-primary inline-block"
                  >
                    {slidingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground max-w-md font-light leading-relaxed"
          >
            I'm a UI/UX designer with a passion for creating functional, user-centered digital experiences.
            My focus is to create clean and thoughtful designs that are reliable with a spark of creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex items-center gap-3"
          >
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              View Portfolio <ArrowRight size={15} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-6 py-3 hover:border-primary hover:text-primary transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-shrink-0 w-64 md:w-80 lg:w-96 relative"
        >
          <img src="/Lighthero.png" alt="Portrait of Saravanan Light" className="w-full h-auto object-cover organic-mask block dark:hidden" />
          <img src="/Darkhero.png" alt="Portrait of Saravanan Dark" className="w-full h-auto object-cover organic-mask hidden dark:block" />
          {/* <img src="/Flower.svg" alt="Flower Decoration" className="absolute -bottom-10 -right-10 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 pointer-events-none z-10" /> */}
        </motion.div>
      </section>

      {/* ── Words I Design By ── */}
      {/* <section className="max-w-5xl mx-auto px-6 py-10 border-t border-border">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Words I Design By</p>
          <div className="flex items-center gap-2">
            <button onClick={prevQuote} className="p-2 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors" aria-label="Previous quote">
              <ChevronLeft size={16} />
            </button>
            <button onClick={nextQuote} className="p-2 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors" aria-label="Next quote">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden border border-border bg-card" style={{ minHeight: "180px" }}>
          <AnimatePresence mode="wait" custom={quoteDir}>
            <motion.div
              key={quoteIndex}
              custom={quoteDir}
              variants={{
                enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-10 py-10 flex flex-col gap-5 justify-center"
            >
              <p className="font-serif text-foreground leading-relaxed italic" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 400 }}>
                "{designQuotes[quoteIndex].quote}"
              </p>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">
                - {designQuotes[quoteIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 mt-4 justify-center">
          {designQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => { setQuoteDir(i > quoteIndex ? 1 : -1); setQuoteIndex(i); }}
              className="transition-all"
              style={{
                width: i === quoteIndex ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === quoteIndex ? "hsl(var(--primary))" : "hsl(var(--border))",
              }}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </section> */}

      {/* ── Portfolio - 3 Featured Works ── */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-t border-border">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">Portfolio</p>
            <h3 className="text-3xl font-serif text-foreground" style={{ fontWeight: 400 }}>Selected Work</h3>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>



    </div>
  );
}



