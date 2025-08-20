/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Award, Users, Clock } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Refs for animated elements
  const heroTextRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([heroTextRef.current, statsRef.current], {
        opacity: 0,
        y: 60
      });

      gsap.set(contentGridRef.current, {
        opacity: 0,
        y: 40
      });

      gsap.set(imageGalleryRef.current, {
        opacity: 0,
        scale: 0.9
      });

      gsap.set(featuresRef.current!.children, {
        opacity: 0,
        x: -50
      });

      // Hero section animation
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      });

      heroTl.to(heroTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

      // Content animation
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentGridRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      contentTl.to(imageGalleryRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.2)"
      })
      .to(contentGridRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

      // Features animation
      gsap.to(featuresRef.current!.children, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating decorative elements
      decorativeRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: Math.sin(index) * 20,
            rotation: Math.cos(index) * 10,
            duration: 4 + index,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.7
          });
        }
      });

      // Parallax effect for background shapes
      gsap.to(".parallax-shape", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);

  const stats = [
    { icon: Star, number: "4.9", label: "Customer Rating" },
    { icon: Award, number: "2+", label: "Years Experience" },
    // { icon: Users, number: "50K+", label: "Happy Customers" },
    // { icon: Clock, number: "24/7", label: "Premium Service" }
  ];

  const features = [
    {
      title: "Panoramic City Views",
      description: "Breathtaking 360-degree views of the city skyline from our elevated rooftop location."
    },
    {
      title: "Multicuisine Excellence", 
      description: "A carefully curated menu featuring the finest dishes from around the world."
    },
    {
      title: "Premium Ambiance",
      description: "Sophisticated atmosphere with elegant décor and ambient lighting for unforgettable moments."
    },
    {
      title: "Live Entertainment",
      description: "Regular live music performances and special events to enhance your dining experience."
    },
    {
      title: "Exceptional Service",
      description: "Our dedicated team ensures every detail is perfect for your memorable evening."
    },
    {
      title: "Private Events",
      description: "Exclusive venue hire for celebrations, corporate events, and special occasions."
    }
  ];

  if (!isClient) return null;

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-black-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-shape absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
        <div className="parallax-shape absolute top-60 right-20 w-96 h-96 bg-gradient-to-l from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
        <div className="parallax-shape absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl" />
      </div>

      {/* Floating Decorative Elements */}
      <div
        ref={(el) => el && (decorativeRef.current[0] = el)}
        className="absolute top-32 right-16 w-24 h-24 border-2 border-amber-400/30 rounded-full backdrop-blur-sm"
      />
      <div
        ref={(el) => el && (decorativeRef.current[1] = el)}
        className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-3xl backdrop-blur-sm"
      />
      <div
        ref={(el) => el && (decorativeRef.current[2] = el)}
        className="absolute top-1/2 right-8 w-20 h-20 border border-orange-400/40 rounded-3xl backdrop-blur-sm rotate-45"
      />

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl">
        
        {/* Hero Section */}
        <div ref={heroTextRef} className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md border border-amber-400/30 rounded-full text-amber-400 font-medium tracking-wider uppercase text-sm">
              About SkyView
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Elevated
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Dining
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Where culinary artistry meets breathtaking views in an atmosphere of 
            unparalleled sophistication and elegance.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          
          {/* Image Gallery */}
          <div ref={imageGalleryRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Restaurant Interior"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Fine Dining"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mb-4">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Rooftop View"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Restaurant Ambiance"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div ref={contentGridRef}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Experience the</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                Nestled high above the bustling city, SkyView Rooftop Restaurant offers 
                an unparalleled dining experience that combines exquisite cuisine with 
                breathtaking panoramic views.
              </p>
              
              <p>
                Our commitment to culinary excellence is matched only by our dedication 
                to creating moments that linger in memory long after the last bite. 
                Every dish tells a story, every view inspires wonder.
              </p>
              
              <p>
                From intimate dinners to grand celebrations, we craft experiences that 
                elevate the ordinary into the extraordinary, one memorable meal at a time.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-amber-500/25">
                Reserve Your Table
              </button>
              <button className="px-8 py-4 border-2 border-amber-400/50 text-amber-400 font-semibold rounded-full hover:bg-amber-400/10 transition-all">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;