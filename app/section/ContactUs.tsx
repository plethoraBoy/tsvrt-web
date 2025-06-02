"use client";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";

// Optional: Import custom font using Tailwind if configured
// or add <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"> in your HTML head

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   AOS.init({ duration: 800, once: true });
  // }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setIsSent(false);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-neutral-950 py-16 relative overflow-hidden font-inter"
    >
      {/* Yellow blurred circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-2">
            Contact
          </h2>
          <p className="text-white/80 text-lg">
            Reach out to us with any questions or feedback. We&apos;re here to
            help!
          </p>
        </motion.div>

        <motion.div
          className="mb-12 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5290633073746!2d80.1532915402157!3d13.128993087254305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ce30c1aded%3A0xb73ad5e084920af!2sThe%20SkyView%20Rooftop%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1748901270309!5m2!1sen!2sin"
            // style={{ filter: "invert(90%)" }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="md:col-span-2 w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 transition"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="md:col-span-2 w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/60 resize-none transition"
            />
            <div className="md:col-span-2 text-center text-yellow-400 min-h-[24px]">
              {isSubmitting && <span>Sending...</span>}
              {isSent && <span>Your message has been sent. Thank you!</span>}
              {errorMsg && <span className="text-red-400">{errorMsg}</span>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-400 text-yellow-900 font-bold rounded-xl py-4 w-full transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
