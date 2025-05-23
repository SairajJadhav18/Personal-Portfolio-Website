export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 flex flex-col items-center justify-center h-screen text-center px-4"
    >
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-xl hover:scale-105 transition duration-300">
        <img
          src="/profile.jpg"
          alt="Sairaj Jadhav"
          className="w-full h-full object-cover rounded-full scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4">Hi, My name is Sairaj Jadhav</h1>
      <p className="text-xl mb-6">
        Aspiring Software Engineer | AI & Cloud Enthusiast
      </p>

      <div className="space-x-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <a
          href="https://linkedin.com/in/sairaj-jadhav-bb5776243/"
          className="underline text-blue-500"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SairajJadhav18"
          className="underline text-blue-500"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
