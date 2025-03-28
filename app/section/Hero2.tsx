"use client";
import React, { useState, useEffect } from "react";
import styles from "../css.module/Hero2.module.css";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";

const HeroSection: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const restaurantWords = [
    "Exquisite dining",
    "Delicious cuisine",
    "Savor gourmet dishes",
    "Enjoy fine dining",
  ];

  const images = [
    "/assets/img/menu/SPICY MEXICAN PASTA _1.png",
    "/assets/img/menu/CHICKEN STROGANOFF.png",
    "/assets/img/menu/COTTAGE CHEESE POPCORN.png",
    "/assets/img/menu/MEXICAN CHICKEN SKEWER.png",
    "/assets/img/menu/ROASTED CHICKEN STEAK WITH MUSHROOM ONION SAUCE.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getClassName = (index: number) => {
    if (index === imageIndex) return styles.active;
    if (index === (imageIndex - 1 + images.length) % images.length)
      return styles.previous;
    if (index === (imageIndex + 1) % images.length) return styles.next;
    return styles.inactive;
  };

  return (
    <section id={styles["slider-main"]} className="h-60rem relative overflow-hidden bg-black text-gold">
      <div className={`${styles.container} `}>
        <div className={styles.logo}>
          <a>
            <Image
              src="/assets/images/logo-white.png"
              alt="logo"
              width={500}
              height={500}
            />
          </a>
        </div>
        <div className={styles["slider-content-wrap"]}>
          <div className={styles["slider-content"]}>
            <h2 className={`${styles["heading-style-2"]}`}>The SkyView Rooftop Multicuisine Restaurant</h2>
            <div className={`${styles.paragraph} ${styles["primary"]}`}> 
              Experience 
              <FlipWords
                className="font-semibold text-gold"
                words={restaurantWords}
              /> 
              at new heights with breathtaking panoramic views of the city skyline.
            </div>
          </div>
        </div>
      </div>
      <div className={styles["slider-images"]}>
        {images.map((src, index) => (
          <Image
            width={400}
            height={300}
            key={index}
            className={`${styles["slider-image"]} ${getClassName(index)}`}
            src={src}
            alt={`dish ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
