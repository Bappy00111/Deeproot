// app/page.tsx (or components/AdGrantsOfferSection.tsx)

// import Image from "next/image";
// import img from '../../public/image/google-for-nonprofits/asset 8.svg'
// import { IoMdCheckmark } from "react-icons/io";

// export default function AdGrantsOfferSection() {
//   const features = [
//     {
//       title: "Strategic Campaign Setup",
//       desc: "Launch high-impact search ads tailored to your nonprofit’s goals.",
//     },
//     {
//       title: "Ongoing Management & Optimization",
//       desc: "Maximize your Ad Grants budget with data-driven tweaks and keyword refinement.",
//     },
//     {
//       title: "Eligibility Compliance Assurance",
//       desc: "We keep your account compliant so you never lose access to free ad credits.",
//     },
//     {
//       title: "Transparent Performance Insights",
//       desc: "Monthly reports showing clicks, conversions, and growth—no jargon, just results.",
//     },
//     {
//       title: "Flexible, No Lock-In Commitment",
//       desc: "Cancel anytime. Your success is our priority, not contracts.",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-4 py-5 font-montserrat">
//       <section className="w-full max-w-3xl text-center">
//         {/* Top icon */}
//         <div className="mx-auto mb-4 flex items-center justify-center">
//           <Image className="text-purple-600" src={img} alt="" />
//         </div>

//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-slate-900  ">
//           <span className="text-2xl">✨</span>
//           GOOGLE AD GRANTS
//           <br className="hidden sm:block" />
//           {" "}MANAGEMENT SPECIAL
//         </h1>

//         {/* Subheading */}
//         <p className="mt-3 text-xl lg:text-[25px] text-[#504992] font-medium">
//           Limited Time Only: 1st month for free
//         </p>

//         {/* Divider */}
//         <div className="mt-4 flex items-center justify-center">
//           <div className="h-px w-24 bg-[#504992]" />
//         </div>

//         {/* Price note */}
//         <p className="mt-3 text-sm lg:text-base text-[#76787f] italic  font-bold">
//           *Only 400/month + GST
//         </p>

//         {/* What you'll get */}
//         <div className="mt-10">
//           <div className="inline-flex items-center gap-3">
//             <div className="flex h-7 w-7 items-center justify-center rounded bg-[#61CE70] ">
//               <IoMdCheckmark className="text-white h-5  w-5" />
//             </div>
//             <h2 className="text-2xl lg:text-[25px] font-bold text-[#504992]">
//               What You’ll Get:
//             </h2>
//           </div>

//           {/* Features list */}
//           <div className="mt-8 space-y-5 app-container font-popins text-center">
//             {features.map((item) => (
//               <div key={item.title} className="">
//                 <div>
//                   <div className="text-base font-semibold text-[#76787f] flex items-center justify-center gap-2">
//                     <div className="flex h-5 w-5 items-center justify-center rounded bg-[#61CE70] ">
//                       <IoMdCheckmark className="text-white  h-3 lg:h-5  w-5" />
//                     </div>
//                     {item.title}
//                   </div>
//                   <div className="text-sm text-[#76787f]">
//                     {item.desc}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer note */}
//         <p className="mt-10 text-sm  lg:text-base font-normal text-[#76787f] font-popins">
//           No lock-in contract
//         </p>
//       </section>
//     </main>
//   );
// }

// app/components/AdGrantsOfferSection.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../public/image/google-for-nonprofits/asset 8.svg";
import { IoMdCheckmark } from "react-icons/io";

export default function AdGrantsOfferSection() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 1.8s
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  const features = [
    { title: "Strategic Campaign Setup", desc: "Launch high-impact search ads tailored to your nonprofit’s goals." },
    { title: "Ongoing Management & Optimization", desc: "Maximize your Ad Grants budget with data-driven tweaks and keyword refinement." },
    { title: "Eligibility Compliance Assurance", desc: "We keep your account compliant so you never lose access to free ad credits." },
    { title: "Transparent Performance Insights", desc: "Monthly reports showing clicks, conversions, and growth—no jargon, just results." },
    { title: "Flexible, No Lock-In Commitment", desc: "Cancel anytime. Your success is our priority, not contracts." },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-4 py-5 font-montserrat">
      <section
        className="w-full max-w-3xl text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        {/* Top icon */}
        <div
          className="mx-auto mb-4 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          <Image className="text-purple-600" src={img} alt="" onLoad={() => AOS.refresh()} />
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-wide text-slate-900"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <span className="text-2xl">✨</span>
          GOOGLE AD GRANTS
          <br className="hidden sm:block" />
          {" "}MANAGEMENT SPECIAL
        </h1>

        {/* Subheading */}
        <p
          className="mt-3 text-xl lg:text-[25px] text-[#504992] font-medium"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          Limited Time Only: 1st month for free
        </p>

        {/* Divider */}
        <div className="mt-4 flex items-center justify-center" data-aos="fade-up" data-aos-delay="160">
          <div className="h-px w-24 bg-[#504992]" />
        </div>

        {/* Price note */}
        <p className="mt-3 text-sm lg:text-base text-[#76787f] italic font-bold" data-aos="fade-up" data-aos-delay="200">
          *Only 400/month + GST
        </p>

        {/* What you'll get */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="240">
          <div className="inline-flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-[#61CE70] ">
              <IoMdCheckmark className="text-white h-5 w-5" />
            </div>
            <h2 className="text-2xl lg:text-[25px] font-bold text-[#504992]">
              What You’ll Get:
            </h2>
          </div>

          {/* Features list */}
          <div className="mt-8 space-y-5 app-container font-popins text-center">
            {features.map((item, idx) => (
              <div
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={280 + idx * 120} // 280, 400, 520...
                data-aos-duration="1800"
              >
                <div className="text-base font-semibold text-[#76787f] flex items-center justify-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-[#61CE70] ">
                    <IoMdCheckmark className="text-white h-3 lg:h-5 w-5" />
                  </div>
                  {item.title}
                </div>
                <div className="text-sm text-[#76787f]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-sm lg:text-base font-normal text-[#76787f] font-popins" data-aos="fade-up" data-aos-delay="200">
          No lock-in contract
        </p>
      </section>
    </main>
  );
}

