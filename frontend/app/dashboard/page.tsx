"use client";
import { useState } from "react";

export default function DashboardPage() {
    const [chatOpen, setChatOpen] = useState(false);
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

          <div className="flex items-center gap-3">

            <button className="rounded-full px-5 py-2 text-sm font-medium hover:bg-black/5 transition">
              Contact
            </button>

            <button className="rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition">
              Your Account
            </button>

          </div>

        </div>

      </nav>

      {/* DASHBOARD */}
      <section className="p-8">

        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">

          {/* LEFT SIDE */}
          <div className="col-span-9">

            {/* SEARCH */}
            <div className="mb-6 flex items-center gap-4">

              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full rounded-3xl border border-black/5 bg-white px-6 py-5 text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none transition focus:border-[#B9CAB8]"
              />

              <button className="rounded-3xl bg-[#B9CAB8] px-6 py-5 font-medium hover:opacity-90 transition">
                Filter
              </button>

            </div>

            {/* JOB CARDS */}
            <div className="grid gap-5">

              {/* PHOTOGRAPHY */}
              <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

                <div className="flex items-start justify-between">

                  <div>
                    <h2 className="text-2xl font-bold text-[#1F2A44]">
                      Photography Assistant
                    </h2>

                    <p className="mt-2 text-black/60">
                      Assist with equipment setup and lighting during a private photoshoot.
                    </p>
                  </div>

                  <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                    Verified
                  </span>

                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    4 PM - 9 PM
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Manama
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    35 BD
                  </div>

                </div>

                <button className="mt-5 rounded-2xl bg-[#1F2A44] px-6 py-3 font-medium text-white hover:scale-[1.02] transition">
                  Apply Now
                </button>

              </div>

              {/* BACKGROUND ACTOR */}
              <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

                <div className="flex items-start justify-between">

                  <div>
                    <h2 className="text-2xl font-bold text-[#1F2A44]">
                      Background Actor
                    </h2>

                    <p className="mt-2 text-black/60">
                      Looking for extras for a short commercial shoot this weekend.
                    </p>
                  </div>

                  <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                    Trusted
                  </span>

                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Weekend
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Seef
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    50 BD
                  </div>

                </div>

                <button className="mt-5 rounded-2xl bg-[#1F2A44] px-6 py-3 font-medium text-white hover:scale-[1.02] transition">
                  Apply Now
                </button>

              </div>
              {/* GAMING EVENT */}
              <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

                <div className="flex items-start justify-between">

                  <div>
                    <h2 className="text-2xl font-bold text-[#1F2A44]">
                      Gaming Event Assistant
                    </h2>

                    <p className="mt-2 text-black/60">
                      Help manage registrations and setup for a local gaming tournament.
                    </p>
                  </div>

                  <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                    VIP
                  </span>

                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Friday
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Isa Town
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    45 BD
                  </div>

                </div>

                <button className="mt-5 rounded-2xl bg-[#1F2A44] px-6 py-3 font-medium text-white hover:scale-[1.02] transition">
                  Apply Now
                </button>

              </div>
              {/* PET SITTING */}
              <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

                <div className="flex items-start justify-between">

                  <div>
                    <h2 className="text-2xl font-bold text-[#1F2A44]">
                      Pet Sitting Helper
                    </h2>

                    <p className="mt-2 text-black/60">
                      Help care for two small dogs during evening hours.
                    </p>
                  </div>

                  <span className="rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                    Verified
                  </span>

                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Evening Shift
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    Riffa
                  </div>

                  <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                    20 BD
                  </div>

                </div>

                <button className="mt-5 rounded-2xl bg-[#1F2A44] px-6 py-3 font-medium text-white hover:scale-[1.02] transition">
                  Apply Now
                </button>

              </div>



            </div>

          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="col-span-3">

            {/* PROFILE */}
            <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B9CAB8] text-xl font-bold text-[#1F2A44]">
                  F
                </div>

                <div>
                  <h3 className="font-bold text-[#1F2A44]">
                    Faisal
                  </h3>

                  <p className="text-sm text-black/60">
                    Verified User
                  </p>
                </div>

              </div>

            </div>

            {/* SUBSCRIPTION */}
            <div className="mt-6 rounded-3xl bg-[#1F2A44] p-6 text-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">

              <h2 className="text-3xl font-bold">
                ShiftUp VIP
              </h2>

              <p className="mt-3 text-white/70 leading-relaxed">
                Unlock more daily applications and trusted opportunities.
              </p>

              <a
                href="/vip-dashboard"
                className="mt-6 block rounded-2xl bg-white px-5 py-3 text-center font-medium text-[#1F2A44] hover:scale-[1.02] transition"
              >
                View VIP Dashboard
              </a>

            </div>

          </div>

        </div>

      </section>
{/* SHIFTUP CHAT */}
<div className="fixed bottom-6 right-6 z-50">

  {/* CHAT WINDOW */}
  {chatOpen && (
<div
  className="mb-3 flex h-[420px] w-[300px] flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
    {/* HEADER */}
    <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">

      <div className="flex items-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D6E0D4] font-bold text-[#1F2A44]">
          S
        </div>

        <div>

<h2 className="text-sm font-semibold text-[#1F2A44]">            ShiftUp Assistant
          </h2>

          <p className="text-xs text-black/40">
            AI Support
          </p>

        </div>

      </div>

      <button
  onClick={() => {
    const chat = document.getElementById("shiftup-chat");
    if (chat) chat.style.display = "none";
  }}
  className="text-black/40 hover:text-black transition"
>
  ✕
</button>

    </div>

    {/* BODY */}
<div className="flex-1 space-y-3 overflow-y-auto bg-[#FCFCFA] p-4">
      {/* AI MESSAGE */}
      <div className="max-w-[85%] rounded-[22px] rounded-bl-md bg-[#F3F3F1] px-4 py-3 text-sm leading-relaxed text-black/70">
        Welcome to ShiftUp. How can we help you today?
      </div>

      {/* OPTIONS */}
      <div className="flex flex-wrap gap-2">

        <button className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 transition">
          Find Jobs
        </button>

        <button className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 transition">
          VIP Plans
        </button>

        <button className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 transition">
          Employer Help
        </button>

        <button className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 transition">
          Contact Support
        </button>

      </div>

      {/* USER */}
      <div className="ml-auto max-w-[80%] rounded-[22px] rounded-br-md bg-[#1F2A44] px-4 py-3 text-sm text-white">
        I want to find flexible photography jobs.
      </div>

      {/* AI */}
      <div className="max-w-[85%] rounded-[22px] rounded-bl-md bg-[#F3F3F1] px-4 py-3 text-sm leading-relaxed text-black/70">
        Great choice. We currently have verified photography assistant opportunities available in Manama.
      </div>

    </div>

    {/* FOOTER */}
<div className="border-t border-black/5 p-3">
      <div className="flex items-center gap-3">

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-full border border-black/5 bg-[#F8F8F6] px-5 py-3 text-sm outline-none focus:border-[#B9CAB8]"
        />

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2A44] text-white hover:scale-[1.03] transition">
          →
        </button>

      </div>

    </div>

  </div>
)}
  {/* FLOAT BUTTON */}
  <button
  onClick={() => setChatOpen(!chatOpen)}
  className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1F2A44] text-2xl text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:scale-105 transition"
>
  💬
</button>

</div>
    </main>
  );
}