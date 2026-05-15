"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark =
      document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} type="button">
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}