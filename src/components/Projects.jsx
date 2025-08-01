import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Import images from src/images/
import NshealthAccountRegisteration from '../images/NshealthAccountRegisteration.png';
import NshealthDrugcategories from '../images/NshealthDrugcategories.png';
import Emailcomposepage from '../images/emailcomposepage.png';
import Ngowebsiteonboarding from '../images/ngowebsiteonboarding.png';
import Pokemonpodextypes from '../images/pokemonpodextypes.png';
import QuickcashLocationTrack from '../images/quickcash_location_track.png';
import Tasktrackerwebapp from '../images/tasktrackerwebapp.png';
import NshealthLandingPage from '../images/NshealthLandingPage.png';
import F1AssistantWeb from '../images/f1-assistant-web.jpg';
import Pokemonpodex from '../images/pokemonpodex.png';
import Popquestgamehomepage from '../images/popquestgamehomepage.png';
import Roombookingsystem from '../images/roombookingsystem.png';
import Roombookingsystemcaraousel from '../images/roombookingsystemcaraousel.png';
import Roomcatalog from '../images/roomcatalog.png';
import Emailwebapphomepage from '../images/emailwebapphomepage.png';
import Pokemonpodexfavourites from '../images/pokemonpodexfavourites.png';
import Pokemonpodexfilter from '../images/pokemonpodexfilter.png';
import Pokemonpodexfilter2 from '../images/pokemonpodexfilter2.png';
import Popquestgamelevel1 from '../images/popquestgamelevel1.png';
import Popquestgamelevel1jump from '../images/popquestgamelevel1jump.png';
import Popquestgamelevels from '../images/popquestgamelevels.png';
import Roomsearchdetails from '../images/roomsearchdetails.png';
import Ngoadmindashboard from '../images/ngoadmindashboard.png';
import Ngowebsitehomepage from '../images/ngowebsitehomepage.png';
import Azureidandgovernancecertificate from '../images/azureidandgovernancecertificate.png';
import AppointmentBookingAppImage from '../images/appointmentBookingApp.png';


const projects = [
  
  {
    title: "Appointment Booking App",
    description: "AWS-based web app with secure appointment scheduling and a user-friendly interface.",
    tech: ["React", "Node.js", "Aurora MySQL", "EC2", "S3"],
    github: "https://github.com/SairajJadhav18/appointment-booking-app",
    demo: "",
    images: [AppointmentBookingAppImage, Tasktrackerwebapp, AppointmentBookingAppImage],
  },
  {
  title: "QuickCash Job App",
  description: "Android job platform with Firebase auth and real-time listings.",
  tech: ["Java", "Android Studio", "Firebase", "JSON"],
  github: "https://github.com/SairajJadhav18/quickcash-android",
  demo: "/quickcashdemo.mp4",  // <-- relative to public folder root
  images: [QuickcashLocationTrack, QuickcashLocationTrack, QuickcashLocationTrack],
},
  {
    title: "Pokédex – Pokémon Explorer App",
    description: "PokéAPI-powered app for browsing, filtering, and saving favorite Pokémon.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PokéAPI"],
    github: "https://github.com/SairajJadhav18/pokedex-pokemon-explorer-app",
    demo: "",
    images: [
      Pokemonpodex,
      Pokemonpodextypes,
      Pokemonpodexfavourites,
      Pokemonpodexfilter,
      Pokemonpodexfilter2,
    ],
  },
  {
    title: "Room Booking System",
    description: "PHP app to filter, view, and book hotel rooms with session storage.",
    tech: ["PHP", "Bootstrap", "JavaScript", "JSON", "jQuery"],
    github: "https://github.com/SairajJadhav18/room-booking-service",
    demo: "",
    images: [
      Roombookingsystem,
      Roombookingsystemcaraousel,
      Roomcatalog,
      Roomsearchdetails,
    ],
  },
  {
    title: "Email Web App",
    description: "Full-stack mail client with login, inbox/sent views, and secure sessions.",
    tech: ["Node.js", "Express", "MySQL", "Bootstrap", "Sessions"],
    github: "https://git.cs.dal.ca/courses/2025-winter/csci-2170/assignments/a4/sjadhav.git",
    demo: "",
    images: [Emailwebapphomepage, Emailcomposepage],
  },
  {
    title: "NGO Website",
    description: "Onboarding and admin dashboard for NGO donation platform.",
    tech: ["React", "Firebase", "Cloudinary", "JavaScript"],
    github: "", // Add if available
    demo: "",
    images: [Ngowebsiteonboarding, Ngoadmindashboard, Ngowebsitehomepage],
  },
  {
    title: "Pop Quest Game",
    description: "Platformer game with multiple levels and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas"],
    github: "", // Add if available
    demo: "",
    images: [Popquestgamehomepage, Popquestgamelevel1, Popquestgamelevel1jump, Popquestgamelevels],
  },
  {
    title: "Nova Scotia Health – Geriatric App",
    description: "React-based healthcare interface with custom drug logic and backend APIs.",
    tech: ["React", "JavaScript", "Express.js", "C#", "HTML/CSS"],
    github: "https://github.com/SairajJadhav18/geriatrics-health-app",
    demo: "",
    images: [NshealthAccountRegisteration, NshealthDrugcategories, NshealthLandingPage],
  },
  {
    title: "Formula 1 Live Stats Database",
    description: "MySQL + Python database with real-time data integration from Kaggle.",
    tech: ["Python", "MySQL", "API Integration"],
    github: "https://github.com/SairajJadhav18/f1-live-database",
    demo: "",
    images: [F1AssistantWeb,F1AssistantWeb,F1AssistantWeb],
  },
  {
    title: "Azure ID and Governance Certificate",
    description: "Certification showing expertise in Azure identity and governance.",
    tech: ["Certificate"],
    github: "",
    demo: "/azureidandgovernancecertificate.pdf",
    images: [],
  },
  {
  title: "Cybersecurity Fundamentals Certificate - SHIFTKEY Labs",
  description: "Certification demonstrating knowledge of cybersecurity principles and practices.",
  tech: ["Certificate"],
  github: "",
  demo: "/practicalcybersecuritycertification.pdf",
  images: [],
},
  {
    title: "AI Dashboard",
    description: "Power BI dashboard integrating NLP-based copilot search for insights.",
    tech: ["Power BI", "Python", "NLP", "Microsoft Fabric"],
    github: "",
    demo: "",
  },
  {
    title: "Emergency Room Queue Optimizer – AI Hackathon (3rd Place)",
    description: "Bias-free triage system using Flask, SQLAlchemy, and Ollama LLM.",
    tech: ["Python", "Flask", "SQLAlchemy", "Ollama"],
    github: "https://github.com/SairajJadhav18/er-priority-ai",
    demo: "",
    images: [], // No images available
  },
  {
    title: "Huffman Coding – Compression Algorithm",
    description: "Efficient data compressor using Huffman coding in Java and Python.",
    tech: ["Java", "Python", "DSA"],
    github: "https://github.com/SairajJadhav18/huffman-tree-java-python",
    demo: "",
    images: [], // No images available
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-16 max-w-6xl mx-auto"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Projects
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Render image carousel if images exist */}
            {project.images && project.images.length > 0 && (
              <div className="mb-4">
                <Slider {...imageSliderSettings}>
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </Slider>
              </div>
            )}

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

            <div className="flex flex-col gap-4">
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

              {project.demo && project.demo.endsWith(".mp4") ? (
                <video
                  controls
                  width="100%"
                  style={{ maxHeight: "300px", borderRadius: "0.5rem" }}
                >
                  <source src={project.demo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : project.demo && project.demo.endsWith(".pdf") ? (
                <iframe
                  src={project.demo}
                  width="100%"
                  height="400px"
                  style={{ borderRadius: "0.5rem", marginBottom: "1rem" }}
                  title={`${project.title} Certificate`}
                />
              ) : (
                project.demo && (
                  <a
                    href={project.demo}
                    className="text-green-600 dark:text-green-400 underline text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}