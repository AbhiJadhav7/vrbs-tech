
"use client";

import { motion, Variants } from "framer-motion";

const solutions = [
  {
    title: "AI Strategy",
    description: "Custom AI solutions tailored to your unique business challenges and objectives.",
    icon: (
      <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L19 21H5L12 2z" />
      </svg>
    ),
  },
  {
    title: "Automation",
    description: "Streamline operations with intelligent automation that scales with your growth.",
    icon: (
      <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Security First",
    description: "Enterprise-grade security protocols protecting your data and operations.",
    icon: (
      <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 4v6c0 5-3 9-9 12-6-3-9-7-9-12V6l9-4z" />
      </svg>
    ),
  },
  {
    title: "Analytics",
    description: "Data-driven insights that transform information into actionable strategies.",
    icon: (
      <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Stay ahead with cutting-edge technologies and continuous innovation.",
    icon: (
      <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0110 10h-4l-6 6-6-6H2a10 10 0 0110-10z" />
      </svg>
    ),
  },
  {
    title: "Integration",
    description: "Seamlessly integrate with your existing systems and workflows.",
    icon: (
      <svg className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Solutions That <span className="text-teal-500">Scale</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
          Comprehensive digital transformation services designed for modern enterprises
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-teal-50 rounded-full">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{item.description}</p>
            <span className="text-teal-500 font-medium text-sm hover:underline inline-block">
             
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
