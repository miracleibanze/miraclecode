"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: smoothEase }}
      className="sticky top-0 z-50"
    >
      <div
        className={[
          "fixed top-0 right-0 left-0 border-b-2 border-b-secondary bg-background/90",
          "transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl shadow-[0_18px_40px_-30px_rgba(11,28,44,0.45)]"
            : "backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
          <a
            href="#home"
            className="font-display text-2xl font-semibold tracking-[-0.04em] text-darkPrimary outline-none transition-colors duration-300 hover:text-secondary focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-secondary/30"
          >
            Mi<span className="text-secondary">rac</span>le.
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "relative pb-1 text-sm font-medium outline-none transition-all duration-300",
                  activeSection === item.href
                    ? "text-secondary"
                    : "text-darkPrimary hover:text-secondary",
                ].join(" ")}
              >
                {item.label}

                <span
                  className={[
                    "mx-auto absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-secondary transition-all duration-300",
                    activeSection === item.href
                      ? "w-8 opacity-100"
                      : "w-0 opacity-0",
                  ].join(" ")}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <DarkModeToggle />

            <ButtonLink
              href="#contact"
              size="sm"
              className="hidden items-center gap-2 rounded-xl border border-secondary bg-transparent text-secondary transition-all duration-300 hover:bg-secondary hover:text-surface md:inline-flex"
            >
              Let's Talk
              <Send className="size-4" />
            </ButtonLink>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex size-11 items-center justify-center rounded-xl text-darkPrimary outline-none transition-all duration-300 hover:text-secondary focus-visible:ring-4 focus-visible:ring-secondary/30 md:hidden"
            >
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.24,
                  ease: smoothEase,
                }}
                className="overflow-hidden border-t border-secondary/20 bg-background/95 backdrop-blur-xl md:hidden"
              >
                <nav
                  className="space-y-2 px-4 py-4"
                  aria-label="Mobile navigation"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={[
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300",
                        activeSection === item.href
                          ? "bg-secondary/10 text-secondary"
                          : "text-darkPrimary hover:bg-secondary/5 hover:text-secondary",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  ))}

                  <ButtonLink
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-3 w-full justify-center rounded-xl"
                  >
                    Contact Me
                  </ButtonLink>
                </nav>
              </motion.div>
              {/* <div className="fixed inset-0 bg-black">kdjfj</div> */}
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
