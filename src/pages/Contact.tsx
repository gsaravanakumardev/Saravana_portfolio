import { SiBehance, SiGithub, SiDribbble } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const socials = [
  { label: "LinkedIn", icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/saravana-design/" },
  { label: "Behance", icon: <SiBehance size={18} />, href: "https://www.behance.net/saravanan_design" },
  { label: "Dribbble", icon: <SiDribbble size={18} />, href: "https://dribbble.com/saravananakumar" },
  { label: "GitHub", icon: <SiGithub size={18} />, href: "https://github.com/gsaravanakumardev" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">Say Hello</p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6" style={{ fontWeight: 400 }}>
            Let's Talk
          </h1>
          <p className="text-base text-muted-foreground font-light max-w-xl leading-relaxed">
            Open to freelance collaborations, full-time opportunities, or just a friendly design conversation.
            Drop me a message - I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-10"
          >
            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 p-2 border border-border text-primary flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1">Email</p>
                  <a
                    href="mailto:gsaravanakumar.dev@gmail.com"
                    className="text-sm text-foreground hover:text-primary transition-colors break-all"
                  >
                    gsaravanakumar.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 p-2 border border-border text-primary flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1">Location</p>
                  <p className="text-sm text-foreground">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">Find me on</p>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-2 px-4 py-2.5 border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-all"
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-5 border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 inline-block animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Available for work</span>
              </div>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Currently open to freelance projects and full-time UI/UX roles.
              </p>
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-border">
                <div className="text-4xl mb-4">✉️</div>
                <h2 className="text-2xl font-serif text-foreground mb-3" style={{ fontWeight: 400 }}>Message sent!</h2>
                <p className="text-muted-foreground font-light text-sm">
                  Thank you for reaching out! I will get back to you shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-8 border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-border bg-background text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-border bg-background text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, feedback, etc."
                    className="w-full border border-border bg-background text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me about your project, idea, or just say hello…"
                    className="w-full border border-border bg-background text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm mb-4">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-8 py-4 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Sending...</span>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
