
"use client";

import { motion, Variants } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "We analyze your business needs and identify transformation opportunities.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m10-10H2" />
      </svg>
    ),
  },
  {
    title: "Strategy",
    description: "Custom roadmap aligned with your goals and technical requirements.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5l3 5-3 5-3-5 3-5z"
        />
      </svg>
    ),
  },
  {
    title: "Implementation",
    description: "Agile execution with continuous feedback and optimization.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Scale",
    description: "Monitor, refine, and scale solutions for sustained growth.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6h13M9 6L3 12l6 6" />
      </svg>
    ),
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

export default function Process() {
  return (
    <section id="process" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-white to-[#f8ffff] relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-teal-500">Process</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
          A proven methodology that delivers results
        </p>
      </motion.div>

      {/* Process Grid with line */}
      <div className="relative">
        {/* Horizontal teal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-teal-500 origin-left"
        ></motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm relative"
            >
              {/* Step Icon */}
              <div className="flex items-center justify-center w-14 h-14 mb-6 bg-teal-50 rounded-full relative z-10">
                {step.icon}
              </div>
              {/* Step Text */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

