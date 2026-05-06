"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";

const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
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
                    "border fixed top-0 right-0 left-0",
                    "transition-all duration-300",
                    isScrolled
                        ? "border-[#0B1C2C]/10 bg-white/86 shadow-[0_18px_40px_-30px_rgba(11,28,44,0.45)] backdrop-blur-xl"
                        : "border-transparent bg-white/70 backdrop-blur-md",
                ].join(" ")}
            >
                <div className="mx-auto max-w-7xl flex items-center justify-between gap-6 px-4 py-3 md:px-6">
                    <a
                        href="#home"
                        className="font-display text-xl font-semibold tracking-[-0.04em] text-[#0B1C2C] outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#D4AF37]/30"
                    >
                        Miracle.
                    </a>

                    <nav
                        className="hidden items-center gap-8 md:flex"
                        aria-label="Primary navigation"
                    >
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-[#0B1C2C]/72 outline-none hover:text-[#0B1C2C] focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-[#D4AF37]/25"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <DarkModeToggle />
                        <ButtonLink href="#contact" size="sm" className="hidden md:inline-flex">
                            Contact Me
                        </ButtonLink>

                        <button
                            type="button"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            onClick={() => setIsMenuOpen((current) => !current)}
                            className="inline-flex size-11 items-center justify-center rounded-full border border-[#0B1C2C]/10 bg-white text-[#0B1C2C] shadow-[0_10px_25px_-18px_rgba(11,28,44,0.5)] outline-none hover:border-[#D4AF37]/50 hover:text-[#D4AF37] focus-visible:ring-4 focus-visible:ring-[#D4AF37]/30 md:hidden"
                        >
                            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen ? (
                        <motion.div
                            id="mobile-navigation"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: smoothEase }}
                            className="overflow-hidden md:hidden"
                        >
                            <nav
                                className="mt-4 space-y-2 border-t border-[#0B1C2C]/8 pt-4"
                                aria-label="Mobile navigation"
                            >
                                {navigation.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#0B1C2C]/80 outline-none hover:bg-[#F8FAFC] hover:text-[#0B1C2C] focus-visible:ring-4 focus-visible:ring-[#D4AF37]/20"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                <ButtonLink
                                    href="#contact"
                                    onClick={closeMenu}
                                    className="mt-3 w-full"
                                >
                                    Contact Me
                                </ButtonLink>
                            </nav>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
            
        </motion.header>
    );
}