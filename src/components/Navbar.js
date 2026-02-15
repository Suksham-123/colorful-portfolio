import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
  };

  const navItems = ["home", "about", "education", "projects", "skills", "contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT NAME */}
        <h1 className="text-xl font-semibold tracking-wide text-slate-900 dark:text-white">
          Suksham Gupta
        </h1>

        {/* RIGHT LINKS */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-blue-600 dark:text-blue-400 font-medium"
              className="cursor-pointer capitalize text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"
            >
              {item}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="text-lg hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
