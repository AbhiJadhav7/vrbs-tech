"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function CTA() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#e2ffff] via-white to-[#ceffff] overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Ready to Transform{" "}
          <span className="text-teal-500">Your Business?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl"
        >
          Join hundreds of forward-thinking companies leveraging AI for
          competitive advantage
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="px-6 py-3 rounded-full bg-teal-500 text-white font-semibold text-base sm:text-lg shadow-md hover:bg-teal-600 transition"
          >
            Schedule a Consultation →
          </motion.a>

          <motion.a
            href="/case-studies"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-900 font-semibold text-base sm:text-lg shadow-sm hover:bg-gray-50 transition"
          >
            View Case Studies
          </motion.a>
        </motion.div>

        {/* Footer Notes */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
            Free consultation
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
