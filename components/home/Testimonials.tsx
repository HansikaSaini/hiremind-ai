"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    feedback:
      "HireMind AI completely changed the way I prepare for interviews. The AI feedback feels incredibly realistic.",
  },
  {
    name: "Priya Mehta",
    role: "Software Engineering Student",
    feedback:
      "The voice interview feature helped me improve confidence and communication skills significantly.",
  },
  {
    name: "Rohit Verma",
    role: "React Developer",
    feedback:
      "The analytics dashboard and AI insights gave me clarity on where I needed improvement.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-black overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" />

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
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
            Loved By{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Aspiring Developers
            </span>
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          {testimonials.map((item, index) => (
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

              {/* Quote */}
              <p className="relative z-10 text-gray-300 leading-relaxed text-lg">
                “{item.feedback}”
              </p>

              {/* User */}
              <div className="relative z-10 mt-8 flex items-center gap-4">

                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}