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

  const currentYear = new Date().getFullYear();

  // Add elements to refs arrays
  const addToFloating = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  const addToSections = (el: HTMLDivElement) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToSocialIcons = (el: HTMLAnchorElement) => {
    if (el && !socialIconsRef.current.includes(el)) {
      socialIconsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(mainCardRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.9
      });

      gsap.set(sectionRefs.current, {
        opacity: 0,
        y: 50
      });

      gsap.set(socialIconsRef.current, {
        opacity: 0,
        scale: 0,
        rotation: -180
      });

      gsap.set([taglineRef.current, copyrightRef.current], {
        opacity: 0,
        y: 30
      });

      // Floating elements continuous animations
      floatingElementsRef.current.forEach((el, index) => {
        gsap.to(el, {
          y: -20 - (index * 5),
          rotation: index % 2 === 0 ? 10 : -8,
          duration: 8 + (index * 2),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.5
        });

        gsap.to(el, {
          scale: 1.1,
          opacity: 0.8,
          duration: 4 + index,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.3
        });
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Main card animation
      tl.to(mainCardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.4)"
      });

      // Sections staggered animation
      tl.to(sectionRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.8");

      // Social icons animation
      tl.to(socialIconsRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Final elements
      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3")
      .to(copyrightRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

      // Social icons hover effects
      socialIconsRef.current.forEach((icon) => {
        if (icon) {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              y: -8,
              scale: 1.2,
              duration: 0.3,
              ease: "back.out(1.7)"
            });
          });

          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 40%),
          linear-gradient(135deg, #0a0a0a 0%, #000 50%, #000 100%)
        `,
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={addToFloating}
          className="absolute top-20 left-1/4 w-16 h-16 rounded-full border backdrop-blur-lg"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.1) 70%, transparent 100%),
              rgba(255, 255, 255, 0.05)
            `,
            borderColor: "rgba(251, 191, 36, 0.2)",
            boxShadow: "0 4px 20px rgba(251, 191, 36, 0.2)"
          }}
        />

        <div 
          ref={addToFloating}
          className="absolute bottom-40 right-1/4 w-14 h-14 rounded-full border backdrop-blur-lg"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.08) 70%, transparent 100%),
              rgba(255, 255, 255, 0.03)
            `,
            borderColor: "rgba(34, 197, 94, 0.2)",
            boxShadow: "0 4px 16px rgba(34, 197, 94, 0.15)"
          }}
        />

        <div 
          ref={addToFloating}
          className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full border backdrop-blur-lg"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(251, 113, 133, 0.3) 0%, rgba(251, 113, 133, 0.08) 70%, transparent 100%),
              rgba(255, 255, 255, 0.03)
            `,
            borderColor: "rgba(251, 113, 133, 0.2)",
            boxShadow: "0 4px 18px rgba(251, 113, 133, 0.15)"
          }}
        />

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-amber-500/3 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-purple-600/2 to-transparent" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div 
          ref={mainCardRef}
          className="rounded-3xl border backdrop-blur-2xl overflow-hidden shadow-2xl"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.12) 0%, 
                rgba(255, 255, 255, 0.04) 50%, 
                rgba(255, 255, 255, 0.08) 100%
              ),
              rgba(0, 0, 0, 0.3)
            `,
            borderColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          {/* Top section - Restaurant info */}
          <div className="p-10 border-b border-white/15">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div ref={addToSections} className="mb-4 md:mb-0">
                <h3 
                  className="text-4xl font-black mb-4 bg-clip-text text-transparent leading-tight"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                    background: `
                      linear-gradient(135deg, 
                        #fbbf24 0%, 
                        #f59e0b 25%, 
                        #d97706 50%, 
                        #92400e 75%, 
                        #fbbf24 100%
                      )
                    `,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.01em",
                  }}
                >
                  The SkyView Rooftop Restaurant
                </h3>
                <p 
                  className="text-white/85 max-w-md text-lg leading-relaxed"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Where exceptional cuisine meets breathtaking views. Experience
                  fine dining under the stars with unforgettable moments.
                </p>
              </div>

              <div ref={addToSections} className="flex space-x-6">
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<FaSquareXTwitter />}
                  href="#"
                  label="Twitter"
                  color="rgba(29, 161, 242, 0.2)"
                />
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<FaSquareFacebook />}
                  href="#"
                  label="Facebook"
                  color="rgba(66, 103, 178, 0.2)"
                />
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<AiFillInstagram />}
                  href="#"
                  label="Instagram"
                  color="rgba(225, 48, 108, 0.2)"
                />
                <SocialIcon
                  ref={addToSocialIcons}
                  icon={<IoLogoLinkedin />}
                  href="#"
                  label="LinkedIn"
                  color="rgba(0, 119, 181, 0.2)"
                />
              </div>
            </div>
          </div>

          {/* Middle section - Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
            <div ref={addToSections}>
              <h4 
                className="text-xl font-bold mb-6 flex items-center"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "#fbbf24",
                }}
              >
                <span 
                  className="mr-4 p-2 rounded-3xl backdrop-blur-xl border"
                  style={{
                    background: "rgba(251, 191, 36, 0.1)",
                    borderColor: "rgba(251, 191, 36, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                className="text-white/80 not-italic leading-relaxed"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                No.22, 3rd Floor, Ambattur Red Hills Rd,
                <br />
                Ambattur, Chennai,
                <br />
                Tamil Nadu 600053
              </address>
            </div>

            <div ref={addToSections}>
              <h4 
                className="text-xl font-bold mb-6 flex items-center"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "#fbbf24",
                }}
              >
                <span 
                  className="mr-4 p-2 rounded-3xl backdrop-blur-xl border"
                  style={{
                    background: "rgba(251, 191, 36, 0.1)",
                    borderColor: "rgba(251, 191, 36, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                className="text-white/80"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                <div className="mb-3 p-3 rounded-3xl backdrop-blur-sm border border-white/10">
                  <span className="block text-sm text-white/70 mb-1">Monday - Thursday</span>
                  <span className="font-semibold text-amber-300">
                    6:00 PM - 12:00 AM
                  </span>
                </div>
                <div className="p-3 rounded-3xl backdrop-blur-sm border border-white/10">
                  <span className="block text-sm text-white/70 mb-1">Friday - Sunday</span>
                  <span className="font-semibold text-amber-300">
                    6:00 PM - 2:00 AM
                  </span>
                </div>
              </div>
            </div>

            <div ref={addToSections}>
              <h4 
                className="text-xl font-bold mb-6 flex items-center"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  color: "#fbbf24",
                }}
              >
                <span 
                  className="mr-4 p-2 rounded-3xl backdrop-blur-xl border"
                  style={{
                    background: "rgba(251, 191, 36, 0.1)",
                    borderColor: "rgba(251, 191, 36, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  className="flex items-start text-white/80 hover:text-amber-300 transition-all duration-300 p-3 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-amber-300/20 group"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  <span className="mt-1 mr-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  info@skyviewrestaurant.com
                </a>
                <a
                  href="tel:+919080226632"
                  className="flex items-start text-white/80 hover:text-amber-300 transition-all duration-300 p-3 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-amber-300/20 group"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  <span className="mt-1 mr-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  +91 9080 226 632
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section - Copyright */}
          <div className="px-10 py-8 border-t border-white/15">
            <div 
              ref={addToSections}
              className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
            >
              <p 
                className="text-white/60"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                &copy; {currentYear} The SkyView Rooftop Multicuisine
                Restaurant. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-amber-300 transition-colors duration-300 font-medium"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-amber-300 transition-colors duration-300 font-medium"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-amber-300 transition-colors duration-300 font-medium"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Designer Credit */}
        <div 
          ref={copyrightRef}
          className="mt-6 text-center"
        >
          <p 
            className="text-amber-400/80 text-xs font-light"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Design by Rocky
          </p>
        </div>

        {/* Restaurant tagline */}
        <div 
          ref={taglineRef}
          className="mt-8 text-center"
        >
          <p 
            className="text-amber-300 font-semibold text-xl"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Elevating dining experiences above the ordinary
          </p>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Social icon component
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
    className="text-white/80 hover:text-white transition-colors duration-300 p-3 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/30"
    style={{
      background: `rgba(255, 255, 255, 0.05)`,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
    }}
  >
    {React.cloneElement(icon as React.ReactElement, {
      className: "text-2xl transition-transform duration-300",
    })}
  </a>
));

SocialIcon.displayName = 'SocialIcon';

export default Footer;