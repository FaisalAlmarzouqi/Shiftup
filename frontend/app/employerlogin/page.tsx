export default function EmployerRegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#ECEBE7] px-6 py-10">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

        {/* LOGO */}
        <div className="mb-6 flex items-center justify-center gap-3">

          <img
            src="/shiftuplogo.png"
            alt="ShiftUp Logo"
            className="h-16 w-auto object-contain"
          />

          <h1 className="text-3xl font-bold tracking-tight text-[#1F2A44]">
            ShiftUp
          </h1>

        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-[#1F2A44]">
          Employer Registration
        </h2>

        <p className="mt-2 text-black/60">
          Register your business and start posting trusted job opportunities.
        </p>

        {/* INPUTS */}
        <div className="mt-8 space-y-4">

          {/* BUSINESS NAME */}
          <input
            type="text"
            placeholder="Business / Company Name"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none transition focus:border-[#B9CAB8]"
          />

          {/* OWNER NAME */}
          <input
            type="text"
            placeholder="Owner / Manager Name"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none transition focus:border-[#B9CAB8]"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Business Email"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none transition focus:border-[#B9CAB8]"
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Business Phone Number"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none transition focus:border-[#B9CAB8]"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none transition focus:border-[#B9CAB8]"
          />

          {/* COMMERCIAL REGISTRATION */}
          <input
            type="text"
            placeholder="Commercial Registration Number (CR)"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none transition focus:border-[#B9CAB8]"
          />


{/* CPR IMAGE */}
<div className="rounded-2xl border border-dashed border-black/15 bg-[#F5F4F1] p-4">

  <label className="mb-2 block text-sm font-medium text-[#1F2A44]">
    Upload CPR Image
  </label>

  <p className="mb-3 text-xs text-black/50">
    Upload a clear image of your CPR for identity verification.
  </p>

  <input
    type="file"
    accept="image/*,.pdf"
    className="w-full text-sm text-black/60"
  />

</div>
          {/* BUSINESS PROOF */}
          <div className="rounded-2xl border border-dashed border-black/15 bg-[#F5F4F1] p-4">

            <label className="mb-2 block text-sm font-medium text-[#1F2A44]">
              Upload Proof of Business / Employer Verification
            </label>

            <p className="mb-3 text-xs text-black/50">
              Examples: Commercial Registration, Office ID, Business License,
              Storefront Photo, or Official Documents.
            </p>

            <input
              type="file"
              accept="image/*,.pdf"
              className="w-full text-sm text-black/60"
            />

          </div>

          {/* REVIEW NOTICE */}
          <div className="rounded-2xl bg-[#F5F4F1] p-4 text-center">

            <p className="text-sm leading-relaxed text-black/70">
              Employer accounts are reviewed manually to ensure
              platform safety and trusted opportunities. Verification
              is usually completed within 24 hours or less.
            </p>

          </div>

          {/* TERMS */}
          <div className="flex items-center gap-3 px-1">

            <input
              type="checkbox"
              className="h-4 w-4 accent-[#1F2A44]"
            />

            <label className="text-sm text-black/70">
              I agree to the{" "}
              <a
                href="/terms"
                className="font-medium text-[#1F2A44] underline"
              >
                Terms and Conditions
              </a>
            </label>

          </div>

          {/* BUTTON */}
          <a
            href="/employer-login"
            className="block w-full rounded-2xl bg-[#1F2A44] py-4 text-center font-medium text-white hover:opacity-90 transition"
          >
            Register Business
          </a>

        </div>

        {/* LOGIN */}
        <p className="mt-6 text-center text-sm text-black/60">

          Already registered as an employer?

          <a
            href="/employer-login"
            className="ml-2 font-medium text-[#1F2A44]"
          >
            Login
          </a>

        </p>

      </div>

    </main>
  );
}