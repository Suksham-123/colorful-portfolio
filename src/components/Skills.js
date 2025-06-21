import { useState, useEffect } from "react";
import { useEditMode } from "../context/EditModeContext";

export default function Skills() {
  const { isEditMode } = useEditMode();

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem("skills");
    return saved ? JSON.parse(saved) : [
      "JavaScript", "ReactJS", "Node.js", "HTML", "CSS", "Tailwind CSS", "MongoDB", "Git/GitHub"
    ];
  });

  const handleSkillChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  const handleAddSkill = () => setSkills([...skills, ""]);
  const handleRemoveSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  const handleSave = () => {
    localStorage.setItem("skills", JSON.stringify(skills));
    alert("Skills saved!");
  };

  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-800 dark:to-black transition-all">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 text-center mb-6">🚀 Skills</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) =>
          isEditMode ? (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="p-2 rounded w-full text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700"
              />
              <button onClick={() => handleRemoveSkill(index)} className="text-red-500 font-bold text-lg">✖</button>
            </div>
          ) : (
            <div key={index} className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded shadow p-3 text-center">
              {skill}
            </div>
          )
        )}
      </div>

      {isEditMode && (
        <div className="flex justify-center mt-6 gap-4">
          <button onClick={handleAddSkill} className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded shadow">➕ Add Skill</button>
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow">💾 Save Changes</button>
        </div>
      )}
    </section>
  );
}
