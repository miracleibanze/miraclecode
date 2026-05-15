"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { fullStackProjects } from '@/app/constants'
import { Github } from "@/components/ui/Icons";



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
                className="mb-4 text-center font-display text-3xl font-bold tracking-tight text-[#0B1C2C] dark:text-white md:text-4xl"
            >
                Projects
            </motion.h2>
            <hr className="mb-14 bg-accent h-1 rounded-full border-0 w-12 mx-auto" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {fullStackProjects.map((project, i) => (
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
                                src={project.image.img}
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
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#0B1C2C] dark:text-[#D4AF37]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-accent/80 py-4 flex justify-between px-4 gap-3">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md px-4 py-2 text-xs font-semibold transition hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                            >
                                Live Demo <ExternalLink className="size-4" />
                            </a>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md px-4 py-2 text-xs font-semibold transition hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                            >
                                <Github className="size-4" /> GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
