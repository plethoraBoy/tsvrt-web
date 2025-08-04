"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Floating food elements */}
      <motion.div
        className="absolute top-20 left-1/4 z-0"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-#ca8e24/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-1/4 z-0"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-14 h-14 rounded-full bg-amber-500/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/3 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-20 h-20 rounded-full bg-red-500/20 backdrop-blur-sm border border-white/10"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
        >
          {/* Top section - Restaurant info */}
          <div className="p-8 border-b border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <motion.div
                variants={itemVariants}
                custom={0}
                className="mb-4 md:mb-0"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#d4a76a] via-#ca8e24 to-[#d4a76a] bg-clip-text text-transparent">
                  The SkyView Rooftop Restaurant
                </h3>
                <p className="text-white/80 mt-4 max-w-md text-lg">
                  Where exceptional cuisine meets breathtaking views. Experience
                  fine dining under the stars.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                custom={1}
                className="flex space-x-4"
              >
                <SocialIcon
                  icon={<FaSquareXTwitter />}
                  href="#"
                  label="Twitter"
                />
                <SocialIcon
                  icon={<FaSquareFacebook />}
                  href="#"
                  label="Facebook"
                />
                <SocialIcon
                  icon={<AiFillInstagram />}
                  href="#"
                  label="Instagram"
                />
                <SocialIcon
                  icon={<IoLogoLinkedin />}
                  href="#"
                  label="LinkedIn"
                />
              </motion.div>
            </div>
          </div>

          {/* Middle section - Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <motion.div variants={itemVariants} custom={2}>
              <h4 className="text-xl font-bold text-[#d4a76a] mb-4 flex items-center">
                <span className="mr-3">
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
              <address className="text-white/80 not-italic">
                No.22, 3rd Floor, Ambattur Red Hills Rd,
                <br />
                Ambattur, Chennai,
                <br />
                Tamil Nadu 600053
              </address>
            </motion.div>

            <motion.div variants={itemVariants} custom={3}>
              <h4 className="text-xl font-bold text-[#d4a76a] mb-4 flex items-center">
                <span className="mr-3">
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
              <div className="text-white/80">
                <div className="mb-2">
                  <span className="block">Monday - Thursday</span>
                  <span className="font-medium text-[#d4a76a]">
                    6:00 PM - 12:00 AM
                  </span>
                </div>
                <div>
                  <span className="block">Friday - Sunday</span>
                  <span className="font-medium text-[#d4a76a]">
                    6:00 PM - 2:00 AM
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} custom={4}>
              <h4 className="text-xl font-bold text-[#d4a76a] mb-4 flex items-center">
                <span className="mr-3">
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
              <div className="space-y-3">
                <a
                  href="mailto:info@skyviewrestaurant.com"
                  className="flex items-start text-white/80 hover:text-[#d4a76a] transition-colors duration-300"
                >
                  <span className="mt-1 mr-3">
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
                  className="flex items-start text-white/80 hover:text-[#d4a76a] transition-colors duration-300"
                >
                  <span className="mt-1 mr-3">
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
            </motion.div>
          </div>

          {/* Bottom section - Copyright */}
          <div className="px-8 py-6 border-t border-white/20">
            <motion.div
              variants={itemVariants}
              custom={5}
              className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4"
            >
              <p className="text-white/60">
                &copy; {currentYear} The SkyView Rooftop Multicuisine
                Restaurant. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-[#d4a76a] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#d4a76a] transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#d4a76a] transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[#d4a76a] text-sm font-light">DnD by Rocky</p>
        </motion.div>
        {/* Restaurant tagline */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#d4a76a] font-medium text-lg">
            Elevating dining experiences above the ordinary
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Social icon component with consistent styling
const SocialIcon = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-white/80 hover:text-[#d4a76a] transition-colors duration-300"
  >
    {React.cloneElement(icon as React.ReactElement, {
      className: "text-3xl transition-transform duration-300",
    })}
  </motion.a>
);

export default Footer;
