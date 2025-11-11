
"use client";

import React from "react";

const DeeprootWorkspace = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে তোমার API call / fetch / action আসবে
    console.log("Deeproot workspace form submitted");
  };

  return (
    <section className="relative xl:h-screen overflow-hidden bg-gradient-to-br from-[#F5F7FB] via-[#FFFFFF] to-[#ECEFFF]">
      {/* subtle brand shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#504A97]/7 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-[#F97316]/8 blur-3xl" />

      <div className="relative app-container flex w-full  flex-col items-start gap-12  lg:flex-row lg:gap-16 py-8 lg:items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl">
          {/* Top pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
            <span className="text-[10px] xl:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] font-playfair">
              Get started with Deeproot
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-[30px] leading-tight font-medium text-[#0F172A] md:text-[36px] xl:text-[40px]  font-roboto">
            Create your growth
            <br className="hidden md:block" />
            workspace with <span className="text-[#504A97]">Deeproot</span>
          </h1>

          {/* Sub copy */}
          <p className="mb-6 text-sm leading-relaxed text-[#4B5563] md:text-base font-montserrat">
            Turn your marketing, data and automation into one connected growth engine.
            Deeproot plugs into your stack, runs experiments, and ships what actually
            moves revenue &amp; retention.
          </p>

          {/* Bullet list */}
          <ul className="space-y-2.5 text-sm md:text-base font-montserrat">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#F59E0B]" />
              <p className="text-[#111827] ">
                Built for scaling DTC, SaaS &amp; enterprise brands.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#EC4899]" />
              <p className="text-[#111827]">
                Clear experimentation, reporting &amp; accountable KPIs.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#9CA3AF]" />
              <p className="text-[#111827]">
                Seamless integration with your current tools &amp; data layer.
              </p>
            </li>
          </ul>

          {/* Footnote */}
          <p className="mt-6 text-[10px] md:text-xs text-[#9CA3AF] font-popins">
            Share a few details — our strategy team replies with a tailored plan within{" "}
            <span className="font-semibold text-[#504A97]">1 business day.</span>
          </p>
        </div>


        {/* RIGHT FORM CARD */}
        <div className="w-full lg:max-w-xl lg:ml-auto">
          <div className="relative">
            {/* Outer soft glow / background */}
            {/* <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#FDF3E7] via-[#FFF9FD] to-[#FFE8F2] opacity-80 shadow-[0_32px_90px_rgba(15,23,42,0.18)]" /> */}

            {/* Main card */}
            <div className="relative rounded-[36px] bg-gradient-to-br from-white/98 via-white/98 to-[#FFF6FB]/95 px-4 py-4 md:px-6 md:py-6 shadow-[0_20px_65px_rgba(15,23,42,0.16)] backdrop-blur-sm font-montserrat">

              {/* Header */}
              <h2 className="mb-1 text-2xl md:text-3xl font-semibold text-[#111827] font-roboto">
                Sign up
              </h2>
              <p className="mb-7 text-xs md:text-sm text-[#9CA3AF]">
                No credit card required. Start with your team’s work email.
              </p>

              {/* Form */}
              <form className="space-y-3" onSubmit={handleSubmit}>
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#4B5563]">
                    Full name
                  </label>
                  <div className="flex items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm
                          focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#1447e6]/70 transition">
                    <span className="mr-3 text-[#D1D5DB]">
                      {/* user icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-transparent text-sm text-[#111827] placeholder-[#9CA3AF]
                         focus:outline-none focus:ring-0 border-none"
                    />
                  </div>
                </div>

                {/* Company / Team */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#4B5563]">
                    Company / Team
                  </label>
                  <div className="flex items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm
                          focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#1447e6]/70 transition">
                    <span className="mr-3 text-[#D1D5DB]">
                      {/* building icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Your company or team name"
                      className="w-full bg-transparent text-sm text-[#111827] placeholder-[#9CA3AF]
                         focus:outline-none focus:ring-0 border-none"
                    />
                  </div>
                </div>

                {/* Work email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#4B5563]">
                    Work email
                  </label>
                  <div className="flex items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm
                          focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#1447e6]/70 transition">
                    <span className="mr-3 text-[#D1D5DB]">
                      {/* mail icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16v16H4z" />
                        <polyline points="4,6 12,13 20,6" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-transparent text-sm text-[#111827] placeholder-[#9CA3AF]
                         focus:outline-none focus:ring-0 border-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#4B5563]">
                    Password
                  </label>
                  <div className="flex items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm
                          focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#1447e6]/70 transition">
                    <span className="mr-3 text-[#D1D5DB]">
                      {/* lock icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      required
                      placeholder="Minimum 8 characters"
                      className="w-full bg-transparent text-sm text-[#111827] placeholder-[#9CA3AF]
                         focus:outline-none focus:ring-0 border-none"
                    />
                  </div>
                </div>

                {/* Confirm password */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-[#4B5563]">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Repeat your password"
                    className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm
                       text-[#111827] placeholder-[#9CA3AF] shadow-sm
                       focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1447e6]/70 transition"
                  />
                </div>

                {/* CTA button */}
                <button
                  type="submit"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full cursor-pointer
                      bg-[#1447e6]
                     px-8 py-2 text-sm font-semibold text-white
                    border-2 border-white
                     w-auto"
                >
                  <span className="text-lg">➜</span>
                  <span>Create account</span>
                </button>
              </form>

              {/* Bottom text */}
              <div className="mt-6 flex items-center justify-end text-[10px] md:text-xs">
                <span className="text-[#9CA3AF] mr-1">Already with WiseBrain?</span>
                <button
                  type="button"
                  className="font-semibold text-[#1447e6] hover:text-[#1447e6] transition"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* END RIGHT */}
      </div>
    </section>
  );
};

export default DeeprootWorkspace;


