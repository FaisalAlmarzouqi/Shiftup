export default function home() {
  return (
    <main className="min-h-screen bg-[#F5F4F1] text-black">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">

        <div className="flex items-center gap-3">

          <img
            src="/shiftuplogo.png"
            alt="ShiftUp Logo"
            className="h-20 w-auto object-contain"
          />

          <h1 className="text-4xl font-bold tracking-tight text-[#1F2A44]">
            ShiftUp
          </h1>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 text-center">

        <div className="mb-6 rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
          Trusted Temporary Work Platform
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#1F2A44] md:text-7xl">
          Find flexible work that fits your life.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-black/70">
          ShiftUp connects trusted workers with businesses looking for
          temporary, Odd-Jobs, and flexible opportunities.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">

          {/* GET STARTED */}
          <a
            href="/login"
            className="rounded-3xl bg-white p-8 text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:scale-[1.02]"
          >

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-[#1F2A44]">
                Get Started
              </h2>

              <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                Employee
              </span>

            </div>

            <p className="text-black/60 leading-relaxed">
              Browse trusted temporary and flexible work opportunities
              tailored for your schedule.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">

              <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                Odd-Jobs
              </div>

              <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                Flexible
              </div>

              <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                Verified
              </div>

            </div>

          </a>

          {/* POST JOB */}
          <a
            href="/employerlogin"
            className="rounded-3xl bg-white p-8 text-left shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:scale-[1.02]"
          >

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-[#1F2A44]">
                Post a Job
              </h2>

              <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                Employer
              </span>

            </div>

            <p className="text-black/60 leading-relaxed">
              Find trusted temporary workers and manage applications
              through ShiftUp.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">

              <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                Fast Hiring
              </div>

              <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                Verified Users
              </div>

              <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                Trusted
              </div>

            </div>

          </a>

        </div>

      </section>

    </main>
  );
}

