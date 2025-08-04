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
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/food-bg-5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Floating food elements */}
      <div className="absolute top-20 right-10 z-0">
        <div className="w-16 h-16 rounded-full bg-#ca8e24/20 backdrop-blur-sm border border-white/10"></div>
      </div>
      <div className="absolute bottom-40 left-12 z-0">
        <div className="w-12 h-12 rounded-full bg-green-500/20 backdrop-blur-sm border border-white/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-#ca8e24 text-sm font-medium">
              Culinary Excellence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Menu
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Choose your taste from our diverse culinary offerings
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
          {imageList.map((item, index) => (
            <motion.div
              key={index}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-xl"
            >
              <HoverImage
                heading={item.heading}
                subheading={item.subheading}
                imgSrc={item.imgSrc}
                href={item.href}
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    {/* <h3 className="text-xl font-bold text-white">
                      {item.heading}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {item.subheading}
                    </p> */}
                  </div>
                  <button className="px-4 py-2 bg-[#ca8e24] hover:bg-#ca8e24 text-white rounded-full text-sm font-medium transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full hover:bg-white/20 transition-all">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
