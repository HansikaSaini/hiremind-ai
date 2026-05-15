"use client";

import { motion } from "framer-motion";

import InterviewCard from "@/components/dashboard/InterviewCard";

const interviews = [
  {
    title: "Frontend React Interview",
    description:
      "Practice React.js, hooks, performance optimization and frontend architecture questions.",
    difficulty: "Intermediate",
    questions: 15,
  },
  {
    title: "Backend Node.js Interview",
    description:
      "Master APIs, authentication, databases and backend scalability concepts.",
    difficulty: "Advanced",
    questions: 18,
  },
  {
    title: "HR Mock Interview",
    description:
      "Improve confidence, communication and behavioral interview performance.",
    difficulty: "Beginner",
    questions: 12,
  },
  {
    title: "JavaScript Interview",
    description:
      "Strengthen core JavaScript concepts, async programming and ES6 fundamentals.",
    difficulty: "Intermediate",
    questions: 16,
  },
  {
    title: "System Design Interview",
    description:
      "Learn scalable systems, architecture patterns and distributed design concepts.",
    difficulty: "Advanced",
    questions: 20,
  },
  {
    title: "DSA Problem Solving",
    description:
      "Practice arrays, trees, graphs, recursion and coding interview logic.",
    difficulty: "Hard",
    questions: 25,
  },
];

export default function InterviewsPage() {
  return (
    <div>

      {/* Heading */}
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

        <div>

          <p className="text-gray-400">
            Practice smarter with AI
          </p>

          <h1 className="mt-2 text-5xl font-bold tracking-tight">
            Mock Interviews
          </h1>

        </div>

        {/* Start Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-4 font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >

          Start AI Interview

        </motion.button>

      </motion.div>

      {/* Interview Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12"
      >

        {interviews.map((interview, index) => (
          <InterviewCard
            key={index}
            title={interview.title}
            description={interview.description}
            difficulty={interview.difficulty}
            questions={interview.questions}
          />
        ))}

      </motion.div>

    </div>
  );
}