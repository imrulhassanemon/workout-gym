"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell, Bookmark, User } from "lucide-react";
import { useSession } from "@/lib/auth-client";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const {data} = useSession()
const navLinks = [
  {
    name: "Workouts",
    href: "/workouts",
  },
  {
    name: "My Plan",
    href: "/my-plan",
  },
  ...(data?.session?[{
    name:"Profile",
    href:'/profile'
  }]:[])
];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00] font-black text-black shadow-[0_0_20px_rgba(204,255,0,0.08)] transition-transform duration-200 group-hover:scale-105">
            F
          </div>

          <div className="text-xl font-black tracking-tight text-white">
            Fit<span className="text-[#CCFF00]">Log</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-3 md:flex">
        {
            data?.session? <>
             {/* Profile */}
          <Link
            href="/profile"
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            aria-label="Profile"
          >
            <User size={18} />
          </Link>  {/* Plan */}
          </>: <><Link
            href="/sign-up"
            className="group flex items-center gap-2 rounded-xl bg-[#CCFF00] px-4 py-2.5 text-sm font-bold text-black transition hover:bg-[#d9ff38] hover:shadow-[0_0_20px_rgba(204,255,0,0.12)]"
          >
            <span>Sign Up</span>
          </Link>

          {/* SignIn */}
          <Link
            href="/sign-in"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <span>Sign In</span>
          </Link></>
        }

         
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:bg-white/[0.06] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#070B14] px-4 pb-5 pt-4 md:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {/* Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <div className="my-3 h-px bg-white/10" />

            {/* Mobile Actions */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#CCFF00] px-4 py-3 text-sm font-bold text-black"
              >
                <Dumbbell size={17} />
                Plan
                <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-xs">
                  3
                </span>
              </Link>

              <Link
                href="/saved"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300"
              >
                <Bookmark size={17} />
                Saved
                <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-xs">
                  5
                </span>
              </Link>
            </div>

            {/* Profile */}
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300"
            >
              <User size={18} />
              Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
