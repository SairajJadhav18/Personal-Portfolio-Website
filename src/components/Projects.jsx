import { motion } from "framer-motion";

const projects = [
  {
    title: "Appointment Booking App",
    description: "AWS-based web app with secure appointment scheduling and a user-friendly interface.",
    tech: ["React", "Node.js", "Aurora MySQL", "EC2", "S3"],
    github: "https://github.com/SairajJadhav18/appointment-booking-app",
    demo: "",
  },
  {
    title: "AI Dashboard",
    description: "Power BI dashboard integrating NLP-based copilot search for insights.",
    tech: ["Power BI", "Python", "NLP", "Microsoft Fabric"],
    github: "",
    demo: "",
  },
  {
    title: "Nova Scotia Health – Geriatric App",
    description: "React-based healthcare interface with custom drug logic and backend APIs.",
    tech: ["React", "JavaScript", "Express.js", "C#", "HTML/CSS"],
    github: "https://github.com/SairajJadhav18/geriatrics-health-app",
    demo: "",
  },
  {
    title: "Formula 1 Live Stats Database",
    description: "MySQL + Python database with real-time data integration from Kaggle.",
    tech: ["Python", "MySQL", "API Integration"],
    github: "https://github.com/SairajJadhav18/f1-live-database",
    demo: "",
  },
  {
    title: "ER Queue Optimizer – AI Hackathon (3rd Place)",
    description: "Bias-free triage system using Flask, SQLAlchemy, and Ollama LLM.",
    tech: ["Python", "Flask", "SQLAlchemy", "Ollama"],
    github: "https://github.com/SairajJadhav18/er-priority-ai",
    demo: "",
  },
  {
    title: "Huffman Coding – Compression Algorithm",
    description: "Efficient data compressor using Huffman coding in Java and Python.",
    tech: ["Java", "Python", "DSA"],
    github: "https://github.com/SairajJadhav18/huffman-tree-java-python",
    demo: "",
  },
  {
    title: "QuickCash Job App",
    description: "Android job platform with Firebase auth and real-time listings.",
    tech: ["Java", "Android Studio", "Firebase", "JSON"],
    github: "https://github.com/SairajJadhav18/quickcash-android",
    demo: "",
  },
  {
    title: "Pokédex – Pokémon Explorer App",
    description: "PokéAPI-powered app for browsing, filtering, and saving favorite Pokémon.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PokéAPI"],
    github: "https://github.com/SairajJadhav18/pokedex-pokemon-explorer-app",
    demo: "",
  },
  {
    title: "Room Booking System",
    description: "PHP app to filter, view, and book hotel rooms with session storage.",
    tech: ["PHP", "Bootstrap", "JavaScript", "JSON", "jQuery"],
    github: "https://github.com/SairajJadhav18/room-booking-service",
    demo: "",
  },
  {
    title: "Email Web App",
    description: "Full-stack mail client with login, inbox/sent views, and secure sessions.",
    tech: ["Node.js", "Express", "MySQL", "Bootstrap", "Sessions"],
    github: "https://git.cs.dal.ca/courses/2025-winter/csci-2170/assignments/a4/sjadhav.git",
    demo: "",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  className="text-blue-600 dark:text-blue-400 underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-green-600 dark:text-green-400 underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
