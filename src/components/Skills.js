import React from "react";

const skills = {
  "Programming Languages": ["Python", "C", "C++", "JavaScript"],
  "Frontend": ["React.js", "HTML", "CSS", "Tailwind CSS"],
  "Backend & Databases": ["Node.js", "SQL"],
  "Tools & Platforms": ["Git", "GitHub", "Vercel", "Render"],
  "Other": ["Computer Vision", "API Integration", "Problem Solving"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
