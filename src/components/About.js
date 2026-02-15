import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6 text-center animate-fadeIn">
        
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
          About
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I am a Frontend Developer with a strong foundation in cybersecurity and
          growing expertise in backend development. I have built AI-powered
          systems, full-stack web applications, and Android apps using
          technologies like Python, React.js, Node.js, and SQL.
        </p>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-6">
          I enjoy creating efficient, user-friendly, and scalable solutions
          while continuously learning new technologies to strengthen my
          full-stack development skills.
        </p>

      </div>
    </section>
  );
}
