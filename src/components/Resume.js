import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import { useEditMode } from "../context/EditModeContext";

export default function Resume() {
  const { isEditMode } = useEditMode();
  const resumeRef = useRef();

  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("resumeContent"));
    if (stored) {
      setEducation(stored.education);
      setExperience(stored.experience);
      setProjects(stored.projects);
      setSkills(stored.skills);
    } else {
      setEducation("B.E/B.Tech at Model Institute of Engineering and Technology (MIET)");
      setExperience("Freelancer - Web Developer (2023 - Present)");
      setProjects("AI Website Generator, Colorful Portfolio Website, Skill App");
      setSkills("React, Node.js, Tailwind CSS, OpenAI, MongoDB");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "resumeContent",
      JSON.stringify({ education, experience, projects, skills })
    );
    alert("Resume saved!");
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Suksham Gupta - Resume", 10, 20);
    doc.setFontSize(12);
    doc.text("Education:", 10, 30);
    doc.text(education, 20, 36);
    doc.text("Experience:", 10, 50);
    doc.text(experience, 20, 56);
    doc.text("Projects:", 10, 70);
    doc.text(projects, 20, 76);
    doc.text("Skills:", 10, 90);
    doc.text(skills, 20, 96);
    doc.save("resume.pdf");
  };

  const renderField = (label, value, setter) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-left">{label}</h3>
      {isEditMode ? (
        <textarea
          value={value}
          onChange={(e) => setter(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
          rows={2}
        />
      ) : (
        <p className="bg-white text-left mt-2 p-3 rounded shadow">{value}</p>
      )}
    </div>
  );

  return (
    <section id="resume" className="min-h-screen py-16 px-6 text-center bg-gradient-to-br from-yellow-50 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">My Resume</h2>
      <div className="max-w-3xl mx-auto text-left" ref={resumeRef}>
        {renderField("🎓 Education", education, setEducation)}
        {renderField("💼 Experience", experience, setExperience)}
        {renderField("🚀 Projects", projects, setProjects)}
        {renderField("🛠️ Skills", skills, setSkills)}
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow">📄 Download as PDF</button>
        {isEditMode && (
          <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow">💾 Save Changes</button>
        )}
      </div>
    </section>
  );
}
