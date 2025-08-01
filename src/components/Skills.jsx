import React from "react";

const skills = {
  Languages: ["JavaScript", "Python", "Java", "C", "SQL", "TypeScript", "C#"],
  Frameworks: [
    "React",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Flask",
    "Android (Java)",
    "Bootstrap",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Jira",
    "Docker",
    "Firebase",
    "Power BI",
  ],
  Cloud: [
    "AWS (EC2, S3, Lambda, Aurora, VPC)",
    "Vercel",
    "Firebase",
    "Supabase",
    "Azure",
  ],
  Databases: ["MySQL", "MongoDB", "Amazon Aurora", "SQL Server", "Firestore"],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
