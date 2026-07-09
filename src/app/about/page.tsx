"use client";

import { motion } from "framer-motion";
import { PageTransition, staggerContainer, fadeUp } from "@/components/Animations";
import { Container } from "@/components/Container";
import { ExternalLink, GraduationCap, Briefcase, Code2, PenTool, LayoutTemplate } from "lucide-react";

export default function About() {
  const experience = [
    {
      role: "Design Technologist",
      company: "DesignPettai",
      date: "Oct 2024 -  Present",
      description: "Designing user interfaces and digital product experiences in Figma -  wireframes, prototypes and responsive UI -  connecting user needs with business goals.",
    },
    {
      role: "Software Developer",
      company: "Gove.co, Tirunelveli",
      date: "Jun 2023 -  Jun 2024",
      description: "Worked extensively with Microsoft SQL Server, developing efficient databases and business logic. Partnered with clients to deliver software aligned with their goals.",
    }
  ];

  const skills = [
    {
      category: "Product Design",
      icon: <LayoutTemplate className="w-5 h-5 text-primary" />,
      items: ["Product Thinking", "User-Centered Design", "Design Strategy", "Product Discovery", "Information Architecture", "Design Systems", "Interaction Design", "User Flows"]
    },
    {
      category: "UX Design",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      items: ["User Research", "Personas", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing", "Accessibility", "Heuristic Evaluation"]
    },
    {
      category: "UI Design",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      items: ["Mobile App Design", "Web Application Design", "Dashboard Design", "Responsive Design", "Visual Design", "Typography", "Color Systems", "Auto Layout"]
    },
    {
      category: "Tech",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      items: ["ReactJS", "HTML5", "CSS3", "JavaScript (ES6+)", "TailwindCSS", "SQL Server"]
    }
  ];

  const certifications = [
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google, via Coursera",
      link: "https://coursera.org/share/b9f2bde9f4a5fca1480caa6a85b76523"
    },
    {
      title: "Introduction to Back-End Development",
      issuer: "Meta, via Coursera",
      link: "https://coursera.org/share/1d525976a8ce1296e3876c15a54dc35a"
    }
  ];

  return (
    <PageTransition className="pt-32 pb-32 md:pt-48 md:pb-32 min-h-screen">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black tracking-tight text-foreground mb-8">
            About Me
          </motion.h1>

          <motion.div variants={fadeUp} className="prose prose-lg prose-invert max-w-3xl mb-24">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Results-oriented Product/UI-UX Designer creating user-centered digital products for web and mobile.
            </p>
            <p className="text-foreground/70 mt-6">
              I blend design thinking with technical understanding to build calm, high-signal interfaces. My background as a software developer gives me a pragmatic approach to design- I design things that can actually be built, focusing on logic, states, and edge cases alongside aesthetics.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeUp} className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" /> Experience
            </h2>
            <div className="flex flex-col gap-0">
              {experience.map((job, idx) => (
                <div key={idx} className="flex gap-6 md:gap-10">
                  {/* Timeline column */}
                  <div className="flex flex-col items-center shrink-0 pt-1">
                    {/* Dot */}
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 z-10" />
                    {/* Vertical line between dots (not after last item) */}
                    {idx < experience.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-white/5 mt-2 mb-0 min-h-[80px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-12 flex-1 ${idx === experience.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                        <p className="text-lg text-primary font-medium">{job.company}</p>
                      </div>
                      <span className="text-muted-foreground font-mono text-sm px-3 py-1 rounded-full bg-secondary/30 border border-border/50 inline-block w-fit shrink-0">
                        {job.date}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          {/* Skills */}
          <motion.div variants={fadeUp} className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-10">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-secondary/30 border border-border/30 hover:border-border/50 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-secondary/50 text-foreground/80 text-sm font-medium border border-border/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" /> Courses & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors flex flex-col justify-between h-full min-h-[160px]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors pr-8">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                    View Credential <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </PageTransition>
  );
}
