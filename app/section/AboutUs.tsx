"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react"
import { useInView } from "motion/react";
import { Pointer } from "../components/magicui/pointer";

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Variants for container fade and slide up
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for headings
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Variants for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="about-us"
      className="bg-neutral-950 md:pt-28"
      ref={ref}
      aria-label="About us section"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="Secondary-Font mb-6">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            variants={headingVariants}
          >
            About us
          </motion.h2>
          <motion.div
            className="text-base sm:text-lg lg:text-xl"
            variants={headingVariants}
          >
            Elevated Dining, Shared Memories.
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-8">
          <motion.div variants={imageVariants}>
            <Image
              src="/assets/img/about/about.jpg"
              alt="About Us"
              width={500}
              height={300}
              className="rounded-md shadow-lg"
            />
          </motion.div>

          <div>
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold mb-4"
              variants={headingVariants}
            >
              Elevate Your Experience at SkyView Rooftop Restaurant
            </motion.h3>
            <motion.div
              className="italic text-sm sm:text-base lg:text-lg mb-4"
              variants={paragraphVariants}
            >
              Indulge in breathtaking views while savoring exquisite dishes,
              offering a culinary journey above the ordinary.
            </motion.div>

            <motion.ul
              className="list-disc list-inside mb-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                "Enjoy a unique dining experience with panoramic cityscapes.",
                "Delight in carefully crafted dishes that tantalize your taste buds.",
                "Immerse yourself in the chic ambiance, creating unforgettable moments under the open sky.",
                "Explore our diverse menu, featuring a fusion of international flavors, each dish telling a story of culinary mastery.",
                "Elevate your evenings with live music, adding a symphony of melodies to the breathtaking skyline.",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className=""
                  variants={listItemVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="text-sm sm:text-base lg:text-lg"
              variants={paragraphVariants}
            >
              At SkyView Rooftop Restaurant, we provide more than just a meal;
              we offer an elevated journey where each bite is accompanied by
              stunning views. Discover the perfect blend of culinary excellence
              and an enchanting atmosphere that sets us apart. Elevate your
              dining experience with us!
            </motion.div>

            <motion.div
              className="text-sm sm:text-base lg:text-lg mt-4"
              variants={paragraphVariants}
            >
              Join us for special events and themed nights, creating memorable
              experiences that go beyond traditional dining. Our dedicated team
              ensures impeccable service, making every visit a celebration of
              flavors and sophistication.
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated Pointer */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative z-20 flex justify-center mt-10"
      >
        <Pointer>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2607 12.4008C19.3774 11.2626 20.4357 10.6935 20.7035 10.0084C20.9359 9.41393 20.8705 8.74423 20.5276 8.20587C20.1324 7.58551 18.984 7.23176 16.6872 6.52425L8.00612 3.85014C6.06819 3.25318 5.09923 2.95471 4.45846 3.19669C3.90068 3.40733 3.46597 3.85584 3.27285 4.41993C3.051 5.06794 3.3796 6.02711 4.03681 7.94545L6.94793 16.4429C7.75632 18.8025 8.16052 19.9824 8.80519 20.3574C9.36428 20.6826 10.0461 20.7174 10.6354 20.4507C11.3149 20.1432 11.837 19.0106 12.8813 16.7454L13.6528 15.0719C13.819 14.7113 13.9021 14.531 14.0159 14.3736C14.1168 14.2338 14.2354 14.1078 14.3686 13.9984C14.5188 13.8752 14.6936 13.7812 15.0433 13.5932L17.2607 12.4008Z"
              fill="#1E90FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Pointer>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
