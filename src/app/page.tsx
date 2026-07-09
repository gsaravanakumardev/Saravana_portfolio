"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Download, Mail } from "lucide-react";
import { FaBehance, FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { PageTransition, staggerContainer, fadeUp } from "@/components/Animations";
import { Container } from "@/components/Container";

/* ──────────────────────────────────────────────────────────────────
   Featured project carousel (existing)
─────────────────────────────────────────────────────────────────── */
function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = projects.slice(0, 4);

  useEffect(() => {
    if (featured.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  if (featured.length === 0) return null;
  const active = featured[activeIndex % featured.length];

  return (
    <div className="mb-32 w-full">
      <div className="flex items-center justify-between mb-8 text-left">
        <h2 className="text-2xl font-bold">Featured Case Study</h2>
        <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          All projects <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative h-[90vh] md:h-[95vh] lg:h-[100vh] min-h-[600px] max-h-[1080px] rounded-2xl overflow-hidden mb-6 border border-border/30 bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Link covers the entire card area absolutely */}
            <Link href={`/projects/${active.id}`} className="absolute inset-0 group">
              <div className="absolute inset-0" style={{ backgroundColor: "var(--card)" }} />
              <div className="absolute inset-0 opacity-25" style={{
                background: `radial-gradient(circle at 70% 30%, ${active.color} 0%, transparent 60%), radial-gradient(circle at 30% 70%, ${active.color} 0%, transparent 60%)`
              }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter opacity-90" style={{ color: active.color }}>
                  {active.title.split(' ')[0]}
                </h3>
                <p className="text-xl mt-4 font-medium opacity-70 text-foreground">{active.category}</p>
              </div>
              {/* Overlay dims on hover to signal it's clickable */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              {/* "View Case Study" badge fades in on hover */}
              <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-bold">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel controls */}
      <div className="flex items-center justify-start gap-2 mb-6">
        {featured.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${p.title}`}
            className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-8 bg-primary" : "w-3 bg-secondary/70 hover:bg-foreground/40"}`}
          />
        ))}
      </div>

      <Link href={`/projects/${active.id}`} className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group">
        <div>
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{active.title}</h3>
          <p className="text-muted-foreground mt-1">{active.role}</p>
        </div>
        <div className="flex items-center gap-3">
          {active.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-border/50 bg-secondary/30">
              {tag}
            </span>
          ))}
          <span className="flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Open <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Philosophy quote carousel -  Italian Cormorant Garamond serif
─────────────────────────────────────────────────────────────────── */
const quotes = [
  {
    text: "Great products feel obvious in hindsight -  that obviousness is the work.",
    author: "Saravana Kumar",
    label: "Design Philosophy",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    label: "On Design",
  },
  {
    text: "Simplicity is the ultimate sophistication. Remove until you cannot remove anything else.",
    author: "Leonardo da Vinci",
    label: "On Simplicity",
  },
  {
    text: "Good design is as little design as possible. Less, but better.",
    author: "Dieter Rams",
    label: "Less is More",
  },
];

function PhilosophyCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive((next + quotes.length) % quotes.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setActive(i => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mb-32 w-full">
      {/* Card */}
      <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
        {/* Accent glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 p-8 md:p-14">
          {/* Label pill */}
          <div className="mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={`label-${active}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/10"
              >
                {quotes[active].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Quote text -  Cormorant Garamond italic */}
          <div className="overflow-hidden mb-8 min-h-[120px] md:min-h-[100px] flex items-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={`quote-${active}`}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-2xl md:text-4xl font-light italic leading-snug text-foreground/90 tracking-wide"
              >
                &ldquo;{quotes[active].text}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`author-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-base md:text-lg text-muted-foreground italic tracking-wide"
            >
              -  {quotes[active].author}
            </motion.p>
          </AnimatePresence>

          {/* Controls row */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to quote ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-secondary/70 hover:bg-foreground/40"
                    }`}
                />
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(active - 1)}
                aria-label="Previous quote"
                className="w-9 h-9 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center text-foreground hover:bg-secondary/50 hover:border-border/70 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(active + 1)}
                aria-label="Next quote"
                className="w-9 h-9 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center text-foreground hover:bg-secondary/50 hover:border-border/70 transition-all hover:scale-110"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Home Page
─────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <PageTransition className="pt-32 pb-32 md:pt-48 md:pb-32 min-h-screen flex flex-col justify-center">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full text-left"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-border/50 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Taking on 2 new projects for Q3 2026
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Product Designer creating <br className="hidden md:block" />
            <span className="text-muted-foreground">obvious solutions for</span> <br className="hidden md:block" />
            complex problems.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I'm Saravana Kumar, a UI/UX designer based in Tamil Nadu, India.
            I build calm, high-signal interfaces that respect the user's time and attention.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-32">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-secondary/30 border border-border/50 text-foreground font-medium hover:bg-secondary/50 transition-colors flex items-center gap-2"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Featured Project Carousel */}
          <motion.div variants={fadeUp} className="w-full text-left">
            <FeaturedCarousel />
          </motion.div>

          {/* Philosophy Quote -  card carousel with Italian font */}
          <motion.div variants={fadeUp} className="w-full text-left">
            <PhilosophyCarousel />
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
            <a href="https://www.behance.net/saravanan_design" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-border/70 transition-all group flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1769ff]/10 text-[#1769ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaBehance className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Behance</h4>
                  <p className="text-sm text-muted-foreground">/saravanan_design</p>
                </div>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a href="https://github.com/gsaravanakumardev" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-border/70 transition-all group flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGithub className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <p className="text-sm text-muted-foreground">@gsaravanakumardev</p>
                </div>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-border/70 transition-all group flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Resume</h4>
                  <p className="text-sm text-muted-foreground">Download PDF</p>
                </div>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <Link href="/contact" className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-border/70 transition-all group flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Contact</h4>
                  <p className="text-sm text-muted-foreground">Get in touch</p>
                </div>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </PageTransition>
  );
}
