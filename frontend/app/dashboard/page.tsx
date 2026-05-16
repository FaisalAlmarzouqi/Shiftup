"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#ECEBE7] text-black">
      {/* NAVBAR */}
      <nav className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/shiftuplogo.png"
              alt="ShiftUp Logo"
              className="h-14 w-auto object-contain sm:h-20"
            />

            <h1 className="text-2xl font-bold tracking-tight text-[#2D5B5C] sm:text-4xl">
              ShiftUp
            </h1>
          </div>

          {/* BUTTON */}
          <div className="w-full sm:w-auto">
            <button
              onClick={() => (window.location.href = "/login")}
              className="w-full rounded-full bg-[#2D5B5C] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
            >
              Get started as a employee
            </button>
          </div>
        </div>
      </nav>

      {/* DASHBOARD */}
      <section className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-9">
            
            {/* SEARCH */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full rounded-3xl border border-black/5 bg-white px-6 py-4 text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] outline-none transition focus:border-[#A0CDCE]"
              />

              <button className="rounded-3xl bg-[#A0CDCE] px-6 py-4 font-medium transition hover:opacity-90">
                Filter
              </button>
            </div>

            {/* JOB CARDS */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Photography Assistant",
                  desc: "Assist with lighting and camera setup.",
                  tag: "Verified",
                  time: "4 PM - 9 PM",
                  location: "Manama",
                  pay: "35 BD",
                  image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                },
                {
                  title: "Background Actor",
                  desc: "Extras needed for a commercial shoot.",
                  tag: "Trusted",
                  time: "Weekend",
                  location: "Seef",
                  pay: "50 BD",
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                },
                {
                  title: "Gaming Event Assistant",
                  desc: "Help organize a local gaming tournament.",
                  tag: "VIP",
                  time: "Friday",
                  location: "Isa Town",
                  pay: "45 BD",
                  image:
                    "https://images.unsplash.com/photo-1542751371-adc38448a05e",
                },
                {
                  title: "Pet Sitting Helper",
                  desc: "Care for two small dogs during evenings.",
                  tag: "Verified",
                  time: "Evening",
                  location: "Riffa",
                  pay: "20 BD",
                  image:
                    "https://images.unsplash.com/photo-1517849845537-4d257902454a",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[28px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition hover:-translate-y-1"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 w-full sm:h-52">
                    <img
                      src={`${job.image}?auto=format&fit=crop&w=900&q=80`}
                      alt={job.title}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute right-4 top-4 rounded-full bg-[#A0CDCE] px-3 py-1 text-xs font-medium text-[#2D5B5C] backdrop-blur-md">
                      {job.tag}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    {/* PROFILE + TITLE */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEEEE]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6 text-[#2D5B5C]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 1114 0H5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <div>
                        <h2 className="text-lg font-bold text-[#2D5B5C] sm:text-xl">
                          {job.title}
                        </h2>

                        <p className="text-sm text-black/50">
                          Posted recently
                        </p>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-sm leading-relaxed text-black/60">
                      {job.desc}
                    </p>

                    {/* INFO */}
                    <div className="mt-5 flex flex-wrap gap-2 text-sm">
                      <div className="rounded-full bg-[#F5F4F1] px-3 py-2 text-[#2D5B5C]">
                        ⏰ {job.time}
                      </div>

                      <div className="rounded-full bg-[#F5F4F1] px-3 py-2 text-[#2D5B5C]">
                        📍 {job.location}
                      </div>

                      <div className="rounded-full bg-[#F5F4F1] px-3 py-2 text-[#2D5B5C]">
                        💰 {job.pay}
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button className="mt-5 w-full rounded-2xl bg-[#BE220D] py-3 font-medium text-white transition hover:opacity-90">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-gray-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 1114 0H5z"
                      clipRule="evenodd"
                    />
                  </svg>
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
          </div>
        </div>
      </section>

      {/* SHIFTUP CHAT */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        
        {/* CHAT WINDOW */}
        {chatOpen && (
          <div className="mb-3 flex h-[420px] w-[90vw] max-w-[340px] flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            
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
                className="text-black/40 transition hover:text-black"
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
                Great choice. We currently have verified photography assistant
                opportunities available in Manama.
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

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BE220D] text-white transition hover:scale-[1.03]">
                  →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FLOAT BUTTON */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2D5B5C] text-2xl text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition hover:scale-105"
        >
          💬
        </button>
      </div>
    </main>
  );
}