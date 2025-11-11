"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import StickyCTA from "@/components/StickyCTA";

/**
 * TaxMate Landing Page
 * Streamlined high-converting SaaS waitlist page
 * 
 * Sections (5 total):
 * - Hero: Main headline and CTAs
 * - Journey: Before/With/After storytelling
 * - Features + Dashboard: Product benefits with visual mockup
 * - Testimonials: Real quotes and social proof
 * - FAQ + Footer: Objection removal and navigation
 * 
 * Floating Elements:
 * - Modal: Popup waitlist form
 * - Sticky CTA: Floating bottom-right reminder
 */
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen relative">
        {/* Subtle noise texture overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             }}
        />

        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <ProblemSection />
        <Features onOpenModal={() => setIsModalOpen(true)} />
        <Testimonials />
        <FAQ />
        <Footer onOpenModal={() => setIsModalOpen(true)} />
      </main>
      
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <StickyCTA onOpenModal={() => setIsModalOpen(true)} />
    </>
  );
}

