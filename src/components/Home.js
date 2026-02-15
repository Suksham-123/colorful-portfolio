import React from "react";
import profile from "../assets/profile.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6 animate-fadeInLeft">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Suksham Gupta
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl">
            Frontend developer with a foundation in cybersecurity, currently
            expanding into backend development to become a full-stack developer.
          </p>

          <p className="text-slate-500 dark:text-slate-400 max-w-xl">
            Skilled in Python, C/C++, React.js, Node.js, and SQL, with hands-on
            experience in web applications, chatbots, and automation.
          </p>

          <div className="flex gap-6 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-md text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end animate-fadeInRight">
          <img
            src={profile}
            alt="Suksham Gupta"
            className="w-72 h-72 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
