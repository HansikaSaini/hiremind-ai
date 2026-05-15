"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Brain, Clock3, ArrowRight } from "lucide-react";
const questions = [
  "Explain the difference between Client Components and Server Components in Next.js.",

  "What are React hooks and why are they useful?",

  "How does useEffect work internally in React?",

  "What is hydration in Next.js?",

  "Explain memoization in React applications.",

  "Difference between authentication and authorization?",

  "What is the Virtual DOM?",

  "How does JWT authentication work?",

  "Explain event bubbling in JavaScript.",

  "Difference between SQL and NoSQL databases?",
];

export default function InterviewSessionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Top Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center justify-between"
      >
        {/* Left */}
        <div>
          <p className="text-gray-400">AI Mock Interview Session</p>

          <h1 className="mt-2 text-5xl font-bold tracking-tight">
            Frontend React Interview
          </h1>
        </div>

        {/* Timer */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl"
        >
          <Clock3 className="w-5 h-5 text-cyan-400" />

          <span className="text-xl font-semibold">12:45</span>
        </motion.div>
      </motion.div>

      {/* Progress */}
      <div className="mt-10">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>

          <span>
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            Completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "30%",
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
          />
        </div>
      </div>

      {/* Question Box */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

        <div className="relative z-10">
          {/* AI Header */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 bg-black/30">
              <Brain className="w-7 h-7 text-cyan-400" />
            </div>

            <div>
              <p className="text-sm text-gray-400">AI Interviewer</p>

              <h2 className="text-xl font-semibold">Technical Question</h2>
            </div>
          </div>

          {/* Question */}
          <div className="mt-8">
            <h3 className="text-3xl font-bold leading-relaxed">
              {questions[currentQuestion]}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Answer Input */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mt-10"
      >
        <label className="text-lg font-semibold">Your Answer</label>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="mt-4 h-[220px] w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-white outline-none backdrop-blur-2xl placeholder:text-gray-500 focus:border-cyan-400 transition duration-300"
        />
      </motion.div>

      {/* Bottom Actions */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mt-8 flex items-center justify-between"
      >
        {/* Hint */}
        <p className="text-sm text-gray-500">
          AI analyzes communication, clarity and technical depth.
        </p>

        {/* Next Button */}
        <motion.button
          onClick={() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);

              setAnswer("");
            }
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-4 font-medium text-white shadow-[0_0_40px_rgba(168,85,247,0.35)]"
        >
          Next Question
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
}
