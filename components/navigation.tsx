"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const sections = ["hero", "about", "skills", "experience", "projects", "contact"];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight - windowHeight;
      const progress = (scrollY / fullHeight) * 100;
      setScrollProgress(progress);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Scroll Progress */}
      <motion.div
        className="h-1 bg-primary origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />

      <div className="relative flex items-center justify-between h-16 px-4 md:px-8">

        <motion.a
          href="#hero"
          className="hidden md:flex items-center gap-2 text-lg font-bold tracking-tight group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Initial Badge / Icon */}
          {/* <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full shadow-sm group-hover:rotate-12 transition-transform duration-300">
            M
          </span> */}

          {/* Gradient Text */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            rafinDev
          </span>
        </motion.a>


        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative text-sm font-medium capitalize text-muted-foreground hover:text-primary transition-colors"
            >
              {activeSection === section && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {section}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-accent"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border shadow-inner px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium capitalize transition-colors ${activeSection === section
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
