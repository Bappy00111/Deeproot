// app/components/PackageSection.tsx  (বা যেখানেই রাখতে চাও)

// import Image from "next/image";
// import bgImg from "../../public/image/webSite_development/asset 11.jpeg"; // path ঠিক করে নাও
// import { IoMdCheckmark } from "react-icons/io";

// const plans = [
//   {
//     name: "Starter Package",
//     price: "999",
//     label: "Ideal for start-up & stallholder",
//     features: [
//       "Single Webpages",
//       "Great for ePortfolio",
//       "Self-editable WordPress CMS",
//       "Basic Search Engine Optimisation (SEO)",
//       "Free Domain with SSL",
//       "Free 1-year hosting",
//       "Mobile Responsive",
//     ],
//     highlight: false,
//   },
//   {
//     name: "Professional Package",
//     price: "2000",
//     label: "For small businesses, contractors, consultants",
//     features: [
//       "Up to 4 Webpages",
//       "Self-editable WordPress CMS",
//       "Advanced Search Engine Optimisation (SEO)",
//       "User friendly contact form",
//       "Free Domain with SSL",
//       "Free 1-year hosting",
//       "Mobile Responsive",
//     ],
//     highlight: true, // middle card highlight
//   },
//   {
//     name: "Premium Package",
//     price: "4800",
//     label: "Ideal for products showcase and eCommerce",
//     features: [
//       "Up to 10 webpages",
//       "10 premium stock images included",
//       "Keyword research and Advanced On-page SEO",
//       "User friendly contact form",
//       "Free Domain with SSL",
//       "Free 1-year hosting",
//       "Mobile Responsive",
//       "Social Media Integration",
//     ],
//     highlight: false,
//   },
// ];

// const PackageSection = () => {
//   return (
//     <main className="w-full">
//       <section
//         className="
//           relative w-full
//           h-full py-20
//           overflow-hidden
//         "
//       >
//         {/* Background Image */}
//         <Image
//           src={bgImg}
//           alt="Background"
//           fill
//           className="object-cover -z-20"
//           priority
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-[#504992]/65 -z-10" />

//         {/* Cards on top of background */}
//         <div className="relative z-10 h-full flex items-center justify-center px-4">
//           <div className="w-full app-container">
//             {/* Optional title */}
//             {/* <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-10">
//               Our Packages
//             </h2> */}

//             <div className="flex flex-col md:flex-row gap-6 lg:gap-8 xl:gap-12 items-start">
//               {plans.map((plan, index) => {
//                 // 1st < 2nd < 3rd
//                 const heightClass =
//                   index === 0
//                     ? "md:min-h-[600px]"
//                     : index === 1
//                     ? "md:min-h-[650px]"
//                     : "md:min-h-[700px]";

//                 return (
//                   <div
//                     key={plan.name}
//                     className={`
//                       relative flex flex-col justify-between
//                       ${heightClass}
//                       rounded-2xl
//                       px-7 py-[65px]
//                       bg-slate-900/92
//                       backdrop-blur-xl
//                       border border-slate-800/90

//                     `}
//                   >
//                     {/* Glow bar for highlighted card */}
//                     {plan.highlight && (
//                       <div className="absolute inset-x-0 -top-1 h-1 rounded-t-[32px] border-t border-4 border-emerald-400" />
//                     )}

//                     {/* Content */}
//                     <div>
//                       <p className="text-lg xl:text-[24px] font-light text-center text-white font-montserrat">
//                         {plan.name}
//                       </p>
//                       <p className="mt-2 text-base lg:text-[32px] font-bold text-center text-white font-sora ">
//                         From
//                       </p>

//                       <div className="mt-3 flex flex-col items-center gap-1 font-montserrat font-light">
//                         <span className="text-5xl xl:text-[70px]  text-[#00d492]">
//                           <span className="text-[50px]">$</span>{plan.price}
//                         </span>
//                         <p className="text-xs xl:text-[14px] text-slate-300 text-center max-w-[230px]">
//                           {plan.label}
//                         </p>
//                       </div>

//                       <ul className="mt-7 space-y-2 text-xs text-[14px] font-light text-[#69749f] font-roboto">
//                         {plan.features.map((f) => (
//                           <li key={f} className="flex items-start gap-2">
//                             <span><IoMdCheckmark className="h-4 w-4" /></span>
//                             <span>{f}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Button */}
//                     <div className="mt-8">
//                       <button
//                         className={`
//                           w-full rounded-full py-3 text-sm font-normal font-montserrat cursor-pointer
//                           transition
//                           ${
//                             plan.highlight
//                               ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
//                               : "bg-slate-800/90 text-slate-100 hover:bg-slate-700"
//                           }
//                         `}
//                       >
//                         CHOOSE PLAN
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PackageSection;


// components/website-developmen/PackageSection.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import bgImg from "../../public/image/webSite_development/asset 11.jpeg"; // path ঠিক করে নাও
import { IoMdCheckmark } from "react-icons/io";

const plans = [
  {
    name: "Starter Package",
    price: "999",
    label: "Ideal for start-up & stallholder",
    features: [
      "Single Webpages",
      "Great for ePortfolio",
      "Self-editable WordPress CMS",
      "Basic Search Engine Optimisation (SEO)",
      "Free Domain with SSL",
      "Free 1-year hosting",
      "Mobile Responsive",
    ],
    highlight: false,
  },
  {
    name: "Professional Package",
    price: "2000",
    label: "For small businesses, contractors, consultants",
    features: [
      "Up to 4 Webpages",
      "Self-editable WordPress CMS",
      "Advanced Search Engine Optimisation (SEO)",
      "User friendly contact form",
      "Free Domain with SSL",
      "Free 1-year hosting",
      "Mobile Responsive",
    ],
    highlight: true,
  },
  {
    name: "Premium Package",
    price: "4800",
    label: "Ideal for products showcase and eCommerce",
    features: [
      "Up to 10 webpages",
      "10 premium stock images included",
      "Keyword research and Advanced On-page SEO",
      "User friendly contact form",
      "Free Domain with SSL",
      "Free 1-year hosting",
      "Mobile Responsive",
      "Social Media Integration",
    ],
    highlight: false,
  },
];

const PackageSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,  // 1.8s
      once: true,      // একবারই চলবে
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <main className="w-full">
      <section
        className="relative w-full h-full py-20 overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src={bgImg}
          alt="Background"
          fill
          className="object-cover -z-20"
          priority
          onLoad={() => AOS.refresh()}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#504992]/65 -z-10" />

        {/* Cards on top of background */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div
            className="w-full app-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1800"
          >
            {/* <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-10">
              Our Packages
            </h2> */}

            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 xl:gap-12 items-start">
              {plans.map((plan, index) => {
                const heightClass =
                  index === 0
                    ? "md:min-h-[600px]"
                    : index === 1
                    ? "md:min-h-[650px]"
                    : "md:min-h-[700px]";

                return (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col justify-between ${heightClass}
                      rounded-2xl px-7 py-[65px] bg-slate-900/92 backdrop-blur-xl border border-slate-800/90
                    `}
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                    data-aos-delay={index * 120}  // 0, 120, 240 ms
                  >
                    {/* Glow bar for highlighted card */}
                    {plan.highlight && (
                      <div className="absolute inset-x-0 -top-1 h-1 rounded-t-[32px] border-t border-4 border-emerald-400" />
                    )}

                    {/* Content */}
                    <div>
                      <p className="text-lg xl:text-[24px] font-light text-center text-white font-montserrat">
                        {plan.name}
                      </p>
                      <p className="mt-2 text-base lg:text-[32px] font-bold text-center text-white font-sora">
                        From
                      </p>

                      <div className="mt-3 flex flex-col items-center gap-1 font-montserrat font-light">
                        <span className="text-5xl xl:text-[70px] text-[#00d492]">
                          <span className="text-[50px]">$</span>
                          {plan.price}
                        </span>
                        <p className="text-xs xl:text-[14px] text-slate-300 text-center max-w-[230px]">
                          {plan.label}
                        </p>
                      </div>

                      <ul className="mt-7 space-y-2 text-xs text-[14px] font-light text-[#69749f] font-roboto">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span>
                              <IoMdCheckmark className="h-4 w-4" />
                            </span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      <button
                        className={`w-full rounded-full py-3 text-sm font-normal font-montserrat cursor-pointer transition
                          ${
                            plan.highlight
                              ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                              : "bg-slate-800/90 text-slate-100 hover:bg-slate-700"
                          }
                        `}
                      >
                        CHOOSE PLAN
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackageSection;

