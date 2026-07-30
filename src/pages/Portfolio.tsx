import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">All Works</p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6" style={{ fontWeight: 400 }}>
            Portfolio
          </h1>
          <p className="text-base text-muted-foreground font-light max-w-xl leading-relaxed">
            A collection of UI/UX design projects spanning mobile apps, web platforms, civic tools, and SaaS dashboards - each rooted in user research and crafted with intention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}
