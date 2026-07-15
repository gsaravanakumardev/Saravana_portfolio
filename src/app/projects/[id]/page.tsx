"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, XCircle, Lightbulb, Users, Target, Activity, LayoutDashboard, Component, Smartphone, Wrench, Clock, Briefcase, Globe, Info, Zap } from "lucide-react";
import { PageTransition, FadeIn } from "@/components/Animations";
import { Container } from "@/components/Container";
import NotFound from "@/app/not-found";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Small, reusable section heading: keeps type rhythm consistent across
// every section without repeating the same three classNames everywhere.
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <div className="flex items-center gap-2.5">
          <span className="h-px w-6 bg-primary/60" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{eyebrow}</span>
        </div>
      )}
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{title}</h3>
      {description && <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">{description}</p>}
    </div>
  );
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
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 font-medium group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to projects
          </Link>
        </FadeIn>

        {/* Header Section */}
        <div className="mb-14 md:mb-20">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary text-secondary-foreground border border-border">
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="text-muted-foreground text-sm font-medium">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.05] max-w-4xl">
              {project.title}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </FadeIn>
        </div>

        {/* Hero Visual */}
        <FadeIn delay={0.2} className="w-full h-[45vh] md:h-[62vh] min-h-[360px] rounded-3xl overflow-hidden mb-16 md:mb-24 relative border border-border/50 shadow-2xl">
          <div className="absolute inset-0" style={{ background: project.gradient }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/10" />
          <div className="absolute inset-0 flex items-end p-8 md:p-14">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-lg leading-[0.95] max-w-4xl">
              {project.accent}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">

          {/* Left Column: At a Glance */}
          <div className="md:col-span-4">
            <div className="sticky top-28 space-y-6">
              <FadeIn delay={0.3}>
                <Card className="bg-secondary/30 border-border/50 shadow-sm rounded-2xl gap-0 py-6">
                  <CardHeader>
                    <CardTitle className="text-base font-bold uppercase tracking-wide flex items-center gap-2 text-foreground/90">
                      <Info className="w-4 h-4 text-primary" /> At a Glance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 pt-2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Role</p>
                        <p className="font-semibold text-sm text-foreground leading-snug">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Duration</p>
                        <p className="font-semibold text-sm text-foreground leading-snug">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Team</p>
                        <p className="font-semibold text-sm text-foreground leading-snug">{project.team}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5" /> Platform</p>
                        <p className="font-semibold text-sm text-foreground leading-snug">{project.platform}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> Context</p>
                      <p className="font-semibold text-sm text-foreground leading-snug">{project.client}</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2.5 flex items-center gap-1.5"><Wrench className="w-3.5 h-3.5" /> Tools</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map(tool => (
                          <Badge key={tool} variant="secondary" className="font-medium border-border/50 bg-background/60 text-xs">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 flex flex-col gap-3">
                  {project.prototypeUrl && (
                    <a href={project.prototypeUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-primary-foreground bg-primary transition-all hover:opacity-90 hover:scale-[1.02] shadow-md">
                      View Prototype <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.behanceUrl && (
                    <a href={project.behanceUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-all">
                      Read on Behance <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="md:col-span-8 space-y-16 md:space-y-20">

            {/* Overview & Context */}
            <FadeIn delay={0.4} className="space-y-10">
              <section className="space-y-4">
                <SectionHeading eyebrow="Overview" title="What this project set out to do" />
                <p className="text-lg text-muted-foreground leading-relaxed">{project.overview}</p>
              </section>

              <section className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2.5 p-5 rounded-2xl bg-secondary/20 border border-border/50">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-foreground/80">Background</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.background}</p>
                </div>
                <div className="space-y-2.5 p-5 rounded-2xl bg-secondary/20 border border-border/50">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-foreground/80">Why It Mattered</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.whyItMattered}</p>
                </div>
              </section>
            </FadeIn>

            {/* The Problem Space */}
            <FadeIn delay={0.5}>
              <Card className="border-destructive/20 bg-destructive/5 overflow-hidden rounded-2xl gap-0 py-0">
                <div className="h-1.5 w-full bg-destructive/40" />
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl text-destructive flex items-center gap-2"><Activity className="w-5 h-5" /> The Problem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-6">
                  <p className="text-lg font-medium text-foreground leading-relaxed">{project.problem}</p>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide text-foreground/80 mb-3">User Struggles</h4>
                      <ul className="space-y-2.5">
                        {project.userStruggles.map((struggle, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                            <span>{struggle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide text-foreground/80 mb-3">Business Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.businessIssue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Business Goals */}
            <FadeIn delay={0.55} className="space-y-6">
              <SectionHeading eyebrow="Direction" title="Business & Project Goals" />
              <div className="grid sm:grid-cols-2 gap-3">
                {project.businessGoals.map((goal, i) => (
                  <div key={i} className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-start gap-3">
                    <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-foreground/90 leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Research & Discovery */}
            <FadeIn delay={0.6} className="space-y-6">
              <SectionHeading eyebrow="Discovery" title="Research & Discovery" />

              <Tabs defaultValue="insights" className="w-full">
                <TabsList className="w-full justify-start overflow-x-auto bg-secondary/30 p-1 rounded-xl border border-border/50 h-auto">
                  <TabsTrigger value="insights" className="rounded-lg text-sm">Key Insights</TabsTrigger>
                  <TabsTrigger value="goals" className="rounded-lg text-sm">Goals & Methods</TabsTrigger>
                  <TabsTrigger value="assumptions" className="rounded-lg text-sm">Assumptions</TabsTrigger>
                </TabsList>
                <div className="mt-5">
                  <TabsContent value="insights" className="space-y-3 m-0">
                    {project.research.insights.map((insight, i) => (
                      <div key={i} className="p-4 rounded-xl border border-border/50 bg-secondary/10 flex gap-3 items-start">
                        <Lightbulb className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{insight}</p>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="goals" className="m-0 grid sm:grid-cols-2 gap-8 p-5 bg-secondary/10 rounded-xl border border-border/50">
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Research Goals</h4>
                      <ul className="space-y-2.5 list-disc list-inside text-sm text-muted-foreground marker:text-primary">
                        {project.research.goals.map((g, i) => <li key={i}>{g}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Methods Used</h4>
                      <ul className="space-y-2.5 list-disc list-inside text-sm text-muted-foreground marker:text-primary">
                       {project.research.methods.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                      
                    </div>
                  </TabsContent>
                  <TabsContent value="assumptions" className="m-0">
                    <ul className="space-y-2.5">
                      {project.research.assumptions.map((a, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground p-4 bg-secondary/10 border border-border/50 rounded-xl">
                          <span className="text-muted-foreground/50 font-bold shrink-0">0{i + 1}</span> {a}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </div>
              </Tabs>
            </FadeIn>

            {/* Persona */}
            <FadeIn delay={0.65} className="space-y-6">
              <SectionHeading eyebrow="Who we're designing for" title="Target Persona" />
              <Card className="overflow-hidden border-border/50 bg-transparent rounded-2xl gap-0 py-0">
                <div className="bg-secondary/40 p-6 md:p-8 border-b border-border/50 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl" />
                  <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-center relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-foreground leading-tight">{project.persona.name}, {project.persona.age}</h4>
                        <p className="text-sm text-primary font-semibold mt-0.5">{project.persona.role}</p>
                      </div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 max-w-xs shadow-sm">
                      <p className="text-sm italic text-muted-foreground leading-relaxed">"{project.persona.bio}"</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 bg-secondary/10">
                  <div>
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2 mb-3"><CheckCircle2 className="w-4 h-4 text-green-500" /> Goals & Needs</h5>
                    <ul className="space-y-2.5">
                      {project.persona.goals.map((g, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <span className="text-green-500 mt-0.5">•</span> {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2 mb-3"><XCircle className="w-4 h-4 text-destructive" /> Frustrations</h5>
                    <ul className="space-y-2.5">
                      {project.persona.frustrations.map((f, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <span className="text-destructive mt-0.5">•</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Journey Map */}
            <FadeIn delay={0.7} className="space-y-6">
              <SectionHeading title="User Journey" description="Mapping the experience and finding opportunities for improvement." />

              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />
                <div className="space-y-4">
                  {project.journey.map((stage, i) => (
                    <div key={i} className="relative md:pl-8">
                      <div className="absolute left-0 top-6 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background ring-1 ring-primary/30 hidden md:block" />
                      <div className="p-6 rounded-2xl bg-secondary/10 border border-border/50 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm">
                        <div className="grid md:grid-cols-4 gap-6">
                          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-border/50 pb-4 md:pb-0 pr-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">Stage {i + 1}</span>
                            <h4 className="font-bold text-lg leading-tight">{stage.stage}</h4>
                          </div>
                          <div className="md:col-span-3 grid sm:grid-cols-3 gap-6">
                            <div>
                              <p className="text-[10px] text-muted-foreground mb-1.5 font-semibold uppercase tracking-wider">Action</p>
                              <p className="text-sm font-medium">{stage.action}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground mb-1.5 font-semibold uppercase tracking-wider">Pain Point</p>
                              <p className="text-sm text-destructive">{stage.painPoint}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground mb-1.5 font-semibold uppercase tracking-wider">Opportunity</p>
                              <p className="text-sm text-green-600 dark:text-green-400 font-medium">{stage.improvement}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* IA & User Flow */}
            <FadeIn delay={0.75} className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-secondary/5 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><LayoutDashboard className="w-4 h-4 text-primary" /> Information Architecture</CardTitle>
                  <CardDescription className="leading-relaxed">{project.ia.rationale}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background rounded-xl p-4 border border-border/50 shadow-inner">
                    <ul className="space-y-2.5">
                      {project.ia.structure.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-secondary/5 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Component className="w-4 h-4 text-primary" /> User Flow</CardTitle>
                  <CardDescription className="leading-relaxed">{project.userFlow.rationale}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background rounded-xl p-4 border border-border/50 shadow-inner">
                    <div className="space-y-3.5">
                      {project.userFlow.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                          <p className="text-sm font-medium">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* UX Decisions */}
            <FadeIn delay={0.8} className="space-y-6">
              <SectionHeading eyebrow="Rationale" title="Key UX Decisions" />
              <Accordion type="single" collapsible className="w-full border border-border/50 rounded-2xl px-4 bg-secondary/5">
                {project.uxDecisions.map((decision, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className={i === project.uxDecisions.length - 1 ? "border-none" : "border-border/50"}>
                    <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors py-5 text-base">
                      <span className="flex gap-4 items-baseline">
                        <span className="text-muted-foreground text-xs font-normal shrink-0">0{i + 1}</span>
                        <span>{decision.area}: {decision.decision}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pl-9 pb-6">
                      {decision.reasoning}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>

            {/* Iterations */}
            <FadeIn delay={0.85} className="space-y-6">
              <SectionHeading eyebrow="Process" title="Design Iterations" />
              <div className="space-y-4">
                {project.iterations.map((iter, i) => (
                  <Card key={i} className="border-border/50 bg-secondary/5 shadow-sm rounded-2xl gap-0 py-0">
                    <CardHeader className="py-4 border-b border-border/50">
                      <CardTitle className="text-base flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                        Iteration {iter.version}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 gap-6 py-5">
                      <div>
                        <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">What Changed</p>
                        <p className="text-sm text-foreground leading-relaxed">{iter.what}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">Feedback / Reason</p>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">"{iter.feedback}"</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>

            {/* Final Solution */}
            <FadeIn delay={0.9}>
              <div className="p-7 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary/30 border border-border/50 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Final Solution</h3>
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed font-medium">{project.finalSolution}</p>

                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-foreground/70 mb-4">Key Features Delivered</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex gap-3 p-4 rounded-xl bg-background border border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground/80 font-medium leading-snug">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Outcomes & Results */}
            <FadeIn delay={0.95} className="space-y-10 pt-4 border-t border-border/50">
              <div className="text-left space-y-4 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary">The Impact</h3>
                <p className="text-2xl md:text-4xl font-black text-foreground tracking-tight max-w-3xl mx-auto leading-tight">
                  "{project.outcome}"
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-secondary/20 border border-border/50 text-center shadow-sm">
                    <p className="text-2xl font-black text-primary mb-2">{result.value}</p>
                    <p className="font-semibold text-foreground text-sm mb-1.5">{result.metric}</p>
                    {result.note && <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{result.note}</p>}
                  </div>
                ))}
              </div>

              <div className="bg-muted/20 p-5 rounded-xl border border-border/50 text-center max-w-3xl mx-auto">
                <p className="text-sm text-muted-foreground font-medium">{project.resultsNote}</p>
              </div>
            </FadeIn>

            {/* Lessons Learned */}
            <FadeIn delay={1.0} className="space-y-6 pb-8">
              <SectionHeading eyebrow="Retrospective" title="Lessons Learned" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> What went well</h4>
                    <ul className="space-y-2.5 list-disc list-inside text-sm text-muted-foreground marker:text-green-500">
                      {project.lessons.learned.map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> Looking forward</h4>
                    <ul className="space-y-2.5 list-disc list-inside text-sm text-muted-foreground marker:text-primary">
                      {project.lessons.future.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-secondary/30 border border-border/50 shadow-sm">
                    <h4 className="font-bold text-sm text-foreground mb-2.5">Areas for Improvement</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.lessons.improve}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-secondary/30 border border-border/50 shadow-sm">
                    <h4 className="font-bold text-sm text-foreground mb-2.5">Trade-offs Made</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.lessons.tradeoffs}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Bottom Nav */}
        <FadeIn delay={1.1} className="mt-16 pt-14 border-t border-border/50 flex justify-center">
          <Link href="/projects" className="px-8 py-4 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-transform hover:scale-105 active:scale-95 shadow-xl">
            Explore More Projects
          </Link>
        </FadeIn>

      </Container>
    </PageTransition>
  );
}