"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {

    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {

        setMounted(true)
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {

        setMounted(true)
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light") setTheme(stored);
    }, []);

    return (
        <button
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-[#0B1C2C] transition hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] dark:text-[#D4AF37] dark:hover:bg-[#D4AF37]/20"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
        >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
    );
}
