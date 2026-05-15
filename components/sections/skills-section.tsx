"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Sparkles, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

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
            className="mx-auto w-full max-w-7xl px-6 md:px-12 pb-16 "
        >
            <div className="grid gap-8 lg:grid-cols-7">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.7, ease: smoothEase }}
                    className="lg:col-span-2"
                >
                    <h2 className="mb-4 text-2xl font-bold tracking-tight ">
                        About me
                    </h2>
                    <hr className="mb-8 bg-accent border-0 w-12 h-1 rounded-full" />
                    <p className="mb-8 max-w-xl text-sm leading-8 text-primary/70 sm:text-base">
                        I am a passionate full-stack developer with experience in building modern web applications. I specialize in both front-end and back-end development, delivering clean, efficient and scalable solutions.
                    </p>
                    <ButtonLink href="/miracle-ibanze-cv.txt" variant="secondary">
                        Download CV
                        <Download className="size-4" />
                    </ButtonLink>
                </motion.div>

                <div className="md:grid gap-6 grid-cols-4 lg:col-span-5 flex flex-col">
                    <div className="md:col-span-4">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight ">
                            My Skills
                        </h2>
                        <hr className="mb-8 bg-accent border-0 w-12 h-1 rounded-full" />
                    </div>
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: i * 0.08, ease: smoothEase }}
                            whileHover={{ y: -10, boxShadow: "0 12px 30px -16px rgba(212,175,55,0.35)" }}
                            className="group rounded-lg border-2 border-accent/30 bg-surface/60 p-4 transition-all duration-300 hover:border-[#D4AF37]/40"
                            tabIndex={0}
                            role="region"
                            aria-labelledby={`skill-${i}-title`}
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl dark:bg-accent/20 text-accent border-2 border-accent/60">
                                {skill.icon}
                            </div>
                            <h3
                                id={`skill-${i}-title`}
                                className="mb-2 text-xl font-semibold "
                            >
                                {skill.title}
                            </h3>
                            <ul className="space-y-0 text-sm text-primary/70">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1 inline-block h-2 min-w-2 rounded-full bg-accent" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
            <hr className="mt-24 bg-accent/80 border-0 h-0.5 w-full max-w-screen-xl mx-auto" />
        </section>
    );
}
