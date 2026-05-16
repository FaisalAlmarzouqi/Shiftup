"use client";

import { useState } from "react";

export default function EmployerLoginPage() {
  const [error, setError] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F4F1] px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">

        <h1 className="text-4xl font-bold text-[#1F2A44]">
          Employer Login
        </h1>

        <p className="mt-3 text-black/60">
          Login to manage jobs and applicants on ShiftUp.
        </p>

        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Employer Email"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none focus:border-[#B9CAB8]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-black/10 px-5 py-4 text-black placeholder:text-black/40 outline-none focus:border-[#B9CAB8]"
          />

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            onClick={() => setError("You must create an account first.")}
            className="block w-full rounded-2xl bg-[#1F2A44] py-4 text-center text-white transition hover:opacity-90"
          >
            Login as employer
          </button>

        </div>

        <p className="mt-6 text-center text-sm text-black/60">
          Don’t have an employer account?
          <a
            href="/employerlogin"
            className="ml-2 font-medium text-[#1F2A44]"
          >
            Register
          </a>
        </p>

      </div>

    </main>
  );
}