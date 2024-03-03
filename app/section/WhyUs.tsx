// Import necessary modules
import React from "react";
import { FiDroplet, FiMusic, FiSmile } from "react-icons/fi"; // Example different icons
import Card from "../components/HoverCard";
import { IoLeafOutline } from "react-icons/io5";
import { SlMusicTone } from "react-icons/sl";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

// Define the WhyUsSection component
const WhyUsSection: React.FC = () => {
  const list = [
    {
      no: "01",
      stitle: "Fresh Ingredients",
      paragraph:
        "Savor the taste of our dishes made with the freshest and finest quality ingredients.",
      icon: FiDroplet,
    },
    {
      no: "02",
      stitle: "Healthy Choices",
      paragraph:
        "Choose from a menu designed to offer delicious and health-conscious options.",
      icon: IoLeafOutline,
    },
    {
      no: "03",
      stitle: "Live Entertainment",
      paragraph:
        "Experience vibrant evenings with live music, creating a lively and enjoyable atmosphere.",
      icon: SlMusicTone,
    },
    {
      no: "04",
      stitle: "Friendly Atmosphere",
      paragraph:
        "Enjoy a warm and welcoming ambiance where our friendly staff ensures a delightful experience.",
      icon: FaRegFaceSmileBeam,
    },
  ];

  return (
    <section id="why-us" className="bg-neutral-950 py-8 lg:py-12 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why Us</h2>
          <div className="text-base sm:text-lg lg:text-xl">
            Discover the Reasons to Choose Our Restaurant
          </div>
        </div>

        <div className="poppins flex flex-col gap-4 items-center md:flex-row md:items-stretch lg:mx-4 xl:mx-8">
          {list.map((item) => (
            <Card
              key={item.no}
              title={item.stitle}
              subtitle={item.paragraph}
              Icon={item.icon}
              href="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the WhyUsSection component
export default WhyUsSection;
