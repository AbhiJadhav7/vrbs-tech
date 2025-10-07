"use client";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, DollarSign, TrendingUp } from "lucide-react";

const headingText = "Transform Your Future with AI-Powered Solutions";

export default function CaseStudies() {
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

  // Card hover animation
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div id="CaseStudies" className="bg-gray-50">
      {/* Hero Section */}
    
      {/* Case Studies Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Back to Home Link */}
          <a href="/#Hero" className="inline-flex items-center text-gray-600 hover:text-gray-900 mt-8 mb-8 transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
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
              <span className="text-gray-900">Real Results,</span>
              <br />
              <span className="text-teal-500">Real Impact</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
              Explore how we have helped leading organizations across industries
              achieve measurable transformation through AI-powered solutions.
            </p>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: E-Commerce */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Retail</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>8 months</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                E-Commerce Giant: 40% Revenue Boost
              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">
                  A leading e-commerce platform struggled with cart abandonment rates and inefficient
                  product recommendations.
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">
                  Implemented AI-powered recommendation engine with predictive analytics and
                  automated customer journey optimization.
                </p>
              </div>

              {/* Key Results */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Key Results</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">40%</div>
                    <div className="text-xs text-gray-500 mt-1">Revenue Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">3.2x</div>
                    <div className="text-xs text-gray-500 mt-1">Conversion Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">28%</div>
                    <div className="text-xs text-gray-500 mt-1">Cart Abandonment Reduction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: FinTech */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Finance</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>9 months</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                FinTech Startup: Scaling to 1M Users
              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">
                  A rapidly growing fintech startup needed infrastructure that could scale from 10K to 1M
                  users without compromising security.
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">
                  Built cloud-native microservices architecture with automated scaling, enhanced security
                  protocols, and real-time fraud detection.
                </p>
              </div>

              {/* Key Results */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Key Results</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">1M+</div>
                    <div className="text-xs text-gray-500 mt-1">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">99.99%</div>
                    <div className="text-xs text-gray-500 mt-1">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">85%</div>
                    <div className="text-xs text-gray-500 mt-1">Fraud Reduction</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Healthcare</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>5 months</span>
                  </div>
                </div>
              </div>
{/*Card 3 */}
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Healthcare Provider: Operational Excellence              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">
                Manual appointment scheduling and patient data management led to inefficiencies and poor patient experience.


                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">
                Deployed AI-driven appointment system, integrated EHR with intelligent workflow automation, and predictive patient care tools.
                </p>
              </div>

              {/* Key Results */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Key Results</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">60%</div>
                    <div className="text-xs text-gray-500 mt-1">Scheduling Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">45%</div>
                    <div className="text-xs text-gray-500 mt-1">Admin Time Saved</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">92%</div>
                    <div className="text-xs text-gray-500 mt-1">Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: FinTech */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Manufacturing</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>12 months</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Manufacturing: Smart Factory Transformation              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">
                Traditional manufacturing processes led to high downtime, quality issues, and supply chain inefficiencies.
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">
                Implemented IoT sensors, predictive maintenance AI, and real-time production monitoring with automated quality control.
                </p>
              </div>

              {/* Key Results */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Key Results</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">70%</div>
                    <div className="text-xs text-gray-500 mt-1">Downtime Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">35%</div>
                    <div className="text-xs text-gray-500 mt-1">Quality Improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">$2.4M</div>
                    <div className="text-xs text-gray-500 mt-1">Annual Savings</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Technology</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>4 months</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              SaaS Platform: Customer Retention +55%              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">
                
High customer churn and difficulty identifying at-risk accounts before cancellation.


                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">
                Built predictive churn model with automated intervention workflows and personalized engagement strategies.
                </p>
              </div>

              {/* Key Results */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Key Results</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">40%</div>
                    <div className="text-xs text-gray-500 mt-1">Retention Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">38%</div>
                    <div className="text-xs text-gray-500 mt-1">Upsell Conversion</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">4.8</div>
                    <div className="text-xs text-gray-500 mt-1">NPS Score Gain</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: FinTech */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Icon and Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Logistics</span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>7 months</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Logistics Company: Route Optimization              </h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">
                Inefficient routing and delivery scheduling led to high fuel costs and late deliveries.
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="!text-left text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">
                Deployed AI-powered route optimization with real-time traffic analysis, dynamic scheduling, and automated dispatch. 
                </p>
              </div>

              {/* Key Results */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Key Results</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">32%</div>
                    <div className="text-xs text-gray-500 mt-1">Fuel Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">48%</div>
                    <div className="text-xs text-gray-500 mt-1">On-time Deliveries</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-teal-500">25%</div>
                    <div className="text-xs text-gray-500 mt-1">Fleet</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
            <motion.div
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TrendingUp className="mx-auto text-teal-500 w-10 h-10 mb-6" />
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how <span className="text-teal-500 font-semibold">VRBS</span> can deliver measurable results for your organization.
          </p>
          <a href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          >
            Start Your Transformation
          </motion.button></a>
        </motion.div>
        </div>
      </section>
    </div>
  );
}