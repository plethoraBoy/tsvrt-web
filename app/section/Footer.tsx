"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const socialIconsRef = useRef<HTMLAnchorElement[]>([]);
  const taglineRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const currentYear = new Date().getFullYear();

  // Add elements to refs arrays
  const addToFloating = (el: HTMLDivElement | null) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  const addToSections = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToSocialIcons = (el: HTMLAnchorElement | null) => {
    if (el && !socialIconsRef.current.includes(el)) {
      socialIconsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced background animations
      gsap.to(backgroundRef.current, {
        backgroundPosition: "100% 100%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

      // Set initial states with improved timing
      gsap.set(mainCardRef.current, {
        opacity: 0,
        y: 120,
        scale: 0.85,
        rotationX: 15
      });

      gsap.set(sectionRefs.current, {
        opacity: 0,
        y: 60,
        x: -20
      });

      gsap.set(socialIconsRef.current, {
        opacity: 0,
        scale: 0,
        rotation: -270
      });

      gsap.set([taglineRef.current, copyrightRef.current], {
        opacity: 0,
        y: 40
      });

      // Enhanced floating elements animations
      floatingElementsRef.current.forEach((el, index) => {
        // Primary floating animation
        gsap.to(el, {
          y: -30 - (index * 8),
          x: Math.sin(index) * 15,
          rotation: index % 2 === 0 ? 15 : -12,
          duration: 10 + (index * 3),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.7
        });

        // Scale and opacity pulse
        gsap.to(el, {
          scale: 1.2 + (index * 0.1),
          opacity: 0.9,
          duration: 6 + index * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.4
        });

        // Additional rotation animation
        gsap.to(el, {
          rotation: `+=${index % 2 === 0 ? 360 : -360}`,
          duration: 25 + index * 5,
          repeat: -1,
          ease: "none"
        });
      });

      // Enhanced main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          scrub: false
        }
      });

      // Main card entrance with 3D effect
      tl.to(mainCardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.6,
        ease: "back.out(1.2)"
      });

      // Sections with enhanced stagger
      tl.to(sectionRefs.current, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "start",
          ease: "power2.out"
        },
        ease: "power3.out"
      }, "-=1.2");

      // Social icons with bounce effect
      tl.to(socialIconsRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "center",
          ease: "back.out(2)"
        },
        ease: "elastic.out(1, 0.5)"
      }, "-=0.8");

      // Final elements with overlap
      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.5")
      .to(copyrightRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

      // Enhanced social icons hover effects
      socialIconsRef.current.forEach((icon, index) => {
        if (icon) {
          const handleMouseEnter = () => {
            gsap.to(icon, {
              y: -12,
              scale: 1.3,
              rotation: index % 2 === 0 ? 5 : -5,
              duration: 0.4,
              ease: "back.out(2)"
            });
            
            // Add glow effect
            gsap.to(icon, {
              boxShadow: "0 8px 32px rgba(251, 191, 36, 0.4)",
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(icon, {
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(icon, {
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
          };

          icon.addEventListener('mouseenter', handleMouseEnter);
          icon.addEventListener('mouseleave', handleMouseLeave);
          
          // Cleanup function will be handled by context revert
        }
      });

      // Add scroll-based parallax for floating elements
      floatingElementsRef.current.forEach((el, index) => {
        gsap.to(el, {
          y: (i, target) => -ScrollTrigger.maxScroll(window) * (0.1 + index * 0.05),
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Enhanced Dynamic Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0a 0%, #000 30%, #111 70%, #000 100%)
          `,
          backgroundSize: "150% 150%",
        }}
      />

      {/* Enhanced Background Elements with More Variety */}
      <div className="absolute inset-0 z-0">
        {/* Primary floating elements */}
        <div 
          ref={addToFloating}
          className="absolute top-20 left-1/4 w-20 h-20 rounded-full border backdrop-blur-xl"
          style={{
            background: `
              conic-gradient(from 0deg, rgba(251, 191, 36, 0.4), rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0.4)),
              rgba(255, 255, 255, 0.05)
            `,
            borderColor: "rgba(251, 191, 36, 0.3)",
            boxShadow: "0 8px 32px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
          }}
        />

        <div 
          ref={addToFloating}
          className="absolute bottom-32 right-1/5 w-16 h-16 rounded-full border backdrop-blur-xl"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.5) 0%, rgba(34, 197, 94, 0.1) 60%, transparent 100%),
              rgba(255, 255, 255, 0.03)
            `,
            borderColor: "rgba(34, 197, 94, 0.3)",
            boxShadow: "0 6px 24px rgba(34, 197, 94, 0.25)"
          }}
        />

        <div 
          ref={addToFloating}
          className="absolute top-1/2 right-1/6 w-24 h-24 rounded-full border backdrop-blur-xl"
          style={{
            background: `
              linear-gradient(45deg, rgba(251, 113, 133, 0.3) 0%, rgba(251, 113, 133, 0.05) 100%),
              rgba(255, 255, 255, 0.03)
            `,
            borderColor: "rgba(251, 113, 133, 0.3)",
            boxShadow: "0 8px 28px rgba(251, 113, 133, 0.2)"
          }}
        />

        <div 
          ref={addToFloating}
          className="absolute top-40 right-1/3 w-12 h-12 rounded-full border backdrop-blur-xl"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.1) 70%, transparent 100%),
              rgba(255, 255, 255, 0.04)
            `,
            borderColor: "rgba(168, 85, 247, 0.3)",
            boxShadow: "0 6px 20px rgba(168, 85, 247, 0.2)"
          }}
        />

        <div 
          ref={addToFloating}
          className="absolute bottom-48 left-1/6 w-18 h-18 rounded-full border backdrop-blur-xl"
          style={{
            background: `
              conic-gradient(from 45deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.3)),
              rgba(255, 255, 255, 0.03)
            `,
            borderColor: "rgba(59, 130, 246, 0.3)",
            boxShadow: "0 6px 24px rgba(59, 130, 246, 0.2)"
          }}
        />

        {/* Animated gradient overlays */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-amber-500/4 to-transparent animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-purple-600/3 to-transparent" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-green-500/2 to-transparent" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div 
          ref={mainCardRef}
          className="rounded-3xl border backdrop-blur-3xl overflow-hidden shadow-2xl"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.15) 0%, 
                rgba(255, 255, 255, 0.05) 30%, 
                rgba(255, 255, 255, 0.08) 60%,
                rgba(255, 255, 255, 0.12) 100%
              ),
              rgba(0, 0, 0, 0.4)
            `,
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: `
              0 32px 64px -12px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.08),
              0 8px 32px rgba(251, 191, 36, 0.1)
            `,
          }}
        >
          {/* Enhanced Top section - Restaurant info */}
          <div className="p-12 border-b border-white/20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div ref={addToSections} className="mb-4 lg:mb-0 text-center lg:text-left">
                <h3 
                  className="text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent leading-tight"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                    background: `
                      linear-gradient(135deg, 
                        #fbbf24 0%, 
                        #f59e0b 20%, 
                        #d97706 40%, 
                        #92400e 60%, 
                        #fbbf24 80%,
                        #f59e0b 100%
                      )
                    `,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 40px rgba(251, 191, 36, 0.3)"
                  }}
                >
                  The SkyView Rooftop Restaurant
                </h3>
                <p 
                  className="text-white/90 max-w-xl text-xl leading-relaxed font-light"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  Where exceptional cuisine meets breathtaking views. Experience
                  fine dining under the stars with unforgettable moments that elevate your senses.
                </p>
              </div>

              <div ref={addToSections} className="flex space-x-4">
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<FaSquareXTwitter />}
                  href="#"
                  label="Follow us on Twitter"
                  color="rgba(29, 161, 242, 0.2)"
                />
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<FaSquareFacebook />}
                  href="#"
                  label="Like us on Facebook"
                  color="rgba(66, 103, 178, 0.2)"
                />
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<AiFillInstagram />}
                  href="#"
                  label="Follow us on Instagram"
                  color="rgba(225, 48, 108, 0.2)"
                />
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<IoLogoLinkedin />}
                  href="#"
                  label="Connect on LinkedIn"
                  color="rgba(0, 119, 181, 0.2)"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Middle section - Contact info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-12">
            <div ref={addToSections}>
              <h4 
                className="text-2xl font-bold mb-8 flex items-center justify-center lg:justify-start"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "#fbbf24",
                }}
              >
                <span 
                  className="mr-4 p-3 rounded-full backdrop-blur-xl border group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05))",
                    borderColor: "rgba(251, 191, 36, 0.3)",
                    boxShadow: "0 4px 16px rgba(251, 191, 36, 0.2)"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Location
              </h4>
              <address 
                className="text-white/85 not-italic leading-relaxed text-center lg:text-left p-6 rounded-3xl backdrop-blur-sm border border-white/10"
                style={{ 
                  fontFamily: "'Inter', system-ui, sans-serif",
                  background: "rgba(255, 255, 255, 0.03)"
                }}
              >
                <span className="block font-semibold text-amber-200 mb-2">Visit Us</span>
                No.22, 3rd Floor, Ambattur Red Hills Rd,
                <br />
                Ambattur, Chennai,
                <br />
                Tamil Nadu 600053
              </address>
            </div>

            <div ref={addToSections}>
              <h4 
                className="text-2xl font-bold mb-8 flex items-center justify-center lg:justify-start"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "#fbbf24",
                }}
              >
                <span 
                  className="mr-4 p-3 rounded-full backdrop-blur-xl border"
                  style={{
                    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05))",
                    borderColor: "rgba(251, 191, 36, 0.3)",
                    boxShadow: "0 4px 16px rgba(251, 191, 36, 0.2)"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Opening Hours
              </h4>
              <div 
                className="text-white/85"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                <div className="p-6 rounded-3xl backdrop-blur-sm border border-white/15 text-center lg:text-left"
                     style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                  <span className="block text-sm text-white/70 mb-2">Every Day of the Week</span>
                  <span className="font-bold text-2xl text-amber-300 block">
                    6:00 PM - 2:00 AM
                  </span>
                  {/* <span className="text-xs text-white/60 mt-2 block">
                    Reservations recommended
                  </span> */}
                </div>
              </div>
            </div>

            <div ref={addToSections}>
              <h4 
                className="text-2xl font-bold mb-8 flex items-center justify-center lg:justify-start"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "#fbbf24",
                }}
              >
                <span 
                  className="mr-4 p-3 rounded-full backdrop-blur-xl border"
                  style={{
                    background: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(251, 191, 36, 0.05))",
                    borderColor: "rgba(251, 191, 36, 0.3)",
                    boxShadow: "0 4px 16px rgba(251, 191, 36, 0.2)"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                Contact
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@skyviewrestaurant.com"
                  className="flex items-center text-white/85 hover:text-amber-300 transition-all duration-500 p-4 rounded-3xl backdrop-blur-sm border border-white/15 hover:border-amber-300/30 group transform hover:scale-105"
                  style={{ 
                    fontFamily: "'Inter', system-ui, sans-serif",
                    background: "rgba(255, 255, 255, 0.03)"
                  }}
                >
                  <span className="mr-4 p-2 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm opacity-80">info@skyviewrestaurant.com</div>
                  </div>
                </a>
                <a
                  href="tel:+919080226632"
                  className="flex items-center text-white/85 hover:text-amber-300 transition-all duration-500 p-4 rounded-3xl backdrop-blur-sm border border-white/15 hover:border-amber-300/30 group transform hover:scale-105"
                  style={{ 
                    fontFamily: "'Inter', system-ui, sans-serif",
                    background: "rgba(255, 255, 255, 0.03)"
                  }}
                >
                  <span className="mr-4 p-2 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.11 21 3 14.89 3 7V5z"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm opacity-80">+91 9080 226 632</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom section - Links & Copyright */}
          <div className="px-12 py-10 border-t border-white/20">
            <div 
              ref={addToSections}
              className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <p 
                  className="text-white/70 text-lg"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  &copy; {currentYear} The SkyView Rooftop Multicuisine Restaurant.
                </p>
                <span className="text-white/50">All rights reserved.</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-8">
                <a
                  href="#privacy"
                  className="text-white/70 hover:text-amber-300 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/5"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-white/70 hover:text-amber-300 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/5"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  Terms of Service
                </a>
                <a
                  href="#cookies"
                  className="text-white/70 hover:text-amber-300 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/5"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Restaurant tagline */}
        <div 
          ref={taglineRef}
          className="mt-10 text-center"
        >
          <p 
            className="text-amber-300 font-bold text-2xl lg:text-3xl mb-2"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #92400e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
              letterSpacing: "-0.01em"
            }}
          >
            Elevating dining experiences above the ordinary
          </p>
          <p 
            className="text-white/60 text-sm mt-2"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Creating memories that last a lifetime
          </p>
        </div>

        {/* Enhanced Designer Credit */}
        <div 
          ref={copyrightRef}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10"
               style={{ background: "rgba(255, 255, 255, 0.03)" }}>
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <p 
              className="text-amber-400/90 text-sm font-medium"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Crafted with passion by Rocky
            </p>
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Social icon component with better animations
const SocialIcon = React.forwardRef<
  HTMLAnchorElement,
  {
    icon: React.ReactNode;
    href: string;
    label: string;
    color: string;
  }
>(({ icon, href, label, color }, ref) => (
  <a
    ref={ref}
    href={href}
    aria-label={label}
    className="text-white/80 hover:text-white transition-all duration-500 p-4 rounded-3xl backdrop-blur-xl border border-white/15 hover:border-white/40 group relative overflow-hidden"
    style={{
      background: `
        linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%),
        ${color}
      `,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
    }}
  >
    {/* Hover overlay effect */}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
    />
    
    {React.cloneElement(icon as React.ReactElement, {
      className: "text-2xl transition-all duration-500 relative z-10 group-hover:scale-110",
    })}
  </a>
));

SocialIcon.displayName = 'SocialIcon';

export default Footer;