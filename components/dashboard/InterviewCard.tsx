"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Clock3,
  ArrowRight,
} from "lucide-react";

interface InterviewCardProps {
  title: string;
  description: string;
  difficulty: string;
  questions: number;
}

export default function InterviewCard({
  title,
  description,
  difficulty,
  questions,
}: InterviewCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7"
    >

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

      {/* Floating Blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* Top */}
        <div className="flex items-center justify-between">

          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 bg-black/30">

            <Brain className="w-7 h-7 text-cyan-400" />

          </div>

          {/* Difficulty */}
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">

            {difficulty}

          </span>

        </div>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-bold leading-snug">

          {title}

        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 leading-relaxed">

          {description}

        </p>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">

          {/* Questions */}
          <div className="flex items-center gap-2 text-gray-400">

            <Clock3 className="w-4 h-4" />

            <span className="text-sm">
              {questions} Questions
            </span>

          </div>

          {/* Button */}
          <button className="flex items-center gap-2 text-cyan-400 transition duration-300 group-hover:translate-x-1">

            Start

            <ArrowRight className="w-4 h-4" />

          </button>

        </div>

      </div>

    </motion.div>
  );
}