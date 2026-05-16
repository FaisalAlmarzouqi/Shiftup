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

            <h1 className="text-4xl font-bold tracking-tight text-[#2D5B5C]">
              ShiftUp
            </h1>

          </div>

          <div className="flex items-center gap-3">

            <button className="rounded-full px-5 py-2 text-sm font-medium hover:bg-black/5 transition">
              Contact
            </button>

            <button className="rounded-full bg-[#2D5B5C] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition">
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
                className="w-full rounded-3xl border border-black/5 bg-white px-6 py-5 text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none transition focus:border-[#A0CDCE]"
              />

              <button className="rounded-3xl bg-[#A0CDCE] px-6 py-5 font-medium hover:opacity-90 transition">
                Filter
              </button>

            </div>

            {/* JOB CARDS */}
            <div className="grid gap-5">

              {/* JOB CARD */}
              {[
                {
                  title: "Photography Assistant",
                  desc: "Assist with equipment setup and lighting during a private photoshoot.",
                  tag: "Verified",
                  time: "4 PM - 9 PM",
                  location: "Manama",
                  pay: "35 BD",
                },
                {
                  title: "Background Actor",
                  desc: "Looking for extras for a short commercial shoot this weekend.",
                  tag: "Trusted",
                  time: "Weekend",
                  location: "Seef",
                  pay: "50 BD",
                },
                {
                  title: "Gaming Event Assistant",
                  desc: "Help manage registrations and setup for a local gaming tournament.",
                  tag: "VIP",
                  time: "Friday",
                  location: "Isa Town",
                  pay: "45 BD",
                },
                {
                  title: "Pet Sitting Helper",
                  desc: "Help care for two small dogs during evening hours.",
                  tag: "Verified",
                  time: "Evening Shift",
                  location: "Riffa",
                  pay: "20 BD",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                >

                  <div className="flex items-start justify-between">

                    <div>
                      <h2 className="text-2xl font-bold text-[#2D5B5C]">
                        {job.title}
                      </h2>

                      <p className="mt-2 text-black/60">
                        {job.desc}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#A0CDCE] px-4 py-2 text-sm font-medium text-[#2D5B5C]">
                      {job.tag}
                    </span>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm">

                    <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                      {job.time}
                    </div>

                    <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                      {job.location}
                    </div>

                    <div className="rounded-full bg-[#F5F4F1] px-4 py-2">
                      {job.pay}
                    </div>

                  </div>

                  <button className="mt-5 rounded-2xl bg-[#BE220D] px-6 py-3 font-medium text-white hover:scale-[1.02] transition">
                    Apply Now
                  </button>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="col-span-3">

            {/* PROFILE */}
            <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A0CDCE] text-xl font-bold text-[#2D5B5C]">
                  F
                </div>

                <div>
                  <h3 className="font-bold text-[#2D5B5C]">
                    Guest User
                  </h3>

                  <p className="text-sm text-black/60">
                    Not Verified Yet
                  </p>
                </div>

              </div>

            </div>

            {/* SUBSCRIPTION */}
            <div className="mt-6 rounded-3xl bg-[#2D5B5C] p-6 text-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">

              <h2 className="text-3xl font-bold">
                ShiftUp VIP
              </h2>

              <p className="mt-3 text-white/70 leading-relaxed">
                Unlock more daily applications and trusted opportunities.
              </p>

            <a
  href="/vip-dashboard"
  className="mt-6 block rounded-2xl bg-white px-5 py-3 text-center font-medium text-[#2D5B5C] hover:scale-[1.02] transition"
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
          <div className="mb-3 flex h-[420px] w-[300px] flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A0CDCE] font-bold text-[#2D5B5C]">
                  S
                </div>

                <div>

                  <h2 className="text-sm font-semibold text-[#2D5B5C]">
                    ShiftUp Assistant
                  </h2>

                  <p className="text-xs text-black/40">
                    AI Support
                  </p>

                </div>

              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="text-black/40 hover:text-black transition"
              >
                ✕
              </button>

            </div>

            {/* BODY */}
            <div className="flex-1 space-y-3 overflow-y-auto bg-[#FCFCFA] p-4">

              <div className="max-w-[85%] rounded-[22px] rounded-bl-md bg-[#F3F3F1] px-4 py-3 text-sm leading-relaxed text-black/70">
                Welcome to ShiftUp. How can we help you today?
              </div>

              <div className="ml-auto max-w-[80%] rounded-[22px] rounded-br-md bg-[#2D5B5C] px-4 py-3 text-sm text-white">
                I want to find flexible photography jobs.
              </div>

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
                  className="flex-1 rounded-full border border-black/5 bg-[#F8F8F6] px-5 py-3 text-sm outline-none focus:border-[#A0CDCE]"
                />

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BE220D] text-white hover:scale-[1.03] transition">
                  →
                </button>

              </div>

            </div>

          </div>
        )}

        {/* FLOAT BUTTON */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2D5B5C] text-2xl text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:scale-105 transition"
        >
          💬
        </button>

      </div>

    </main>
  );
}