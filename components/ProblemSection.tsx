"use client";

import { motion } from "framer-motion";

/**
 * Problem Section Component
 * Storytelling approach - shows the journey from chaos to clarity
 * More engaging and relatable for freelancers
 */
export default function ProblemSection() {
  const journey = [
    {
      emoji: "😫",
      time: "Before TaxMate",
      title: "The Freelance Money Mess",
      description: "Late nights chasing unpaid invoices. Excel sheets that don't add up. GST panic every quarter. You're talented — not a part-time accountant.",
      color: "from-red-500 to-orange-500",
      bg: "from-red-50 to-orange-50",
    },
    {
      emoji: "✨",
      time: "With TaxMate",
      title: "Finally, It Just Works",
      description: "One clean dashboard. Invoices sent in 30 seconds. GST auto-calculated. AI summaries you can actually understand. No jargon, no stress.",
      color: "from-blue-500 to-purple-500",
      bg: "from-blue-50 to-purple-50",
    },
    {
      emoji: "🚀",
      time: "The Result",
      title: "Time Back Where It Belongs",
      description: "5+ hours saved every month. No spreadsheet anxiety. No surprise tax bills. Just you, your craft, and the confidence that your money is handled.",
      color: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50",
    },
  ];

  // Stagger animation for cards
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
    <section className="section-padding bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container-custom relative z-10 px-4 sm:px-6">
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200
                       rounded-full text-xs sm:text-sm font-bold text-gray-700 mb-4 sm:mb-6"
          >
            📖 How It Feels
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            From chaos to <span className="text-gradient">clarity</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Here's what changes when you stop fighting your finances and start managing them.
          </p>
        </motion.div>

        {/* Journey timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {journey.map((step, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Connecting arrow (desktop only) */}
              {index < journey.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}

              <div className="relative bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 
                           shadow-lg border-2 border-gray-200/50 
                           transition-all duration-500 hover:shadow-2xl
                           overflow-hidden h-full">
                
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bg} 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                
                <div className="relative z-10">
                  {/* Time badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
                      {step.time}
                    </span>
                  </div>

                  {/* Emoji */}
                  <div className="mb-5 sm:mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 
                                  rounded-2xl bg-gradient-to-br ${step.color} 
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl sm:text-5xl">{step.emoji}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Step number indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gray-100 
                             flex items-center justify-center text-gray-400 font-bold text-lg
                             group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500
                             group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom emotional hook with specifics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 italic mb-4">
              &ldquo;Most freelancers waste 6+ hours monthly on invoices and tracking. TaxMate cuts that to under 30 minutes — so you can get back to doing what you&apos;re actually paid for.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

