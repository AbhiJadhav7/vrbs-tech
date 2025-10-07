"use client";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { TrendingUp } from "lucide-react";

const headingText = "Transform Your Future with AI-Powered Solutions";

export default function AboutUs() {
  const words = headingText.split(" ");

  const { scrollYProgress } = useScroll();

  const wordFade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const wordY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6 },
    },
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

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="About Us" className="bg-gray-50">
      {/* Case Studies Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Back to Home Link */}
          <a
          
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mt-8 mb-8 transition"
          >
           
            About
          </a>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 !text-left">
              <span className="text-gray-900">Building The Future Of</span>
              <br />
              <span className="text-teal-500">Digital Transformation</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
              VRBS is a tech-first consultancy specializing in AI-powered
              digital transformation. We help enterprises unlock exponential
              growth through intelligent automation, data-driven decision
              making, and strategic innovation.
            </p>
          </motion.div>

          {/* 🆕 OUR STORY SECTION */}
          <motion.div
            className="mt-20 mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
           
            <motion.div
              variants={child}
              className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left"
            >
               <motion.h3
              variants={child}
              className="text-3xl my-auto  md:text-4xl font-extrabold text-gray-900 mb-10 !text-left md:text-center"
            >
              Our Story
            </motion.h3>

              <p>
                Founded in 2017, VRBS emerged from a simple observation: most
                businesses were struggling to harness the true power of AI and
                automation. While technology advanced rapidly, implementation
                lagged behind.
              </p>
              <p>
                We set out to bridge that gap. Our team of engineers, designers,
                and strategists came together with a shared vision—to make
                enterprise-grade AI accessible, practical, and transformative for
                businesses of all sizes.
              </p>
              <p>
                Today, we have helped over 100 organizations across industries
                accelerate their digital transformation journeys. From Fortune
                500 companies to innovative startups, our clients trust us to
                deliver solutions that do not just work—they scale.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-28 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Ready To Transform Your Business?
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how{" "}
              <span className="text-teal-500 font-semibold">VRBS</span> can
              accelerate your digital transformation journey.
            </p>
            <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
            >

              Get In Touch
            </motion.button></a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
