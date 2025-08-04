"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Card, Carousel } from "../components/ui/apple-cara";

SwiperCore.use([Navigation, Pagination]);

const DummyContent = ({ type }: { type: string }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Celebrate with our exclusive {type} packages!
      </span>{" "}
      From themed decorations to delicious catering and fun entertainment, we
      ensure every moment is unforgettable. Whether it’s an intimate dinner or a
      grand celebration, we tailor it your way.
    </p>
    <Image
      src="/assets/img/events/bd.jpg "
      alt={`${type} celebration`}
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const data = [
  {
    category: "Events",
    title: "Celebrate Your Birthday in Style",
    src: "/assets/img/events/bd.jpg",
    content: <DummyContent type="Birthday Party" />,
  },
  {
    category: "Private Event",
    title: "Private Dinners",
    src: "/assets/img/events/pe.jpg",
    content: <DummyContent type="Private Party" />,
  },
  {
    category: "Custom",
    title: "Design Your Dream Event",
    src: "/assets/img/events/de.jpg",
    content: <DummyContent type="Custom Party" />,
  },
  {
    category: "Family Gathering",
    title: "Make Memories With Loved Ones",
    src: "/assets/img/events/fg.jpg",
    content: <DummyContent type="Family Gathering" />,
  },
  {
    category: "Romantic Dinner",
    title: "Plan a Romantic Evening",
    src: "/assets/img/events/rd.jpg",
    content: <DummyContent type="Romantic Dinner" />,
  },
];

export function EventsSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Celebrate Your Special Moments
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
