"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageTransition, staggerContainer, fadeUp } from "@/components/Animations";
import { Container } from "@/components/Container";
import { Mail, Phone, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaBehance, FaGithub, FaInstagram } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="h-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Send a message</h2>
        <p className="text-muted-foreground mb-8">Fill this in and I'll get back to you within a day or two.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 space-y-5" data-testid="form-contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80 mb-2 block">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-background/60 border-white/10 text-white placeholder:text-muted-foreground/60 h-12 rounded-md"
                      data-testid="input-name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80 mb-2 block">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="bg-background/60 border-white/10 text-white placeholder:text-muted-foreground/60 h-12 rounded-md"
                      data-testid="input-email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1 flex flex-col">
                <FormLabel className="text-white/80 mb-2 block">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me a bit about your project..."
                    className="bg-background/60 border-white/10 text-white placeholder:text-muted-foreground/60 rounded-xl resize-none flex-1 min-h-[120px]"
                    data-testid="input-message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            data-testid="button-submit-contact"
            className="w-fit px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-auto"
          >
            {isSubmitting ? (
              <><span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /> Sending...</>
            ) : submitted ? (
              <><CheckCircle2 className="w-5 h-5" /> Message sent</>
            ) : (
              <><Send className="w-5 h-5" /> Send message</>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}

export default function Contact() {
  return (
    <PageTransition className="pt-32 pb-32 md:pt-48 md:pb-32 min-h-screen flex flex-col justify-center">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6">
            Let's talk.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Currently taking on 2 new projects for Q3 2026. If you have a project in mind or just want to say hi, I'd love to hear from you.
          </motion.p>

          {/* Full width layout */}
          <div className="flex flex-col gap-12 w-full text-left">

            {/* Contact Form - full width */}
            <motion.div variants={fadeUp} className="w-full">
              <ContactForm />
            </motion.div>

            {/* Bottom: Contact cards - organized grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Email card */}
              <a
                href="mailto:gsaravanakumar101@gmail.com"
                className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-0.5 group-hover:text-primary transition-colors">Email me</h2>
                  <p className="text-muted-foreground text-sm truncate">gsaravanakumar101@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              {/* Phone card */}
              <a
                href="tel:+916381786199"
                className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-0.5 group-hover:text-primary transition-colors">Call me</h2>
                  <p className="text-muted-foreground text-sm truncate">+91 63817-86199</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              {/* Behance card */}
              <a
                href="https://www.behance.net/saravanan_design"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <FaBehance className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-0.5 group-hover:text-primary transition-colors">Behance</h2>
                  <p className="text-muted-foreground text-sm truncate">/saravanan_design</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              {/* GitHub card */}
              <a
                href="https://github.com/gsaravanakumardev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <FaGithub className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-0.5 group-hover:text-primary transition-colors">GitHub</h2>
                  <p className="text-muted-foreground text-sm truncate">@gsaravanakumardev</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              {/* Instagram card */}
              <a
                href="https://www.instagram.com/uiux.think?igsh=MTFlODY5a2NtaTlzYQ=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-0.5 group-hover:text-primary transition-colors">Instagram</h2>
                  <p className="text-muted-foreground text-sm truncate">@uiux.think</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

            </motion.div>
          </div>
        </motion.div>
      </Container>
    </PageTransition>
  );
}
