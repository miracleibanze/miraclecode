"use client";

import { motion } from "framer-motion";
import { Code, Target, Users, Zap } from "lucide-react";

const features = [
    {
        icon: <Zap className="size-10 text-accent" aria-hidden="true" />,
        title: "Fast Delivery",
        desc: "I deliver quality solutions within the agreed time.",
    },
    {
        icon: <Target className="size-10 text-accent" aria-hidden="true" />,
        title: "Problem Solving",
        desc: "I love solving problems and turning ideas into reality.",
    },
    {
        icon: <Users className="size-10 text-accent" aria-hidden="true" />,
        title: "User Focused",
        desc: "I build with the end-user in mind for the best experience.",
    },
    {
        icon: <Code className="size-10 text-accent" aria-hidden="true" />,
        title: "Clean Code",
        desc: "I write clean, maintainable and scalable code.",
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
                className="text-center font-display text-2xl font-bold tracking-tight dark:text-white md:text-4xl mb-4"
            >
                What I Bring
            </motion.h2>
            <hr className="mb-14 bg-accent h-1 rounded-full border-0 w-12 mx-auto" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: i * 0.08, ease: smoothEase }}
                        whileHover={{ y: -8, boxShadow: "0 16px 40px -24px rgba(212,175,55,0.35)" }}
                        className="group flex h-full flex-col items-start rounded-3xl border border-accent/40 bg-white dark:bg-surface p-8 shadow-[0_16px_48px_-30px_rgba(11,28,44,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_48px_-24px_rgba(212,175,55,0.22)] focus-within:ring-2 focus-within:ring-accent"
                        tabIndex={0}
                        role="region"
                        aria-labelledby={`feature-${i}-title`}
                    >
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-accent">
                            {feature.icon}
                        </div>
                        <h3
                            id={`feature-${i}-title`}
                            className="mb-3 text-lg font-semibold"
                        >
                            {feature.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
            <hr className="mt-24 bg-accent/80 border-0 h-0.5 w-full max-w-screen-xl mx-auto" />
        </section>
    );
}
