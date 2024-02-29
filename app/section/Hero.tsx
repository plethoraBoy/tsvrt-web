"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { delay, m, motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center contrast-100

      "
      style={{
        backgroundImage: 'url("assets/restuarant-img/night_view.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      <motion.div
        initial={{
          scale: 0,
          rotate: 0,
        }}
        transition={{ delay: 0.1 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        className="container mx-auto text-center relative z-2 text-white"
      >
        <div className="max-w mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-warning">
              SkyView RoofTop Multicuisine Restaurant
            </span>
          </h1>
          {/* Uncomment the line below if needed */}
          {/* <h2 className="text-xl mb-4">Delivering great food for more than 18 years!</h2> */}
          <div className="btns mt-4 flex flex-col md:flex-row justify-center items-center">
            <m.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >              <Button
                color="warning"
                radius="full"
                variant="ghost"
                className="mb-2 md:mb-0 md:mr-2"
              >
                Our Menu
              </Button>{" "}
            </m.div>

            <Button color="warning" radius="full" variant="ghost">
              Book a Table
            </Button>
          </div>
        </div>
        {/* Uncomment the section below if needed */}
        {/* <div className="mt-8">
          <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn"></a>
        </div> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
