"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

const HeroSection: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const muteButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && containerRef.current) {
      // Set initial states
      gsap.set(
        [
          logoRef.current,
          headingRef.current,
          subheadingRef.current,
          buttonRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(scrollIndicatorRef.current, {
        opacity: 0,
      });

      gsap.set(muteButtonRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      // Create main timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate elements in sequence
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          muteButtonRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: -10,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

      // Auto-hide scroll indicator after 6 seconds
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 6,
      });
    }
  }, [isClient]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const restaurantWords: string[] = [
    "Exquisite dining",
    "Delicious cuisine",
    "Gourmet dishes",
    "Fine dining",
    "Culinary artistry",
  ];

  const toggleMute = (): void => {
    setIsMuted(!isMuted);

    // Animate mute button
    gsap.to(muteButtonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  const handleButtonHover = (isHovering: boolean) => {
    gsap.to(buttonRef.current, {
      scale: isHovering ? 1.05 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMuteButtonHover = (isHovering: boolean) => {
    gsap.to(muteButtonRef.current, {
      scale: isHovering ? 1.1 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  if (!isClient) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
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

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 md:px-8 max-w-7xl mx-auto">
        {/* Content Card with Enhanced Glassmorphism */}
        <div className="text-center max-w-4xl  p-8 md:p-12 lg:p-16 border-white/10 shadow-2xl">
          {/* Logo */}
          <div ref={logoRef} className="mb-8 md:mb-10">
            <Image
              src="/assets/images/logo-white.png"
              alt="SkyView Logo"
              width={200}
              height={200}
              className="w-32 md:w-40 lg:w-48 h-auto mx-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Main Heading with Better Typography */}
        <h1
  ref={headingRef}
  className="mb-6 md:mb-8 leading-tight tracking-wide"
>
  {/* Main Title */}
  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
    The SkyView Rooftop
  </span>

  {/* Subtitle */}
  <span className="block font-light text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2">
    Multicuisine Restaurant
  </span>
</h1>

          {/* Subheading with FlipWords */}
          <div
            ref={subheadingRef}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <p className="mb-4">
              Experience{" "}
              <FlipWords
                className="font-semibold text-amber-400 inline-block min-w-[200px]"
                words={restaurantWords}
              />{" "}
              at new heights
            </p>
            <p className="text-white/80 text-base md:text-lg">
              with breathtaking panoramic views of the city skyline.
            </p>
          </div>

          {/* CTA Button with Enhanced Design */}
          <a
            ref={buttonRef}
            href="#book"
            className="inline-block px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-shadow duration-300 border-2 border-amber-400/20"
            onMouseEnter={() => handleButtonHover(true)}
            onMouseLeave={() => handleButtonHover(false)}
          >
            Reserve Your Table
          </a>
        </div>
      </div>

      {/* Mute Toggle Button */}
      <button
        ref={muteButtonRef}
        onClick={toggleMute}
        onMouseEnter={() => handleMuteButtonHover(true)}
        onMouseLeave={() => handleMuteButtonHover(false)}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-colors shadow-xl"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-white/70"
      >
        <span className="text-sm mb-2 font-light tracking-wide">
          SCROLL DOWN
        </span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
