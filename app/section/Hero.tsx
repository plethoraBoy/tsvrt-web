"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-scroll";
import { delay, m, motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-neutral-950 ">
      <div className="hidden pt-2 sm:mb-2 sm:flex sm:justify-center">
        {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white-900 ring-1 ring-white-50">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-yellow-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
      </div>
      <div className="relative isolate px-6 pt-32 lg:pt-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-50 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-400 to-yellow-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl py-28 sm:py-56 lg:py-56">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white-900 ring-1 ring-white-300 hover:ring-white-200">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-yellow-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl ">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                The SkyView Roof Multicuisine Restaurant
              </span>
            </h1>
            {/* <div className="mt-6 text-md leading-8 text-white-100">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </div> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#menu"
                className="rounded-full ring-1 ring-yellow-500 ring-inset px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Our Menu
              </a>
              <a
                href="#booka-table"
                className="text-sm font-semibold leading-6 text-white-900 bg-gradient-to-r bg-white hover:text-yellow-400 bg-clip-text"
              >
                Book a Table<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

// export default HeroSection;
