"use client"
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { SkyView } from "./SkyVeiwLogo";
import { scroller } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const menuItems = [
    { label: "Home", url: "hero" },
    { label: "About", url: "about-us" },
    { label: "Events", url: "events" },
    // { label: "Chefs", url: "chefs" },
    { label: "Gallery", url: "gallery-us" },
    { label: "Contact", url: "contact-us" },
  ];

  const handleMenuItemClick = (url :any) => {
    setIsMenuOpen(false);
    scroller.scrollTo(url, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -50, // You can adjust the offset as needed
    });
  };

 

  return (
    <Navbar isBlurred isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SkyView />
          {/* <h1 className="font-bold text-inherit  
">The Sky view</h1>
          <p>Roof Top</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((link, index) => (
          <NavbarItem
            key={`${link.label}-${index}`}
            className={activeLink === link.url ? "active" : ""}
          >
            <Link
              color="foreground"
              onClick={() => handleMenuItemClick(link.url)}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#book-now" // Replace with the actual ID of the book now section
            variant="ghost"
            radius="full"
          >
            Book now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem
            key={`${menuItem.label}-${index}`}
            className={activeLink === menuItem.url ? "active" : ""}
          >
            <Link
              color="foreground"
              onClick={() => handleMenuItemClick(menuItem.url)}
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
