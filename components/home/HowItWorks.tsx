"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Mic,
  Brain,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Briefcase,
    title: "Choose Interview",
    description:
      "Select your preferred interview type like Frontend, HR, React, or DSA.",
  },
  {
    icon: Mic,
    title: "Start AI Interview",
    description:
      "Practice realistic voice-based interviews with our intelligent AI assistant.",
  },
  {
    icon: Brain,
    title: "Get Smart Feedback",
    description:
      "Receive AI-powered analysis on communication, confidence, and answers.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description:
      "Monitor performance analytics and improve interview skills over time.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 bg-black overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute left-1/4 top-20 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" />

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
            Simple Workflow
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
            How{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              HireMind AI
            </span>{" "}
            Works
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden md:block h-full w-[2px] bg-gradient-to-b from-purple-500/50 to-cyan-500/50 -translate-x-1/2" />

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >

                  {/* Content Card */}
                  <div className="w-full md:w-1/2">

                    <motion.div
                      whileHover={{
                        y: -8,
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
                      <h3 className="relative z-10 mt-6 text-3xl font-bold">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="relative z-10 mt-4 text-gray-400 leading-relaxed">
                        {step.description}
                      </p>

                    </motion.div>

                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-black relative z-20">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                  </div>

                  {/* Empty Side */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}