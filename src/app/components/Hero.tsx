"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";

const headingText = "Transform Your Future with AI-Powered Solutions";

export default function Hero() {
  const words = headingText.split(" ");

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll();

  // Heading words fade + move up on scroll
  const wordFade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const wordY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

  // Heading overall scale
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);

  // Subtitle, buttons, arrow fade out
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Load reveal variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  const highlightedChild: Variants = {
    hidden: { opacity: 0, y: 20, color: "#111111" },
    visible: {
      opacity: 1,
      y: 0,
      color: "#14B8A6",
      transition: { ease: "easeOut", duration: 0.6 },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 min-h-screen bg-gradient-to-br from-white via-white to-[#f8ffff]">
      
      {/* Heading */}
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ scale: headingScale }}
        className="flex flex-wrap justify-center gap-x-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 max-w-4xl"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={word === "Future" ? highlightedChild : child}
            style={{ opacity: wordFade, y: wordY }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ opacity: subtitleOpacity }}
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Revolutionize your business with intelligent automation, data-driven
        insights, and cutting-edge digital transformation strategies.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity: buttonsOpacity }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition"
        >
          Start Your Journey →
        </a>
        <a
          href="#solutions"
          className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:text-gray-900 transition"
        >
          Learn More
        </a>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-8 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
