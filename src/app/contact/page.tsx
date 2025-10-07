"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const [formData, setFormData] = useState({ name: "", email: "", message: "",company:"",phone:"" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // Scroll fade + parallax effects
  const fade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  // Ensure animations only run after client hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <section className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-gray-500">Loading...</p>
      </section>
    );
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setStatus("loading");
  
      try {
        const res = await fetch("https://formspree.io/f/xyznpqgq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (res.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "",company:"",phone:"" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    }
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-white via-white to-[#f8ffff] pt-28 pb-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ opacity: fade, y }}
        className="text-center mb-14"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Let&apos;s Build Your{" "}
          <span className="text-teal-500">Digital Future</span>
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Ready to transform your business? Get in touch with our team of
          experts and start your AI-powered journey today.
        </p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl"
      >
        {/* Left - Form */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Send us a Message
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Fill out the form below and we&apos;ll respond within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2.5 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2.5 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2.5 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 p-2.5 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                required
                placeholder="Tell us about your project and how we can help..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 p-2.5 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={status === "loading"}
              type="submit"
              className={`w-full md:w-auto px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition ${
                status === "loading"
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600 text-white"
              }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message sent successfully! We’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">
                ❌ Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>


        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-500 mb-6">
              Whether you&apos;re looking to automate processes, leverage AI, or
              transform your entire business model, we&apos;re here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0l-8 8m8-8l-8-8"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">contact@vrbs.in</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5h2l2 10h11l2-10H3zm7 13a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">
                    +1 (555) 555-5555
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 rounded-lg p-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">
                  66 West Flagler Street –<br /> Suite 900 Miami,<br /> FL 33130, USA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Consultation Box */}
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Free Consultation
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Schedule a free 30-minute consultation to discuss your digital
              transformation goals.
            </p>
            <motion.a href="https://cal.com/abhishek-jadhav-rg741x/30min" target="_blank" rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-teal-500 text-white rounded-full">
  Book a Call →
</motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
