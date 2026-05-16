"use client";

export default function EmployerDashboardPage() {
  return (
    <main className="min-h-screen bg-[#ECEBE7] text-black">
      
      {/* NAVBAR */}
      <nav className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <img
              src="/shiftuplogo.png"
              alt="ShiftUp Logo"
              className="h-14 w-auto object-contain sm:h-20"
            />

            <h1 className="text-3xl font-bold tracking-tight text-[#1F2A44] sm:text-4xl">
              ShiftUp
            </h1>
          </div>

          {/* RIGHT BUTTON */}
          <div>
            <button
              onClick={() => (window.location.href = "/employerlogin")}
              className="rounded-2xl bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Employer Login
            </button>
          </div>

        </div>
      </nav>

      {/* CONTENT */}
      <section className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-[1600px]">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search your job posts..."
            className="mb-6 w-full rounded-3xl border border-black/5 bg-white px-6 py-5 text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none"
          />

          {/* TOP EMPLOYERS */}
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">

            {[
              {
                name: "Ali Hassan",
                rating: "4.9",
                job: "Gaming Tournament",
              },
              {
                name: "Sara Media",
                rating: "4.8",
                job: "Photography Event",
              },
              {
                name: "Fahad Group",
                rating: "5.0",
                job: "Restaurant Shift",
              },
            ].map((employer, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-3">

                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 12}`}
                    alt={employer.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-[#1F2A44]">
                      {employer.name}
                    </h3>

                    <p className="text-sm text-black/50">
                      {employer.job}
                    </p>
                  </div>

                </div>

                <div className="rounded-full bg-[#D6E0D4] px-3 py-2 text-sm font-medium text-[#1F2A44]">
                  ⭐ {employer.rating}
                </div>
              </div>
            ))}

          </div>

          {/* TOP ROW */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* CREATE JOB BUTTON */}
            <button className="rounded-2xl bg-[#1F2A44] px-6 py-4 font-medium text-white transition hover:opacity-90">
              + Create New Job
            </button>

            {/* PROFILE */}
            <div className="flex items-center gap-3 rounded-2xl bg-[#F5F4F1] px-4 py-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCE3EA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-[#1F2A44]"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 1114 0H5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-[#1F2A44]">
                  Guest Employer
                </p>

                <p className="text-sm text-black/50">
                  Verified Business
                </p>
              </div>

            </div>

          </div>

          {/* JOB POSTS */}
          <div className="grid gap-5 md:grid-cols-2">

            {[
              {
                title: "Restaurant Evening Shift",
                image:
                  "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
                applicants: "18 Applicants",
                views: "124 Views",
                status: "Active",
              },
              {
                title: "Gaming Event Staff",
                image:
                  "https://images.unsplash.com/photo-1542751371-adc38448a05e",
                applicants: "26 Applicants",
                views: "201 Views",
                status: "Popular",
              },
              {
                title: "Photography Assistant",
                image:
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                applicants: "11 Applicants",
                views: "87 Views",
                status: "Open",
              },
              {
                title: "Coffee Shop Cashier",
                image:
                  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
                applicants: "32 Applicants",
                views: "310 Views",
                status: "Trending",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                {/* IMAGE */}
                <div className="relative h-52 w-full sm:h-60">

                  <img
                    src={`${job.image}?auto=format&fit=crop&w=900&q=80`}
                    alt={job.title}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute right-4 top-4 rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                    {job.status}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h2 className="text-2xl font-bold text-[#1F2A44]">
                    {job.title}
                  </h2>

                  <p className="mt-2 text-black/60">
                    Posted 2 days ago
                  </p>

                  {/* STATS */}
                  <div className="mt-5 flex flex-wrap gap-3">

                    <div className="rounded-full bg-[#F5F4F1] px-4 py-2 text-sm">
                      {job.applicants}
                    </div>

                    <div className="rounded-full bg-[#F5F4F1] px-4 py-2 text-sm">
                      {job.views}
                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="mt-6 flex flex-wrap gap-3">

                    <button className="flex-1 rounded-2xl bg-[#1F2A44] px-5 py-3 text-white transition hover:opacity-90">
                      Applicants
                    </button>

                    <button className="rounded-2xl bg-[#F5F4F1] px-5 py-3 transition hover:bg-[#ECEBE7]">
                      Edit
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* QUICK STATS */}
          <div className="mt-6 rounded-3xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

            <h2 className="text-2xl font-bold text-[#1F2A44]">
              Employer Stats
            </h2>

            <div className="mt-5 grid gap-4 text-black/70 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-[#F8F8F6] p-4">
                Jobs Posted: 12
              </div>

              <div className="rounded-2xl bg-[#F8F8F6] p-4">
                Total Applicants: 48
              </div>

              <div className="rounded-2xl bg-[#F8F8F6] p-4">
                Verified Status: Active
              </div>

              <div className="rounded-2xl bg-[#F8F8F6] p-4">
                Average Rating: ⭐ 4.9
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}