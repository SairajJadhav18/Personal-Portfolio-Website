import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwdeovq");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 text-center p-10 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            ✅ Message Sent
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Thank you for getting in touch!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        className="max-w-xl w-full bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-xl border border-gray-300 dark:border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center mb-6 font-bold text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          📬 I'd love to hear from you — send me a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="e.g. jane.doe@mail.com"
              className="w-full p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your thoughts here..."
              className="w-full p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition font-semibold tracking-wide"
          >
            {state.submitting ? "Sending..." : "📨 Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
