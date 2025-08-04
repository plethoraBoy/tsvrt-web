/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";

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
      className="py-16 relative overflow-hidden font-inter"
    >
      {/* Food-themed background elements */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 32c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4a76a' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Subtle food pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full border-2 border-[#d4a76a] blur-xl"
          style={{
            background: "radial-gradient(circle, #ca8e24 0%, transparent 70%)",
            transform: "rotate(15deg)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border-2 border-[#d4a76a] blur-xl"
          style={{
            background: "radial-gradient(circle, #d4a76a 0%, transparent 70%)",
            transform: "rotate(-10deg)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#d4a76a] via-[#ca8e24] to-[#d4a76a] bg-clip-text text-transparent mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Have a question about our menu or reservations? We'd love to hear
            from you!
          </p>
        </motion.div>

        <motion.div
          className="mb-12 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#d4a76a]/20"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5290633073746!2d80.1532915402157!3d13.128993087254305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ce30c1aded%3A0xb73ad5e084920af!2sThe%20SkyView%20Rooftop%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1748901270309!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Restaurant Location"
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-[#d4a76a]/20 shadow-xl"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-[#d4a76a]/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a76a]/40 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-[#d4a76a]/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a76a]/40 transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="md:col-span-2 w-full p-4 bg-white/5 border border-[#d4a76a]/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a76a]/40 transition"
            />
            <textarea
              name="message"
              placeholder="Your message (e.g., reservation request, special dietary needs)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="md:col-span-2 w-full p-4 bg-white/5 border border-[#d4a76a]/20 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a76a]/40 resize-none transition min-h-[120px]"
            />
            <div className="md:col-span-2 text-center text-[#d4a76a] min-h-[24px] text-sm md:text-base">
              {isSubmitting && <span>Preparing your message...</span>}
              {isSent && (
                <span className="text-[#ca8e24]">
                  Your message has been sent! We'll respond within 24 hours.
                </span>
              )}
              {errorMsg && <span className="text-rose-400">{errorMsg}</span>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:col-span-2 bg-gradient-to-r from-[#d4a76a] to-[#ca8e24] hover:from-[#e0b88a] hover:to-[#c69a2b] text-white font-semibold rounded-full py-4 w-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
