export default function Contact() {
  return (
    <section 
    id="contact"
    className="scroll-mt-2 px-6 py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Let's connect! Feel free to reach out for opportunities or just to say hi.
      </p>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="mailto:sairajjadhav.sj86@gmail.com"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          📧 Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sairaj-jadhav-bb5776243/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
        >
          🔗 LinkedIn
        </a>
      </div>

      <form
        className="space-y-4 max-w-md mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (this is just a demo — backend not connected)");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
