import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-900 dark:text-white mb-20"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-20">
          {/* Internship 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-4 border-slate-900 dark:border-slate-200 pl-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Web Designing Intern
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Vishyat Technologies · Jul 2025 – Aug 2025
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Worked on WordPress-based websites including design updates,
              maintenance, and client project support. Assisted in improving UI
              layouts, fixing content issues, and ensuring responsive design.
            </p>

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              <strong>Skills:</strong> WordPress, Web Design, UI Updates,
              Client Support
            </p>
          </motion.div>

          {/* Internship 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-4 border-slate-900 dark:border-slate-200 pl-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Blockchain Development Intern
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Antier School of Blocktech · Jul 2024 – Aug 2024
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Developed and deployed Ethereum smart contracts and explored
              decentralized application workflows. Gained hands-on experience
              with blockchain fundamentals and dApp architecture.
            </p>

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              <strong>Skills:</strong> Blockchain, Ethereum, Solidity, Smart
              Contracts, dApps
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
