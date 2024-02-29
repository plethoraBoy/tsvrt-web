import React from 'react';

const BookATableSection = () => {
  return (
    <section id='booka-table' className="py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-title text-left mb-8">
          <h2 className="text-3xl font-bold">Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form
          role="form"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-span-1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div className="validate"></div>
          </div>

          <div className="col-span-1">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-md"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
            <div className="validate"></div>
          </div>

          <div className="col-span-1">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Phone"
              className="w-full p-2 border rounded-md"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div className="validate"></div>
          </div>

          <div className="col-span-1 mt-3">
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Date"
              className="w-full p-2 border rounded-md"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div className="validate"></div>
          </div>

          <div className="col-span-1 mt-3">
            <input
              type="text"
              name="time"
              id="time"
              placeholder="Time"
              className="w-full p-2 border rounded-md"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div className="validate"></div>
          </div>

          <div className="col-span-1 mt-3">
            <input
              type="number"
              name="people"
              id="people"
              placeholder="# of people"
              className="w-full p-2 border rounded-md"
              data-rule="minlen:1"
              data-msg="Please enter at least 1 chars"
            />
            <div className="validate"></div>
          </div>

          <div className="col-span-3 mt-3">
            <textarea
              className="w-full p-2 border rounded-md"
              name="message"
              rows={8}
              placeholder="Message"
            ></textarea>
            <div className="validate"></div>
          </div>

          <div className="col-span-3 mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your booking request was sent. We will call back or send an Email to confirm your reservation.
              Thank you!
            </div>
          </div>

          <div className="col-span-3 text-center">
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">
              Book a Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATableSection;
