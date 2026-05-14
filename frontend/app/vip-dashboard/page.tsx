export default function VipDashboardPage() {
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
              ShiftUp VIP
            </h1>

          </div>

          <button className="rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition">
            Your Account
          </button>

        </div>

      </nav>

      {/* PAGE */}
<section className="px-8 pb-8 pt-4">

        <div className="mx-auto max-w-[1600px]">

          {/* HEADER */}
          <div className="mb-8">

            <h1 className="text-1xl font-bold text-[#1F2A44]">
              Subscription Plans
            </h1>

        

          </div>

          {/* PLANS */}
<div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:grid-cols-2">
            {/* FREE */}
            <div className="border-r border-black/5 bg-[#F8F8F6] p-8">

              <div className="mb-6">

                <div className="inline-block rounded-full bg-[#D6E0D4] px-4 py-2 text-sm font-medium text-[#1F2A44]">
                  Basic
                </div>

              </div>

              <h2 className="text-4xl font-bold text-[#1F2A44]">
                Free
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-black/60">
                Browse jobs and apply to a limited number
                of opportunities daily.
              </p>

              <div className="mt-12">

                <h3 className="text-6xl font-bold text-[#1F2A44]">
                  0 BD
                </h3>

                <p className="mt-2 text-sm text-black/40">
                  forever
                </p>

              </div>

              <div className="mt-12 space-y-5 text-black/70">

                <p>• Browse public opportunities</p>
                <p>• Limited applications daily</p>
                <p>• Standard verification</p>
                <p>• Access normal listings</p>

              </div>

              <button className="mt-14 w-full rounded-2xl border border-black/10 bg-white py-4 font-medium hover:bg-black/5 transition">
                Current Plan
              </button>

            </div>

            {/* TRUSTED+ */}
            <div className="bg-[#1F2A44] p-8 text-white">

              <div className="mb-6">

                <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  Premium Trusted
                </div>

              </div>

              <h2 className="text-4xl font-bold">
                Trusted+
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Unlock priority placement, premium listings,
                and unlimited applications.
              </p>

              <div className="mt-12">

                <h3 className="text-6xl font-bold">
                  7 BD
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  per month
                </p>

              </div>

              <div className="mt-12 space-y-5 text-white/80">

                <p>• Trusted verification badge</p>
                <p>• Unlimited applications</p>
                <p>• VIP-only opportunities</p>
                <p>• Priority employer responses</p>
                <p>• Featured profile visibility</p>
                <p>• Faster account reviews</p>

              </div>

              <button className="mt-14 w-full rounded-2xl bg-white py-4 font-medium text-[#1F2A44] hover:scale-[1.01] transition">
                Upgrade to Trusted+
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}