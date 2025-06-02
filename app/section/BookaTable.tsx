"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.time) {
      toast.error("Please select a valid date and time.");
      return;
    }

    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const currentDateTime = new Date();
    const minBookingTime = new Date(currentDateTime.getTime() + 3 * 60 * 60 * 1000);

    if (selectedDateTime < minBookingTime) {
      toast.error("Reservations must be made at least 3 hours in advance.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Reservation request sent successfully!");
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
        toast.error("Failed to send reservation request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getValidTimeOptions = () => {
    const times: string[] = [];
    for (let h = 17; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        times.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
      }
    }
    for (let h = 0; h <= 2; h++) {
      for (let m = 0; m < 60; m += 30) {
        if (h === 2 && m > 0) break;
        times.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
      }
    }
    return times;
  };

  const formatTimeDisplay = (time: string) => {
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minuteStr} ${ampm}`;
  };

  const inputFields = [
    { name: "name", type: "text", icon: User, placeholder: "Your Name" },
    { name: "email", type: "email", icon: Mail, placeholder: "Email Address" },
    { name: "phone", type: "tel", icon: Phone, placeholder: "Phone Number" },
    {
      name: "date",
      type: "date",
      icon: Calendar,
      placeholder: "Select Date",
      min: new Date().toISOString().split("T")[0],
    },
    {
      name: "people",
      type: "number",
      icon: Users,
      placeholder: "Number of Guests",
    },
  ];

  return (
    <><section className="relative min-h-screen bg-gradient-to-br from-yellow-900 via-yellow-500 to-slate-900 py-16 md:py-24 overflow-hidden">

      {/* Animated Blurs + Pattern (Unchanged) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/80 text-sm font-medium">
              Premium Dining Experience
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Make a Reservation
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Secure your table at our exclusive restaurant. Experience culinary
            excellence in an atmosphere of refined elegance.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {inputFields.map((field, i) => {
              const IconComponent = field.icon;
              const isDate = field.name === "date";
              return (
                <motion.div
                  key={field.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconComponent className="h-5 w-5 text-black-800 group-focus-within:text-yellow-400 transition-colors duration-200" />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    required
                    min={isDate ? field.min : undefined}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm" />
                </motion.div>
              );
            })}

            {/* Time Select */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-black-800 group-focus-within:text-yellow-400 transition-colors duration-200" />
              </div>
              <select
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <option value="" disabled>
                  Select Time
                </option>
                {getValidTimeOptions().map((time) => (
                  <option key={time} value={time}>
                    {formatTimeDisplay(time)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative group mb-8">
            <div className="absolute top-4 left-4 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-200" />
            </div>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Additional Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/50 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm resize-none" />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-yellow-900 font-bold rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-400 transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Book Now"}
          </button>
        </motion.form>
      </div>
    </section>
    <Toaster position="top-right" toastOptions={{ duration: 3000 }} /></>

  );
};

export default BookATableSection;
