"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroBackground() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const leftY = useTransform(scrollY, [0, 500], [0, -80]);
  const rightY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div
      className="absolute inset-0 -z[-1] overflow-hidden pointer-events-none hidden sm:block"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      {/* Left mid glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-teal-400/40 rounded-full blur-[100px]"
        style={{
          top: "35%",
          left: "-12%",
          y: leftY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, 100, -150, 0],
          y: [0, -30, 130, 0],
        }}
        transition={{
          opacity: { duration: 1.6, ease: "easeOut" },
          scale: { duration: 1.8, ease: "easeOut" },
          x: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Bottom right glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-teal-300/65 rounded-full blur-[150px]"
        style={{
          bottom: "-15%",
          right: "-15%",
          y: rightY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, -50, 150, 0],
          y: [0, 20, -70, 0],
        }}
        transition={{
          opacity: { duration: 2.2, ease: "easeOut", delay: 0.3 },
          scale: { duration: 2, ease: "easeOut", delay: 0.3 },
          x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 },
        }}
      />
    </motion.div>
  );
}
