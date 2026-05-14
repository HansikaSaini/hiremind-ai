"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
const navLinks = [
  { title: "Features", href: "#features" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
   const { isSignedIn } = useUser();
  return (
   
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {" "}
        {/* Logo */}{" "}
        <Link href="/" className="relative group">
          {" "}
          <Sparkles className="absolute -top-3 -left-4 w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition duration-300" />{" "}
          <Sparkles className="absolute -top-4 right-0 w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition duration-500" />{" "}
          <Sparkles className="absolute bottom-0 -right-5 w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition duration-700" />{" "}
          <motion.h1
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="relative z-10 text-3xl font-bold tracking-tight bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text cursor-pointer"
          >
            {" "}
            HireMind AI{" "}
          </motion.h1>{" "}
        </Link>{" "}
        {/* Desktop Nav */}{" "}
        <div className="hidden md:flex items-center gap-10">
          {" "}
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {" "}
              {link.title}{" "}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-linear-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />{" "}
            </Link>
          ))}{" "}
        </div>{" "}
        {/* CTA Button */}{" "}
        <div className="flex items-center gap-4">

  {/* Logged Out */}
 <div className="flex items-center gap-4">

  {!isSignedIn ? (
    <>

      <Link href="/sign-in">

        <button className="text-gray-300 hover:text-white transition duration-300">
          Sign In
        </button>

      </Link>

      <Link href="/sign-up">

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="relative overflow-hidden rounded-full px-6 py-3 font-medium text-white border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        >

          <span className="relative z-10">
            Get Started
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

        </motion.button>

      </Link>

    </>
  ) : (
    <>

      <Link href="/dashboard">

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="relative overflow-hidden rounded-full px-6 py-3 font-medium text-white border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >

          Dashboard

        </motion.button>

      </Link>

      <UserButton
        appearance={{
          elements: {
            avatarBox:
              "w-11 h-11 ring-2 ring-white/10 hover:ring-cyan-400 transition duration-300",
          },
        }}
      />

    </>
  )}

</div>

</div>{" "}
      </div>{" "}
    </motion.nav>
  );
}
