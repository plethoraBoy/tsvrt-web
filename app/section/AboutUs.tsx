/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section
      id="about-us"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-gradient-to-l from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md border border-amber-400/30 rounded-full text-amber-400 font-medium tracking-wider uppercase text-xs md:text-sm">
              About SkyView
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Elevated
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Dining
            </span>
          </h1>

          <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Where fine food meets breathtaking views.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Gallery */}
          <motion.div
            className="w-full flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Restaurant Interior"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Fine Dining"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-6 md:pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mb-4">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Rooftop View"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/img/about/about.jpg"
                    alt="Restaurant Ambiance"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-white">Experience the</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>

            <p className="text-gray-300 text-md md:text-lg leading-relaxed mb-6">
              SkyView combines exquisite cuisine with stunning rooftop scenery — making every moment unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg"
              >
                Reserve
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 md:px-10 md:py-4 border-2 border-amber-400/50 text-amber-400 font-semibold rounded-full"
              >
                Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
