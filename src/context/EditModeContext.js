import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const EditModeContext = createContext();

// Provider component
export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("editMode");
    if (storedMode === "true") setIsEditMode(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("editMode", isEditMode.toString());
  }, [isEditMode]);

  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleEditMode}
          className={`px-4 py-2 rounded font-semibold shadow ${
            isEditMode ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {isEditMode ? "Exit Edit Mode" : "Edit Mode"}
        </button>
      </div>
      {children}
    </EditModeContext.Provider>
  );
};

// Hook to use context
export const useEditMode = () => useContext(EditModeContext);
