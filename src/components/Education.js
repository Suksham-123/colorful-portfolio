import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6 text-center animate-fadeIn">
        
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
          Education
        </h2>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-8 text-left max-w-3xl mx-auto">
          
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
            Bachelor of Engineering / Bachelor of Technology
          </h3>

          <p className="text-slate-600 dark:text-slate-300 mt-2">
            Computer Science & Engineering
          </p>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Model Institute of Engineering and Technology (MIET)
          </p>

        </div>
      </div>
    </section>
  );
}
