import { Instagram, Twitter, Github, Whatsapp } from "../ui/Icons";
import Link from "next/link";

const socials = [
    { href: "https://github.com/miracleibanze", icon: Github, label: "GitHub" },
    { href: "https://www.instagram.com/miracle_ibanze/", icon: Instagram, label: "Instagram" },
    { href: "https://x.com/ibanzemiracle", icon: Twitter, label: "Twitter" },
    { href: "https://wa.me/+250794881466", icon: Whatsapp, label: "WhatsApp" },
];

export function Footer() {
    return (
        <footer className="border-t border-[#0B1C2C]/10 bg-white dark:bg-[#0B1C2C]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:gap-0 md:px-12 lg:px-20">
                <div className="flex items-center gap-2 text-2xl font-bold text-[#0B1C2C] dark:text-[#D4AF37]">
                    <span>Miracle.</span>
                </div>
                <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#6B7280] dark:text-[#bfc9d1]">
                    <Link href="#home" className="hover:text-[#D4AF37]">Home</Link>
                    <Link href="#about" className="hover:text-[#D4AF37]">About</Link>
                    <Link href="#projects" className="hover:text-[#D4AF37]">Projects</Link>
                    <Link href="#contact" className="hover:text-[#D4AF37]">Contact</Link>
                </nav>
                <div className="flex gap-4">
                    {socials.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="rounded-full p-2 text-[#0B1C2C] transition hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] dark:text-[#D4AF37] dark:hover:bg-[#D4AF37]/20"
                        >
                            <Icon className="size-5" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="border-t border-[#0B1C2C]/10 py-4 text-center text-xs text-[#6B7280] dark:text-[#bfc9d1]">
                &copy; {new Date().getFullYear()} Ibanze Miracle. All rights reserved.
            </div>
        </footer>
    );
}
