export default function Loading() {
  return (
    <main className="min-h-screen bg-[#070B14] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-3 w-20 rounded bg-[#CCFF00]/20" />

          <div className="mt-3 h-9 w-44 rounded-lg bg-slate-800" />

          <div className="mt-2 h-3 w-72 max-w-full rounded bg-slate-800/70" />
        </div>

        {/* Profile Hero Skeleton */}
        <section className="mb-6 rounded-3xl border border-white/10 bg-[#0B1220] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* User */}
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="h-24 w-24 shrink-0 rounded-3xl bg-slate-800" />

              {/* User Info */}
              <div className="space-y-3">
                <div className="h-6 w-40 rounded-md bg-slate-800" />

                <div className="h-3 w-48 rounded bg-slate-800/80" />

                <div className="h-3 w-28 rounded bg-slate-800/60" />
              </div>
            </div>

            {/* Edit Button */}
            <div className="h-10 w-32 rounded-xl bg-slate-800" />
          </div>
        </section>

        {/* Stats Skeleton */}
        <section className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#0B1220] p-5"
            >
              {/* Icon */}
              <div className="mb-4 h-10 w-10 rounded-xl bg-slate-800" />

              {/* Number */}
              <div className="h-6 w-16 rounded-md bg-slate-800" />

              {/* Label */}
              <div className="mt-2 h-3 w-24 rounded bg-slate-800/60" />
            </div>
          ))}
        </section>

        {/* Bottom Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Personal Information */}
          <section className="min-h-[350px] rounded-3xl border border-white/10 bg-[#0B1220] p-6 lg:col-span-2">
            {/* Section Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <div className="h-5 w-48 rounded bg-slate-800" />

                <div className="mt-2 h-3 w-40 rounded bg-slate-800/60" />
              </div>

              {/* User icon */}
              <div className="h-5 w-5 rounded bg-slate-800" />
            </div>

            {/* Full Name */}
            <div className="border-b border-white/5 pb-5">
              <div className="h-2.5 w-20 rounded bg-slate-800/60" />

              <div className="mt-2 h-4 w-32 rounded bg-slate-800" />
            </div>

            {/* Email */}
            <div className="border-b border-white/5 py-5">
              <div className="h-2.5 w-28 rounded bg-slate-800/60" />

              <div className="mt-2 h-4 w-52 rounded bg-slate-800" />
            </div>

            {/* About */}
            <div className="pt-5">
              <div className="h-2.5 w-16 rounded bg-slate-800/60" />

              <div className="mt-3 space-y-2">
                <div className="h-3 w-full max-w-lg rounded bg-slate-800/60" />
                <div className="h-3 w-3/4 rounded bg-slate-800/60" />
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="h-5 w-32 rounded bg-slate-800" />

              <div className="mt-2 h-3 w-40 rounded bg-slate-800/60" />
            </div>

            {/* Action Items */}
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3"
                >
                  {/* Icon */}
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-800" />

                  {/* Text */}
                  <div className="flex-1 space-y-2">
                    <div className="h-3.5 w-20 rounded bg-slate-800" />

                    <div className="h-2.5 w-32 rounded bg-slate-800/60" />
                  </div>

                  {/* Arrow */}
                  <div className="h-4 w-4 rounded bg-slate-800" />
                </div>
              ))}

              {/* Sign Out */}
              <div className="flex items-center gap-3 rounded-2xl border border-red-500/10 bg-red-500/5 p-3">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-500/10" />

                <div className="flex-1 space-y-2">
                  <div className="h-3.5 w-20 rounded bg-red-500/20" />

                  <div className="h-2.5 w-28 rounded bg-red-500/10" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}