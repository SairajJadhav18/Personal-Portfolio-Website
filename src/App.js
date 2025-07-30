import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Analytics } from "@vercel/analytics/react"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <ThemeToggle />
      <main className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <Resume />
      </main>
      <Analytics />
    </ThemeProvider>
  );
}
