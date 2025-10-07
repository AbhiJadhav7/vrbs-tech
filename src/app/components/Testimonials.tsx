
"use client";

import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "VRBS transformed our operations with AI solutions that exceeded expectations. ROI was visible within months.",
    initials: "SC",
  },
  {
    name: "Michael Roberts",
    role: "CTO, DataCore",
    text: "The level of expertise and commitment from VRBS is unmatched. They truly understand enterprise needs.",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    role: "Director, InnovateLab",
    text: "Working with VRBS was a game-changer. Their innovative approach helped us stay ahead of the competition.",
    initials: "EW",
  },
];

// Motion variants
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Trusted by <span className="text-teal-500">Leaders</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
          See what our clients say about their transformation journey
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Horizontal line behind cards */}
      

        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex items-center mb-4 relative z-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09L5.5 12 1 7.91l6.061-.88L10 2l2.939 5.03L19 7.91 14.5 12l1.378 6.09z" />
                </svg>
              ))}
            </div>

            {/* Teal line under stars */}
            <div className="h-0.5 bg-teal-500 w-12 mb-4"></div>

            {/* Quote */}
            <p className="text-gray-700 text-sm sm:text-base mb-6">&ldquo;{t.text}&rdquo;</p>

            {/* Profile */}
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 font-bold">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

