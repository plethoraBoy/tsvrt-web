'use client';

import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const sidebarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed  top-0 w-full z-50 bg-[radial-gradient(circle_at_center,#FFD133,#FBA61B,#ED8E1C)] px-6 py-4 flex justify-between items-center shadow-xl">
      {/* Logo */}
     <a href="#home" className="flex items-center gap-2">
     <Image
                    src="/assets/images/logo-white.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="max-w-full h-auto"
                  />
  </a>
      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-8 items-center">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white text-sm font-medium hover:text-yellow-400 transition-all duration-200"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#book"
          className="ml-4 px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
        >
          Book Now
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(true)} className="lg:hidden">
        <Menu className="h-7 w-7 text-white" />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <Dialog as="div" open={isOpen} onClose={closeMenu} className="relative z-50 lg:hidden">
            <div className="fixed inset-0">
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Sidebar Panel */}
              <motion.div
                className="absolute top-0 left-0 bottom-0 w-72 bg-zinc-950/90 border-r border-zinc-800 px-6 py-6 shadow-2xl"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-yellow-400">Menu</span>
                  <button onClick={closeMenu}>
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* Animated Menu Items */}
                <motion.div className="flex flex-col gap-6">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-lg font-semibold text-white hover:text-yellow-400 tracking-wide transition-all"
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
                  className="mt-12 block w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:brightness-110 transition shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Book Now
                </motion.a>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
