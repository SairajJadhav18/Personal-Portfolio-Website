import { motion } from "framer-motion";

const projects = [
  {
    title: "Appointment Booking App",
    description: "AWS-based web app with secure appointment scheduling.",
    tech: ["React", "Node.js", "Aurora MySQL", "EC2", "S3"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
  },
  {
    title: "AI Dashboard",
    description: "Power BI dashboard with NLP-based search copilot integration.",
    tech: ["Power BI", "Python", "NLP", "Microsoft Fabric"],
    github: "",
    demo: "",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section 
    id="projects"
    className="scroll-mt-20 px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  className="text-blue-600 dark:text-blue-400 underline text-sm"
                  target="_blank"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-green-600 dark:text-green-400 underline text-sm"
                  target="_blank"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
