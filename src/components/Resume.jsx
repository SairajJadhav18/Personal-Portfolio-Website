export default function Resume() {
  return (
    <section 
    id="resume"
    className="scroll-mt-2 px-6 py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <div className="mb-6">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          ⬇️ Download Resume
        </a>
      </div>

      <iframe
        src="/resume.pdf"
        title="Sairaj Jadhav Resume"
        className="w-full h-[800px] border rounded shadow"
      ></iframe>
    </section>
  );
}
