// components/PricingBanner.tsx

// export default function PricingBanner() {
//   return (
//     <section className="w-full bg-[#F2C80B]">
//       <div
//         className="
//           max-w-6xl mx-auto
//           px-4 sm:px-6 lg:px-8
//           py-10 sm:py-14 lg:py-16
//           text-center
//         "
//       >
//         {/* Top label */}
//         <p className="text-[10px] sm:text-xs md:text-sm lg:text-[15px]  text-[#686868] font-semibold uppercase">
//           Monthly availability of 40 hours of digital marketing services, invoiced monthly
//         </p>

//         {/* Price */}
//         <p
//           className="
//             mt-4
//             text-4xl sm:text-5xl md:text-6xl lg:text-[80px]
//             font-extrabold
//             text-white font-montserrat
//           "
//         >
//           $ 3,750 <span className="align-middle">+GST</span>
//         </p>

//         {/* Bottom label */}
//         <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-[24px] font-bold tracking-[0.12em] text-[#7a7a7a] uppercase">
//           Contract period is 3 months plus
//         </p>
//       </div>
//     </section>
//   );
// }

// components/PricingBanner.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PricingBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 1.8s
      once: true,     // একবারই অ্যানিমেট হবে
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="w-full bg-[#F2C80B]">
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10 sm:py-14 lg:py-16
          text-center
        "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        {/* Top label */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-[15px]  text-[#686868] font-semibold uppercase">
          Monthly availability of 40 hours of digital marketing services, invoiced monthly
        </p>

        {/* Price */}
        <p
          className="
            mt-4
            text-4xl sm:text-5xl md:text-6xl lg:text-[80px]
            font-extrabold
            text-white font-montserrat
          "
        >
          $ 3,750 <span className="align-middle">+GST</span>
        </p>

        {/* Bottom label */}
        <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-[24px] font-bold tracking-[0.12em] text-[#7a7a7a] uppercase">
          Contract period is 3 months plus
        </p>
      </div>
    </section>
  );
}

