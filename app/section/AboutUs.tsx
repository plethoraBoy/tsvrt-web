// AboutUsSection.js
import React from "react";

const AboutUsSection = () => {
  return (
    <section id="about-us" className="font-sans mt-4 pt-12"> {/* Add margin-top (mt-8) for spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-8">
          <div data-aos="fade-up">
            <div>
              <img
                className="w-auto"
                src="assets/img/about/about.jpg"
                alt="About Us"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="italic text-sm sm:text-base lg:text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
