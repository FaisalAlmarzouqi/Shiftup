export default function EmployerDashboardPage() {
  return (
    <main className="min-h-screen bg-[#ECEBE7] text-black">

      {/* NAVBAR */}
      <nav className="border-b border-black/5 bg-white">

        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-10 py-3">

          <div className="flex items-center gap-3">

            <img
              src="/shiftuplogo.png"
              alt="ShiftUp Logo"
              className="h-20 w-auto object-contain"
            />

            <h1 className="text-4xl font-bold tracking-tight text-[#1F2A44]">
              Employer Dashboard
            </h1>

          </div>

          <button className="rounded-2xl bg-[#1F2A44] px-6 py-3 font-medium text-white">
            + Create Job
          </button>

        </div>

      </nav>

      {/* CONTENT */}
      <section className="p-8">

        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-9">

            <input
              type="text"
              placeholder="Search your job posts..."
              className="mb-6 w-full rounded-3xl border border-black/5 bg-white px-6 py-5 text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none"
            />

            {/* JOB CARD */}
            <div className="rounded-3xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-[#1F2A44]">
                    Restaurant Evening Shift
                  </h2>

                  <p className="mt-2 text-black/60">
                    Posted 2 days ago
                  </p>

                </div>

                <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                  Active
                </span>

              </div>

              <div className="mt-5 flex gap-3">

                <div className="rounded-full bg-[#F5F4F1] px-4 py-2 text-sm">
                  18 Applicants
                </div>

                <div className="rounded-full bg-[#F5F4F1] px-4 py-2 text-sm">
                  124 Views
                </div>

              </div>

              <div className="mt-6 flex gap-3">

                <button className="rounded-2xl bg-[#1F2A44] px-5 py-3 text-white">
                  View Applicants
                </button>

                <button className="rounded-2xl bg-[#F5F4F1] px-5 py-3">
                  Edit Job
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-3">

            <div className="rounded-3xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

              <h2 className="text-2xl font-bold text-[#1F2A44]">
                Employer Stats
              </h2>

              <div className="mt-5 space-y-4 text-black/70">

                <p>Jobs Posted: 12</p>
                <p>Total Applicants: 48</p>
                <p>Verified Status: Active</p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}