import { motion } from "framer-motion";

const timeline = [
  {
    year: "Sep 2022 - Apr 2025",
    title: "Restaurant Supervisor – The Grawood, Dalhousie Student Union",
    type: "Work",
    icon: "🍽️",
    skills: [
      "Leadership",
      "Organizational Skills",
      "Team Coordination",
      "Communication",
      "Workflow Optimization",
      "Training & Development",
      "Conflict Resolution",
      "Reliability",
    ],
    description:
      "Oversaw daily operations at The Grawood student-run restaurant. Coordinated staff during peak hours, optimized workflows to reduce wait times, trained new hires, and ensured smooth team communication.",
  },
  {
    year: "May 2024 - Aug 2024",
    title: "Summer Intern – Maritime Paper Products Limited",
    type: "Work",
    icon: "🔧",
    skills: [
      "Time Management",
      "Debugging",
      "Agile Methodologies",
      "Operational Efficiency",
      "Teamwork",
      "Quality Assurance",
    ],
    description:
      "Conducted product quality tests including edge, crush, and durability. Managed projects using Jira and version control. Reviewed labeling standards and collaborated with research teams.",
  },
  {
    year: "Jan 2024 - Apr 2024",
    title: "Junior Web Developer (Part-Time) – Nova Scotia Health Authority",
    type: "Work",
    icon: "💻",
    skills: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "C#",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Agile",
      "Secure Coding",
    ],
    description:
      "Developed a secure geriatric drug info website with REST APIs for user authentication and feedback. Enhanced backend and database management, participated in agile development, and focused on healthcare data security.",
  },

  // Your existing timeline items here
  
  {
    year: "Fall 2024",
    title: "QuickCash Android App",
    type: "Project",
    icon: "💡",
    skills: ["Java", "Firebase", "JSON", "Android Studio"],
    description:
      "Job marketplace with real-time dashboards and live tracking.",
  },
  {
    year: "Fall",
    title: "Generative AI Hackathon – Dalhousie (3rd Place)",
    type: "Project",
    icon: "💡",
    skills: ["Python", "Flask", "SQLAlchemy", "Ollama"],
    description:
      "Built triage app to prioritize ER patients using local LLM.",
  },
];

const typeColors = {
  Work: "blue",
  Project: "purple",
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-20 px-6 py-12 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        📈 My Timeline
      </h2>

      {/* Animated central line with pulse */}
      <motion.div
        className="relative flex flex-col gap-16 before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:-translate-x-1/2 before:rounded-lg"
        style={{ perspective: 1000 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Line with gentle pulse */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 rounded-lg bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400"
          style={{ translateX: "-50%" }}
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-6 relative z-10 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Animated icon with hover scale & color */}
            <motion.div
              className={`absolute left-1/2 -translate-x-1/2 -top-5 w-14 h-14 flex items-center justify-center text-3xl rounded-full border-4 shadow-md cursor-default
                ${
                  item.type === "Work"
                    ? "border-blue-500 bg-blue-100 dark:border-blue-400 dark:bg-blue-900"
                    : "border-purple-500 bg-purple-100 dark:border-purple-400 dark:bg-purple-900"
                }
              `}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              title={item.type}
            >
              {item.icon}
            </motion.div>

            {/* Content Card with hover shadow & glow */}
            <motion.div
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl w-full md:w-1/2 mt-10 md:mt-0 cursor-default"
              whileHover={{
                boxShadow:
                  item.type === "Work"
                    ? "0 0 20px rgba(59,130,246,0.6)" // blue glow
                    : "0 0 20px rgba(139,92,246,0.6)", // purple glow
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {item.year}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm mt-2 mb-3 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {item.skills.map((s, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded-full font-medium ${
                      item.type === "Work"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-200"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
