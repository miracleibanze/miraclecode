"use client";

import {
  Mail,
  Phone,
  MapPin,
  MailOpen,
  User,
  PhoneIcon,
  MessagesSquare,
  MessageSquareDiff,
  MessageSquareText,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Github, Instagram, Twitter, Whatsapp } from "../ui/Icons";
import { title } from "process";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
    const contactItems = [
        {
            icon: Whatsapp,
            title: "WhatsApp",
            value: "+250794881466",
        },
        {
            icon: MailOpen,
            title: "Email",
            value: "miracleibanze@gmail.com",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Kigali, Rwanda",
        },
        {
            icon: Github,
            title: "GitHub",
            value: "github.com/miracleibanze",
        },
        {
            icon: Instagram,
            title: "Instagram",
            value: "https://www.instagram.com/miracle_ibanze/",
        },
        {
            icon: Twitter,
            title: "Twitter",
            value: "https://twitter.com/miracle_ibanze",
        }
    ];
  return (
    <section
      id="contact"
      aria-labelledby="projects-title"
      className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Let's Work Together
          </h2>

            <hr className="mt-1 bg-accent h-1 rounded-full border-0 w-24 mx-auto" />
          <p className="text-primary/70 mt-4">
            Have a project idea or opportunity? Send me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div
            className="bg-surface/70 backdrop-blur-lg
            border border-accent/70
            rounded-2xl p-6 shadow-xl"
          >
            <form className="space-y-6">
                <div className="w-full text-primary flex items-center gap-3">
                    <Send className="size-10 text-accent p-2 rounded-lg bg-transparent border border-accent/40" />
                    <div className="">
                        <h3 className="font-bold leading-tight">Send Me a Message</h3>
                        <span className="text-sm text-primary/70">Fill out the form below and I'll get back to you soon.</span>
                    </div>
                </div>

                <div className="w-full bg-transparent border border-accent/40
                        rounded-lg pl-3 py-0 outline-none text-primary flex items-center gap-3">
                    <User className="size-4 text-accent" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="h-full w-full bg-transparent outline-none border-l border-l-accent py-2 pl-4 focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                </div>

                <div className="w-full bg-transparent border border-accent/40
                        rounded-lg pl-3 py-0 outline-none text-primary flex items-center gap-3">
                    <Mail className="size-4 text-accent" />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="h-full w-full bg-transparent outline-none border-l border-l-accent py-2 pl-4 focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                </div>

                <div className="w-full bg-transparent border border-accent/40
                        rounded-lg pl-3 py-0 outline-none text-primary flex items-center gap-3">
                    <Phone className="size-4 text-accent" />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="h-full w-full bg-transparent outline-none border-l border-l-accent py-2 pl-4 focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                </div>

                <div className="w-full bg-transparent border border-accent/40
                        focus:border-accent focus:ring-1 focus:ring-accent
                        rounded-lg pl-3 py-0 outline-none text-primary flex items-start gap-3">
                    <MessageSquareText className="size-4 text-accent mt-3" />
                    <textarea
                        rows="5"
                        placeholder="Your Message..."
                        className="h-full w-full bg-transparent outline-none border-l border-l-accent py-2 pl-4 resize-vertical focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                </div>
              <button
                className="w-max px-6 bg-accent text-black font-semibold
                py-3 rounded-lg
                hover:bg-yellow-300
                transition duration-300
                shadow-lg hover:shadow-yellow-500/40"
              >
                Send Message
              </button>

            </form>
          </div>

          <div className="space-y-6">
                <h2 className="text-xl font-bold">
                    Let's Work Together
            <hr className="bg-accent h-1 rounded-full border-0 w-12 mt-2" />
                </h2>
                
            {contactItems.map((item) => (
                <div
                    className="flex items-center gap-5 dark:bg-surface/70 bg-surface-strong backdrop-blur-lg border border-accent/50 rounded-xl p-2 hover:border-accent transition duration-300"
                    >
                        <div className="w-10 h-10 text-accent border border-accent/50 rounded-md p-1.5">
                            <item.icon className="h-full w-full text-accent" />
                        </div>
                    <div>
                        <p className="text-primary/70 text-sm">{item.title}</p>
                        <p className="text-primary font-medium">{item.value}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
