"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLeafOutline } from "react-icons/io5";
import { SlMusicTone } from "react-icons/sl";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const dividerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      no: "01",
      title: "Fresh Ingredients",
      description: "Savor dishes made with farm-fresh produce and premium ingredients sourced daily for exceptional quality.",
      icon: GiCoffeeCup,
      gradient: "from-amber-500/20 to-yellow-600/10",
      hoverGradient: "from-amber-400 to-yellow-500",
      iconColor: "text-amber-400",
      accentColor: "rgba(251, 191, 36, 0.2)",
    },
    {
      no: "02", 
      title: "Healthy Choices",
      description: "Nutritious options crafted with wholesome ingredients for balanced dining experiences that nourish your body.",
      icon: IoLeafOutline,
      gradient: "from-emerald-500/20 to-green-600/10",
      hoverGradient: "from-emerald-400 to-green-500",
      iconColor: "text-emerald-400",
      accentColor: "rgba(52, 211, 153, 0.2)",
    },
    {
      no: "03",
      title: "Live Entertainment", 
      description: "Vibrant evenings with live music performances creating an energetic, memorable atmosphere for all guests.",
      icon: SlMusicTone,
      gradient: "from-rose-500/20 to-pink-600/10",
      hoverGradient: "from-rose-400 to-pink-500",
      iconColor: "text-rose-400",
      accentColor: "rgba(251, 113, 133, 0.2)",
    },
    {
      no: "04",
      title: "Friendly Atmosphere",
      description: "Warm hospitality in an inviting space where every guest feels welcomed, valued, and truly special.",
      icon: FaRegFaceSmileBeam,
      gradient: "from-purple-500/20 to-violet-600/10", 
      hoverGradient: "from-purple-400 to-violet-500",
      iconColor: "text-purple-400",
      accentColor: "rgba(168, 85, 247, 0.2)",
    },
  ];

  // Add card to refs array
  const addToCards = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.9
      });

      gsap.set(dividerRef.current, {
        scaleX: 0
      });

      // Background floating animations
      gsap.to(".floating-element-1", {
        y: -30,
        x: 20,
        rotation: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".floating-element-2", {
        y: -40,
        x: -15,
        rotation: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2
      });

      gsap.to(".coffee-stain", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      });

      // Title animations
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");

      // Cards staggered animation
      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)"
      }, "-=0.5");

      // Divider animation
      tl.to(dividerRef.current, {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.3");

      // Card hover animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const icon = card.querySelector('.feature-icon');
          const badge = card.querySelector('.number-badge');
          const title = card.querySelector('.feature-title');
          const description = card.querySelector('.feature-description');
          const gradientBg = card.querySelector('.gradient-bg');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -15,
              scale: 1.02,
              duration: 0.4,
              ease: "power2.out"
            });

            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: "back.out(1.7)"
            });

            gsap.to(badge, {
              scale: 1.15,
              rotation: 5,
              duration: 0.3,
              ease: "back.out(1.7)"
            });

            gsap.to([title, description], {
              x: 5,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(gradientBg, {
              opacity: 0.15,
              scale: 1.1,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });

            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(badge, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to([title, description], {
              x: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(gradientBg, {
              opacity: 0.05,
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="why-us" 
      className="py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 40%),
          radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.02) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0f0f23 100%)
        `,
      }}
    >
      {/* Enhanced Background Elements */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        {/* Animated floating elements */}
        <div 
          className="floating-element-1 absolute top-20 left-10 w-24 h-24 rounded-full opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.1) 70%, transparent 100%),
              rgba(255, 255, 255, 0.02)
            `,
            backdropFilter: "blur(20px)",
          }}
        />
        
        <div 
          className="floating-element-2 absolute bottom-32 right-16 w-32 h-32 rounded-full opacity-15"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.05) 70%, transparent 100%),
              rgba(255, 255, 255, 0.02)
            `,
            backdropFilter: "blur(24px)",
          }}
        />

        {/* Coffee stain effects */}
        <div
          className="coffee-stain absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{
            background: "conic-gradient(from 0deg, #d4a76a, #ca8e24, #d4a76a)",
            transform: "rotate(15deg)",
          }}
        />
        
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-8"
          style={{
            background: "conic-gradient(from 180deg,  #d4a76a, #ca8e24, #d4a76a)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* Dynamic pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.05) 0%, transparent 25%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.03) 0%, transparent 25%),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: "400px 400px, 300px 300px, 120px 120px",
            animation: "float 20s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-8">
            <div 
              className="px-6 py-3 rounded-full border backdrop-blur-2xl"
              style={{
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%),
                  rgba(251, 191, 36, 0.05)
                `,
                borderColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            >
              <span 
                className="text-amber-300 font-semibold text-sm tracking-wider uppercase"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                ✨ Our Excellence
              </span>
            </div>
          </div>

          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
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
              letterSpacing: "-0.02em",
            }}
          >
            Why Choose Us
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: "400",
            }}
          >
            Experience the perfect blend of exceptional cuisine, warm hospitality, 
            and memorable moments that make every visit extraordinary
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.no}
              ref={addToCards}
              className="group relative cursor-pointer"
            >
              {/* Glassmorphism Card */}
              <div 
                className="relative h-full rounded-3xl border backdrop-blur-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.12) 0%, 
                      rgba(255, 255, 255, 0.04) 50%, 
                      rgba(255, 255, 255, 0.08) 100%
                    ),
                    rgba(0, 0, 0, 0.2)
                  `,
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 0 0 1px rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                {/* Gradient background overlay */}
                <div 
                  className={`gradient-bg absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 transition-all duration-500`}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Number Badge */}
                  <div 
                    className="number-badge absolute -top-1 -right-1 w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm border backdrop-blur-xl z-10"
                    style={{
                      background: `linear-gradient(135deg, ${feature.hoverGradient.replace('from-', '').replace(' to-', ', ')})`,
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: `0 4px 20px ${feature.accentColor}`,
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    {feature.no}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex-shrink-0">
                    <div 
                      className={`feature-icon inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br ${feature.gradient} border backdrop-blur-xl`}
                      style={{
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        boxShadow: `0 4px 16px ${feature.accentColor}`,
                      }}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.iconColor} transition-all duration-300`} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 
                      className="feature-title text-2xl font-bold text-white mb-4 transition-all duration-300"
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      {feature.title}
                    </h3>
                    
                    <p 
                      className="feature-description text-white/70 leading-relaxed transition-all duration-300"
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontWeight: "400",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${feature.hoverGradient.replace('from-', '').replace(' to-', ', ')}, transparent)`,
                    }}
                  />

                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${feature.hoverGradient.replace('from-', '').replace(' to-', ', ')}, transparent)`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Divider */}
        <div className="mt-20 flex justify-center">
          <div 
            ref={dividerRef}
            className="h-1.5 w-80 rounded-full origin-center"
            style={{
              background: `
                linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(251, 191, 36, 0.3) 20%, 
                  rgba(251, 191, 36, 0.8) 50%, 
                  rgba(251, 191, 36, 0.3) 80%, 
                  transparent 100%
                )
              `,
              boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
            }}
          />
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;