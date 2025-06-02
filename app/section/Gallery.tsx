"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GallerySection = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop.jpg",
      alt: "Gallery 1",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop2.jpg",
      alt: "Gallery 2",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop3.jpg",
      alt: "Gallery 3",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop5.jpg",
      alt: "Gallery 4",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop5.jpg",
      alt: "Gallery 5",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop5.jpg",
      alt: "Gallery 6",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop2.jpg",
      alt: "Gallery 7",
    },
    {
      type: "image",
      src: "/assets/img/gallerysection/rootop2.jpg",
      alt: "Gallery 8",
    },
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="gallery-us" className="bg-neutral-950 py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Gallery</h2>
          <div className="text-base sm:text-lg lg:text-xl">
            Some photos and a video from Our Restaurant
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="gallery-item cursor-pointer">
                {item.type === "image" && (
                  <div onClick={() => setZoomedImage(item.src)}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {item.type === "video" && (
                  <div className="relative">
                    <video
                      width="100%"
                      height="100%"
                      autoPlay
                      controls
                      preload="auto"
                      className="rounded-lg"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={zoomedImage}
                alt="Zoomed Gallery"
                width={1000}
                height={800}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
