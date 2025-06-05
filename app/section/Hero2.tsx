"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "motion/react";
import { Pointer } from "../components/magicui/pointer";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */} <button
        onClick={toggleMute}
        aria-label="Toggle Mute"
        className="
          fixed 
          bottom-[calc(1.5rem+env(safe-area-inset-bottom))] 
          right-6 
          z-40 
          p-3 
          rounded-full 
          bg-black/60 
          hover:bg-black/80 
          text-white 
          transition 
          pointer-events-auto
          shadow-lg
          backdrop-blur-sm
          md:absolute md:bottom-6 md:right-6 
        "
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      <video
        ref={videoRef}
        src="/assets/video/TheSkyviewRooftop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Mute toggle button */}
     

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply pointer-events-none" />

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={leftBlockVariants}
        className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full px-6 md:px-12 max-w-[1400px] mx-auto"
      >
        {/* Left block */}
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
            className="text-md md:text-lg text-white drop-shadow-md max-w-xl"
          >
            Experience{" "}
            <FlipWords
              className="font-semibold text-yellow-400 drop-shadow-sm"
              words={restaurantWords}
            />{" "}
            at new heights with breathtaking panoramic views of the city skyline.
          </motion.p>
        </motion.div>

        {/* Right half empty to preserve split layout effect */}
        <div className="w-full lg:w-1/2" />
      </motion.div>

      {/* Animated Pointer */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative z-20 flex justify-center mt-10 lg:mt-0"
      >
        <Pointer />
      </motion.div>
    </section>
  );
};

export default HeroSection;
