const skills = {
  Languages: ["JavaScript", "Python", "Java", "C++"],
  Frameworks: ["React", "Node.js", "Express", "Tailwind CSS"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
  Cloud: ["AWS (EC2, S3, Lambda)", "Vercel", "Firebase"],
  Databases: ["MySQL", "MongoDB", "Amazon Aurora"],
};

export default function Skills() {
  return (
    <section 
    id="skills"
    className="scroll-mt-2 px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full"
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
