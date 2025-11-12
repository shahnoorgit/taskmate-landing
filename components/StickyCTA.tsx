"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Sticky CTA Component
 * Appears at bottom of screen after user scrolls past hero
 * Mobile-optimized with strong conversion focus
 */

interface StickyCTAProps {
  onOpenModal: () => void;
}

export default function StickyCTA({ onOpenModal }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      // Show after scrolling 300px (past hero)
      setIsVisible(latest > 300);
    });
    
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, type: "spring", damping: 20 }}
      className={`fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-40 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-glow-lg
                 border-2 border-white/30
                 backdrop-blur-xl overflow-hidden max-w-md sm:max-w-lg ml-auto"
      >
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Text content */}
            <div className="flex items-center space-x-2 sm:space-x-3 text-white flex-1">
              <div className="hidden sm:flex items-center -space-x-2">
                {[
                  { img: "/priya-testi.jpg", name: "Priya" },
                  { img: "/arjun.png", name: "Arjun" },
                  { img: "/meera-testi.jpg", name: "Meera" },
                ].map((user, i) => (
                  <img
                    key={i}
                    src={user.img}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover
                             border-2 border-white shadow-md"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Join Priya, Arjun & others</span>
                </p>
                <p className="text-xs opacity-90">
                  🔥 Limited spots remaining
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className="bg-white text-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 
                       rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm
                       hover:bg-blue-50 transition-all duration-300 
                       shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95
                       flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap group"
            >
              <span>Get Early Access</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

