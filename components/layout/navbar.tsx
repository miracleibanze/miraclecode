import { Menu } from "lucide-react";

const Navbar = () => {
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative w-full max-w-5xl mx-auto bg-watery py-4 px-6 md:px-12 flex items-center justify-between m-3 text-darkPrimary rounded-full">
      <h3 className="text-2xl font-bold tracking-wide">
        Mi<span className="text-secondary">rac</span>le.
      </h3>
      <nav>
        <ul className="list-none sm:flex items-center gap-3 text-[15px] font-bold hidden">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className="hover:text-primary hover:scale-105 hover:-translate-y-[2px] duration-500 transition-all"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button className="sm:hidden flex items-center">
          <Menu />
        </button>
      </nav>
      <div id="dropMenu" className="bg-watery absolute top-full">
        hjgb
      </div>
    </header>
  );
};

export default Navbar;
