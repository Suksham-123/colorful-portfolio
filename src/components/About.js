import { useEffect, useState } from "react";
import { useEditMode } from "../context/EditModeContext";

export default function About() {
  const { isEditMode } = useEditMode();
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("aboutText");
    setAboutText(stored || "My name is Suksham Gupta, and I am currently pursuing B.E/B.Tech at Model Institute of Engineering and Technology (MIET). I am passionate about building web applications and delivering great user experiences.");
  }, []);

  const handleSave = () => {
    localStorage.setItem("aboutText", aboutText);
    alert("About section saved!");
  };

  return (
    <section id="about" className="py-16 px-6 text-center bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-900 dark:to-black transition-all">
      <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">👋 About Me</h2>

      {isEditMode ? (
        <>
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            className="w-full max-w-4xl mx-auto p-4 text-lg rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow resize-y"
            rows={6}
          />
          <div className="mt-4">
            <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
              💾 Save Changes
            </button>
          </div>
        </>
      ) : (
        <p className="max-w-4xl mx-auto text-lg text-gray-800 dark:text-gray-200">{aboutText}</p>
      )}
    </section>
  );
}
