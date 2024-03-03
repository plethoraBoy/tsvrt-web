import React from 'react';

const ContactSection = () => {
  return (
    <section id='contact-us' className="bg-neutral-950 py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="Secondary-Font section-title text-center lg:text-left mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold Secondary-Font text-white">Contact </h2>
          <div>Contact us</div>
        </div>
      </div>

      <div className="mt-4">
        <iframe
          className="w-full h-64 md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.52906325203!2d80.15367241482367!3d13.128993090752761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ce30c1aded%3A0xb73ad5e084920af!2sThe%20SkyView%20Rooftop%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin"
          frameBorder="0"
          style={{ filter: "invert(90%)" }}          
          allowFullScreen
        ></iframe>
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-5 lg:space-y-0 lg:space-x-5">

          <div className="lg:w-8/12 mt-5 lg:mt-0">
            <form role="form" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="Your Name"
                  id="YourName"
                  placeholder="Your Name"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  className="w-full p-2 border rounded-md"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="col-span-2">
                <div>Loading</div>
                <div></div>
                <div>Your message has been sent. Thank you!</div>
              </div>
              <div className="col-span-2">
                <button type="submit" className="bg-yellow-500 text-white p-3 rounded-full w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
