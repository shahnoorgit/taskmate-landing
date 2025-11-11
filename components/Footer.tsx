"use client";

import { motion } from "framer-motion";

/**
 * Footer Component
 * Simple, clean footer with logo, copyright, and links
 */

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
      
      <div className="container-custom px-4 py-8 sm:py-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Logo and brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={scrollToTop}
          >
            <span className="text-xl sm:text-2xl font-bold text-white">TaxMate</span>
          </motion.div>

          {/* Navigation links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm"
          >
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Features
            </button>
            <a href="#" className="hover:text-white transition-colors font-medium cursor-pointer">
              Privacy
            </a>
            <a
              href="mailto:hello@dtrue.online"
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Contact
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium cursor-pointer"
            >
              Twitter
            </a>
          </motion.nav>

          {/* Join waitlist CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={onOpenModal}
            className="btn-primary text-sm px-6 py-2.5 hidden sm:flex"
          >
            <span className="flex items-center space-x-1.5">
              <span>Join Waitlist</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </div>

        {/* Copyright - single line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 sm:pt-6 border-t border-gray-800/50 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 TaxMate by{" "}
            <a
              href="https://dtrue.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              Dtrue
            </a>
            {" "}• Made with <span className="text-red-500">❤️</span> for freelancers
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

