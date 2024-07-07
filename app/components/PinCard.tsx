"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPin() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="The SkyView Rooftop Multicuisine Restaurant" href="">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] sm:w-[20rem] sm:h-[20rem] lg:w-[60rem]">
          <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
            Multicuisine Dining Experience
          </h3>
          <div className="text-base m-0 p-0 font-normal">
            <span className="text-slate-500">
              Enjoy a diverse menu and stunning views.
            </span>
          </div>
          <div className="mt-4">
            <iframe
              className="flex flex-1 w-full rounded-lg h-[15rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.52906325203!2d80.15367241482367!3d13.128993090752761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ce30c1aded%3A0xb73ad5e084920af!2sThe%20SkyView%20Rooftop%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin"
              frameBorder="0"
              style={{ filter: "invert(90%)" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
