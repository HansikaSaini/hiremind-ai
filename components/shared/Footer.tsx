"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-36 bg-black overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-purple-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-gray-500"
        >
          Ready To Level Up?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Start Practicing With{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
            HireMind AI
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
        >
          Improve confidence, master interviews, and get AI-powered
          feedback designed to help you land your dream job faster.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="mt-12"
        >

          <button className="group relative overflow-hidden rounded-full px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300">

            {/* Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400/20 to-purple-400/20" />

            <span className="relative z-10">
              Start Your AI Interview
            </span>

          </button>

        </motion.div>

      </div>
    </section>
  );
}