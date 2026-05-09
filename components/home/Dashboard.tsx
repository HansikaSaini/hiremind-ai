"use client";

import { motion } from "framer-motion";
import {
  Brain,
  TrendingUp,
  Mic,
  FileText,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Smart Analytics Dashboard
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
            Your AI Interview{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Performance Hub
            </span>
          </h2>

        </motion.div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
          }}
          className="relative mt-24 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"
        >

          {/* Dashboard Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />

          {/* Top Stats */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-5">

            {/* Card 1 */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">
                <Brain className="text-cyan-400 w-7 h-7" />

                <span className="text-green-400 text-sm">
                  +12%
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-bold">
                92%
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                AI Confidence Score
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">
                <Mic className="text-purple-400 w-7 h-7" />

                <span className="text-green-400 text-sm">
                  +8%
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-bold">
                87%
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Communication Skill
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">
                <TrendingUp className="text-pink-400 w-7 h-7" />

                <span className="text-green-400 text-sm">
                  +18%
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-bold">
                76%
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Weekly Improvement
              </p>

            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

              <div className="flex items-center justify-between">
                <FileText className="text-cyan-400 w-7 h-7" />

                <span className="text-green-400 text-sm">
                  ATS
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-bold">
                89
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Resume Score
              </p>

            </div>

          </div>

          {/* Analytics Section */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            {/* Graph Card */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8">

              <h3 className="text-2xl font-bold">
                Performance Growth
              </h3>

              <p className="mt-2 text-gray-400">
                Weekly AI interview analytics
              </p>

              {/* Fake Graph */}
              <div className="mt-10 flex items-end gap-4 h-52">

                <div className="w-12 h-20 rounded-2xl bg-purple-500/30" />

                <div className="w-12 h-28 rounded-2xl bg-purple-500/40" />

                <div className="w-12 h-36 rounded-2xl bg-purple-500/50" />

                <div className="w-12 h-44 rounded-2xl bg-cyan-500/80" />

              </div>

            </div>

            {/* AI Feedback */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8">

              <h3 className="text-2xl font-bold">
                AI Feedback Insights
              </h3>

              <p className="mt-2 text-gray-400">
                Personalized recommendations
              </p>

              <div className="mt-8 space-y-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-gray-400">
                    Communication
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-cyan-400">
                    Excellent clarity & confidence
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-gray-400">
                    Improvement Area
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-purple-400">
                    Improve React optimization answers
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}