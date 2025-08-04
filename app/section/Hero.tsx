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
    
    // Hide pointer after initial animation
    const timer = setTimeout(() => {
      setShowPointer(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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

  const toggleMute = (): void => {
    setIsMuted(!isMuted);
  };

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (!isClient) return null;

  return (
    <section className="relative w-full min-h-screen md:h-screen overflow-hidden">
      {/* Background Video - Added playsinline for mobile */}
      <video
        ref={videoRef}
        src="/assets/video/TheSkyviewRooftop.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay - Enhanced for mobile visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />

      {/* Content Container - Responsive layout */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-16 md:px-8 md:py-0 max-w-6xl mx-auto">
        {/* Glassmorphism content card - Responsive sizing */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-2xl md:max-w-3xl backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-[#d4a76a]/30 shadow-2xl"
        >
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Logo - Responsive sizing */}
            <motion.div
              variants={itemVariants}
              className="w-32 md:w-40 lg:w-48"
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

            {/* Heading - Responsive text sizing */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white drop-shadow-xl"
            >
              The SkyView Rooftop <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#d4a76a] via-[#ca8e24] to-[#ca8e24] bg-clip-text text-transparent">
                Multicuisine Restaurant
              </span>
            </motion.h2>

            {/* Subheading - Responsive text and spacing */}
            <motion.div
              variants={itemVariants}
              className="text-base md:text-lg text-white text-center max-w-md md:max-w-2xl leading-relaxed"
            >
              <p className="mb-3 md:mb-4">
                Experience{" "}
                <FlipWords
                  className="font-semibold text-[#d4a76a] inline-block min-w-[150px] sm:min-w-[180px]"
                  words={restaurantWords}
                />{" "}
                at new heights
              </p>
              <p>with breathtaking panoramic views of the city skyline.</p>
            </motion.div>

            {/* CTA Button - Responsive sizing */}
            <motion.a
              variants={itemVariants}
              href="#book"
              className="mt-2 md:mt-4 px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-gradient-to-r from-[#d4a76a] to-[#ca8e24] text-white font-bold text-base md:text-lg hover:from-[#e0b88a] hover:to-[#c69a2b] transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Your Table
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Mute toggle button - Mobile positioning */}
      <motion.button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="
          absolute 
          bottom-4
          right-4
          md:bottom-6
          md:right-6 
          z-50
          p-2.5
          md:p-3 
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
        {isMuted ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </motion.button>

      {/* Animated Pointer - Mobile adjustments */}
      {showPointer && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="absolute bottom-16 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="w-10 h-10 rounded-full bg-[#ca8e24]/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <svg
              width="20"
              height="20"
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