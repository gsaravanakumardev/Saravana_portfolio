import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link href={`/work/${project.id}`} className="block">
        {/* Large colored preview area - fills full width */}
        <div
          className="w-full overflow-hidden relative"
          style={{
            backgroundColor: project.primaryColor,
            aspectRatio: "16/9",
          }}
        >
          {/* Subtle gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(140deg, ${project.primaryColor} 0%, ${project.secondaryColor === "#fff" ? "rgba(255,255,255,0.18)" : project.secondaryColor + "55"} 100%)`,
            }}
          />
          {/* Year badge */}
          <span
            className="absolute top-5 right-5 text-xs font-bold tracking-widest uppercase opacity-60"
            style={{ color: "#ffffff" }}
          >
            {project.year}
          </span>
        </div>

        {/* Content below the image area */}
        <div className="pt-5 pb-2">
          {/* Title - large, like reference */}
          <h3
            className="font-serif text-foreground leading-tight mb-2"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 400 }}
          >
            {project.title}
          </h3>

          {/* Subtitle - // category */}
          <p className="text-muted-foreground text-sm font-light mb-5 tracking-wide">
            // {project.category}
          </p>

          {/* Button - only this element hovers */}
          <span className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-sm font-medium px-5 py-2.5 hover:border-primary hover:text-primary transition-colors">
            View Case Study <ArrowRight size={13} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
