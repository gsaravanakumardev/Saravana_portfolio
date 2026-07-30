import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, LayoutTemplate } from "lucide-react";
import { SiBehance } from "react-icons/si";

export default function CaseStudy() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const found = projects.find((p) => p.id === id);
    if (found) {
      setProject(found);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Case study not found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Area */}
      <div
        className="pt-32 pb-24 px-6 relative"
        style={{ backgroundColor: project.primaryColor }}
      >
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-white">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={16} /> <span className="font-medium text-sm">Back to Work</span>
          </Link>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-bold tracking-widest uppercase py-1 px-3 border border-white/30 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      {/* Project Meta Info */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto max-w-5xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Role</span>
            <span className="text-sm font-medium text-foreground">{project.role}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Category</span>
            <span className="text-sm font-medium text-foreground">{project.category}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Client/Context</span>
            <span className="text-sm font-medium text-foreground">{project.client}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Year</span>
            <span className="text-sm font-medium text-foreground">{project.year}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-20 space-y-32">

        {/* Placeholder Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full aspect-[16/9] rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: project.secondaryColor }}
        >
          <div className="w-1/2 h-1/2 rounded-full blur-[100px] absolute opacity-40 mix-blend-multiply dark:mix-blend-lighten" style={{ backgroundColor: project.primaryColor }} />
          <LayoutTemplate size={64} className="text-muted-foreground/30 relative z-10" />
        </motion.div>

        {/* Overview & Problem */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">Overview</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
            <p>{project.overview}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">The Problem</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
            <div className="p-8 bg-secondary/50 rounded-2xl border-l-4 border-primary">
              <p className="text-foreground font-medium">{project.problem}</p>
            </div>
          </div>
        </div>

        {/* Personas - 2 side by side */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">Target Personas</h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 gap-5">
            {[project.persona, project.persona2].map((p, pi) => (
              <div key={pi} className="bg-card border border-border p-6">
                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div
                    className="w-12 h-12 flex items-center justify-center font-serif text-xl text-primary-foreground flex-shrink-0"
                    style={{ backgroundColor: project.primaryColor }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{p.name}, {p.age}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic mb-5 leading-relaxed">"{p.bio}"</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Goals</p>
                    <ul className="space-y-1.5">
                      {p.goals.map((g, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">Frustrations</p>
                    <ul className="space-y-1.5">
                      {p.frustrations.map((f, i) => (
                        <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                          <span className="text-destructive mt-0.5 flex-shrink-0">▸</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">Goals</h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-6">
              {project.goals.map((goal, i) => (
                <li key={i} className="flex gap-4 items-start text-lg text-muted-foreground font-light">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-sm mt-1">{i + 1}</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">Design Process</h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-12">
              {project.process.map((step, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex gap-6 relative"
                >
                  {i !== project.process.length - 1 && (
                    <div className="absolute left-[11px] top-8 bottom-[-48px] w-[2px] bg-border" />
                  )}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary bg-background mt-1 relative z-10" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">Key Features</h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-xl">
                  <p className="text-foreground/80 font-medium text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-serif text-foreground sticky top-24">Outcome</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
            <p className="text-foreground font-medium text-xl leading-snug">{project.outcome}</p>
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex flex-wrap gap-4 pt-12 border-t border-border">
          {project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-transform hover:-translate-y-1 shadow-lg"
            >
              <ExternalLink size={18} /> View Prototype
            </a>
          )}
          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1769ff] text-white rounded-full font-medium hover:bg-[#1769ff]/90 transition-transform hover:-translate-y-1 shadow-lg"
            >
              <SiBehance size={18} /> View on Behance
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
