import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "hero", label: "🏠 Home" },
  { id: "projects", label: "🗂 Projects" },
  { id: "skills", label: "⚙️ Skills" },
  { id: "resume", label: "📄 Resume" },
  { id: "contact", label: "📬 Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // Offset for navbar height

      for (let { id } of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
       <img
  src="/favicon.svg"
  alt="Logo"
  className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110"
/>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-sm font-medium">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative group transition hover:text-blue-600 ${
                  active === id ? "text-blue-600 font-semibold underline" : ""
                }`}
              >
                {label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
