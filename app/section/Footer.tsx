import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 md:text-left text-center">
          <h3 className="text-xl mb-4">The SkyView RoofTop Restaurant</h3>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <div>
                  No.22, 3rd Floor, Ambattur Red Hills Rd, Ambattur, Chennai,
                  Tamil Nadu 600053
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4 md:w-full">
            <a
              href="#"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 transform hover:text-yellow-500"
            >
              <FaSquareXTwitter className="text-3xl" />
            </a>
            <a
              href="#"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 transform hover:text-yellow-500"
            >
              <FaSquareFacebook className="text-3xl" />
            </a>
            <a
              href="#"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 transform hover:text-yellow-500"
            >
              <AiFillInstagram className="text-3xl" />
            </a>
            <a
              href="#"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 transform hover:text-yellow-500"
            >
              <IoLogoLinkedin className="text-3xl" />
            </a>
          </div>
          <div className="md:w-full mb-6 md:mb-0 md:flex  flex-wrap md:flex-row justify-end items-center md:space-x-4">
            <div className="email text-center">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <div>info@example.com</div>
            </div>
            <div className="phone text-center mt-4 md:mt-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <div>+91 9710715879</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mx-auto mt-8">
        <div>
          <strong>The SkyView RoofTop Multicuisine Restaurant</strong>. &copy;{" "}
          {currentYear} All Rights Reserved. Terms of Use and Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
