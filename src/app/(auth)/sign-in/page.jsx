"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const handelSignIn = async(e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get("email")
    const password = formData.get('password')

    const {data, error} = await signIn.email({
      email: email,
      password:password,
      callbackURL:'/'
    })
    console.log(data, error);

  }



  return (
    <main className="min-h-screen bg-[#070B14] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220] shadow-2xl lg:grid-cols-2">
          {/* Left Content */}
          <section className="relative hidden overflow-hidden bg-[#101827] p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">
            {/* Background decorations */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#CCFF00]/10 blur-3xl" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Logo */}
            <div className="relative z-10">
              <Link href="/" className="flex w-fit items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CCFF00] text-xl font-black text-black">
                  F
                </div>

                <span className="text-xl font-bold tracking-tight">
                  Fit<span className="text-[#CCFF00]">Log</span>
                </span>
              </Link>
            </div>

            {/* Hero */}
            <div className="relative z-10 max-w-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CCFF00]/20 bg-[#CCFF00]/10">
                <ShieldCheck className="h-6 w-6 text-[#CCFF00]" />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#CCFF00]">
                Welcome back
              </p>

              <h1 className="text-4xl font-black leading-tight xl:text-5xl">
                Your progress
                <br />
                <span className="text-white/40">is waiting.</span>
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
                Sign in to continue tracking your workouts, building better
                habits, and reaching your fitness goals.
              </p>
            </div>

            {/* Bottom text */}
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest text-slate-600">
                Train with intent. Log every set.
              </p>
            </div>
          </section>

          {/* Sign In Form */}
          <section className="flex items-center p-6 sm:p-10 lg:p-12 xl:p-16">
            <div className="mx-auto w-full max-w-md">
              {/* Mobile Logo */}
              <div className="mb-12 flex items-center gap-3 lg:hidden">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00] font-black text-black">
                    F
                  </div>

                  <span className="text-xl font-bold">
                    Fit<span className="text-[#CCFF00]">Log</span>
                  </span>
                </Link>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold tracking-wide text-[#CCFF00]">
                  SIGN IN
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Welcome back
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Enter your credentials to access your account.
                </p>
              </div>

              <form onSubmit={handelSignIn} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#CCFF00]/60 focus:ring-4 focus:ring-[#CCFF00]/5"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-slate-300"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-[#CCFF00] transition hover:text-[#dfff66]"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <Lock
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      required
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] pl-12 pr-12 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#CCFF00]/60 focus:ring-4 focus:ring-[#CCFF00]/5"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 cursor-pointer rounded border-white/20 bg-[#070B14] accent-[#CCFF00]"
                  />

                  <span className="text-sm text-slate-400">
                    Remember me
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#CCFF00] font-bold text-black transition-all hover:bg-[#d9ff38] hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] active:scale-[0.98]"
                >
                  Sign in

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-xs uppercase tracking-wider text-slate-600">
                  or
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.78-.07-1.53-.22-2.25H12v4.26h5.22a4.46 4.46 0 0 1-1.94 2.93v2.45h3.14c1.84-1.69 2.93-4.18 2.93-7.39Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.75Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.54 13.83a5.86 5.86 0 0 1 0-3.66V7.64H3.3a9.75 9.75 0 0 0 0 8.72l3.24-2.53Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.14c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.84 3.23 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.7 5.39l3.24 2.53C7.31 7.86 9.46 6.14 12 6.14Z"
                  />
                </svg>

                Continue with Google
              </button>

              {/* Sign Up */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-white transition hover:text-[#CCFF00]"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}