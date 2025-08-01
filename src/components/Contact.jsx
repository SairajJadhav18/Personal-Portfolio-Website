import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { HiMail, HiChatAlt2 } from "react-icons/hi";

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwdeovq");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-6">
        <motion.div
          className="bg-white dark:bg-gray-900 text-center p-12 rounded-2xl shadow-2xl border border-indigo-300 dark:border-indigo-700 max-w-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-indigo-600 text-white text-5xl"
          >
            ✅
          </motion.div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Message Sent!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Thank you for reaching out. I’ll get back to you shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-6 py-16"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-indigo-300 dark:border-indigo-700 max-w-xl w-full p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-center text-indigo-700 dark:text-indigo-400 mb-10 text-lg">
          📬 I'd love to hear from you — send me a message below.
        </p>

        {/* Email Input */}
        <div className="relative mb-8">
          <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 dark:text-indigo-400 w-6 h-6 pointer-events-none" />
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-indigo-300 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-200 placeholder-indigo-400 dark:placeholder-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Input */}
        <div className="relative mb-8">
          <HiChatAlt2 className="absolute left-4 top-4 text-indigo-500 dark:text-indigo-400 w-6 h-6 pointer-events-none" />
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-indigo-300 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-200 placeholder-indigo-400 dark:placeholder-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white py-4 rounded-xl font-semibold tracking-wide shadow-lg"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99,102,241,0.6)" }}
        >
          {state.submitting ? "Sending..." : "📨 Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
}
