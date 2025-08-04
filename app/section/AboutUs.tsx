"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const AboutUsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants with explicit typing
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  // List items data
  const features = [
    "Enjoy a unique dining experience with panoramic cityscapes.",
    "Delight in carefully crafted dishes that tantalize your taste buds.",
    "Immerse yourself in the chic ambiance, creating unforgettable moments under the open sky.",
    "Explore our diverse menu, featuring a fusion of international flavors, each dish telling a story of culinary mastery.",
    "Elevate your evenings with live music, adding a symphony of melodies to the breathtaking skyline.",
  ];

  const tags = ["Fine Dining", "Panoramic Views", "Live Music", "Gourmet Cuisine"];

  return (
    <section
      id="about-us"
      className="relative py-16 md:py-24 overflow-hidden"
      ref={ref}
      aria-label="About us section"
      style={{
        backgroundImage: "url('/food-bg-4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      {/* Floating food elements */}
      <motion.div 
        className="absolute top-20 right-10 z-0"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut" 
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#ca8e24]/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-12 z-0"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 7,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="w-12 h-12 rounded-full bg-[#d4a76a]/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            variants={headingVariants}
          >
            <span className="text-[#d4a76a] text-sm font-medium">
              Our Story
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            variants={headingVariants}
          >
            About Us
          </motion.h2>
          <motion.div
            className="text-xl text-[#d4a76a]"
            variants={headingVariants}
          >
            Elevated Dining, Shared Memories
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <div className="absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-[#d4a76a]/10 backdrop-blur-sm rounded-3xl border border-white/20 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 md:w-24 md:h-24 bg-[#ca8e24]/10 backdrop-blur-sm rounded-3xl border border-white/20 z-0"></div>
            <div className="relative aspect-video lg:aspect-auto overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20">
              <Image
                src="/assets/img/about/about.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              variants={headingVariants}
            >
              Elevate Your Experience at SkyView Rooftop Restaurant
            </motion.h3>
            
            <motion.div
              className="italic text-lg text-[#d4a76a] mb-6 border-l-4 border-[#ca8e24] pl-4"
              variants={paragraphVariants}
            >
              "Indulge in breathtaking views while savoring exquisite dishes,
              offering a culinary journey above the ordinary."
            </motion.div>

            <motion.ul
              className="space-y-4 mb-8"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {features.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start"
                  variants={listItemVariants}
                >
                  <div className="flex-shrink-0 mt-1.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-[#d4a76a]"></div>
                  </div>
                  <span className="text-white/90">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="text-white/80 mb-6"
              variants={paragraphVariants}
            >
              At SkyView Rooftop Restaurant, we provide more than just a meal;
              we offer an elevated journey where each bite is accompanied by
              stunning views. Discover the perfect blend of culinary excellence
              and an enchanting atmosphere that sets us apart.
            </motion.div>

            <motion.div
              className="text-white/80"
              variants={paragraphVariants}
            >
              Join us for special events and themed nights, creating memorable
              experiences that go beyond traditional dining. Our dedicated team
              ensures impeccable service, making every visit a celebration of
              flavors and sophistication.
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              variants={paragraphVariants}
            >
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-sm md:px-4 md:py-2 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated floating element */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-10 h-10 rounded-full bg-[#d4a76a]/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
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
    </section>
  );
};

export default AboutUsSection;