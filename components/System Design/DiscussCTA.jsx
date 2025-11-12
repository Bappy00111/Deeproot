// components/DiscussCTA.jsx
// import Image from "next/image";
// import ctaImage from "../../public/image/asset 3.jpeg"; // ✅ replace with your actual image
// import cover from "../../public/image/asset 10.jpeg"; // ✅ replace with your actual image

// const DiscussCTA = () => {
//   return (
//     <section>
//       <div className="bg-[#e6e7ec] py-16">
//         <div
//           className="
//           max-w-6xl mx-auto
//           bg-white
//           flex flex-col items-center
//           px-6 sm:px-16 lg:px-24
//           py-12 sm:py-16
//         "
//         >
//           {/* Circle Image */}
//           <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-8">
//             <Image
//               src={ctaImage}
//               alt="Business showcase"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Heading */}
//           <h2
//             className="
//             text-center
//             text-xl sm:text-2xl lg:text-[32px]
//             font-semibold
//             text-[#555e6b]
//             mb-8
//           "
//           >
//             Let&apos;s discuss what we could do for your business.
//           </h2>

//           {/* Button */}
//           <button
//             className="
//             px-10 sm:px-12
//             py-3 sm:py-3.5
//             rounded-full
//             bg-[#7fc3ff]
//             border border-[#5fa8ff]
//             text-[#2658b6]
//             font-semibold
//             tracking-[0.18em]
//             uppercase
//             text-xs sm:text-sm
//             shadow-sm
//             hover:bg-[#5fa8ff]
//             hover:text-white
//             hover:shadow-md
//             transition-all
//             focus-visible:outline-none
//             focus-visible:ring-2
//             focus-visible:ring-[#5fa8ff]
//             focus-visible:ring-offset-2
//           "
//           >
//             Let&apos;s Talk
//           </button>
//         </div>
//       </div>
//       <div className="w-full h-[200px] relative">
//         <Image
//           src={cover}
//           alt="banner"
//           fill
//           className="object-cover"
//         />

//         {/* purple overlay */}
//         <div className="absolute inset-0 bg-[#533db5]/40 pointer-events-none" />
//       </div>
//     </section>
//   );
// };

// export default DiscussCTA;


// components/DiscussCTA.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import ctaImage from "../../public/image/asset 3.jpeg"; // ✅ replace with your actual image
import cover from "../../public/image/asset 10.jpeg";   // ✅ replace with your actual image

const DiscussCTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 1.8s
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section>
      <div className="bg-[#e6e7ec] py-16">
        <div
          className="
          max-w-6xl mx-auto
          bg-white
          flex flex-col items-center
          px-6 sm:px-16 lg:px-24
          py-12 sm:py-16
        "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1800"
        >
          {/* Circle Image */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-8">
            <Image
              src={ctaImage}
              alt="Business showcase"
              className="w-full h-full object-cover"
              onLoad={() => AOS.refresh()}
            />
          </div>

          {/* Heading */}
          <h2
            className="
            text-center
            text-xl sm:text-2xl lg:text-[32px]
            font-semibold
            text-[#555e6b]
            mb-8
          "
          >
            Let&apos;s discuss what we could do for your business.
          </h2>

          {/* Button */}
          <button
            className="
            px-10 sm:px-12
            py-3 sm:py-3.5
            rounded-full
            bg-[#7fc3ff]
            border border-[#5fa8ff]
            text-[#2658b6]
            font-semibold
            tracking-[0.18em]
            uppercase
            text-xs sm:text-sm
            shadow-sm
            hover:bg-[#5fa8ff]
            hover:text-white
            hover:shadow-md
            transition-all
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#5fa8ff]
            focus-visible:ring-offset-2
          "
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>

      <div
        className="w-full h-[200px] relative"
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        <Image
          src={cover}
          alt="banner"
          fill
          className="object-cover"
          onLoad={() => AOS.refresh()}
        />
        {/* purple overlay */}
        <div className="absolute inset-0 bg-[#533db5]/40 pointer-events-none" />
      </div>
    </section>
  );
};

export default DiscussCTA;
