"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon ,} from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { scroller } from "react-scroll";
import { SkyView } from "./SkyVeiwLogo";

const menuItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about-us" },
  { name: "Events", href: "events" },
  { name: "Menu", href: "menu" },
  { name: "Gallery", href: "gallery-us" },
  { name: "Contact", href: "contact-us" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuItemClick = (url: any) => {
    setIsMenuOpen(false);
    scroller.scrollTo(url, {
      duration: 900,
      smooth: "easeOut",
      offset: -50, // You can adjust the offset as needed
    });
  };
  return (
    
    <div className="bg-[#020617]">
      <header className="absolute inset-x-0 top-0 z-50 ">
        <nav
          className=" flex items-center justify-between p-6 lg:px-8"
          aria-name="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
              <SkyView />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className=" h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((item, index) => (
              <a
                key={`${item.name}-${index}`}
                href={`#${item.href}`}
                className="text-sm font-semibold leading-6 text-white-900"
                onClick={() => handleMenuItemClick(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white-900"
            >
              Contact us<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="bg-neutral-950 lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className=" fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5  ">
                {/* <span className="sr-only">The </span> */}
                <SkyView />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="th-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <divath d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
  <divath fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg> */}

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
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
                    href="#"
                    className="-mx-3 block rounded-full px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:text-yellow-500 hover:bg-gray-50"
                  >
Book Now                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
