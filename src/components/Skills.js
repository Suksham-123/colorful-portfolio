import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Backend & Databases
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Programming
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Tools & Platforms
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>Git & GitHub</li>
              <li>Vercel</li>
              <li>Render</li>
              <li>WordPress</li>
              <li>Android Studio</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
