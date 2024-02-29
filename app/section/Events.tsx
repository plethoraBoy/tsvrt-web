"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Image} from "@nextui-org/react";

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

const EventsSection = () => {
  const events = [
    {
      title: "Birthday Parties",
      price: "$189",
      imgSrc: "assets/img/event-birthday.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      title: "Private Parties",
      price: "$290",
      imgSrc: "assets/img/event-private.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
    {
      title: "Custom Parties",
      price: "$99",
      imgSrc: "assets/img/event-custom.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section id="events" className="py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:mx-48" data-aos="fade-up">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Events</h2>
          <p className="text-base sm:text-lg lg:text-xl">Organize Your Events in our Restaurant</p>
        </div>

        <Swiper
          ref={swiperRef}
          className="events-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
          navigation
          pagination={{ clickable: true }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row md:items-stretch lg:mx-4 xl:mx-8">
                <div className="mb-4 md:w-1/2 md:mr-4">
                  <Image className="w-full md:h-full object-cover" src={event.imgSrc} alt={event.title} />
                </div>
                <div className="md:w-1/2 md:ml-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2">{event.title}</h2>
                  <div className="price mb-2">
                    <p>
                      <span>{event.price}</span>
                    </p>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg mb-4 fst-italic">{event.description}</p>
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
