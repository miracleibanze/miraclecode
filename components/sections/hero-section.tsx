"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Github, Whatsapp, Instagram, Twitter} from "@/components/ui/Icons";
import { useState } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const revealTransition = {
    duration: 0.72,
    ease: smoothEase,
};

const socials = [
    { href: "https://github.com/miracleibanze", icon: Github, label: "GitHub" },
    { href: "https://www.instagram.com/miracle_ibanze/", icon: Instagram, label: "Instagram" },
    { href: "https://x.com/ibanzemiracle", icon: Twitter, label: "Twitter" },
    { href: "https://wa.me/+250794881466", icon: Whatsapp, label: "WhatsApp" },
];

export function HeroSection() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
            if (typeof window !== "undefined") {
                return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
            return "light";
        });
    const src =
    theme === "dark"
      ? "/dark-profile.png"
      : "/light-profile.png";

    return (
        <section
            id="home"
            aria-labelledby="hero-title"
            className="relative overflow-hidden pb-20 pt-8 md:pb-24 lg:pb-32 lg:pt-12"
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_top_right,rgba(11,28,44,0.06),transparent_42%)]" />
            <div className="mx-auto grid max-w-7xl px-6 md:px-12 lg:grid-cols-2 lg:items-center lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={revealTransition}
                    className="flex max-w-2xl flex-col items-start gap-5"
                >
                    <div className="space-y-5 py-0">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...revealTransition, delay: 0.05 }}
                        className="px-3 text-sm py-0 font-semibold tracking-[0.1em] text-accent"
                    >
                        Hi, I&apos;m
                    </motion.p>

                        <motion.h1
                            id="hero-title"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...revealTransition, delay: 0.1 }}
                            className="font-display text-balance text-[clamp(3rem,7vw,6rem)] font-semibold uppercase leading-[0.9] px-0 tracking-tight text-[#0B1C2C]"
                        >
                            <span className="block text-primary">Ibanze</span>
                            <span className="block text-accent">Miracle</span>
                        </motion.h1>
                        <hr className="bg-accent w-12 h-1 rounded-md border-0" />
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...revealTransition, delay: 0.14 }}
                            className="text-sm font-semibold uppercase tracking-[0.34em] text-primary sm:text-base"
                        >
                            Full-Stack Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...revealTransition, delay: 0.18 }}
                            className="max-w-md text-base leading-8 text-primary/70 sm:text-lg"
                        >
                            I build scalable and user-focused web applications that solve real world problems.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...revealTransition, delay: 0.24 }}
                        className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
                    >
                        <ButtonLink href="#projects">
                            View Projects
                            <ArrowRight className="size-4" />
                        </ButtonLink>

                        <ButtonLink href="/miracle-ibanze-cv.txt" variant="secondary" download>
                            Download CV
                            <Download className="size-4" />
                        </ButtonLink>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...revealTransition, delay: 0.28 }}
                        className="w-full sm:w-auto"
                    >
                        <p className="text-sm font-semibold text-primary mb-3">Connect with me</p>
                        <div className="flex gap-3">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center size-11 rounded-full border-3 p-1 border-accent/60 hover:bg-accent/10 hover:border-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                                    aria-label={label}
                                >
                                    <Icon className="size-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...revealTransition, delay: 0.12 }}
                    className="relative mx-auto w-full max-w-[31rem]"
                >
                    
                        
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                            className="relative overflow-hidden rounded-[2rem] w-full"
                        >
                            {/* <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_72%)]" /> */}
                            <>
                            <Image
                                src="/light-profile.png"
                                alt="Portrait of Ibanze Miracle"
                                width={1600}
                                height={1600}
                                priority
                                sizes="(min-width: 1024px) 38vw, 88vw"
                                className="block dark:hidden h-auto w-full object-cover"
                            />

                            <Image
                                src="/dark-profile.png"
                                alt="Portrait of Ibanze Miracle"
                                width={1600}
                                height={1600}
                                priority
                                sizes="(min-width: 1024px) 38vw, 88vw"
                                className="hidden dark:block h-auto w-full object-cover"
                            />
                            </>
                        </motion.div>
                </motion.div>
            </div>
        </section>
    );
}