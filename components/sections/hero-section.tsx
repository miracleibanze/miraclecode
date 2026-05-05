"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const revealTransition = {
    duration: 0.72,
    ease: smoothEase,
};

export function HeroSection() {
    return (
        <section
            id="home"
            aria-labelledby="hero-title"
            className="relative overflow-hidden pb-20 pt-8 md:pb-24 lg:pb-32 lg:pt-12"
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_38%),radial-gradient(circle_at_top_right,rgba(11,28,44,0.06),transparent_42%)]" />

            <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={revealTransition}
                    className="flex max-w-2xl flex-col items-start gap-8"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...revealTransition, delay: 0.05 }}
                        className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0B1C2C]/72 shadow-[0_16px_35px_-28px_rgba(11,28,44,0.45)]"
                    >
                        Hi, I&apos;m
                    </motion.p>

                    <div className="space-y-5">
                        <motion.h1
                            id="hero-title"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...revealTransition, delay: 0.1 }}
                            className="font-display text-balance text-[clamp(4rem,10vw,7.25rem)] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-[#0B1C2C]"
                        >
                            <span className="block">Ibanze</span>
                            <span className="block text-[#D4AF37]">Miracle</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...revealTransition, delay: 0.14 }}
                            className="text-sm font-semibold uppercase tracking-[0.34em] text-[#6B7280] sm:text-base"
                        >
                            Full-Stack Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...revealTransition, delay: 0.18 }}
                            className="max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg"
                        >
                            I build elegant, scalable web products with clean engineering, refined interfaces, and dependable performance.
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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...revealTransition, delay: 0.12 }}
                    className="relative mx-auto w-full max-w-[31rem]"
                >
                    <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] border border-[#D4AF37]/60" />
                    <div className="absolute left-1/2 top-10 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-[#D4AF37]/24 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[2.5rem] border border-[#0B1C2C]/8 bg-white p-3 shadow-[0_30px_80px_-30px_rgba(11,28,44,0.35)]">
                        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(11,28,44,0.03),rgba(212,175,55,0.08),rgba(255,255,255,0.85))]" />

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                            className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/16 bg-[#F8FAFC]"
                        >
                            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_72%)]" />
                            <Image
                                src="/light-profile.png"
                                alt="Portrait of Ibanze Miracle inside a gold framed presentation card"
                                width={1600}
                                height={1600}
                                priority
                                sizes="(min-width: 1024px) 38vw, 88vw"
                                className="relative h-auto w-full object-cover"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}