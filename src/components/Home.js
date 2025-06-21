import React, { useState, useEffect } from "react";
import { useEditMode } from "../context/EditModeContext";

export default function Home() {
  const { isEditMode } = useEditMode();

  const [name, setName] = useState("Suksham Gupta");
  const [title, setTitle] = useState("Freelancer | Web Developer");
  const [intro, setIntro] = useState("I design and build creative web experiences.");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("homeContent"));
    if (stored) {
      setName(stored.name);
      setTitle(stored.title);
      setIntro(stored.intro);
      if (stored.profileImage) setProfileImage(stored.profileImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem(
      "homeContent",
      JSON.stringify({ name, title, intro, profileImage })
    );
    alert("Home content saved!");
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-200 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl">
        <div className="mb-6">
          <label>
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-300 shadow-md" />
            ) : (
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-gray-600">No Image</div>
            )}
            {isEditMode && (
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            )}
          </label>
        </div>

        {isEditMode ? (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-4xl font-bold text-blue-700 dark:text-blue-400 text-center mb-2 w-full bg-transparent border-b border-blue-300 focus:outline-none" />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="text-xl text-gray-600 dark:text-gray-300 text-center w-full bg-transparent border-b border-gray-300 focus:outline-none" />
            <textarea value={intro} onChange={(e) => setIntro(e.target.value)} className="mt-4 p-2 w-full border rounded text-gray-800 dark:text-white bg-white dark:bg-gray-700" rows={2} />
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">{name}</h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300">{title}</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-200">{intro}</p>
          </>
        )}

        <div className="mt-6 space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Me</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:bg-gray-600 dark:text-white">View Projects</button>
        </div>

        {isEditMode && (
          <div className="mt-4">
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow">
              💾 Save Changes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
