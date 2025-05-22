import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021 - 2024",
    title: "Grawood Assistant Supervisor – Dalhousie",
    type: "Work",
    icon: "💼",
    skills: ["Team Coordination", "Communication"],
    description: "Managed student-run restaurant ops and improved workflow efficiency.",
  },
  {
    year: "Winter 2024",
    title: "Junior Software Developer – NS Health",
    type: "Project",
    icon: "💡",
    skills: ["React", "Express.js", "C#", "Git"],
    description: "Built geriatric-focused web app with custom drug modules and REST API.",
  },
  {
    year: "Fall 2024",
    title: "QuickCash Android App – Freelance",
    type: "Project",
    icon: "💡",
    skills: ["Java", "Firebase", "JSON", "Android Studio"],
    description: "Job marketplace with real-time dashboards and live tracking.",
  },
  {
    year: "2025",
    title: "Generative AI Hackathon – Dalhousie (3rd Place)",
    type: "Project",
    icon: "💡",
    skills: ["Python", "Flask", "SQLAlchemy", "Ollama"],
    description: "Built triage app to prioritize ER patients using local LLM.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-20 px-6 py-12 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">📈 My Timeline</h2>

      <div className="relative flex flex-col gap-16 before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:-translate-x-1/2 before:bg-blue-500 dark:before:bg-blue-400">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 relative z-10`}
          >
            {/* Centered Animated Icon */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-5 w-12 h-12 flex items-center justify-center text-2xl bg-white dark:bg-gray-900 rounded-full border-[5px] border-blue-500 shadow-md z-30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              {item.icon}
            </motion.div>

            {/* Content Card */}
            <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl w-full md:w-1/2 mt-10 md:mt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {item.year}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2 mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {item.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}