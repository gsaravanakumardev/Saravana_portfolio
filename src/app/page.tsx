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
   Featured project carousel — Studio Noir redesign
   Editorial two-column layout: big number + title left, meta right
─────────────────────────────────────────────────────────────────── */
function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const featured = projects.slice(0, 4);

  useEffect(() => {
    if (featured.length < 2) return;
    const timer = setInterval(() => {
      setDir(1);
      setActiveIndex((i) => (i + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  if (featured.length === 0) return null;

  const go = (next: number) => {
    setDir(next > activeIndex ? 1 : -1);
    setActiveIndex((next + featured.length) % featured.length);
  };

  const active = featured[activeIndex];

  return (
    <div className="mb-32 w-full">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Featured Work
          </span>
        </div>
        <Link
          href="/projects"
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors group"
        >
          All projects
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Card */}
      <Link href={`/projects/${active.id}`} className="block group">
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-border bg-card"
          style={{ minHeight: "420px" }}
        >
          {/* Accent color wash — very subtle */}
          <div
            className="absolute inset-0 opacity-[0.07] transition-opacity duration-700 group-hover:opacity-[0.12]"
            style={{
              background: `radial-gradient(ellipse at 80% 50%, ${active.color} 0%, transparent 70%)`,
            }}
          />



          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active.id}
              custom={dir}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 40, y: 0 }),
                center: { opacity: 1, x: 0, y: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -40, y: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-full flex flex-col md:flex-row"
            >
              {/* LEFT — large index number + project title */}
              <div className="flex-1 flex flex-col justify-between p-8 md:p-12 border-b md:border-b-0 md:border-r border-border/50">
                {/* Project number */}
                <span
                  className="text-[80px] md:text-[120px] font-black leading-none select-none opacity-[0.06]"
                  style={{ color: active.color }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <div className="mt-auto">
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1 rounded mb-4"
                    style={{
                      backgroundColor: `${active.color}18`,
                      color: active.color,
                    }}
                  >
                    {active.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05] mb-3">
                    {active.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                    {active.description.slice(0, 120)}…
                  </p>
                </div>
              </div>

              {/* RIGHT — meta + tags + CTA */}
              <div className="flex flex-col justify-between p-8 md:p-12 md:w-72 lg:w-80 shrink-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded border border-border/60 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta list */}
                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                      Role
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {active.role.split("–")[0].trim()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                      Year
                    </p>
                    <p className="text-sm font-medium text-foreground">{active.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                      Type
                    </p>
                    <p className="text-sm font-medium text-foreground">{active.client}</p>
                  </div>
                </div>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Link>

      {/* Controls */}
      <div className="mt-5 flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {featured.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={`Show ${p.title}`}
              className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(activeIndex - 1)}
            aria-label="Previous project"
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(activeIndex + 1)}
            aria-label="Next project"
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Philosophy quote carousel
─────────────────────────────────────────────────────────────────── */
const quotes = [
  {
    text: "Great products feel obvious in hindsight — that obviousness is the work.",
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
      setActive((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mb-32 w-full">
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-8 md:p-14">
        {/* Subtle lime glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

        {/* Label */}
        <div className="mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={`label-${active}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded border border-primary/30 text-primary bg-primary/10"
            >
              {quotes[active].label}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Quote */}
        <div className="overflow-hidden mb-8 min-h-[100px] md:min-h-[80px] flex items-center">
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
            — {quotes[active].author}
          </motion.p>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to quote ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-1 bg-primary" : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
                  }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous quote"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next quote"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
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
    <PageTransition className="pt-32 pb-32 md:pt-48 md:pb-32 min-h-[80vh] flex flex-col justify-center">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Taking on 2 new projects for Q3 2026
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
          >
            Product Designer creating{" "}
            <br className="hidden md:block" />
            <span className="text-muted-foreground">obvious solutions for</span>{" "}
            <br className="hidden md:block" />
            complex problems.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I&apos;m Saravana Kumar, a UI/UX designer based in Tamil Nadu, India. I build calm,
            high-signal interfaces that respect the user&apos;s time and attention.
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
              className="px-8 py-4 rounded-full bg-secondary border border-border text-foreground font-medium hover:bg-muted transition-colors flex items-center gap-2"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Featured Project Carousel */}
          <motion.div variants={fadeUp} className="w-full text-left">
            <FeaturedCarousel />
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div variants={fadeUp} className="w-full text-left">
            <PhilosophyCarousel />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left"
          >
            <a
              href="https://www.behance.net/saravanan_design"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-secondary border border-border hover:border-foreground/20 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1769ff]/10 text-[#1769ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaBehance className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Behance</h4>
                  <p className="text-xs text-muted-foreground">/saravanan_design</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://github.com/gsaravanakumardev"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-secondary border border-border hover:border-foreground/20 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">GitHub</h4>
                  <p className="text-xs text-muted-foreground">@gsaravanakumardev</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="/resume.pdf"
              download="Saravana_Kumar_Resume.pdf"
              className="p-5 rounded-xl bg-secondary border border-border hover:border-primary/40 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Resume</h4>
                  <p className="text-xs text-muted-foreground">Download PDF</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <Link
              href="/contact"
              className="p-5 rounded-xl bg-secondary border border-border hover:border-foreground/20 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Contact</h4>
                  <p className="text-xs text-muted-foreground">Get in touch</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </PageTransition>
  );
}
