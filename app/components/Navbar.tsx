"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { scroller } from "react-scroll";
import { SkyView } from "./SkyVeiwLogo";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

// Define the menu items
const menuItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about-us" },
  { name: "Events", href: "events" },
  { name: "Menu", href: "menu" },
  { name: "Gallery", href: "gallery-us" },
  // { name: "Contact", href: "contact-us" },
];

// Navbar component
const Navbar = () => {
  // State variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // Function to handle menu item click
  const handleMenuItemClick = (href: string) => {
    setMobileMenuOpen(false);

    // Use react-scroll to scroll to the target section
    scroller.scrollTo(href, {
      duration: 900,
      smooth: "easeOut",
      offset: -50,
    });
  };

  // Effect to handle scroll and toggle fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and toggle the fixed state accordingly
      const scrollPosition = window.scrollY;
      setIsNavbarFixed(scrollPosition > 0);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Ensure the effect runs only once on mount

  // Return the JSX for the Navbar component
  return (
    <div
      className={`bg-[#020617]  ${isNavbarFixed ? "fixed top-0 inset-x-0 z-50" : ""}`}
    >
      <header className="absolute inset-x-0 top-0 z-50 ">
        <nav className="flex items-center justify-between lg:px-8 px-6 p-6 backdrop-filter backdrop-blur-lg ">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
              {/* <SkyView /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenuAlt4 className=" h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((item, index) => (
              <a
                key={`${item.name}-${index}`}
                href={`#${item.href}`}
                className={`text-sm transition-all duration-300 font-semibold hover:text-yellow-950 hover:font-extrabold   leading-6 ${isNavbarFixed ? "text-white" : "text-white-900"}`}
                // Add hover styles for gradient and text color
                onClick={() => handleMenuItemClick(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact-us"
              className={`text-sm font-semibold leading-6 bg-gradient-to-r bg-white hover:text-slate-950 hover:font-extrabold bg-clip-text ${isNavbarFixed ? "text-white" : "text-white-900"}`}
            >
              Contact us<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="bg-neutral-950 lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className=" fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 px-6  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div  className="-m-0.5 p-1.5  ">
                <SkyView />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white-700 dark:text-white-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="th-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                {menuItems.map((item, index) => (
                  <a
                    key={`${item.name}-${index}`}
                    href={`#${item.href}`}
                    className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:text-yellow-500 hover:bg-gray-50"
                    onClick={() => handleMenuItemClick(item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#booka-table"
                  className="text-center block px-3 py-2.5 bg-gradient-to-tr from-amber-400 to-yellow-500 rounded-full text-base font-semibold leading-7 text-white hover:text-white hover:bg-gray-50 transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

// Export the Navbar component
export default Navbar;
