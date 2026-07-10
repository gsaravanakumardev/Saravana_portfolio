"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { PageTransition } from "@/components/Animations";
import { Container } from "@/components/Container";

/* ──────────────────────────────────────────────────────────────────
   Project Card — content top-aligned so it's always visible even
   when the next sticky card stacks on top and covers the bottom half
─────────────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  // Each card sticks slightly lower so the peek of the previous card is visible
  const topOffset = 80 + index * 40;

  return (
    <div
      ref={cardRef}
      className="sticky mb-4"
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
    >
      <Link href={`/projects/${project.id}`} className="block group">
        <motion.div
          className="relative w-full h-[80vh] rounded-2xl overflow-hidden border border-border bg-card"
          whileHover={{ borderColor: `${project.color}40` }}
          transition={{ duration: 0.3 }}
        >
          {/* Solid opaque base — prevents lower cards bleeding through */}
          <div className="absolute inset-0 bg-card" />

          {/* Per-project accent wash — faint, right side */}
          <div
            className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse at 85% 40%, ${project.color} 0%, transparent 60%)`,
            }}
          />



          {/* Large decorative number in bottom — purely decorative, gets covered */}
          <div
            className="absolute bottom-0 right-6 text-[clamp(120px,18vw,220px)] font-black leading-none select-none pointer-events-none opacity-[0.04]"
            style={{ color: project.color }}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* ── CONTENT — always at the TOP so it's visible when peeking ── */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Top content block */}
            <div className="flex flex-col md:flex-row gap-0 p-8 md:p-14 pt-10 md:pt-14">

              {/* LEFT — project identity */}
              <div className="flex-1 pr-0 md:pr-12">
                {/* Row: small index label + category badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-bold text-muted-foreground/40 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: `${project.color}18`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.05] mb-5 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mb-7">
                  {project.description.slice(0, 160)}…
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded border border-border/60 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — meta panel */}
              <div className="hidden md:flex flex-col justify-between shrink-0 w-56 lg:w-64 border-l border-border/40 pl-10 lg:pl-14">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Role
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug">
                      {project.role.split("–")[0].trim()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Year
                    </p>
                    <p className="text-sm font-medium text-foreground">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Type
                    </p>
                    <p className="text-sm font-medium text-foreground">{project.client}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden px-8 mt-2 inline-flex items-center gap-2 text-sm font-bold text-primary">
              View Case Study <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Projects Page
─────────────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <PageTransition className="pt-32 md:pt-48 min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-32 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1.5 h-6 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-black tracking-tight text-foreground mb-6"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            A collection of products, dashboards, and digital experiences crafted with intent.
          </motion.p>
        </div>

        {/* Stacked sticky cards */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
