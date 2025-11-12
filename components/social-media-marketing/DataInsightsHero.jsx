// import React from "react";
// import Image from "next/image";
// import img from "../../public/image/secolmedia/asset 6.png";

// const DataInsightsHero = () => {
//   return (
//     <section className="px-4 md:px-10 xl:px-16">
//       <div className="w-full bg-[#6f6cff] text-white ">
//       {/* max width চাইলে নিচের max-w ঠিক করো, নাহলে full width */}
//       <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-5 overflow-hidden">
//         {/* LEFT: Image
//             - mobile: উপরে (কারণ HTML এ আগে আছে + 1 col)
//             - md+: বামে, 5 col-এর মধ্যে 2 col নেবে
//         */}
//         <div className="relative w-full h-40 sm:h-64 md:h-auto md:min-h-[420px] md:col-span-2">
//           <Image
//             src={img}
//             alt="Colorful geometric pattern"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* RIGHT: Content
//             - mobile: নিচে full width
//             - md+: ডানে 3 col
//         */}
//         <div className="md:col-span-3 px-4 sm:px-6 md:px-10 xl:px-16 py-8 md:py-16 flex flex-col justify-start">
//           {/* Heading */}
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[58px]  font-extrabold leading-tight font-montserrat">
//             Data <br/> Is <br /> Everything
//           </h1>

//           {/* Top features */}
//           <div className="mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-6 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold tracking-wide  font-montserrat">
//             <div>
//               <p className="text-[9px] sm:text-[10px] font-bold opacity-80">01.</p>
//               <p className="mt-1">PERFORMANCE MARKETING</p>
//             </div>
//             <div>
//               <p className="text-[9px] sm:text-[10px] font-bold opacity-80">02.</p>
//               <p className="mt-1">ROBUST STRATEGY</p>
//             </div>
//             <div>
//               <p className="text-[9px] sm:text-[10px] font-bold opacity-80">03.</p>
//               <p className="mt-1">LEADS &amp; ACQUISITION</p>
//             </div>
//             <div>
//               <p className="text-[9px] sm:text-[10px] font-bold opacity-80">04.</p>
//               <p className="mt-1">AUDIENCE TARGETING</p>
//             </div>
//             <div>
//               <p className="text-[9px] sm:text-[10px] font-bold opacity-80">05.</p>
//               <p className="mt-1">ORIGINAL CONTENT</p>
//             </div>
//             <div>
//               <p className="text-[9px] sm:text-[10px] font-bold opacity-80">06.</p>
//               <p className="mt-1">ANALYTICS &amp; REPORTING</p>
//             </div>
//           </div>

//           {/* Description text */}
//           <div className="mt-6 lg:mt-8 space-y-2 sm:space-y-3 text-[9px] sm:text-[10px] md:text-xs  lg:text-[16px] leading-relaxed font-normal max-w-4xl opacity-90 font-montserrat">
//             <p>
//               Homepage marketing: Mass invitation to multiple friends to comment
//               and like your Facebook page, and more.
//             </p>
//             <p>
//               Group marketing: Mass collection of different login accounts to
//               develop group IDs, add groups in batches and send group dynamics
//               in batches.
//             </p>
//             <p>
//               Fans &amp; dynamic marketing: Get and add recommended friends in
//               bulk. Search for and add fans by region area, name, school, etc.
//             </p>
//             <p>
//               Customer data acquisition: Acquire information based on keywords
//               such as IDs, emails, URLs, names, addresses, and phone numbers of
//               merchants and users, and use it for secondary marketing.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default DataInsightsHero;


// app/components/DataInsightsHero.jsx  (বা আপনার ফাইল)
// "use client" দরকার, কারণ AOS ব্রাউজারে রান করে
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../public/image/secolmedia/asset 6.png";

const DataInsightsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="px-4 md:px-10 xl:px-16">
      <div className="w-full bg-[#6f6cff] text-white">
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-5 overflow-hidden">
          {/* LEFT: Image */}
          <div
            className="relative w-full h-40 sm:h-64 md:h-auto md:min-h-[420px] md:col-span-2"
            data-aos="zoom-in"
            data-aos-duration="1800"
          >
            <Image
              src={img}
              alt="Colorful geometric pattern"
              fill
              className="object-cover"
              priority
              onLoad={() => AOS.refresh()}
            />
          </div>

          {/* RIGHT: Content */}
          <div
            className="md:col-span-3 px-4 sm:px-6 md:px-10 xl:px-16 py-8 md:py-16 flex flex-col justify-start"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1800"
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] font-extrabold leading-tight font-montserrat">
              Data <br /> Is <br /> Everything
            </h1>

            {/* Top features */}
            <div className="mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-6 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold tracking-wide font-montserrat">
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold opacity-80">01.</p>
                <p className="mt-1">PERFORMANCE MARKETING</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold opacity-80">02.</p>
                <p className="mt-1">ROBUST STRATEGY</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold opacity-80">03.</p>
                <p className="mt-1">LEADS &amp; ACQUISITION</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold opacity-80">04.</p>
                <p className="mt-1">AUDIENCE TARGETING</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold opacity-80">05.</p>
                <p className="mt-1">ORIGINAL CONTENT</p>
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold opacity-80">06.</p>
                <p className="mt-1">ANALYTICS &amp; REPORTING</p>
              </div>
            </div>

            {/* Description text */}
            <div className="mt-6 lg:mt-8 space-y-2 sm:space-y-3 text-[9px] sm:text-[10px] md:text-xs lg:text-[16px] leading-relaxed font-normal max-w-4xl opacity-90 font-montserrat">
              <p>
                Homepage marketing: Mass invitation to multiple friends to comment
                and like your Facebook page, and more.
              </p>
              <p>
                Group marketing: Mass collection of different login accounts to
                develop group IDs, add groups in batches and send group dynamics
                in batches.
              </p>
              <p>
                Fans &amp; dynamic marketing: Get and add recommended friends in
                bulk. Search for and add fans by region area, name, school, etc.
              </p>
              <p>
                Customer data acquisition: Acquire information based on keywords
                such as IDs, emails, URLs, names, addresses, and phone numbers of
                merchants and users, and use it for secondary marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataInsightsHero;

