"use client";

import { motion } from "framer-motion";
import Spotlight from "../shared/Spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-40">
    <Spotlight />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute top-20 left-1/4 w-100 h-100 bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-87.5 h-87.5 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8"
        >
          ✨ AI-Powered Career Platform
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-none"
        >
          Crack Interviews With{" "}
          <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
            AI Power
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Practice realistic AI-powered mock interviews, improve communication skills,
          receive instant feedback, and land your dream job faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-5 flex-wrap"
        >
          {/* Primary Button */}
          <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300">
            Start Interview
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300">
            Watch Demo
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 relative"
        >

          <div className="relative mx-auto max-w-6xl rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden">

            {/* Top Bar */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-3 gap-5">

              {/* Card 1 */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-left">
                <p className="text-gray-400 text-sm">
                  Interview Score
                </p>

                <h2 className="text-5xl font-bold mt-3">
                  92%
                </h2>

                <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[92%] bg-linear-to-r from-purple-500 to-cyan-500 rounded-full" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-left">
                <p className="text-gray-400 text-sm">
                  AI Confidence Analysis
                </p>

                <h2 className="text-4xl font-bold mt-3 text-cyan-400">
                  Excellent
                </h2>

                <p className="text-gray-500 mt-4 text-sm">
                  Strong communication and clarity detected.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-left">
                <p className="text-gray-400 text-sm">
                  Weekly Progress
                </p>

                <div className="mt-6 flex items-end gap-3 h-32">
                  <div className="w-8 h-16 rounded-xl bg-purple-500/40" />
                  <div className="w-8 h-20 rounded-xl bg-purple-500/50" />
                  <div className="w-8 h-24 rounded-xl bg-purple-500/60" />
                  <div className="w-8 h-28 rounded-xl bg-cyan-500/80" />
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}