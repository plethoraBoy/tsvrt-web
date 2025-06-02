"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { motion, AnimatePresence } from "motion/react"
import { BackgroundGradientAnimation } from "../components/ui/linear-gradient";
import { Pointer } from "../components/magicui/pointer";

const HeroSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const restaurantWords = [
    "Exquisite dining",
    "Delicious cuisine",
    "Savor gourmet dishes",
    "Enjoy fine dining",
  ];

  if (!isClient) return null;

  // Variants for container animation
  const leftBlockVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1.2, 0.9, 1],
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, letterSpacing: "0.05em" },
    visible: {
      opacity: 1,
      letterSpacing: "0.1em",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const rightHalfVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        yoyo: Infinity,
        duration: 4,
        ease: "easeInOut",
        repeatType: "reverse",
        delay: 1,
      },
    },
  };

  return (
    <BackgroundGradientAnimation>
      <section className="h-screen w-full absolute overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/video/TheSkyviewRooftop.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply pointer-events-none" />

        {/* Split Layout Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={leftBlockVariants}
          className="relative z-20 flex flex-col lg:flex-row items-center lg:items-center justify-center h-full px-6 md:px-12"
        >
          <motion.div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {/* Logo */}
            <motion.div variants={logoVariants} className="w-40 md:w-52 lg:w-60">
              <Image
                src="/assets/images/logo-white.png"
                alt="SkyView Logo"
                width={240}
                height={240}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={headingVariants}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text drop-shadow-xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, #FFD133, #FBA61B, #ED8E1C)",
              }}
            >
              The SkyView Rooftop Multicuisine Restaurant
            </motion.h2>

            {/* Subheading with FlipWords inside */}
            <motion.p
              variants={subheadingVariants}
              className="text-lg md:text-2xl text-white drop-shadow-md max-w-xl"
            >
              Experience{" "}
              <FlipWords
                className="font-semibold text-white"
                words={restaurantWords}
              />{" "}
              at new heights with breathtaking panoramic views of the city skyline.
            </motion.p>
          </motion.div>

          {/* Right half empty for split layout effect */}
          <motion.div
            variants={rightHalfVariants}
            className="hidden lg:block w-1/2"
            aria-hidden="true"
          />
        </motion.div>

        {/* Animated Pointer with subtle bob */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative z-20"
        >
          <Pointer />
        </motion.div>
      </section>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;
