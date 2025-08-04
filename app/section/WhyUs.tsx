"use client";
import React from "react";
import { motion } from "motion/react";
import { IoLeafOutline } from "react-icons/io5";
import { SlMusicTone } from "react-icons/sl";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const WhyUsSection: React.FC = () => {
  const features = [
    {
      no: "01",
      title: "Fresh Ingredients",
      description:
        "Savor dishes made with farm-fresh produce and premium ingredients sourced daily.",
      icon: GiCoffeeCup,
      gradient: "from-[#d4a76a] to-[#ca8e24]",
    },
    {
      no: "02",
      title: "Healthy Choices",
      description:
        "Nutritious options crafted with wholesome ingredients for balanced dining.",
      icon: IoLeafOutline,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      no: "03",
      title: "Live Entertainment",
      description:
        "Vibrant evenings with live music creating a lively, enjoyable atmosphere.",
      icon: SlMusicTone,
      gradient: "from-rose-500 to-purple-600",
    },
    {
      no: "04",
      title: "Friendly Atmosphere",
      description:
        "Warm hospitality in an inviting space where every guest feels special.",
      icon: FaRegFaceSmileBeam,
      gradient: "from-[#d4a76a] to-#ca8e24",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Food-themed liquid background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(212, 167, 106, 0.03) 0%, transparent 25%),
              radial-gradient(circle at 90% 80%, rgba(184, 134, 11, 0.03) 0%, transparent 25%),
              radial-gradient(circle at 50% 50%, rgba(212, 167, 106, 0.02) 0%, transparent 30%)
            `,
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a76a' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: "300px 300px",
          }}
        />
        {/* Coffee stain effect */}
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{
            background: "radial-gradient(circle, #d4a76a 0%, transparent 70%)",
            transform: "rotate(15deg)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{
            background: "radial-gradient(circle, #ca8e24 0%, transparent 70%)",
            transform: "rotate(-10deg)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={fadeUpVariant}
            custom={0}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d4a76a] to-[#ca8e24] mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            custom={0.1}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the perfect blend of exceptional cuisine, warm
            hospitality, and memorable moments
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.no}
              custom={index + 1}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              {/* Liquid glass card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-[#d4a76a]/10 p-6 overflow-hidden transition-all duration-500 group-hover:border-[#d4a76a]/20 group-hover:shadow-[0_0_30px_rgba(212,167,106,0.15)]">
                {/* Liquid wave effect */}
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#d4a76a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number badge with liquid effect */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4a76a] to-[#ca8e24] text-white font-bold text-sm transform transition-transform duration-300 group-hover:scale-110">
                  {feature.no}
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-3xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className="w-6 h-6 text-[#d4a76a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4a76a] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Liquid highlight */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4a76a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Liquid divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 mx-auto mt-12 bg-gradient-to-r from-transparent via-[#d4a76a]/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
