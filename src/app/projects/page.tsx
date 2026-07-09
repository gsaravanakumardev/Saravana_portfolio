"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { PageTransition } from "@/components/Animations";
import { Container } from "@/components/Container";

function StickyProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate top offset for stacking effect
  const topOffset = 100 + (index * 40);

  return (
    <div 
      ref={cardRef}
      className="sticky w-full mb-32 md:mb-64"
      style={{ top: `${topOffset}px`, zIndex: index }}
    >
      <Link href={`/projects/${project.id}`} className="block group">
        <motion.div 
          className="relative w-full aspect-[4/3] md:aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl border border-white/10 origin-top bg-[#232620]"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Opaque base layer -- must be fully solid so stacked cards below never bleed through */}
          <div className="absolute inset-0" style={{ backgroundColor: "#232620" }} />

          {/* Custom Visual Background */}
          <div className="absolute inset-0 opacity-25" style={{ 
            background: `radial-gradient(circle at ${index % 2 === 0 ? '70% 30%' : '30% 70%'}, ${project.color} 0%, transparent 60%), radial-gradient(circle at ${index % 2 === 0 ? '30% 70%' : '70% 30%'}, ${project.color} 0%, transparent 50%)` 
          }} />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10 transition-transform duration-700 group-hover:scale-105">
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter opacity-90" style={{ color: project.color }}>
               {project.title.split(' ')[0]}
             </h2>
             <p className="text-2xl mt-4 font-medium opacity-80 text-white">{project.category}</p>
          </div>
          
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          
          {/* Bottom Info Bar -- translate-y-full keeps it fully off-canvas at rest so no sliver
              is visible on the last card, which never gets covered by another sticky card. */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-background/90 to-transparent flex flex-col md:flex-row justify-between items-end md:items-center gap-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-white/70 mt-1">{project.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold bg-white text-black px-5 py-2 rounded-full">
                View Case Study
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default function Projects() {
  return (
    <PageTransition className="pt-32 pb-32 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <div className="max-w-4xl mb-24 md:mb-40 text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6"
          >
            Selected Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            A collection of products, dashboards, and digital experiences.
          </motion.p>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <StickyProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* Spacer to allow scrolling past the last sticky card */}
        <div className="h-[20vh]"></div>
      </Container>
    </PageTransition>
  );
}
