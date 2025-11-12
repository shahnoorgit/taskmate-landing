"use client";

import { motion } from "framer-motion";

/**
 * Features Section Component
 * Modern showcase with glassmorphism cards and enhanced animations
 */

interface FeaturesProps {
  onOpenModal: () => void;
}

export default function Features({ onOpenModal }: FeaturesProps) {
  const features = [
    {
      icon: "🧾",
      title: "One-click Invoicing",
      outcome: "Get paid faster",
      description:
        "Create branded, GST-compliant invoices in under a minute. Send them instantly. Track when clients view them. Never chase payments in the dark again.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: "📊",
      title: "Smart Dashboard",
      outcome: "Stay in control",
      description:
        "See exactly how much you've earned, what's pending, and what you owe in GST — no surprises, no digging through sheets. Just clarity, at a glance.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: "🤖",
      title: "AI Monthly Summary",
      outcome: "Understand your money",
      description:
        "Get clear, human-language summaries of your freelance income every month. Like having a financial buddy who speaks your language — not an accountant.",
      gradient: "from-orange-500 to-rose-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 
                       rounded-full text-xs sm:text-sm font-bold text-blue-700 mb-4 sm:mb-6"
          >
            ✨ Why TaxMate?
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
            Everything you need,<br />
            <span className="text-gradient">nothing you don&apos;t.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium px-4 mb-3">
            TaxMate isn&apos;t bloated accounting software. It&apos;s built specifically for Indian freelancers — 
            fast, intuitive, and designed to save you <span className="text-blue-600 font-bold">hours every week</span>.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-500 italic px-4"
          >
            💡 No more Excel hell. Focus on clients, not columns.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 
                            shadow-xl border border-gray-200/50
                            transition-all duration-500 hover:shadow-2xl
                            overflow-hidden h-full">
                
                {/* Gradient glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} 
                            opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`} />

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-5 sm:mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
                                rounded-2xl bg-gradient-to-br ${feature.gradient} 
                                shadow-lg transform group-hover:scale-110 
                                transition-transform duration-300`}
                    >
                      <span className="text-3xl sm:text-4xl">{feature.icon}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base font-semibold text-blue-600 mb-3 sm:mb-4">
                    → {feature.outcome}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative gradient orb */}
                <div
                  className={`absolute -bottom-12 -right-12 w-32 h-32 
                            bg-gradient-to-br ${feature.gradient} 
                            opacity-20 rounded-full blur-3xl 
                            group-hover:scale-150 group-hover:opacity-30 
                            transition-all duration-700`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Preview - "See it in action" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Here&apos;s what it <span className="text-gradient">looks like</span> <span className="text-gray-500 italic">(coming soon)</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Clean. Simple. Built for how freelancers actually work.
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              💡 Early access members will help shape this dashboard — your feedback matters.
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="max-w-6xl mx-auto">
            <div className="relative px-2 sm:px-4">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                            rounded-2xl sm:rounded-3xl blur-3xl opacity-20" />

              {/* Main dashboard card */}
              <div className="relative bg-white/70 backdrop-blur-2xl rounded-xl sm:rounded-2xl md:rounded-3xl 
                            border-2 border-white/50 shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                      Dashboard Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">Last 30 days</p>
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm text-gray-600 font-medium">Live</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                  {[
                    { label: "Total Income", value: "₹2,45,000", change: "+12%", color: "from-green-400 to-emerald-500" },
                    { label: "GST Collected", value: "₹44,100", change: "+8%", color: "from-blue-400 to-cyan-500" },
                    { label: "Pending Payments", value: "₹38,500", change: "-5%", color: "from-orange-400 to-amber-500" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl 
                               p-4 sm:p-5 md:p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{stat.label}</p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        <div className={`px-2 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${stat.color} text-white text-xs font-semibold`}>
                          {stat.change}
                        </div>
                        <span className="text-xs text-gray-500 hidden sm:inline">vs last month</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl 
                           p-4 sm:p-6 md:p-8 border border-blue-200/50"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h5 className="text-xs sm:text-sm md:text-base font-bold text-gray-900">Income Trend</h5>
                    <span className="text-xs text-gray-500 hidden sm:inline">Jan - Dec 2025</span>
                  </div>
                  <div className="h-28 sm:h-32 md:h-40 flex items-end justify-between space-x-1 sm:space-x-2">
                    {[40, 65, 45, 80, 60, 85, 70, 95, 75, 88, 82, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.1 + index * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg min-w-[8px]"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Benefit text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-6 sm:mt-8 text-sm sm:text-base text-gray-600 font-medium"
          >
            💡 <span className="font-bold">Save 5+ hours every month</span>
            <span className="hidden sm:inline"> — time better spent on your craft, not spreadsheets.</span>
          </motion.p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 
                       rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 
                       border-2 border-blue-200/50 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to simplify your freelance finances?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 md:mb-8">
              Join the waitlist and <span className="font-bold text-blue-600">lock in lifetime access for ₹999</span> — available only to the first 100 members.
            </p>
            <button
              onClick={onOpenModal}
              className="btn-primary text-sm sm:text-base md:text-lg group 
                       w-full sm:w-auto px-6 sm:px-8 md:px-12 
                       py-3.5 sm:py-4 md:py-5 shadow-2xl
                       min-h-[52px] sm:min-h-[56px]"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>🚀 Get Early Access</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              💎 No screenshots yet. No credit card required. Just your email and early access when we launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

