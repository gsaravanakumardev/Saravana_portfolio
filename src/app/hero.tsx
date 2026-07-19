"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/components/Animations";
import { Container } from "@/components/Container";

export function Hero() {
    return (
        <section className="relative flex flex-col lg:block w-full lg:min-h-[85vh] mb-20 lg:mb-32 pt-24 lg:pt-24">
            {/* Text Content */}
            <div className="w-full flex-1 flex flex-col justify-center lg:min-h-[85vh] relative z-10">
                <Container>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-[54%] text-left pb-12 lg:pb-0"
                    >
                        <motion.div
                            variants={fadeUp}
                            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-secondary border border-border text-sm text-muted-foreground"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Crafting crisp digital experiences
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
                        >
                            Product Designer creating{" "}
                            <br className="hidden md:block" />
                            <span className="text-muted-foreground">obvious solutions for</span>{" "}
                            <br className="hidden md:block" />
                            complex problems.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
                        >
                            I&apos;m Saravana Kumar, a UI/UX designer based in Tamil Nadu, India. I build calm,
                            high-signal interfaces that respect the user&apos;s time and attention.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/projects"
                                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
                            >
                                View Case Studies
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-xl bg-secondary border border-border text-foreground font-medium hover:bg-muted transition-colors flex items-center gap-2"
                            >
                                Get in touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </Container>
            </div>

            {/* Image Content */}
            <div className="relative w-full h-[60vh] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%] lg:h-full z-0">
                <Image
                    src="/Profile.png"
                    alt="Saravana Kumar"
                    fill
                    priority
                    className="object-scale-down object-top lg:object-center"
                />
                {/* Gradient fade so it blends into the background */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/20 lg:to-transparent" />
            </div>
        </section>
    );
}