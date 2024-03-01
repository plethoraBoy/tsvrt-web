import { Button } from '@nextui-org/react';
import React from 'react';

const BookATableSection = () => {
  return (
    <section id="booka-table" className="bg-neutral-950 py-8 md:py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center lg:text-left mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Reservation</h2>
          <div className="text-gray-400">Book a Table</div>
        </div>

        <form className="mx-auto max-w-2xl" data-aos="fade-up" data-aos-delay="100">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

            <div className="mb-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full rounded-md border py-2 px-3 text-gray-900"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars" />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full rounded-md border py-2 px-3 text-gray-900"
                data-rule="email"
                data-msg="Please enter a valid email" />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                className="w-full rounded-md border py-2 px-3 text-gray-900"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars" />
            </div>

            <div className="mb-4">
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                className="w-full rounded-md border py-2 px-3 text-gray-900" />
            </div>

            <div className="mb-4">
              <input
                type="time"
                name="time"
                id="time"
                placeholder="Time"
                className="w-full rounded-md border py-2 px-3 text-gray-900" />
            </div>

            <div className="mb-4">
              <input
                type="number"
                name="people"
                id="people"
                placeholder="# of people"
                className="w-full rounded-md border py-2 px-3 text-gray-900"
                data-rule="minlen:1"
                data-msg="Please enter at least 1 chars" />
            </div>

            <div className="sm:col-span-3 mb-4">
              <textarea
                className="w-full rounded-md border py-2 px-3 text-gray-900"
                name="message"
                rows={4}
                placeholder="Message" />
            </div>

            <div className="sm:col-span-2">
              <div className="loading">Loading</div>

              <div className="error-message text-red-500"></div>

              <div className="sent-message text-green-500">
                Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!
              </div>
            </div>

          </div>

          <div className="mt-4 col-span-2 text-center ">
            <Button type="submit" color="warning" className="text-center px-6 py-2 rounded-full text-white">
              Book a Table
            </Button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default BookATableSection;
