"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="mx-auto max-w-4xl px-6 py-16 md:px-12 lg:px-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: smoothEase }}
                className="flex flex-col items-center gap-6 rounded-3xl bg-[#0B1C2C] py-14 shadow-[0_8px_32px_-12px_rgba(11,28,44,0.12)] dark:bg-[#181f2a]"
            >
                <h2
                    id="contact-title"
                    className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
                >
                    Let&apos;s work together
                </h2>
                <ButtonLink href="mailto:miracleibanze@gmail.com" variant="secondary" className="mt-2 bg-[#D4AF37] text-[#0B1C2C] hover:bg-[#bfa43a] dark:bg-[#D4AF37] dark:text-[#0B1C2C]">
                    Contact Me
                </ButtonLink>
            </motion.div>
        </section>
    );
}
