"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ButtonLinkProps = HTMLMotionProps<"a"> & {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md";
};

const sizeClasses = {
    sm: "min-h-11 px-5 text-sm",
    md: "min-h-13 px-6 text-sm sm:px-7 sm:text-base",
};

const variantClasses = {
    primary:
        "border border-transparent bg-[#D4AF37] text-[#0B1C2C] shadow-[0_18px_40px_-20px_rgba(212,175,55,0.8)] hover:bg-[#c6a12c] focus-visible:ring-[#D4AF37]/40",
    secondary:
        "border border-[#0B1C2C]/12 bg-white/90 text-[#0B1C2C] shadow-[0_20px_40px_-28px_rgba(11,28,44,0.35)] hover:border-[#0B1C2C]/20 hover:bg-[#F8FAFC] focus-visible:ring-[#0B1C2C]/15",
};

export function ButtonLink({
    children,
    className = "",
    size = "md",
    variant = "primary",
    ...props
}: ButtonLinkProps) {
    return (
        <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={[
                "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight outline-none focus-visible:ring-4",
                sizeClasses[size],
                variantClasses[variant],
                className,
            ].join(" ")}
            {...props}
        >
            {children}
        </motion.a>
    );
}