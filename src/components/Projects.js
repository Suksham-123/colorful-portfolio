import { useState } from "react";
import { useEditMode } from "../context/EditModeContext";

export default function Projects() {
  const { isEditMode } = useEditMode();

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [
      {
        title: "AI Website Generator",
        description: "Generates websites using OpenAI prompts with live editing support.",
        link: "https://ai-website.vercel.app",
      },
      {
        title: "Colorful Portfolio",
        description: "Customizable resume and portfolio editor with edit mode.",
        link: "https://colorful-portfolio.vercel.app",
      },
    ];
  });

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: "", description: "", link: "" }]);
  };

  const handleRemoveProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  const handleSave = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
    alert("Projects saved!");
  };

  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-br from-pink-100 to-yellow-100 dark:from-gray-800 dark:to-black transition-all">
      <h2 className="text-3xl font-bold text-pink-700 dark:text-pink-400 text-center mb-6">🧠 Projects</h2>

      <div className="max-w-5xl mx-auto grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded shadow p-6 space-y-3">
            {isEditMode ? (
              <>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                  placeholder="Project Title"
                  className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <textarea
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                  placeholder="Project Description"
                  className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, "link", e.target.value)}
                  placeholder="Project Link"
                  className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button onClick={() => handleRemoveProject(index)} className="text-red-500 text-sm">✖ Remove Project</button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 underline">
                    🔗 Visit Project
                  </a>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {isEditMode && (
        <div className="flex justify-center mt-6 gap-4">
          <button onClick={handleAddProject} className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded shadow">➕ Add Project</button>
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow">💾 Save Changes</button>
        </div>
      )}
    </section>
  );
}
