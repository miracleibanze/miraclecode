import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import background from "@/public/ttten.svg";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Miracle Ibanze | Full-Stack Developer",
    template: "%s | Miracle Ibanze",
  },
  description:
    "Premium portfolio for Miracle Ibanze, a full-stack developer building elegant, scalable digital products with precision and performance.",
  keywords: [
    "Miracle Ibanze",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Miracle Ibanze | Full-Stack Developer",
    description:
      "Elegant, high-performance portfolio showcasing clean engineering, refined UI, and modern product execution.",
    siteName: "Miracle Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground relative ">
        <div className="background">
          <Image
            src={background}
            alt="bg"
            width={1000}
            height={800}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
