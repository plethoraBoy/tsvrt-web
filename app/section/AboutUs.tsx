// AboutUsSection.js
import React from "react";
import { Image } from "@nextui-org/react";

const AboutUsSection = () => {
  return (
    <section id="about-us" className="bg-neutral-950  mt-4 pt-12">
      {" "}
      {/* Add margin-top (mt-8) for spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl">
            Elevated Dining, Shared Memories.
          </p>
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
            <p className="italic text-sm sm:text-base lg:text-lg mb-4">
              Indulge in breathtaking views while savoring exquisite dishes,
              offering a culinary journey above the ordinary.
            </p>
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
            </ul>
            <p className="text-sm sm:text-base lg:text-lg">
              At SkyView Rooftop Restaurant, we provide more than just a meal;
              we offer an elevated journey where each bite is accompanied by
              stunning views. Discover the perfect blend of culinary excellence
              and an enchanting atmosphere that sets us apart. Elevate your
              dining experience with us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
