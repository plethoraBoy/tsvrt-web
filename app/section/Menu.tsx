"use client";

import { motion } from "framer-motion";
import HoverImage from "../components/HoverImage";

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
      heading: "Vegetarian",
      subheading: "Delight in our diverse and delicious vegetarian options",
      imgSrc:
        "assets/img/menu/ROASTED CHICKEN STEAK WITH MUSHROOM ONION SAUCE.png",
      href: "#",
    },
  ];

  return (
    <section
      id="menu"
      className="bg-neutral-950 p-4 md:p-8 py-8 lg:py-12 pt-12"
    >
       <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Menu</h2>
          <div className="text-base sm:text-lg lg:text-xl">
            Choose your taste
          </div>
        </div>
      <div className="mx-auto max-w-5xl ">
        {imageList.map((item, index) => (
          <motion.div
            key={index}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <HoverImage
              heading={item.heading}
              subheading={item.subheading}
              imgSrc={item.imgSrc}
              href={item.href}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
