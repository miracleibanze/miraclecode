import { ChevronRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Whatsapp } from "../ui/Icons";

export function Footer() {
  const links = ["home", "skills", "project", "contacts"];
  const socials = [
    {
      link: "mailto:miracleibanze@gmail.com",
      icon: Mail,
      value: "miracleibanze@gmail.com",
    },
    {
      link: "https://wa.me/250794881466",
      icon: Whatsapp,
      value: "+250794881466",
    },
    {
      link: "https://maps.google.com/?q=Kigali,Rwanda",
      icon: MapPin,
      value: "Kigali, Rwanda",
    },
  ];
  return (
    <footer className="border-0 border-t-2 border-t-secondary">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row md:gap-0 md:px-12 lg:px-20">
        <div className="max-w-sm">
          <h3 className="text-3xl font-bold mb-4">
            Miracle<span className="text-secondary">.</span>
          </h3>
          <p className="text-darkPrimary/70">
            Making digital solutions that make an impact.
          </p>
        </div>
        <nav className="text-sm font-medium text-[#6B7280] dark:text-[#bfc9d1]">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            {links.map((item) => (
              <li key={item}>
                <Link
                  href="#home"
                  className="hover:text-secondary flex items-center gap-2 capitalize"
                >
                  <ChevronRight className="text-secondary" /> {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="text-sm font-medium text-[#6B7280] dark:text-[#bfc9d1]">
          <h3 className="text-lg font-bold">Let's Connect</h3>
          <ul>
            {socials.map((item) => (
              <li key={item.link}>
                <a
                  href="mail"
                  className="hover:text-secondary flex items-center gap-2"
                >
                  <span className="h-6 w-6 text-secondary">
                    <item.icon />
                  </span>{" "}
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-surface py-4 text-center text-xs text-[#6B7280] dark:text-[#bfc9d1]">
        &copy; {new Date().getFullYear()} IBANZE Miracle. All rights reserved.
      </div>
    </footer>
  );
}
