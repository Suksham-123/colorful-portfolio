import React from "react";

const projects = [
  {
    title: "AI-Based Laboratory Safety Compliance Inspector",
    description:
      "Developed an AI-powered system using computer vision and rule-based analysis to detect laboratory safety violations. Focused on PPE detection, hazardous equipment handling, and unsafe workspace practices with emphasis on dataset preparation and model accuracy.",
    link: null,
  },
  {
    title: "AI Website Generator",
    description:
      "Built a full-stack web application that generates complete HTML websites using the OpenAI API. Implemented live preview, download functionality, and cloud deployment using Vercel and Render.",
    link: "https://ai-website.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a responsive portfolio application with clean UI, dark/light mode, and structured sections for education, projects, and skills.",
    link: "https://colorful-portfolio-i5a5.vercel.app/",
  },
  {
    title: "Cooking Recipe App",
    description:
      "Created an Android application using third-party APIs to search recipes and display ingredients, instructions, and nutritional information.",
    link: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-slate-900 dark:text-white font-medium underline underline-offset-4 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
