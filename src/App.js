import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects"; 
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";

import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Hero />
        <Projects /> 
        <Skills />
        <Timeline />
        <Contact />
        <Resume /> 
      </main>
    </ThemeProvider>
  );
}
