"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { motion, Variants } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [showPointer, setShowPointer] = useState<boolean>(true);

  useEffect(() => {
    setIsClient(true);

    // Remove this video mute setting since it's handled by the other effect
    // if (videoRef.current) {
    //   videoRef.current.muted = isMuted;
    // }

    // Hide pointer after initial animation
    const timer = setTimeout(() => {
      setShowPointer(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array is now safe
  useEffect(() => {
    // Ensure the video's mute state matches our state
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const restaurantWords: string[] = [
    "Exquisite dining",
    "Delicious cuisine",
    "Savor gourmet dishes",
    "Enjoy fine dining",
    "Taste culinary artistry",
  ];

  const leftBlockVariants: Variants = {
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

  const toggleMute = (): void => {
    setIsMuted(!isMuted);
  };

  const logoVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1.2, 0.9, 1],
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subheadingVariants: Variants = {
    hidden: { opacity: 0, letterSpacing: "0.05em" },
    visible: {
      opacity: 1,
      letterSpacing: "0.1em",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  if (!isClient) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/assets/video/TheSkyviewRooftop.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      {/* Floating food elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 z-0"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#ca8e24]/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 z-0"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-14 h-14 rounded-full bg-[#d4a76a]/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={leftBlockVariants}
        className="relative z-20 flex flex-col items-center justify-center h-full px-6 md:px-12 max-w-6xl mx-auto"
      >
        {/* Glassmorphism content card */}
        <motion.div
          className="w-full max-w-3xl backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#d4a76a]/20 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              className="w-40 md:w-52 lg:w-60"
              whileHover={{ rotate: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/assets/images/logo-white.png"
                alt="SkyView Logo"
                width={240}
                height={240}
                className="w-full h-auto drop-shadow-xl"
                priority
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={headingVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-white drop-shadow-xl"
            >
              The SkyView Rooftop <br />
              <span className="bg-gradient-to-r from-[#d4a76a] via-[#ca8e24] to-[#ca8e24] bg-clip-text text-transparent">
                Multicuisine Restaurant
              </span>
            </motion.h2>

            {/* Subheading with FlipWords */}
            <motion.div
              variants={subheadingVariants}
              className="text-lg md:text-xl text-white text-center max-w-2xl leading-relaxed"
            >
              <p className="mb-4">
                Experience{" "}
                <FlipWords
                  className="font-semibold text-[#d4a76a]"
                  words={restaurantWords}
                />{" "}
                at new heights
              </p>
              <p>with breathtaking panoramic views of the city skyline.</p>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#book"
              className="mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#d4a76a] to-[#ca8e24] text-white font-bold text-lg hover:from-[#e0b88a] hover:to-[#c69a2b] transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Table
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Mute toggle button */}
      <motion.button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="
          absolute 
          bottom-6
          right-6 
          z-50
          p-3 
          rounded-full 
          bg-[#d4a76a]
          border border-[#d4a76a]/50
          text-white 
          shadow-xl
          hover:bg-[#ca8e24]
        "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </motion.button>

      {/* Animated Pointer */}
      {showPointer && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="w-12 h-12 rounded-full bg-[#ca8e24]/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#d4a76a]"
            >
              <path
                d="M12 5V19M12 5L6 11M12 5L18 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
