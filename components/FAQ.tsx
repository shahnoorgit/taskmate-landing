"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/**
 * FAQ Section Component
 * Removes objections and builds trust before signup
 * Accordion-style with smooth animations
 */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is joining the waitlist free?",
      answer:
        "Yes — 100% free, no credit card required. The first 100 members will get lifetime access for just ₹999 (normally ₹299/month after launch). Lock in your spot now and never pay again.",
    },
    {
      question: "When will TaxMate launch?",
      answer:
        "We're launching private beta in early 2026. Waitlist members get first access, exclusive updates, and a say in how the product evolves. You'll be building this with us.",
    },
    {
      question: "Is my financial data safe?",
      answer:
        "Absolutely. Your data is encrypted end-to-end, stored securely, and never shared with anyone. We're privacy-first — your information stays yours, always.",
    },
    {
      question: "Why is this better than Excel or Google Sheets?",
      answer:
        "TaxMate is purpose-built for Indian freelancers. It's visual, automated, and GST-compliant. No formulas to remember. No macros to debug. No midnight panic wondering if you calculated tax correctly. Just clarity.",
    },
    {
      question: "Can I see screenshots or a demo?",
      answer:
        "Not yet — we're still in development. But that's exactly why your feedback as an early member matters. You'll help shape how TaxMate looks, feels, and works. Think of this as getting VIP access to a private beta.",
    },
    {
      question: "What if I don't like it after launch?",
      answer:
        "If TaxMate doesn't make your life easier, we'll refund you — no questions asked. But we're confident once you see 5+ hours return to your week, you won't want to go back to spreadsheets.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-30" />

      <div className="container-custom relative z-10 px-4">
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 
                       rounded-full text-xs sm:text-sm font-bold text-green-700 mb-4 sm:mb-6"
          >
            ❓ Got Questions?
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We kept it real — here's what people actually ask about TaxMate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 
                       shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between 
                         hover:bg-gray-50/50 transition-colors cursor-pointer"
              >
                <span className="font-bold text-gray-900 text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom encouragement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Still have questions? We&apos;d love to hear from you!
          </p>
          <a
            href="mailto:hello@dtrue.online"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 
                     font-semibold transition-colors text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email us at hello@dtrue.online</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
