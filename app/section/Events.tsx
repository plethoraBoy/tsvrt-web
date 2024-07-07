"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

const EventsSection = () => {
  const events = [
    {
      title: "Birthday Parties",
      price: "Rs 999",
      imgSrc: "/assets/img/events/event-birthday.jpg",
      description:
        "Celebrate your special day with our unforgettable Birthday Parties! Our expert team will ensure every moment is filled with joy and excitement. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Personalized party planning.",
        "Delicious catering options.",
        "Exciting entertainment for all ages.",
      ],
    },
    {
      title: "Private Parties",
      price: "Rs 999",
      imgSrc: "/assets/img/events/event-private.jpg",
      description:
        "Host exclusive Private Parties tailored to your preferences! Whether it's an intimate gathering or a grand affair, we'll create the perfect atmosphere for your event. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Customized event spaces.",
        "Premium catering and beverage services.",
        "Dedicated event planning assistance.",
      ],
    },
    {
      title: "Custom Parties",
      price: "Rs 999",
      imgSrc: "/assets/img/events/event-custom.jpg",
      description:
        "Design your dream event with our Custom Parties package! From themed decorations to unique entertainment options, we'll bring your vision to life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Tailored event packages.",
        "Creative theme and decor choices.",
        "Flexible customization options.",
      ],
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section id="events" className="bg-neutral-950 py-8 lg:py-12  pt-12">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 lg:mx-48"
        data-aos="fade-up"
      >
        <div className="Secondary-Font mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Events</h2>
          <div className="text-base sm:text-lg lg:text-xl">
            Organize Your Events in our Restaurant
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          className="events-slider  mt-12 lg:py-12 swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
          navigation
          pagination={{ clickable: true }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row md:items-stretch lg:mx-4 xl:mx-8">
                <div className="mb-4 md:w-1/2 md:mr-4">
                  <Image
                    className="w-full md:h-full object-cover"
                    src={event.imgSrc}
                    alt={event.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="md:w-1/2 md:ml-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2">
                    {event.title}
                  </h2>
                  <div className="price mb-2">
                    <div>
                      <span>{event.price}</span>
                    </div>
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg mb-4 fst-italic">
                    {event.description}
                  </div>
                  <ul className="text-sm sm:text-base lg:text-lg mb-4">
                    {event.features.map((feature, i) => (
                      <li key={i}>
                        <i></i> {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Additional content if needed */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSection;
