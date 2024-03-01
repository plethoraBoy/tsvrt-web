import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl mb-4">The SkyView RoofTop Restaurant</h3>
        </div>
        <div className="flex justify-center mb-6 md:mb-0">
          <div className="mr-4">
            <a href="#">
              <i className="fab fa-twitter"></i> {/* Replace with Twitter icon */}
            </a>
          </div>
          <div className="mr-4">
            <a href="#">
              <i className="fab fa-facebook"></i> {/* Replace with Facebook icon */}
            </a>
          </div>
          <div className="mr-4">
            <a href="#">
              <i className="fab fa-instagram"></i> {/* Replace with Instagram icon */}
            </a>
          </div>
          <div className="mr-4">
            <a href="#">
              <i className="fab fa-skype"></i> {/* Replace with Skype icon */}
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fab fa-linkedin"></i> {/* Replace with LinkedIn icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <div>No.22, 3rd Floor, Ambattur Red Hills Rd, Ambattur, Chennai, Tamil Nadu 600053</div>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <div>Monday 06:30 PM - 12.00 AM</div>
                <div>
                  Tuesday-Sunday
                  <br />
                  12:00 PM - 03.00 PM
                  <br />
                  06:00 PM - 12.00 AM
                </div>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <div>info@example.com</div>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <div>+91 9710715879</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Your other footer content */}
          </div>
        </div>
      </div>

      <div className="container text-center mx-auto">
        <div>
          &copy; Copyright <strong>SkyView RoofTop Restaurant</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
