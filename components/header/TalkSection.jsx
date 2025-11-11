"use client";
import React from "react";

const TalkSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F3F6FB]">
      <div className="max-w-6xl mx-auto px-4 font-montserrat">

        {/* Top Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent
            bg-gradient-to-r from-[#1447e6] to-[#0E1A4F] font-roboto tracking-tight">
            Let’s Talk 👋
          </h2>
          <p className="mt-3 text-[#475569] text-sm md:text-lg leading-relaxed">
            Tell us a little about yourself. We’re here to assist you quickly.
          </p>
        </div>

        {/* Form Wrapper */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl border border-[#E4ECF8]/70
          p-8 md:p-12 rounded-3xl transition-all">

          <form className="space-y-8" onSubmit={handleSubmit}>

            {/* Name Fields */}
            <div className="grid gap-6 md:grid-cols-2">
              {["First Name", "Last Name"].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={label}
                    required
                    className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3
                      text-[15px] text-[#111827] placeholder-[#9CA3AF]
                      focus:bg-white focus:border-[#1447e6] focus:ring-2
                      focus:ring-[#1447e6]/50 outline-none transition"
                  />
                </div>
              ))}
            </div>

            {/* Email + Phone */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  required
                  className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3
                    text-[15px] text-[#111827] placeholder-[#9CA3AF]
                    focus:bg-white focus:border-[#1447e6] focus:ring-2
                    focus:ring-[#1447e6]/50 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+88 01234567890"
                  required
                  className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3
                    text-[15px] text-[#111827] placeholder-[#9CA3AF]
                    focus:bg-white focus:border-[#1447e6] focus:ring-2
                    focus:ring-[#1447e6]/50 outline-none transition"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                required
                className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60
                  px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF]
                  resize-none focus:bg-white focus:border-[#1447e6] focus:ring-2
                  focus:ring-[#1447e6]/50 outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full
                  bg-[#1447e6] px-10 py-3.5 text-white font-semibold text-sm uppercase tracking-wide
                  hover:opacity-90 active:scale-[0.98] transition shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default TalkSection;
