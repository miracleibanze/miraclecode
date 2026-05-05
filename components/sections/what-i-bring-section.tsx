"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
    {
        icon: <Lightbulb className="size-7 text-[#D4AF37]" aria-hidden="true" />, // Innovation
        title: "Creative Problem Solving",
        desc: "Inventive solutions for complex challenges, always with a user-first mindset.",
    },
    {
        icon: <TrendingUp className="size-7 text-[#D4AF37]" aria-hidden="true" />, // Growth
        title: "Scalable Engineering",
        desc: "Builds that grow with your business, using robust, modern technologies.",
    },
    {
        icon: <ShieldCheck className="size-7 text-[#D4AF37]" aria-hidden="true" />, // Reliability
        title: "Quality & Reliability",
        desc: "Code you can trust—tested, maintainable, and built for the long haul.",
    },
    {
        icon: <Users className="size-7 text-[#D4AF37]" aria-hidden="true" />, // Collaboration
        title: "Collaboration",
        desc: "Clear communication and teamwork, from kickoff to launch and beyond.",
    },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function WhatIBringSection() {
    return (
        <section
            id="what-i-bring"
            aria-labelledby="whatibring-title"
            className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20"
        >
            <motion.h2
                id="whatibring-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: smoothEase }}
                className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-[#0B1C2C] dark:text-white md:text-5xl"
            >
                What I Bring
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: i * 0.08, ease: smoothEase }}
                        whileHover={{ y: -8, boxShadow: "0 8px 32px -8px #D4AF37AA" }}
                        className="group flex flex-col items-center rounded-3xl border border-[#0B1C2C]/8 bg-white dark:bg-[#101624] px-7 py-10 shadow-[0_8px_32px_-12px_rgba(11,28,44,0.08)] transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_8px_32px_-8px_rgba(212,175,55,0.18)] focus-within:ring-2 focus-within:ring-[#D4AF37]"
                        tabIndex={0}
                        role="region"
                        aria-labelledby={`feature-${i}-title`}
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                            {feature.icon}
                        </div>
                        <h3
                            id={`feature-${i}-title`}
                            className="mb-2 text-base font-semibold text-[#0B1C2C] dark:text-white"
                        >
                            {feature.title}
                        </h3>
                        <p className="text-center text-sm text-[#6B7280] dark:text-[#bfc9d1]">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
