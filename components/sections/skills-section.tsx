"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Sparkles } from "lucide-react";

const skills = [
    {
        icon: <Code className="size-8 text-[#D4AF37]" aria-hidden="true" />, // Frontend
        title: "Frontend",
        items: [
            "React, Next.js",
            "TypeScript, JavaScript",
            "Tailwind CSS, Framer Motion",
            "Accessibility, SEO",
        ],
    },
    {
        icon: <Server className="size-8 text-[#D4AF37]" aria-hidden="true" />, // Backend
        title: "Backend",
        items: [
            "Node.js, Express",
            "API Design, REST, GraphQL",
            "Authentication, Security",
            "Testing, CI/CD",
        ],
    },
    {
        icon: <Database className="size-8 text-[#D4AF37]" aria-hidden="true" />, // Database
        title: "Database",
        items: [
            "PostgreSQL, MongoDB",
            "Prisma, Mongoose",
            "Data Modeling",
            "Performance Tuning",
        ],
    },
    {
        icon: <Sparkles className="size-8 text-[#D4AF37]" aria-hidden="true" />, // Others
        title: "Others",
        items: [
            "Git, Docker",
            "Figma, UI/UX",
            "Agile, Communication",
            "Mentoring, Docs",
        ],
    },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SkillsSection() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20"
        >
            <motion.h2
                id="skills-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: smoothEase }}
                className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-[#0B1C2C] md:text-5xl"
            >
                Skills
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: i * 0.08, ease: smoothEase }}
                        whileHover={{ y: -10, boxShadow: "0 8px 32px -8px #D4AF37AA" }}
                        className="group flex flex-col items-center rounded-3xl border border-[#0B1C2C]/8 bg-white px-7 py-10 shadow-[0_8px_32px_-12px_rgba(11,28,44,0.08)] transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_8px_32px_-8px_rgba(212,175,55,0.18)] focus-within:ring-2 focus-within:ring-[#D4AF37]"
                        tabIndex={0}
                        role="region"
                        aria-labelledby={`skill-${i}-title`}
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                            {skill.icon}
                        </div>
                        <h3
                            id={`skill-${i}-title`}
                            className="mb-3 text-lg font-semibold text-[#0B1C2C]"
                        >
                            {skill.title}
                        </h3>
                        <ul className="space-y-2 text-center text-sm text-[#6B7280]">
                            {skill.items.map((item) => (
                                <li key={item} className="list-inside list-disc">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
