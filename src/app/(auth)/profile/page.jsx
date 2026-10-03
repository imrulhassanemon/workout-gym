"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  CalendarDays,
  Dumbbell,
  Flame,
  Trophy,
  Target,
  Edit3,
  Camera,
  Check,
  X,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Loading from "./loading";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const {data} = useSession()
  
  const [user, setUser] = useState({
    name: `${data?.user?.name}`,
    email: "imrul@example.com",
    bio: "Consistency over perfection. One workout at a time.",
    joined: "September 2026",
  });
  console.log(data);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    if(data?.user){
      const sessionUser ={
        name: data.user.name || '',
        email: data.user.email||'',

      }
      setUser(sessionUser)
      setFormData(sessionUser)     
    }
  },[data, setUser, setFormData])

  if(!data?.user){
   return <Loading/>
  }


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    updateUser({
      name:formData.name,
    })
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-[#070B14] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#CCFF00]">
            Account
          </p>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your profile and keep track of your fitness journey.
          </p>
        </div>

        {/* Profile Hero */}
        <section className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 via-transparent to-blue-500/5" />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* User Info */}
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#CCFF00] text-3xl font-black text-black shadow-[0_0_35px_rgba(204,255,0,0.12)]">
                    {user?.name?.charAt(0)}
                  </div>

                  <button
                    type="button"
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-[#0B1220] bg-white text-black transition hover:bg-[#CCFF00]"
                    aria-label="Change profile picture"
                  >
                    <Camera size={15} />
                  </button>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <Mail size={15} />
                    {user.email}
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays size={14} />
                    Joined {user.joined}
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Edit3 size={17} />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={Dumbbell}
            value="24"
            label="Workouts"
          />

          <StatCard
            icon={Flame}
            value="8.4K"
            label="Calories Burned"
          />

          <StatCard
            icon={Trophy}
            value="12"
            label="Achievements"
          />

          <StatCard
            icon={Target}
            value="86%"
            label="Goal Progress"
          />
        </section>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Details */}
          <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Personal Information</h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your basic account information
                </p>
              </div>

              <User className="text-slate-600" size={20} />
            </div>

            {isEditing ? (
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full name
                  </label>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] px-4 text-sm text-white outline-none transition focus:border-[#CCFF00]/50 focus:ring-2 focus:ring-[#CCFF00]/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email address
                  </label>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    readOnly
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#070B14] px-4 text-sm text-white outline-none transition focus:border-[#CCFF00]/50 focus:ring-2 focus:ring-[#CCFF00]/10"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Bio
                  </label>

                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#070B14] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CCFF00]/50 focus:ring-2 focus:ring-[#CCFF00]/10"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#CCFF00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d9ff38]"
                  >
                    <Check size={17} />
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5"
                  >
                    <X size={17} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <InfoRow
                  label="Full name"
                  value={user.name}
                />

                <InfoRow
                  label="Email address"
                  value={user.email}
                />

                <div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-slate-600">
                    About
                  </p>

                  <p className="text-sm leading-6 text-slate-400">
                    {user.bio}
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Quick Actions */}
          <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold">Quick Actions</h2>

              <p className="mt-1 text-xs text-slate-500">
                Manage your FitLog account
              </p>
            </div>

            <div className="space-y-3">
              <ActionButton
                icon={Dumbbell}
                title="My Plan"
                description="View your workout plan"
                href="/my-plan"
              />

              <ActionButton
                icon={Trophy}
                title="Achievements"
                description="View your achievements"
                href="/achievements"
              />

              <ActionButton
                icon={Settings}
                title="Settings"
                description="Manage account settings"
                href="/settings"
              />

              <button
              onClick={() => signOut()}
                type="button"
                className="group flex w-full items-center gap-3 rounded-2xl border border-red-500/10 bg-red-500/5 p-4 text-left transition hover:border-red-500/20 hover:bg-red-500/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <LogOut size={18} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-red-400">
                    Sign out
                  </p>

                  <p className="mt-1 text-xs text-red-400/50">
                    Leave your account
                  </p>
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------
   Stat Card
-------------------------------- */

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0B1220] p-5 transition hover:-translate-y-1 hover:border-white/15">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFF00]/10 text-[#CCFF00]">
        <Icon size={19} />
      </div>

      <p className="text-2xl font-black">{value}</p>

      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

/* --------------------------------
   Info Row
-------------------------------- */

function InfoRow({ label, value }) {
  return (
    <div className="border-b border-white/5 pb-4 last:border-0">
      <p className="mb-1 text-xs uppercase tracking-wider text-slate-600">
        {label}
      </p>

      <p className="text-sm font-medium text-slate-200">{value}</p>
    </div>
  );
}

/* --------------------------------
   Action Button
-------------------------------- */

function ActionButton({ icon: Icon, title, description, href }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/10 hover:bg-white/[0.05]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#CCFF00]/10 text-[#CCFF00]">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-200">{title}</p>

        <p className="mt-1 truncate text-xs text-slate-600">
          {description}
        </p>
      </div>

      <ChevronRight
        size={17}
        className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-slate-300"
      />
    </Link>
  );
}