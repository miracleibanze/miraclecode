"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "../ui/Icons";

const projects = [
    {
        image: "/project1.jpg",
        title: "Modern SaaS Dashboard",
        desc: "A scalable, responsive dashboard for analytics and team management.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        live: "#",
        github: "#",
    },
    {
        image: "/project2.jpg",
        title: "E-Commerce Platform",
        desc: "Full-featured e-commerce with secure checkout and admin panel.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        live: "#",
        github: "#",
    },
    {
        image: "/project3.jpg",
        title: "Portfolio Website",
        desc: "A blazing fast, SEO-optimized portfolio for creative professionals.",
        tech: ["Next.js", "Framer Motion", "Vercel"],
        live: "#",
        github: "#",
    },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function ProjectsSection() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20"
        >
            <motion.h2
                id="projects-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: smoothEase }}
                className="mb-12 text-center font-display text-4xl font-bold tracking-tight text-[#0B1C2C] dark:text-white md:text-5xl"
            >
                Projects
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: i * 0.08, ease: smoothEase }}
                        whileHover={{ y: -8, boxShadow: "0 8px 32px -8px #D4AF37AA" }}
                        className="group flex flex-col overflow-hidden rounded-3xl border border-[#0B1C2C]/8 bg-white dark:bg-[#101624] shadow-[0_8px_32px_-12px_rgba(11,28,44,0.08)] transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_8px_32px_-8px_rgba(212,175,55,0.18)] focus-within:ring-2 focus-within:ring-[#D4AF37]"
                        tabIndex={0}
                        role="region"
                        aria-labelledby={`project-${i}-title`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-6">
                            <h3
                                id={`project-${i}-title`}
                                className="text-lg font-semibold text-[#0B1C2C] dark:text-white"
                            >
                                {project.title}
                            </h3>
                            <p className="text-sm text-[#6B7280] dark:text-[#bfc9d1]">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#0B1C2C] dark:text-[#D4AF37]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-3">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-semibold text-white shadow transition hover:bg-[#bfa43a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                                >
                                    <ExternalLink className="size-4" /> Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37] px-4 py-2 text-xs font-semibold text-[#0B1C2C] dark:text-[#D4AF37] transition hover:bg-[#D4AF37]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                                >
                                    <Github className="size-4" /> GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
