// components/BanquetSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import BanquetFeatures from "../components/BanquetFeatures";

const BanquetSection = () => {
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

  return (
    <section
      id="banquet"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 rounded-full bg-[#b8860b]/20 backdrop-blur-sm border border-white/10 animate-float z-0"></div>
      <div className="absolute bottom-40 left-12 w-12 h-12 rounded-full bg-[#d4a76a]/20 backdrop-blur-sm border border-white/10 animate-float-delay z-0"></div>

      {/* Gold pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/assets/svg/gold-pattern.svg')] bg-repeat z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#d4a76a]">Premium Event Spaces</span> Coming
            Soon
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#d4a76a] to-[#b8860b] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#d4a76a]/10 backdrop-blur-sm rounded-3xl border border-white/20 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#b8860b]/10 backdrop-blur-sm rounded-3xl border border-white/20 z-0"></div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl"
            >
              <Image
                src="/assets/img/banquet/Banhall.jpg"
                alt="SkyView Banquet Hall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <span className="text-xl font-bold text-white">
                  Grand Ballroom Preview
                </span>
              </div>
            </motion.div>

            {/* Decorative badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-[#d4a76a] to-[#b8860b] text-white px-6 py-2 rounded-full font-bold shadow-lg z-10"
            >
              New
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/img/banquet/bqbg.jpg"
                  alt="Banquet Hall Background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/70 z-10"></div>
              </div>

              {/* Content Card */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl z-20">
                <div className="inline-block bg-[#d4a76a]/10 backdrop-blur-sm text-[#d4a76a] text-sm font-medium px-4 py-2 rounded-full mb-6">
                  Opening Soon
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The{" "}
                  <span className="text-[#d4a76a]">SkyView Banquet Hall</span>
                </h2>

                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Elevate your special events in our luxurious new banquet
                  space. Featuring panoramic city views, premium amenities, and
                  customizable event packages designed for unforgettable
                  celebrations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: "👰", text: "Weddings & Receptions" },
                    { icon: "💼", text: "Corporate Events" },
                    { icon: "🎂", text: "Birthday Celebrations" },
                    { icon: "🎓", text: "Graduation Parties" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="bg-white/5 backdrop-blur-sm rounded-full p-4 border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl text-[#d4a76a]">
                          {item.icon}
                        </span>
                        <span className="text-white/90">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features Table */}
                <div className="my-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-1 bg-[#d4a76a] rounded-full"></div>
                    Venue Specifications
                  </h3>
                  <BanquetFeatures />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      background: "linear-gradient(to right, #e0b88a, #c69a2b)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#d4a76a] to-[#b8860b] text-white font-bold rounded-full hover:shadow-lg transition-all text-center shadow-md shadow-[#b8860b]/30"
                  >
                    Request Brochure
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:shadow-lg transition-all text-center shadow-md shadow-white/10"
                  >
                    View Floor Plans
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BanquetSection;
