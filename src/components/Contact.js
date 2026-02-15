import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Contact
        </h2>

        <div className="space-y-6 text-lg">
          <p>
            <span className="font-medium text-slate-900 dark:text-white">
              Email:
            </span>{" "}
            <a
              href="mailto:YOUR_EMAIL_FROM_RESUME"
              className="text-slate-700 dark:text-slate-300 hover:underline"
            >
              sukshamgupta.2004@gmail.com
            </a>
          </p>

          <p>
            <span className="font-medium text-slate-900 dark:text-white">
              LinkedIn:
            </span>{" "}
            <a
              href="YOUR_LINKEDIN_FROM_RESUME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:underline"
            >
              : linkedin.com/in/sukshamgupta
            </a>
          </p>

          <p>
            <span className="font-medium text-slate-900 dark:text-white">
              GitHub:
            </span>{" "}
            <a
              href="YOUR_GITHUB_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:underline"
            >
              github.com/Suksham-123 
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
