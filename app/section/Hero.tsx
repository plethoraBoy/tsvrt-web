"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-scroll";
import { delay, m, motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-neutral-950 relative min-h-screen flex items-center contrast-100"
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
          <h1 className="Secondary-Font text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-warning">
              SkyView RoofTop Multicuisine Restaurant
            </span>
          </h1>
          <div className="btns mt-4 flex flex-col md:flex-row justify-center items-center">
            <m.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <Link to="menu" smooth={true} duration={500}>
                <Button
                  color="warning"
                  radius="full"
                  variant="ghost"
                  className="mb-2 md:mb-0 md:mr-2"
                >
                  Our Menu
                </Button>
              </Link>
            </m.div>
            <Link to="reservation" smooth={true} duration={500}>
              <Button color="warning" radius="full" variant="ghost">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
