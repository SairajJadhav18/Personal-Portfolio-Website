import React from "react";
import { motion } from "framer-motion";

const AnimatedHero = () => {
  const heading = "Hi, My name is Sairaj Jadhav";
  const letters = heading.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="scroll-mt-20 min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
      {/* Profile Image */}
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/profile.jpg"
          alt="Sairaj Jadhav"
          className="w-full h-full object-cover rounded-full scale-105 transition-transform duration-300"
        />
      </div>

      {/* Animated Heading */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-6xl font-extrabold mb-6 flex flex-wrap justify-center"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Bio Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: letters.length * 0.05 + 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-lg md:text-xl mb-6 leading-relaxed"
      >
        I am a passionate Computer Science student and aspiring full-stack developer.
        I build secure, user-focused web applications and love turning ideas into interactive digital experiences.
        With hands-on experience in React, Node.js, MySQL, and cybersecurity principles, I'm on a mission to create impactful tech that solves real-world problems.
      </motion.p>

      {/* Links */}
      <div className="space-x-6 text-lg">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <a
          href="https://linkedin.com/in/sairaj-jadhav-bb5776243/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300 hover:text-blue-100 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SairajJadhav18"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300 hover:text-blue-100 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default AnimatedHero;
