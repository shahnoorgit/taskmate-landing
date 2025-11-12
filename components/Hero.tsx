"use client";

import { motion } from "framer-motion";

/**
 * Hero Section Component
 * Modern, sleek hero with glassmorphism effects and advanced animations
 * Features gradient mesh background and floating elements
 */

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Sophisticated gradient mesh background */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] bg-gradient-to-r from-purple-400 to-pink-300 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-10 blur-3xl"
        />
      </div>

      {/* Simple header with logo and CTA */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container-custom flex items-center justify-between py-5 sm:py-6 md:py-7 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer"
            onClick={scrollToTop}
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent cursor-pointer">
              TaxMate
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 cursor-pointer">
              <img 
                src="/taxy-mascot.png" 
                alt="Taxy Mascot" 
                className="w-full h-full object-contain filter drop-shadow-md pointer-events-none"
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onOpenModal}
            className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4"
          >
            Join Waitlist
          </motion.button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-extrabold mb-4 sm:mb-5 md:mb-6 
                     leading-[1.2] sm:leading-[1.15] md:leading-[1.1] 
                     tracking-tight max-w-5xl mx-auto"
        >
          <span className="text-gray-900">Freelancing is hard enough.</span>
          <br />
          <span className="text-gradient-hero">Your finances</span>
          <br />
          <span className="text-gradient-hero">shouldn&apos;t be.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 
                     mb-6 sm:mb-8 md:mb-10 lg:mb-12 
                     max-w-3xl mx-auto leading-relaxed font-medium"
        >
          TaxMate is the financial sidekick for freelancers and creators — invoices, 
          GST tracking, and income insights that actually make sense. <span className="text-gray-900 font-semibold">Coming soon to your inbox.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 
                     mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl mx-auto"
        >
          <button
            onClick={onOpenModal}
            className="btn-primary text-sm sm:text-base md:text-lg 
                     min-h-[52px] sm:min-h-[56px] md:min-h-[60px] 
                     w-full sm:w-auto px-6 sm:px-8 md:px-10 group shadow-2xl"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>🚀 Get Early Access</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="btn-secondary text-sm sm:text-base md:text-lg 
                     min-h-[52px] sm:min-h-[56px] md:min-h-[60px] 
                     w-full sm:w-auto px-6 sm:px-8 md:px-10"
          >
            See What&apos;s Inside
          </button>
        </motion.div>

        {/* Enhanced social proof badge with real avatars */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 
                     bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 
                     rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 
                     hover:shadow-2xl transition-shadow
                     max-w-md sm:max-w-xl mx-auto"
        >
          <div className="flex -space-x-2 sm:-space-x-3">
            {[
              { img: "/priya-testi.jpg", name: "Priya" },
              { img: "/arjun.png", name: "Arjun" },
              { img: "/meera-testi.jpg", name: "Meera" },
              { img: "/pritam-testi.jpg", name: "Pritam" },
            ].map((user, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                className="relative"
              >
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full 
                           border-2 border-white shadow-md object-cover
                           ring-1 ring-gray-100"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
              Join Priya, Arjun, and 200+ others
            </p>
            <p className="text-xs text-gray-600">
              who got tired of spreadsheets
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile for cleaner look */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

