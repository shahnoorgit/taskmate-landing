"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent, useEffect } from "react";

/**
 * Waitlist Modal Component
 * Modern popup modal for waitlist signup
 * Features glassmorphism, backdrop blur, and smooth animations
 */

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to join waitlist");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Auto-close after 3 seconds on success
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl pointer-events-auto my-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 
                         w-9 h-9 sm:w-10 sm:h-10 rounded-full 
                         bg-white shadow-xl hover:shadow-2xl
                         flex items-center justify-center
                         transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-95
                         border-2 border-gray-200"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal content */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 
                           rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -90, 0],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full opacity-10 blur-3xl"
                  />
                </div>

                <div className="relative z-10 p-6 sm:p-8 md:p-10">
                  {/* Form or Success State */}
                  {status === "success" ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-2xl text-gray-900 p-8 sm:p-10 md:p-12 text-center"
                    >
                      {/* Success mascot - Taxy Blink */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
                        className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6"
                      >
                        <img 
                          src="/taxy-blink.png" 
                          alt="Taxy Celebrating" 
                          className="w-full h-full object-contain filter drop-shadow-2xl"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                        className="text-5xl sm:text-6xl mb-6"
                      >
                        🎉
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 
                                   bg-clip-text text-transparent">
                        You&apos;re in!
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        Check your email — we just sent you confirmation. Welcome to the crew.
                      </p>
                    </motion.div>
                  ) : (
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
                      {/* Form header with mascot */}
                      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 sm:p-8 text-center border-b border-gray-200/50">
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4"
                        >
                          <img 
                            src="/taxy-blink.png" 
                            alt="Taxy Mascot" 
                            className="w-full h-full object-contain filter drop-shadow-xl"
                          />
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                          Get Early Access
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">
                          First 100 users get{" "}
                          <span className="font-bold text-blue-600">lifetime access for ₹999</span>
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                      <div className="space-y-4">
                        {/* Email field - primary */}
                        <div className="text-left">
                          <label
                            htmlFor="modal-email"
                            className="block text-sm font-bold text-gray-800 mb-2"
                          >
                            Email <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="email"
                            id="modal-email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 
                                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                     transition-all outline-none bg-white
                                     hover:border-gray-400 text-base
                                     placeholder:text-gray-400"
                          />
                        </div>

                        {/* Name field */}
                        <div className="text-left">
                          <label
                            htmlFor="modal-name"
                            className="block text-sm font-bold text-gray-800 mb-2"
                          >
                            Name <span className="text-gray-400 font-normal text-xs">(optional)</span>
                          </label>
                          <input
                            type="text"
                            id="modal-name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Your first name"
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 
                                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                     transition-all outline-none bg-white
                                     hover:border-gray-400 text-base
                                     placeholder:text-gray-400"
                          />
                        </div>

                        {/* Error message */}
                        {status === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm border border-red-200 font-medium"
                          >
                            {errorMessage}
                          </motion.div>
                        )}

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                                   py-4 rounded-xl font-bold text-base 
                                   transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden 
                                   mt-2 ${
                            status === "loading"
                              ? "opacity-70 cursor-not-allowed"
                              : "hover:scale-[1.02] active:scale-95"
                          }`}
                        >
                          <span className="relative z-10 flex items-center justify-center space-x-2">
                            {status === "loading" ? (
                              <>
                                <svg
                                  className="animate-spin h-5 w-5"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                <span>Joining…</span>
                              </>
                            ) : (
                              <>
                                <span>Join Waitlist</span>
                                <svg
                                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                              </>
                            )}
                          </span>
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-3 font-medium">
                          🔒 Privacy-first • No spam, ever
                        </p>
                      </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

