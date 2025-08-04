"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#ca8e24] text-black hover:bg-yellow-300 shadow-lg transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    )
  );
};
