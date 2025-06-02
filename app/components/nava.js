"use client";

import { useEffect } from "react";


const GsapMenu = () => {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const CustomEase = window.CustomEase;

    const menuButton = document.querySelector(".menu-button");
    const container = document.querySelector(".container");
    const body = document.body;

    if (!gsap || !ScrollTrigger || !CustomEase || !menuButton || !container) return;

    gsap.registerPlugin(ScrollTrigger, CustomEase);

    CustomEase.create("easeOutFast", "M0,0 C0.25,0.1 0.25,1 1,1");
    CustomEase.create("easeInFast", "M0,0 C0.5,0 0.75,0.2 1,1");

    const openMenu = () => {
      menuButton.classList.add("is-active");
      body.classList.add("menu-open");

      const tlOpen = gsap.timeline({
        defaults: { duration: 0.8, ease: "easeOutFast" }
      });

      tlOpen.to(container, { x: "100px" }, 0);
    };

    const closeMenu = () => {
      const tlClose = gsap.timeline({
        defaults: { duration: 0.6, ease: "easeInFast" },
        onComplete: () => menuButton.classList.remove("is-active")
      });

      tlClose.to(container, { x: "0px" }, 0.3);

      setTimeout(() => {
        body.classList.remove("menu-open");
      }, 300);
    };

    const toggleMenu = () => {
      const isOpen = menuButton.classList.contains("is-active");
      isOpen ? closeMenu() : openMenu();
    };

    menuButton.addEventListener("click", toggleMenu);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.classList.contains("is-active")) {
        closeMenu();
      }
    });

    window.addEventListener("DOMContentLoaded", () => {
      gsap.fromTo(
        ".fixed-menu",
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
      );
    });

    return () => {
      menuButton.removeEventListener("click", toggleMenu);
    };
  }, []);

  return null; // or use this to wrap layout if needed
};

export default GsapMenu;
