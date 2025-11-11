"use client";

import { motion } from "framer-motion";

/**
 * Testimonials Section Component
 * Features real testimonial quotes from early waitlist members
 * Builds trust and creates desire through social validation
 */
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Creating invoices used to take me 15 minutes. If TaxMate can do it in 30 seconds, I'm sold. This is exactly what freelancers need.",
      name: "Priya S.",
      role: "Freelance Designer",
      location: "Bangalore",
      image: "/priya-testi.jpg",
      color: "from-pink-500 to-rose-500",
    },
    {
      quote: "I've tried 5 different invoicing tools. They're all too complicated. A simple, fast solution? That's what I've been waiting for.",
      name: "Arjun K.",
      role: "Full-Stack Developer",
      location: "Mumbai",
      image: "/arjun.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      quote: "Managing clients and invoices in spreadsheets is exhausting. Having everything automated in one place will be a lifesaver.",
      name: "Meera R.",
      role: "Content Creator",
      location: "Pune",
      image: "/meera-testi.jpg",
      color: "from-purple-500 to-indigo-500",
    },
    {
      quote: "The templates look amazing. Finally, an invoicing tool that makes me look professional without spending hours on design.",
      name: "Pritam D.",
      role: "Marketing Consultant",
      location: "Delhi",
      image: "/pritam-testi.jpg",
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh opacity-40" />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 
                       rounded-full text-xs sm:text-sm font-bold text-blue-700 mb-4 sm:mb-6"
          >
            💬 Early Access Feedback
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Loved by freelancers<br />
            <span className="text-gradient">who value their time</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Join designers, developers, and creators who are done wasting time on invoicing
          </p>
        </motion.div>

          {/* Testimonial cards - 4 cards in responsive grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-12 sm:mb-16 mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={avatarVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group w-full sm:w-[calc(50%-12px)] lg:w-[300px] xl:w-[320px]"
              >
                <div className="bg-white rounded-3xl p-8 
                             shadow-xl hover:shadow-2xl
                             border border-gray-100 
                             transition-all duration-500 h-full
                             overflow-hidden relative w-full">
                  
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} 
                                opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.color} 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
                       style={{ padding: '2px', margin: '-1px' }} />
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${testimonial.color}`} />
                  
                  <div className="relative z-10">
                    {/* Quote icon */}
                    <div className="mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} 
                                    flex items-center justify-center shadow-lg`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="text-gray-800 leading-relaxed text-base sm:text-lg mb-8 font-medium">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover 
                                   shadow-lg group-hover:scale-105 transition-transform duration-300
                                   ring-2 ring-white"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full 
                                      bg-gradient-to-br ${testimonial.color} 
                                      border-2 border-white shadow-sm`} />
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center space-x-1 mt-0.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{testimonial.location}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why freelancers trust us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-12 sm:mt-16"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 
                         border border-gray-200 shadow-2xl text-center
                         bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10">
                Why early adopters love TaxMate
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 
                               flex items-center justify-center shadow-lg">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                    Lightning Fast
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Create invoices in under 30 seconds, not 15 minutes
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 
                               flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                    Beautiful Templates
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Professional designs that make you look good
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 
                               flex items-center justify-center shadow-lg">
                    <span className="text-3xl">📊</span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                    All-in-One
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Invoices, clients, and payments in one place
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}

