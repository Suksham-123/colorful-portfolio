import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "AI-Based Laboratory Safety Compliance Inspector",
      description:
        "Developed an AI-powered system using computer vision and rule-based analysis to detect laboratory safety violations. Implemented real-time detection for PPE usage, hazardous equipment handling, and unsafe workspace practices.",
      link: "https://github.com/Suksham-123/AI-Laboratory-Inspector",
    },
    {
      title: "AI Website Generator",
      description:
        "Built a full-stack web application that generates complete HTML websites using OpenAI API with live preview, download functionality, and cloud deployment.",
      link: "https://ai-website.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a professional portfolio application with responsive design, dark/light theme, and modern UI showcasing projects and skills.",
      link: "https://colorful-portfolio-i5a5.vercel.app/",
    },
    {
      title: "CookEase (Recipe App)",
      description:
        "Created an Android application using third-party APIs to search recipes and display ingredients, instructions, and nutritional information.",
      link: "https://github.com/Suksham-123/CookEase",
    },
    {
      title: "StreamPrices",
      description:
        "Developed a platform to compare streaming service prices and plans, helping users choose the best subscription options.",
      link: "https://github.com/Suksham-123/StreamPrices",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}