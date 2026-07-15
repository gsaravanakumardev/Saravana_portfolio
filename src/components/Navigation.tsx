"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Overview" },
    { href: "/projects", label: "Case Studies" },
    { href: "/about", label: "Journey" },
    { href: "/contact", label: "Connect" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Logo */}
      <Link href="/" className="font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2">
        <span className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm">
          S
        </span>
        Product Designer
      </Link>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-1 bg-secondary/30 border border-border/50 rounded-2xl px-3 py-2 shadow-sm">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-1.5 rounded-xl text-sm font-medium transition-colors",
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-primary rounded-xl -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        {/* <ThemeToggle /> */}
        <a
          href="/resume.pdf"
          download="Saravana_Kumar_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-secondary/50 hover:bg-secondary/80 border border-border/50 text-foreground transition-all hover:scale-105 active:scale-95"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Overview", icon: "O" },
    { href: "/projects", label: "Case Studies", icon: "C" },
    { href: "/about", label: "Journey", icon: "J" },
    { href: "/contact", label: "Connect", icon: "C" },
  ];

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl p-2 shadow-xl w-[90%] max-w-[360px] justify-between">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative flex-1 py-3 flex justify-center items-center rounded-xl text-sm font-medium transition-colors",
              isActive ? "text-primary-foreground" : "text-muted-foreground"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="mobile-nav-indicator"
                className="absolute inset-0 bg-primary rounded-xl -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
