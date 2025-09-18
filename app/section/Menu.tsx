"use client";

import { motion } from "framer-motion";
import HoverImage from "../components/HoverImage";

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

const MenuSection = () => {
  const imageList = [
    {
      heading: "Continental",
      subheading: "Explore our exquisite Continental cuisine",
      imgSrc: "assets/img/menu/BUTTER GARLIC PRAWN SKEWER.png",
      href: "#",
    },
    {
      heading: "Chinese",
      subheading: "Indulge in the flavors of authentic Chinese dishes",
      imgSrc: "assets/img/menu/CHICKEN STROGANOFF.png",
      href: "#",
    },
    {
      heading: "Italian",
      subheading: "Savor the taste of Italy with our Italian specialties",
      imgSrc: "assets/img/menu/SPICY MEXICAN PASTA _1.png",
      href: "#",
    },
    {
      heading: "Mexican",
      subheading: "Spice up your palate with our vibrant Mexican menu",
      imgSrc: "assets/img/menu/MEXICAN CHICKEN SKEWER.png",
      href: "#",
    },
    {
      heading: "Indian",
      subheading: "Delight in our diverse and delicious vegetarian options",
      imgSrc:
        "assets/img/menu/ROASTED CHICKEN STEAK WITH MUSHROOM ONION SAUCE.png",
      href: "#",
    },
  ];

  return (
    <section
      id="menu"
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/food-bg-5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-5 sm:right-10 z-0">
        <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-yellow-600/20 backdrop-blur-sm border border-white/10"></div>
      </div>
      <div className="absolute bottom-32 left-5 sm:left-12 z-0">
        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-500/20 backdrop-blur-sm border border-white/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md border border-amber-400/30 rounded-full text-amber-400 font-medium tracking-wider uppercase text-xs sm:text-sm">
            SKYCLUSIVE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-white via-amber-100 to-yellow-500 bg-clip-text text-transparent">
            OUR MENU
          </h1>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {imageList.map((item, index) => (
            <motion.div
              key={index}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
  className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-xl group"
            >
              <HoverImage
                heading={item.heading}
                subheading={item.subheading}
                imgSrc={item.imgSrc}
                href={item.href}
              />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-full text-sm sm:text-base font-medium transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
