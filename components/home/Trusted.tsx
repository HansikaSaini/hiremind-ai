"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    label: "Mock Interviews",
  },
  {
    number: "95%",
    label: "Success Improvement",
  },
  {
    number: "24/7",
    label: "AI Assistance",
  },
  {
    number: "5K+",
    label: "Active Users",
  },
];

export default function Trusted() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

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
            Trusted By Aspiring Developers Worldwide
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Empowering Students With{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              AI Interview Practice
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {stats.map((item, index) => (
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
                y: -8,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center overflow-hidden"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

              <h3 className="relative z-10 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                {item.number}
              </h3>

              <p className="relative z-10 mt-4 text-gray-400">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}