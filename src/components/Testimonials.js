import { useState, useEffect } from "react";
import { useEditMode } from "../context/EditModeContext";

export default function Testimonials() {
  const { isEditMode } = useEditMode();

  const [testimonials, setTestimonials] = useState(() => {
    const stored = localStorage.getItem("testimonials");
    return stored ? JSON.parse(stored) : [
      { name: "Client A", feedback: "Suksham is an excellent developer!" },
      { name: "Client B", feedback: "Great communication and UI skills!" },
    ];
  });

  const handleChange = (index, field, value) => {
    const updated = [...testimonials];
    updated[index][field] = value;
    setTestimonials(updated);
  };

  const addTestimonial = () => setTestimonials([...testimonials, { name: "", feedback: "" }]);
  const removeTestimonial = (index) => setTestimonials(testimonials.filter((_, i) => i !== index));
  const handleSave = () => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
    alert("Testimonials saved!");
  };

  return (
    <section id="testimonials" className="py-16 px-6 text-center bg-gradient-to-br from-blue-50 via-purple-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <h2 className="text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400">💬 Testimonials</h2>
      {testimonials.map((t, index) => (
        <div key={index} className="max-w-2xl mx-auto mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          {isEditMode ? (
            <>
              <input type="text" value={t.name} onChange={(e) => handleChange(index, "name", e.target.value)} placeholder="Client Name" className="w-full mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded" />
              <textarea value={t.feedback} onChange={(e) => handleChange(index, "feedback", e.target.value)} placeholder="Feedback" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded" />
              <button onClick={() => removeTestimonial(index)} className="mt-2 text-red-500 hover:underline">❌ Remove</button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-blue-500">{t.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.feedback}</p>
            </>
          )}
        </div>
      ))}
      {isEditMode && (
        <div className="flex flex-col items-center gap-3">
          <button onClick={addTestimonial} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">➕ Add Testimonial</button>
          <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">💾 Save Changes</button>
        </div>
      )}
    </section>
  );
}
