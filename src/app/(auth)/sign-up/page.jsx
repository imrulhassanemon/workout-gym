"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const password = formData.get("password");
    const email = formData.get("email");

    console.log("hello", name, email, password);

    if (password.length < 8) {
      return toast.error("Password is too short");
    } else {
      const { data, error } = await signUp.email({
        name: name,
        email: email,
        password: password,
        callbackURL: "/",
      });
      console.log(data, error);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B14] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] shadow-2xl lg:grid-cols-2">
          {/* Left Side */}
          <section className="relative hidden overflow-hidden bg-[#101827] p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">
            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#CCFF00]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CCFF00] text-xl font-black text-black">
                  F
                </div>

                <span className="text-xl font-bold tracking-tight">
                  Fit<span className="text-[#CCFF00]">Log</span>
                </span>
              </div>

              <div className="max-w-md">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#CCFF00]">
                  Start your journey
                </p>

                <h1 className="text-4xl font-black leading-tight xl:text-5xl">
                  Build better habits.
                  <br />
                  <span className="text-white/40">Become stronger.</span>
                </h1>

                <p className="mt-6 max-w-sm leading-7 text-slate-400">
                  Create your account and start tracking your workouts,
                  progress, and daily fitness goals in one place.
                </p>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              {[
                "Track your workouts",
                "Monitor your progress",
                "Build consistent habits",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#CCFF00]" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Sign Up Form */}
          <section className="p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="mx-auto max-w-md">
              {/* Mobile Logo */}
              <div className="mb-10 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00] font-black text-black">
                  F
                </div>

                <span className="text-xl font-bold">
                  Fit<span className="text-[#CCFF00]">Log</span>
                </span>
              </div>

              <div className="mb-8">
                <p className="mb-2 text-sm font-medium text-[#CCFF00]">
                  CREATE ACCOUNT
                </p>

                <h2 className="text-3xl font-bold tracking-tight">
                  Welcome to FitLog
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Create your account to start your fitness journey.
                </p>
              </div>

              <form onSubmit={handleSignUp} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#CCFF00]/60 focus:ring-2 focus:ring-[#CCFF00]/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#CCFF00]/60 focus:ring-2 focus:ring-[#CCFF00]/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#CCFF00]/60 focus:ring-2 focus:ring-[#CCFF00]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[#CCFF00]"
                  />

                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-white transition hover:text-[#CCFF00]"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-white transition hover:text-[#CCFF00]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#CCFF00] font-bold text-black transition hover:bg-[#d7ff33] hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] active:scale-[0.98]"
                >
                  Create account
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {/* Login */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-white transition hover:text-[#CCFF00]"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
