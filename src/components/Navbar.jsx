import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "🏠 Home" },
  { id: "projects", label: "🗂 Projects" },
  { id: "skills", label: "⚙️ Skills" },
  { id: "resume", label: "📄 Resume" },
  { id: "contact", label: "📬 Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const NAVBAR_HEIGHT = 64; // Adjust based on your navbar height

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY + NAVBAR_HEIGHT;

    setScrolled(window.scrollY > 50);

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
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = sectionTop - NAVBAR_HEIGHT;

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  }
};

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    scrolled
      ? "bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-90 shadow-md"
      : "bg-white bg-opacity-0 dark:bg-gray-900 dark:bg-opacity-0 shadow-none"
  }`}
>

  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
  {/* Left: Logo */}
  <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => scrollTo("hero")}>
    <img src="/favicon.svg" alt="Logo" className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110" />
  </div>

  {/* Center: Desktop Links or Hamburger */}
  <div className="flex-1 flex justify-center items-center">
    {/* Desktop Links */}
    <div className="hidden md:flex items-center gap-6">
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
    </div>

    {/* Mobile Hamburger */}
    <div className="md:hidden flex items-center gap-4">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Toggle menu"
      >
        {/* Hamburger spans with motion */}
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 mb-1 rounded"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 mb-1 rounded"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded"
        />
      </button>
    </div>
  </div>

  {/* Right: Theme Toggle */}
  <div className="flex-shrink-0 ml-4">
    <ThemeToggle />
  </div>
</div>


  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`block w-full text-left px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
            active === id ? "font-semibold text-blue-600 dark:text-blue-400" : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )}
</nav>
  );
}
