"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type PageShellProps = {
    children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: smoothEase }}
        >
            {children}
        </motion.div>
    );
}