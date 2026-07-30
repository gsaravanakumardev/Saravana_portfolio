"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  // { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const location = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/portfolio") return location === "/portfolio" || location?.startsWith("/work/");
    return location === href;
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50">
          {/* <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="33" height="33" stroke="hsl(var(--foreground))" strokeWidth="1" />
            <rect x="9" y="8" width="14" height="2.5" fill="hsl(var(--foreground))" />
            <rect x="9" y="8" width="2.5" height="9" fill="hsl(var(--foreground))" />
            <rect x="9" y="15" width="14" height="2.5" fill="hsl(var(--foreground))" />
            <rect x="20.5" y="15" width="2.5" height="9" fill="hsl(var(--foreground))" />
            <rect x="9" y="21.5" width="14" height="2.5" fill="hsl(var(--foreground))" />
            <rect x="24" y="6" width="4" height="4" fill="hsl(var(--primary))" />
          </svg> */}
          <span className="text-[24px] font-serif tracking-wide text-foreground">Saravanan</span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-all px-4 py-2 rounded-full ${isActive(href)
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
                }`}
              style={{ letterSpacing: "0.02em" }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </nav>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center gap-2 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 md:hidden flex flex-col gap-2"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-medium transition-all px-4 py-3 rounded-lg ${isActive(href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-secondary"
                  }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
