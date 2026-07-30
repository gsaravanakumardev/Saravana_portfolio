import { motion } from "framer-motion";

const experiences = [
  {
    role: "Design Technologist",
    company: "DesignPettai",
    period: "Oct 2024 – Present",
    description: [
      "Designed intuitive web and mobile user interfaces using Figma, ensuring seamless user experiences aligned with business objectives.",
      "Created user flows, wireframes, high-fidelity mockups, and interactive prototypes to validate design concepts and improve usability.",
      "Conducted UX research and translated user needs and stakeholder requirements into scalable, user-centered design solutions.",
      "Collaborated closely with developers, product teams, and stakeholders to deliver responsive, accessible, and impact digital products."
    ],
  },
  {
    role: "Software Developer",
    company: "Gove.co, Tirunelveli",
    period: "Jun 2023 – Jun 2024",
    description: [
      "Collaborated with clients and stakeholders to gather requirements and translate business needs into effective software solutions.",
      "Developed and maintained databases and business logic using Microsoft SQL Server to support enterprise applications.",
      "Participated in application development, testing, debugging, and optimization to improve system performance and reliability.",
      "Worked closely with cross-functional teams to deliver scalable solutions aligned with client objectives and business goals."
    ],
  },
];

const skillCategories = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Core Skills",
    skills: ["User Experience Design", "User Interface Design", "Design System Creation", "User Research Methods", "Interactive Prototyping", "Wireframing & Testing", "Responsive Product Design", "React Development", "Component Architecture", "Tailwind CSS"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Tools",
    skills: ["Figma", "FigJam", "VS Code", "GitHub"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Motion",
    skills: ["Framer", "GSAP"],
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6" style={{ fontWeight: 400 }}>About me!</h1>
          <p className="text-xl font-serif text-foreground/70 leading-snug max-w-2xl italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1 space-y-5">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Getting Started</p>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground" style={{ fontWeight: 400 }}>The journey to design</h3>
              <div className="text-muted-foreground font-light leading-relaxed space-y-4 text-base">
                <p>My journey into UI/UX design was driven by a deep curiosity about how people interact with technology. Being self-taught has allowed me to explore the field with a beginner's mind, questioning assumptions and learning through hands-on practice.</p>
                <p>I've spent countless hours in Figma, transforming complex problems into intuitive, beautiful interfaces. For me, design is about bridging the gap between human needs and digital solutions.</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-64">
              <img src="/Hero-1.png" alt="Curiosity-driven" className="w-full h-auto object-cover organic-mask" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-center"
          >
            <div className="flex-1 space-y-5">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">My Approach</p>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground" style={{ fontWeight: 400 }}>Empathy first, pixels second</h3>
              <div className="text-muted-foreground font-light leading-relaxed space-y-4 text-base">
                <p>I believe that great design starts with understanding the user. User research isn't just a step in the process; it's the foundation of every decision I make.</p>
                <p>I focus on creating clean, functional, and accessible designs that solve real problems. Aesthetics matter, but they must serve usability. A beautiful interface that confuses the user is a failed design.</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-64">
              <img src="/Hero-2.png" alt="User-centered" className="w-full h-auto object-cover organic-mask" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 py-8"
          >
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Moving Forward</p>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground" style={{ fontWeight: 400 }}>Ready to make an impact</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-base max-w-3xl">
              I am eager to bridge the gap between design and development, leveraging my UI/UX skills alongside my technical background. I thrive in cross-functional environments where creative concepts are translated into clean, performant code. My ultimate goal is to build cohesive, user-centered digital products that not only look beautiful but function flawlessly and meet business objectives.
            </p>
            <div className="pt-2">
              <a
                href="/Saravanan Resume.pdf"
                download="Saravanan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-6 py-3 hover:border-primary hover:text-primary transition-colors"
              >
                Download Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-28 pt-16 border-t border-border"
        >
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">Work History</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground" style={{ fontWeight: 400 }}>Experience</h2>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8"
              >
                {/* Timeline column: dot + connecting line */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "14px" }}>
                  {/* Square dot */}
                  <div
                    className="flex-shrink-0 bg-background z-10"
                    style={{
                      width: "14px",
                      height: "14px",
                      border: "2px solid hsl(var(--primary))",
                      marginTop: "3px",
                    }}
                  />
                  {/* Connector line - only between entries */}
                  {i < experiences.length - 1 && (
                    <div
                      className="flex-1"
                      style={{
                        width: "1px",
                        backgroundColor: "hsl(var(--border))",
                        minHeight: "48px",
                        marginTop: "4px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ${i < experiences.length - 1 ? "pb-12" : "pb-2"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                    <span className="flex-shrink-0 text-xs text-muted-foreground border border-border px-3 py-1 font-light tracking-wide whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{exp.company}</p>
                  <ul className="text-sm text-muted-foreground font-light leading-relaxed list-disc list-outside ml-4 space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-16 border-t border-border"
        >
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">Toolkit</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground" style={{ fontWeight: 400 }}>
              Skills &amp; Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-2 bg-primary/10 text-primary">{cat.icon}</span>
                  <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs border border-border text-foreground/70 hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-16 border-t border-border"
        >
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">Continuous Learning</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground" style={{ fontWeight: 400 }}>
              Courses &amp; Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://coursera.org/share/b9f2bde9f4a5fca1480caa6a85b76523" target="_blank" rel="noreferrer"
              className="block p-7 border border-border bg-card">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Coursera</p>
              <h4 className="text-lg font-medium text-foreground mb-4 leading-snug">
                Foundations of User Experience (UX) Design
              </h4>
              <span className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-sm font-medium px-5 py-2.5 hover:border-primary hover:text-primary transition-colors">
                View Certificate
              </span>
            </a>
            <a href="https://coursera.org/share/1d525976a8ce1296e3876c15a54dc35a" target="_blank" rel="noreferrer"
              className="block p-7 border border-border bg-card">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Coursera</p>
              <h4 className="text-lg font-medium text-foreground mb-4 leading-snug">
                Introduction to Back-End Development
              </h4>
              <span className="inline-flex items-center gap-2 border border-foreground/30 text-foreground text-sm font-medium px-5 py-2.5 hover:border-primary hover:text-primary transition-colors">
                View Certificate
              </span>
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
