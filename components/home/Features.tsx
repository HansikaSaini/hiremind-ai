"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Brain,
  FileText,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Interviews",
    description:
      "Practice realistic AI voice interviews with real-time speech interaction.",
  },
  {
    icon: Brain,
    title: "AI Feedback",
    description:
      "Receive smart feedback on communication, confidence, and technical answers.",
  },
  {
    icon: FileText,
    title: "ATS Resume Analyzer",
    description:
      "Optimize your resume with AI-powered ATS scoring and suggestions.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track interview progress and improve with insightful analytics.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-32 bg-black overflow-hidden"
    >

      {/* Glow */}
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
            Powerful Features
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Crack Interviews
            </span>
          </h2>

        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">

                  <Icon className="w-7 h-7 text-cyan-300" />

                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-8 text-3xl font-bold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-4 text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}