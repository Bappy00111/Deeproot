// "use client";
// import React from "react";

// const TalkSection = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <section className=" py-10 md:py-20 bg-gradient-to-b from-white to-[#F3F6FB]">
//       <div className="max-w-6xl mx-auto px-2 md:px-4 font-montserrat">

//         {/* Top Heading */}
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent
//             bg-gradient-to-r from-[#1447e6] to-[#0E1A4F] font-roboto tracking-tight">
//             Let’s Talk 👋
//           </h2>
//           <p className="mt-3 text-[#475569] text-sm md:text-lg leading-relaxed">
//             Tell us a little about yourself. We’re here to assist you quickly.
//           </p>
//         </div>

//         {/* Form Wrapper */}
//         <div className="bg-white/90 backdrop-blur-md shadow-xl border border-[#E4ECF8]/70
//           p-4 md:p-12 rounded-3xl transition-all">

//           <form className="space-y-8" onSubmit={handleSubmit}>

//             {/* Name Fields */}
//             <div className="grid gap-6 md:grid-cols-2">
//               {["First Name", "Last Name"].map((label, i) => (
//                 <div key={i}>
//                   <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                     {label} <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     placeholder={label}
//                     required
//                     className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3
//                       text-[15px] text-[#111827] placeholder-[#9CA3AF]
//                       focus:bg-white focus:border-[#1447e6] focus:ring-2
//                       focus:ring-[#1447e6]/50 outline-none transition"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Email + Phone */}
//             <div className="grid gap-6 md:grid-cols-2">
//               <div>
//                 <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="example@mail.com"
//                   required
//                   className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3
//                     text-[15px] text-[#111827] placeholder-[#9CA3AF]
//                     focus:bg-white focus:border-[#1447e6] focus:ring-2
//                     focus:ring-[#1447e6]/50 outline-none transition"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                   Phone <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="+88 01234567890"
//                   required
//                   className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3
//                     text-[15px] text-[#111827] placeholder-[#9CA3AF]
//                     focus:bg-white focus:border-[#1447e6] focus:ring-2
//                     focus:ring-[#1447e6]/50 outline-none transition"
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows={6}
//                 placeholder="Write your message here..."
//                 required
//                 className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60
//                   px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF]
//                   resize-none focus:bg-white focus:border-[#1447e6] focus:ring-2
//                   focus:ring-[#1447e6]/50 outline-none transition"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full
//                   bg-[#1447e6] px-10 py-3.5 text-white font-semibold text-sm uppercase tracking-wide
//                   hover:opacity-90 active:scale-[0.98] transition shadow-lg"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default TalkSection;

// components/TalkSection.jsx


// "use client";

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function TalkSection() {
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1800, once: true, easing: "ease-out", offset: 0 });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     // simple honeypot
//     if (form.elements["company_website"]?.value) return;
//     setSubmitted(true);
//     // TODO: আপনার API/Email হ্যান্ডলার কল করুন (fetch/axios)
//   };

//   return (
//     <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-[#F3F6FB]">
//       {/* subtle top pattern/gradient band */}
//       <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-[#ebeefe] to-transparent opacity-80" />

//       <div className="max-w-6xl mx-auto px-4 md:px-6 font-montserrat" data-aos="fade-up">
//         {/* Heading */}
//         <div className="mb-10 md:mb-12 text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-roboto">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#504992] via-[#533db5] to-[#1447e6]">
//               Let’s Talk 👋
//             </span>
//           </h2>
//           <p className="mt-3 text-[#475569] text-sm md:text-lg leading-relaxed">
//             Tell us a little about yourself. We’re here to assist you quickly.
//           </p>
//         </div>

//         {/* Grid wrapper */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
//           {/* Left: Contact card */}
//           <aside className="lg:col-span-2">
//             <div className="h-full rounded-3xl bg-[#504992] text-white p-6 md:p-8 shadow-[0_20px_80px_rgba(80,73,146,0.25)]">
//               <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">
//                 Quick Contact
//               </p>
//               <h3 className="mt-2 text-2xl font-bold">Talk to a Human</h3>

//               <div className="mt-6 space-y-4 text-sm md:text-base">
//                 <div>
//                   <p className="opacity-80">Email</p>
//                   <a href="mailto:hello@yourdomain.com" className="font-semibold underline decoration-white/30 hover:decoration-white">
//                     office@deeproot.com.au
//                   </a>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Phone</p>
//                   <a href="tel:+61000000000" className="font-semibold">
//                     +61 00 000 000
//                   </a>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Address</p>
//                   <p className="font-semibold">Level 2, 162 Macquarie St, Hobart, Tasmania 7000, Australia</p>
//                 </div>
//               </div>

//               <div className="mt-8 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
//                 <p className="text-sm">
//                   <span className="font-bold text-[#F2C80B]">New here?</span> First discovery call is free.
//                 </p>
//               </div>
//             </div>
//           </aside>

//           {/* Right: Form card */}
//           <div className="lg:col-span-3">
//             <div className="rounded-3xl bg-white/90 backdrop-blur-md shadow-xl ring-1 ring-[#E4ECF8]/70 p-5 md:p-8 lg:p-10">
//               <form className="space-y-8" onSubmit={handleSubmit} noValidate>
//                 {/* Honeypot */}
//                 <input
//                   type="text"
//                   name="company_website"
//                   tabIndex="-1"
//                   autoComplete="off"
//                   className="hidden"
//                 />

//                 {/* Name */}
//                 <div className="grid gap-6 md:grid-cols-2">
//                   {["First Name", "Last Name"].map((label) => (
//                     <div key={label} className="relative">
//                       <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                         {label} <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder={label}
//                         required
//                         className="peer w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Email + Phone */}
//                 <div className="grid gap-6 md:grid-cols-2">
//                   <div className="relative">
//                     <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="example@mail.com"
//                       required
//                       className="peer w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
//                     />
//                   </div>
//                   <div className="relative">
//                     <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                       Phone <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="+61 4xx xxx xxx"
//                       required
//                       className="peer w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="relative">
//                   <label className="block text-sm font-semibold text-[#1E293B] mb-1">
//                     Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     rows={6}
//                     placeholder="Write your message here..."
//                     required
//                     className="peer w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] resize-none focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
//                   />
//                 </div>

//                 {/* Consent */}
//                 <div className="flex items-start gap-3">
//                   <input
//                     id="consent"
//                     type="checkbox"
//                     required
//                     className="mt-1 h-4 w-4 rounded border-[#D8E2F1] text-[#533db5] focus:ring-[#533db5]"
//                   />
//                   <label htmlFor="consent" className="text-sm text-[#334155]">
//                     I agree to the processing of my data in accordance with the privacy policy.
//                   </label>
//                 </div>

//                 {/* Submit */}
//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     className="inline-flex items-center justify-center gap-2 rounded-full bg-[#533db5] px-8 md:px-10 py-3.5 text-white font-semibold text-sm uppercase tracking-[0.12em] shadow-[0_10px_30px_rgba(83,61,181,0.35)] hover:brightness-110 active:scale-[0.98] transition"
//                   >
//                     Send Message
//                     <span className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#F2C80B]" />
//                   </button>
//                 </div>

//                 {submitted && (
//                   <p className="text-[#10b981] text-sm font-semibold">
//                     ✅ Thanks! We’ve received your message.
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/TalkSection.jsx
// components/TalkSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TalkSection() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1800, once: true, easing: "ease-out", offset: 0 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements["company_website"]?.value) return; // honeypot
    setSubmitted(true);
  };

  return (
    <section
      className="
        relative
        flex items-center                 /* ✅ vertically center */
        bg-gradient-to-b from-white to-[#F3F6FB]
        py-10 md:py-14
        min-h-[calc(100vh-80px)]         /* ✅ Tailwind fallback */
      "
      style={{
        minHeight: "calc(100svh - 80px)", // ✅ modern viewport fix (mobile safe)
      }}
    >
      {/* subtle top band */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-[#ebeefe] to-transparent opacity-80" />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 font-montserrat" data-aos="fade-up">
        {/* Heading */}
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-roboto">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#504992] via-[#533db5] to-[#1447e6]">
              Let’s Talk 👋
            </span>
          </h2>
          <p className="mt-3 text-[#475569] text-sm md:text-lg leading-relaxed">
            Tell us a little about yourself. We’re here to assist you quickly.
          </p>
        </div>

        {/* Grid wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {/* Left: Quick Contact */}
          <aside className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-[#504992] text-white p-6 md:p-8 shadow-[0_20px_80px_rgba(80,73,146,0.25)]">
              <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">Quick Contact</p>
              <h3 className="mt-2 text-2xl font-bold">Talk to a Human</h3>

              <div className="mt-6 space-y-4 text-sm md:text-base">
                <div>
                  <p className="opacity-80">Email</p>
                  <a href="mailto:hello@yourdomain.com" className="font-semibold underline decoration-white/30 hover:decoration-white">
                    office@deeproot.com.au
                  </a>
                </div>
                <div>
                  <p className="opacity-80">Phone</p>
                  <a href="tel:+61000000000" className="font-semibold">+61 00 000 000</a>
                </div>
                <div>
                  <p className="opacity-80">Address</p>
                  <p className="font-semibold">Level 2, 162 Macquarie St,Hobart, Tasmania 7000, Australia</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <p className="text-sm">
                  <span className="font-bold text-[#F2C80B]">New here?</span> First discovery call is free.
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white/90 backdrop-blur-md shadow-xl ring-1 ring-[#E4ECF8]/70 p-5 md:p-8 lg:p-10 h-full">
              <form className="space-y-8 h-full" onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />

                {/* Name */}
                <div className="grid gap-6 md:grid-cols-2">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                        {label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={label}
                        required
                        className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
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
                      className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+61 4xx xxx xxx"
                      required
                      className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
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
                    className="w-full rounded-xl border border-[#D8E2F1] bg-gray-50/60 px-4 py-3 text-[15px] text-[#111827] placeholder-[#9CA3AF] resize-none focus:bg-white focus:border-[#533db5] focus:ring-2 focus:ring-[#533db5]/40 outline-none transition"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input id="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#D8E2F1] text-[#533db5] focus:ring-[#533db5]" />
                  <label htmlFor="consent" className="text-sm text-[#334155]">
                    I agree to the processing of my data in accordance with the privacy policy.
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#533db5] px-8 md:px-10 py-3.5 text-white font-semibold text-sm uppercase tracking-[0.12em] shadow-[0_10px_30px_rgba(83,61,181,0.35)] hover:brightness-110 active:scale-[0.98] transition"
                  >
                    Send Message
                    <span className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#F2C80B]" />
                  </button>
                </div>

                {submitted && (
                  <p className="text-[#10b981] text-sm font-semibold">✅ Thanks! We’ve received your message.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

