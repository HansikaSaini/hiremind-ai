"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Mic,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Interviews",
    href: "/dashboard/interviews",
    icon: Mic,
  },
  {
    title: "Resume Analyzer",
    href: "/dashboard/resume",
    icon: FileText,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <aside className="w-[280px] border-r border-white/10 bg-black/40 backdrop-blur-2xl p-6 flex flex-col justify-between">

      {/* Top */}
      <div>

        {/* Logo */}
        <Link href="/dashboard">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
            HireMind AI
          </h1>

        </Link>

        {/* Nav Links */}
        <div className="mt-12 space-y-3">

          {links.map((link, index) => {

            const Icon = link.icon;

            const isActive =
              pathname === link.href;

            return (
              <Link
                key={index}
                href={link.href}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >

                <Icon className="w-5 h-5" />

                <span className="font-medium">
                  {link.title}
                </span>

              </Link>
            );
          })}

        </div>

      </div>

      {/* Bottom */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

        <p className="text-sm text-gray-400">
          AI Interview Score
        </p>

        <h2 className="mt-3 text-4xl font-bold text-cyan-400">
          92%
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Keep improving your communication skills.
        </p>

      </div>

    </aside>
  );
}