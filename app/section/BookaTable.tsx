"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  message: string;
}

const BookATableSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          people: "",
          message: "",
        });
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send email");
    }
  };
  

  return (
    <section id="booka-table" className="bg-neutral-950 py-8 md:py-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center lg:text-left mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold Secondary-Font text-white">
            Reservation
          </h2>
          <div className="text-gray-400">Book a Table</div>
        </div>

        <form
          className="mx-auto max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              "name",
              "email",
              "phone",
              "date",
              "time",
              "people",
              "message",
            ].map((field, index) => (
              <div key={index} className="mb-4">
                {field === "message" ? (
                  <textarea
                    className="w-full rounded-md border py-2 px-3 text-gray-900"
                    name={field}
                    rows={4}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "people"
                          ? "number"
                          : field === "date"
                            ? "date"
                            : field === "time"
                              ? "time"
                              : "text"
                    }
                    name={field}
                    id={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full rounded-md border py-2 px-3 text-gray-900"
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            {/* <div className="sm:col-span-2">
              <div className="loading">Loading</div>
              <div className="error-message text-red-500">Your booking request was not sent.</div>
              <div className="sent-message text-green-500">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
            </div> */}
          </div>

          <div className="mt-4 col-span-2 text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white p-3 rounded-full w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATableSection;
