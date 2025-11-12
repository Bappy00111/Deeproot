// components/CommonMarketingExecutions.tsx

// const executions = [
//   "Develop the marketing communications schedule",
//   "Social media planning and execution",
//   "Direct mail campaigns",
//   "Event management",
//   "Content Copywriting, include website pages, newsletters, vlog planning and storyboard",
//   "Public Relations and media outreach opportunities",
//   "Editing and proof reading",
//   "Advertising campaign development",
//   "Graphic design and brand alignment, if you do not have photos to promote your posts, then our expert designers will help you choose the right ones for your brand.",
//   "Web Development",
//   "Google Search Engine Optimisation (SEO) and managing your Google AdWords.",
//   "Managing your marketing suppliers such as printing.",
//   "Sales Scripts and telemarketing",
//   "Budget Forecasting",
// ];

// export default function CommonMarketingExecutions() {
//   return (
//     <section className="bg-[#f5f6f8]">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 font-montserrat">
//         {/* Top Heading */}
//         <h2
//           className="
//             text-2xl sm:text-3xl md:text-4xl xl:text-[44px]
//             font-medium
//             text-[#76787f]
//             text-center
//             tracking-wide font-playfair
//           "
//         >
//           Common Marketing Executions Include:
//         </h2>

//         {/* Ordered list */}
//         <ol className="mt-10 space-y-1 text-sm sm:text-base text-[#76787f] font-medium leading-relaxed list-decimal list-inside">
//           {executions.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ol>

//         {/* Spacer */}
//         <div className="mt-20" />

//         {/* Disbursement Heading */}
//         <h3
//           className="
//             text-2xl sm:text-3xl lg:text-[40px]
//             font-medium
//             text-gray-700
//             text-center font-playfair
//           "
//         >
//           Disbursement and Expenses
//         </h3>

//         {/* Card */}
//         <div className="mt-10 bg-white rounded-md shadow-sm px-6 sm:px-10 py-6 sm:py-8 lg:py-10 text-sm sm:text-base text-[#000] leading-relaxed font-medium">
//           For digital marketing retainer service, the monthly project hours are
//           not limited. It is also allowed for other marketing services like
//           graphic design, advertising and printing material interchangeably,
//           while it may be required to help execute the marketing campaigns.
//         </div>
//       </div>
//     </section>
//   );
// }


// components/CommonMarketingExecutions.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const executions = [
  "Develop the marketing communications schedule",
  "Social media planning and execution",
  "Direct mail campaigns",
  "Event management",
  "Content Copywriting, include website pages, newsletters, vlog planning and storyboard",
  "Public Relations and media outreach opportunities",
  "Editing and proof reading",
  "Advertising campaign development",
  "Graphic design and brand alignment, if you do not have photos to promote your posts, then our expert designers will help you choose the right ones for your brand.",
  "Web Development",
  "Google Search Engine Optimisation (SEO) and managing your Google AdWords.",
  "Managing your marketing suppliers such as printing.",
  "Sales Scripts and telemarketing",
  "Budget Forecasting",
];

export default function CommonMarketingExecutions() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="bg-[#f5f6f8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 font-montserrat">
        {/* Top Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl xl:text-[44px]
            font-medium text-[#76787f] text-center tracking-wide font-playfair
          "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1800"
        >
          Common Marketing Executions Include:
        </h2>

        {/* Ordered list */}
        <ol
          className="mt-10 space-y-1 text-sm sm:text-base text-[#76787f] font-medium leading-relaxed list-decimal list-inside"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          {executions.map((item, i) => (
            <li
              key={i}
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-delay={i * 60} // ছোট স্ট্যাগার: 0, 60, 120...
            >
              {item}
            </li>
          ))}
        </ol>

        {/* Spacer */}
        <div className="mt-20" />

        {/* Disbursement Heading */}
        <h3
          className="
            text-2xl sm:text-3xl lg:text-[40px]
            font-medium text-gray-700 text-center font-playfair
          "
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          Disbursement and Expenses
        </h3>

        {/* Card */}
        <div
          className="mt-10 bg-white rounded-md shadow-sm px-6 sm:px-10 py-6 sm:py-8 lg:py-10 text-sm sm:text-base text-[#000] leading-relaxed font-medium"
          data-aos="fade-up"
          data-aos-duration="1800"
          data-aos-delay="120"
        >
          For digital marketing retainer service, the monthly project hours are
          not limited. It is also allowed for other marketing services like
          graphic design, advertising and printing material interchangeably,
          while it may be required to help execute the marketing campaigns.
        </div>
      </div>
    </section>
  );
}
