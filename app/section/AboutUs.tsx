"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="about-us" className="bg-neutral-950  md:pt-28">
      <m.div
        
      
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="Secondary-Font mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About us
            </h2>
            <div className="text-base sm:text-lg lg:text-xl">
              Elevated Dining, Shared Memories.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-8">
            <div data-aos="fade-up">
              <div>
                <Image
                  className="w-auto"
                  src="assets/img/about/about.jpg"
                  alt="About Us"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                Elevate Your Experience at SkyView Rooftop Restaurant
              </h3>
              <div className="italic text-sm sm:text-base lg:text-lg mb-4">
                Indulge in breathtaking views while savoring exquisite dishes,
                offering a culinary journey above the ordinary.
              </div>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Enjoy a unique dining experience with panoramic cityscapes.
                </li>
                <li>
                  Delight in carefully crafted dishes that tantalize your taste
                  buds.
                </li>
                <li>
                  Immerse yourself in the chic ambiance, creating unforgettable
                  moments under the open sky.
                </li>
                <li>
                  Explore our diverse menu, featuring a fusion of international
                  flavors, each dish telling a story of culinary mastery.
                </li>
                <li>
                  Elevate your evenings with live music, adding a symphony of
                  melodies to the breathtaking skyline.
                </li>
              </ul>
              <div className="text-sm sm:text-base lg:text-lg">
                At SkyView Rooftop Restaurant, we provide more than just a meal;
                we offer an elevated journey where each bite is accompanied by
                stunning views. Discover the perfect blend of culinary
                excellence and an enchanting atmosphere that sets us apart.
                Elevate your dining experience with us!
              </div>
              <div className="text-sm sm:text-base lg:text-lg mt-4">
                Join us for special events and themed nights, creating memorable
                experiences that go beyond traditional dining. Our dedicated
                team ensures impeccable service, making every visit a
                celebration of flavors and sophistication.
              </div>
              {/* <div className="text-sm sm:text-base lg:text-lg mt-4">
              Whether it's a romantic dinner, a gathering of friends, or a
              corporate event, SkyView Rooftop Restaurant is the perfect setting
              for all occasions. Elevate your moments with us and let the sky be
              the witness to your unforgettable stories.
            </div> */}
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default AboutUsSection;
