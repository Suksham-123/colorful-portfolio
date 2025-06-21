import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useEditMode } from "../context/EditModeContext";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const { isEditMode, toggleEditMode } = useEditMode();

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

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "resume", label: "Resume" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Suksham</h1>

        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-blue-600 dark:text-blue-400 font-semibold underline"
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <button onClick={toggleTheme} className="text-xl">
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={toggleEditMode}
            className="ml-2 text-gray-700 dark:text-gray-300 hover:text-green-500 border px-3 py-1 rounded"
          >
            {isEditMode ? "Editing ✏️" : "View Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
