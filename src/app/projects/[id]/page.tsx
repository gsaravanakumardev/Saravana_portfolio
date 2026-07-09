"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { PageTransition, FadeIn } from "@/components/Animations";
import { Container } from "@/components/Container";
import NotFound from "@/app/not-found";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = projects.find((p) => p.id === id);

  if (!project) return <NotFound />;

  return (
    <PageTransition className="pt-24 pb-40 min-h-screen">
      <Container className="max-w-7xl">
        <FadeIn>
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </FadeIn>

        <div className="mb-16 md:mb-24">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                {project.category}
              </span>
              <span className="text-muted-foreground text-sm font-medium">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </FadeIn>
        </div>

        {/* Hero Visual */}
        <FadeIn delay={0.2} className="w-full h-[90vh] md:h-[95vh] lg:h-[100vh] min-h-[600px] max-h-[1080px] rounded-3xl overflow-hidden mb-16 md:mb-24 relative border border-border/50" style={{ backgroundColor: `color-mix(in srgb, ${project.color} 15%, var(--background))` }}>
          <div className="absolute inset-0 opacity-40" style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color} 0%, transparent 70%)`
          }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter opacity-80" style={{ color: project.color }}>
              {project.title.split(' ')[0]}
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* At a glance - Small panel */}
          <FadeIn delay={0.1} className="md:col-span-4 p-8 rounded-3xl bg-secondary/30 border border-border/30 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">At a Glance</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Role</p>
                  <p className="font-medium text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client / Context</p>
                  <p className="font-medium text-foreground">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-2 py-1 rounded border border-border/50 bg-secondary/30 text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              {project.prototypeUrl && (
                <a href={project.prototypeUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-background transition-transform hover:scale-[1.02] active:scale-[0.98]" style={{ backgroundColor: project.color }}>
                  View Prototype <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.behanceUrl && (
                <a href={project.behanceUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground font-medium hover:bg-secondary/50 transition-colors">
                  Read on Behance <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </FadeIn>

          {/* Overview & Problem - Large panel */}
          <FadeIn delay={0.2} className="md:col-span-8 p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border/30">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Overview</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ color: project.color }}>The Problem</h3>
              <p className="text-xl text-foreground/90 leading-relaxed font-medium">{project.problem}</p>
            </div>
          </FadeIn>

          {/* Goals - Medium panel */}
          <FadeIn delay={0.3} className="md:col-span-6 p-8 md:p-12 rounded-3xl bg-secondary/20 border border-border/30">
            <h3 className="text-2xl font-bold text-foreground mb-6">Goals</h3>
            <ul className="space-y-4">
              {project.goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-secondary/50 text-foreground mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-lg text-foreground/80">{goal}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Persona - Medium panel */}
          <FadeIn delay={0.4} className="md:col-span-6 p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full" style={{ backgroundColor: project.color }} />
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Target Persona</h3>

            <div className="mb-6">
              <h4 className="text-2xl font-bold text-foreground">{project.persona.name}, {project.persona.age}</h4>
              <p className="text-primary mt-1" style={{ color: project.color }}>{project.persona.role}</p>
            </div>

            <p className="text-foreground/70 mb-8 italic">"{project.persona.bio}"</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-foreground mb-3 text-sm">Goals</h5>
                <ul className="space-y-2">
                  {project.persona.goals.map((g, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span> {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-3 text-sm">Frustrations</h5>
                <ul className="space-y-2">
                  {project.persona.frustrations.map((f, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✕</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Features - Full width panel */}
          <FadeIn delay={0.5} className="md:col-span-12 p-8 md:p-12 rounded-3xl bg-background border border-border/50">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-left">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:border-border/70 transition-colors">
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center font-bold text-lg" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                    {i + 1}
                  </div>
                  <p className="text-foreground/90 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Process - Card grid matching Key Features style */}
          <FadeIn delay={0.6} className="md:col-span-12 p-8 md:p-12 rounded-3xl bg-secondary/20 border border-border/30">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-left">Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {project.process.map((step, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:border-border/70 hover:bg-secondary/40 transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Numbered badge -  same style as Key Features */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                  </div>

                </div>
              ))}
            </div>
          </FadeIn>


          {/* Outcome - Full width result panel */}
          <FadeIn delay={0.7} className="md:col-span-12 p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border/30 flex flex-col justify-center relative overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 opacity-20" style={{
              background: `linear-gradient(45deg, ${project.color} 0%, transparent 100%)`
            }} />
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: project.color }}>Outcome</h3>
              <p className="text-2xl md:text-4xl font-display font-medium leading-tight text-foreground">
                "{project.outcome}"
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Bottom Nav */}
        <FadeIn delay={0.8} className="mt-32 pt-12 border-t border-border/50 flex justify-start">
          <Link href="/projects" className="px-8 py-4 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-transform hover:scale-105 active:scale-95">
            View All Projects
          </Link>
        </FadeIn>

      </Container>
    </PageTransition>
  );
}
