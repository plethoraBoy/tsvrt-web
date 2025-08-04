"use client";

import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  const closeMenu = () => setIsOpen(false);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const sidebarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      } as any,
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo-white.png"
            alt="logo"
            width={50}
            height={50}
            className="max-w-full h-auto"
          />
          <span className="text-white font-bold text-xl hidden sm:block">
            SkyView
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 items-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-sm font-medium hover:text-#ca8e24 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#book"
            className="ml-4 px-4 py-2 rounded-full bg-[#ca8e24] text-white font-semibold hover:bg-[#ca8e24] transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>

        {/* Full-screen Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <Dialog
              as="div"
              open={isOpen}
              onClose={closeMenu}
              className="relative z-50 lg:hidden"
            >
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-md"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={closeMenu}
              />

              {/* Full-screen Sidebar */}
              <motion.div
                className="fixed inset-0 flex flex-col bg-black/80 backdrop-blur-xl p-6"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* Logo and Title */}
                <div className="flex flex-col items-center justify-center mt-6 mb-16">
                  <Image
                    src="/assets/images/logo-white.png"
                    alt="logo"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <h1 className="text-3xl font-bold text-white">
                    SkyView Restaurant
                  </h1>
                  <p className="text-#ca8e24 mt-2">Fine Dining Experience</p>
                </div>

                {/* Animated Menu Items */}
                <motion.div
                  className="flex flex-col items-center gap-6 flex-grow"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-2xl font-semibold text-white hover:text-#ca8e24 transition-all py-1"
                      variants={itemVariants}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.a
                  href="#book"
                  onClick={closeMenu}
                  className="mt-auto w-full max-w-md mx-auto px-6 py-4 rounded-full bg-[#ca8e24] text-white font-bold text-xl hover:[#ca8e24] transition shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Book a Table
                </motion.a>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
