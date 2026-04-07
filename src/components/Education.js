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

        <div className="space-y-8 max-w-3xl mx-auto text-left">

          {/* B.Tech */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                Bachelor of Engineering / Bachelor of Technology
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                2022 – 2026
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Computer Science & Engineering
            </p>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Model Institute of Engineering and Technology (MIET)
            </p>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Result: <span className="font-medium">CGPA / Pursuing</span>
            </p>
          </div>

          {/* Class XII */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                Senior Secondary (Class XII)
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                2020 – 2022
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Science Stream (PCM)
            </p>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              SP Smart Higher Secondary School
            </p>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Result: <span className="font-medium">79.4%</span>
            </p>
          </div>

          {/* Class X */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                Secondary (Class X)
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                2019 – 2020
              </span>
            </div>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              ST Peter's High School
            </p>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Result: <span className="font-medium">95.4%</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
