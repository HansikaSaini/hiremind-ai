"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Mic,
  TrendingUp,
  FileText,
} from "lucide-react";

const stats = [
  {
    icon: Brain,
    value: "92%",
    label: "AI Confidence Score",
    color: "text-cyan-400",
    growth: "+12%",
  },
  {
    icon: Mic,
    value: "14",
    label: "Mock Interviews Taken",
    color: "text-purple-400",
    growth: "+8%",
  },
  {
    icon: TrendingUp,
    value: "76%",
    label: "Weekly Improvement",
    color: "text-pink-400",
    growth: "+18%",
  },
  {
    icon: FileText,
    value: "24",
    label: "AI Suggestions Generated",
    color: "text-cyan-400",
    growth: "AI",
  },
];

export default function DashboardPage() {
  return (
    <div className="relative">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Top Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >

        <div>

          <p className="text-gray-400">
            Welcome back 👋
          </p>

          <h1 className="mt-2 text-5xl font-bold tracking-tight">
            Dashboard Overview
          </h1>

        </div>

        {/* ATS Score */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >

          <p className="text-sm text-gray-400">
            Resume ATS Score
          </p>

          <h2 className="mt-2 text-4xl font-bold text-cyan-400">
            89
          </h2>

        </motion.div>

      </motion.div>

      {/* Animated Stats */}
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
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12"
      >

        {stats.map((stat, index) => {

          const Icon = stat.icon;

          return (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

              <div className="relative z-10 flex items-center justify-between">

                <Icon className={`w-7 h-7 ${stat.color}`} />

                <span className="text-sm text-green-400">
                  {stat.growth}
                </span>

              </div>

              <h2 className="relative z-10 mt-8 text-4xl font-bold">
                {stat.value}
              </h2>

              <p className="relative z-10 mt-2 text-gray-400">
                {stat.label}
              </p>

            </motion.div>
          );
        })}

      </motion.div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        {/* Recent Interviews */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            y: -5,
          }}
          className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Recent Interviews
            </h2>

            <button className="text-cyan-400 text-sm hover:text-cyan-300 transition">
              View All
            </button>

          </div>

          <div className="mt-8 space-y-4">

            {[
              {
                title: "Frontend React Interview",
                time: "Completed 2 hours ago",
                score: "91%",
                color: "text-cyan-400",
              },
              {
                title: "HR Mock Interview",
                time: "Completed yesterday",
                score: "84%",
                color: "text-purple-400",
              },
              {
                title: "JavaScript Interview",
                time: "Completed 3 days ago",
                score: "88%",
                color: "text-pink-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.02,
                }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition duration-300 hover:bg-white/5"
              >

                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {item.time}
                  </p>

                </div>

                <div className={`${item.color} font-bold`}>
                  {item.score}
                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            y: -5,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
        >

          <h2 className="text-2xl font-bold">
            AI Insights
          </h2>

          <div className="mt-8 space-y-5">

            {[
              {
                title: "Communication",
                text: "Confidence improved by 18%",
                color: "text-cyan-400",
              },
              {
                title: "Recommendation",
                text: "Practice React optimization questions",
                color: "text-purple-400",
              },
              {
                title: "AI Observation",
                text: "Strong problem-solving approach detected",
                color: "text-pink-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:bg-white/5"
              >

                <p className="text-sm text-gray-400">
                  {item.title}
                </p>

                <h3 className={`mt-2 font-semibold ${item.color}`}>
                  {item.text}
                </h3>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

    </div>
  );
}