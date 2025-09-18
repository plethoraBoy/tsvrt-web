// components/BanquetSection.tsx
"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BanquetFeatures from "../components/BanquetFeatures";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BanquetSection = () => {
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const decorativeRefs = useRef<HTMLDivElement[]>([]);
  const featuresRef = useRef<HTMLDivElement[]>([]);
  const countdownRef = useRef<HTMLDivElement>(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate opening date (45 days from now)
  useEffect(() => {
    const openingDate = new Date();
    openingDate.setDate(openingDate.getDate() + 45);

    const updateCountdown = () => {
      const now = new Date();
      const diff = openingDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, imageRef.current, contentRef.current], {
        opacity: 0,
        y: 60
      });

      gsap.set(decorativeRefs.current, {
        opacity: 0,
        scale: 0,
        rotation: -180
      });

      gsap.set(featuresRef.current, {
        opacity: 0,
        x: -30
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Title animation
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Image and content parallel animation
      tl.to([imageRef.current, contentRef.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.8");

      // Decorative elements
      tl.to(decorativeRefs.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Features staggered animation
      tl.to(featuresRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3");

      // Floating animations for decorative elements
      gsap.to(".floating-orb-1", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".floating-orb-2", {
        y: -15,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1
      });

      // Continuous rotation for decorative squares
      gsap.to(".rotating-square", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Hover effects
      if (imageRef.current) {
        const imageContainer = imageRef.current.querySelector('.image-container');
        if (imageContainer) {
          imageContainer.addEventListener('mouseenter', () => {
            gsap.to(imageContainer, {
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          imageContainer.addEventListener('mouseleave', () => {
            gsap.to(imageContainer, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Add refs to arrays
  const addToDecorative = (el: HTMLDivElement) => {
    if (el && !decorativeRefs.current.includes(el)) {
      decorativeRefs.current.push(el);
    }
  };

  const addToFeatures = (el: HTMLDivElement) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="banquet"
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(212, 167, 106, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)
        `,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div
          ref={addToDecorative}
          className="floating-orb-1 absolute top-20 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/10 backdrop-blur-lg border border-white/20 shadow-2xl"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.3) 0%, rgba(212, 167, 106, 0.1) 70%, transparent 100%),
              rgba(255, 255, 255, 0.05)
            `,
          }}
        />
        
        <div
          ref={addToDecorative}
          className="floating-orb-2 absolute bottom-40 left-12 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-700/10 backdrop-blur-lg border border-white/15 shadow-xl"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 193, 7, 0.25) 0%, rgba(184, 134, 11, 0.1) 70%, transparent 100%),
              rgba(255, 255, 255, 0.03)
            `,
          }}
        />

        {/* Rotating squares */}
        <div
          ref={addToDecorative}
          className="rotating-square absolute top-1/3 left-8 w-8 h-8 border border-amber-400/30 backdrop-blur-sm"
          style={{
            background: "rgba(212, 167, 106, 0.05)",
            transform: "rotate(45deg)",
          }}
        />
        
        <div
          ref={addToDecorative}
          className="rotating-square absolute bottom-1/4 right-16 w-12 h-12 border border-yellow-500/20 backdrop-blur-sm"
          style={{
            background: "rgba(255, 215, 0, 0.03)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-amber-500/5 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-yellow-600/3 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Title Section */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-block mb-6">
            <div 
              className="px-6 py-3 rounded-full border backdrop-blur-xl shadow-xl"
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
                  rgba(212, 167, 106, 0.1)
                `,
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">SKYCLUSIVE      </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span 
              className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent"
              style={{
                fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                fontWeight: "900",
                letterSpacing: "-0.02em",
              }}
            >
              Premium Event
            </span>
            <br />
            <span className="text-white/90">Spaces</span>
          </h1>
          
          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full shadow-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Enhanced Image Section */}
          <div ref={imageRef} className="relative">
            {/* Decorative background elements */}
            <div 
              ref={addToDecorative}
              className="absolute -top-8 -left-8 w-32 h-32 rounded-3xl border backdrop-blur-xl"
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%),
                  rgba(212, 167, 106, 0.05)
                `,
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            />
            
            <div 
              ref={addToDecorative}
              className="absolute -bottom-8 -right-8 w-28 h-28 rounded-3xl border backdrop-blur-xl"
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%),
                  rgba(184, 134, 11, 0.08)
                `,
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
            />

            <div className="image-container relative aspect-square overflow-hidden rounded-3xl shadow-2xl border backdrop-blur-sm"
              style={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.5),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <Image
                src="/assets/img/banquet/Banhall.jpg"
                alt="SkyView Banquet Hall"
                fill
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Glass overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(to bottom, 
                      rgba(0, 0, 0, 0.1) 0%, 
                      rgba(0, 0, 0, 0.3) 60%, 
                      rgba(0, 0, 0, 0.8) 100%
                    )
                  `,
                }}
              />
              
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 
                  className="text-2xl font-bold text-white mb-2"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Grand Ballroom Preview
                </h3>
                <p className="text-white/80 text-sm">Elegant • Spacious • Unforgettable</p>
              </div>
            </div>

            {/* Floating badge */}
            <div 
              ref={addToDecorative}
              className="absolute -top-6 -right-6 px-6 py-3 rounded-full font-bold shadow-2xl border text-white z-20"
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 193, 7, 0.8) 100%),
                  rgba(212, 167, 106, 0.1)
                `,
                borderColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(255, 215, 0, 0.3)",
              }}
            >
              ✨ New
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div ref={contentRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background with glassmorphism */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/img/banquet/bqbg.jpg"
                  alt="Banquet Hall Background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(0, 0, 0, 0.8) 0%, 
                        rgba(0, 0, 0, 0.6) 50%, 
                        rgba(0, 0, 0, 0.9) 100%
                      )
                    `,
                    backdropFilter: "blur(8px)",
                  }}
                />
              </div>

              {/* Glass content card */}
              <div 
                className="relative border rounded-3xl p-10 shadow-2xl z-20"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.15) 0%, 
                      rgba(255, 255, 255, 0.05) 50%, 
                      rgba(255, 255, 255, 0.1) 100%
                    ),
                    rgba(0, 0, 0, 0.2)
                  `,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(24px)",
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 0 0 1px rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                {/* <div 
                  className="inline-block px-5 py-2 rounded-full mb-8 border backdrop-blur-xl"
                  style={{
                    background: `
                      linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 193, 7, 0.1) 100%),
                      rgba(255, 255, 255, 0.05)
                    `,
                    borderColor: "rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <span 
                    className="text-amber-300 font-semibold text-sm tracking-wider"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    ⏰ OPENING SOON
                  </span>
                </div> */}

                <h2 
                  className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  The{" "}
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    SkyView
                  </span>
                  <br />
                  <span className="text-white/90">Banquet Hall</span>
                </h2>

                <p 
                  className="text-white/90 mb-10 text-lg leading-relaxed"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Elevate your special events in our luxurious new banquet space. 
                  Featuring panoramic city views, premium amenities, and customizable 
                  event packages designed for unforgettable celebrations.
                </p>

                {/* Enhanced Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {[
    { icon: "👶", text: "Baby Showers", color: "from-pink-300/20 to-fuchsia-500/10" },
                    { icon: "🏢", text: "Corporate Events", color: "from-blue-400/20 to-indigo-500/10" },
                    { icon: "🎂", text: "Birthday Celebrations", color: "from-purple-400/20 to-violet-500/10" },
                    { icon: "🎉", text: "All Parties Events", color: "from-green-400/20 to-emerald-500/10" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      ref={addToFeatures}
                      className="group rounded-3xl p-4 border backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{
                        background: `
                          linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%),
                          linear-gradient(135deg, ${item.color})
                        `,
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span 
                          className="text-white/95 font-medium"
                          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                        >
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanquetSection;