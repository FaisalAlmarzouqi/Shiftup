export default function TermsPage() {
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
              ShiftUp
            </h1>

          </div>

        </div>

      </nav>

      {/* CONTENT */}
      <section className="p-8">

<div className="mx-auto max-h-[85vh] max-w-3xl overflow-hidden rounded-3xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">          <h1 className="text-4xl font-bold text-[#1F2A44]">
            Terms and Conditions
          </h1>
<div className="mt-8 max-h-[55vh] overflow-y-auto pr-2">
          <p className="mt-8 leading-relaxed text-black/70">
            By using ShiftUp, all users agree to follow the platform’s rules
            and guidelines to ensure a safe, respectful, and trustworthy
            environment for both employers and job seekers.
          </p>

          <p className="mt-6 leading-relaxed text-black/70">
            All users are required to provide accurate personal information
            and complete identity verification using a valid national ID.
            Any fake accounts, false information, or fraudulent activity
            may result in account suspension or permanent removal from
            the platform.
          </p>

          <p className="mt-6 leading-relaxed text-black/70">
            ShiftUp acts only as a platform that connects employers and
            job seekers and is not directly responsible for agreements,
            payments, behavior, damages, theft, misconduct, or failure
            to complete work between users. Both parties are responsible
            for communicating clearly and respecting the agreed job terms.
          </p>

          <p className="mt-6 leading-relaxed text-black/70">
            Employers must provide accurate job descriptions, payment
            details, working hours, and requirements before publishing
            any job opportunity. Misleading, illegal, or inappropriate
            job postings are strictly prohibited.
          </p>

          <p className="mt-6 leading-relaxed text-black/70">
            Job seekers are expected to attend work on time, behave
            professionally, and complete the agreed tasks responsibly.
            Repeated no-shows, misconduct, or violations may lead to
            account restrictions or removal from the platform.
          </p>

          <p className="mt-6 leading-relaxed text-black/70">
            ShiftUp reserves the right to review, remove, reject, or
            suspend any account or job posting that violates the
            platform’s policies or creates safety concerns for users.
          </p>

          <p className="mt-6 leading-relaxed text-black/70">
            To improve safety and trust within the platform, certain jobs
            and accounts may be reviewed manually before approval.
          </p>
</div>
{/* ACTION BUTTONS */}
<div className="mt-10 flex flex-col gap-4">

  {/* BACK */}
  <a
    href="/"
    className="rounded-2xl bg-[#F5F4F1] px-6 py-4 text-center font-medium text-[#1F2A44] hover:bg-black/5 transition"
  >
    Back
  </a>

  {/* EMPLOYEE */}
  <a
    href="/register?acceptedTerms=true"
    className="rounded-2xl bg-[#1F2A44] px-6 py-4 text-center font-medium text-white hover:opacity-90 transition"
  >
    Continue as Employee
  </a>

  {/* EMPLOYER */}
  <a
    href="/employer-register?acceptedTerms=true"
    className="rounded-2xl border border-black/10 bg-white px-6 py-4 text-center font-medium text-[#1F2A44] hover:bg-black/5 transition"
  >
    Continue as Employer
  </a>

</div>
        </div>

      </section>

    </main>
  );
}