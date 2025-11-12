// components/website-developmen/BusinessHero.jsx
// import Image from "next/image";

// export default function BusinessHero() {
//   return (
//     <section>
//       {/* Content wrapper */}
//       <div className="relative app-container py-10 ">
//         <div
//           className="
//             flex flex-col lg:flex-row
//             items-center lg:items-stretch
//             gap-8 lg:gap-12
//           "
//         >
//           {/* Left: White image card */}
//           <div className="w-full lg:w-[55%] flex justify-center">
//             <div className=" shadow-2xl overflow-hidden w-full max-w-3xl">
//               <div className="relative w-full h-[220px] sm:h-[260px] md:h-80 lg:h-[440px]">
//                 <Image
//                   src="/image/webSite_development/asset%202.jpeg"
//                   alt="Laptop with code and coffee"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right: Text + CTA */}
//           <div className="w-full lg:w-[45%] text-white flex flex-col justify-center  md:justify-between">
//             <h2 className="text-2xl sm:text-3xl font-roboto  font-semibold leading-snug mb-6">
//               Website that help generate
//               <br />
//               your business
//             </h2>

//             <p className="text-base sm:text-lg xl:text-[19px] font-popins font-light tracking-widest text-white/90 mb-4">
//               Communicate with customers to know what their needs for both
//               individuals and businesses.
//             </p>

//             <p className="text-base sm:text-lg leading-relaxed text-white/90 mb-8">
//               We collect information and find out exactly what they are looking
//               for.
//             </p>

//             <button
//               className="
//                 w-1/2
//                 inline-flex items-center justify-center
//                 px-10 sm:px-12
//                 py-3.5 sm:py-4
//                 rounded-full
//                 bg-emerald-400
//                 text-blue-900
//                 hover:text-white
//                 tracking-[0.18em]
//                 uppercase
//                 text-sm sm:text-base
//                 font-bold
//                 shadow-lg
//                 font-popins
//               "
//             >
//               Start Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/website-developmen/BusinessHero.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

export default function BusinessHero() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 1.8s
      once: true,     // একবারই চলবে
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section>
      {/* Content wrapper */}
      <div
        className="relative app-container py-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        <div
          className="
            flex flex-col lg:flex-row
            items-center lg:items-stretch
            gap-8 lg:gap-12
          "
        >
          {/* Left: White image card */}
          <div className="w-full lg:w-[55%] flex justify-center">
            <div className="shadow-2xl overflow-hidden w-full max-w-3xl">
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-80 lg:h-[440px]">
                <Image
                  src="/image/webSite_development/asset%202.jpeg"
                  alt="Laptop with code and coffee"
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => AOS.refresh()} // ইমেজ লোডে রিফ্রেশ (অপশনাল)
                />
              </div>
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div className="w-full lg:w-[45%] text-white flex flex-col justify-center md:justify-between">
            <h2 className="text-2xl sm:text-3xl font-roboto font-semibold leading-snug mb-6">
              Website that help generate
              <br />
              your business
            </h2>

            <p className="text-base sm:text-lg xl:text-[19px] font-popins font-light tracking-widest text-white/90 mb-4">
              Communicate with customers to know what their needs for both
              individuals and businesses.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-white/90 mb-8">
              We collect information and find out exactly what they are looking
              for.
            </p>

            <button
              className="
                w-1/2
                inline-flex items-center justify-center
                px-10 sm:px-12
                py-3.5 sm:py-4
                rounded-full
                bg-emerald-400
                text-blue-900
                hover:text-white
                tracking-[0.18em]
                uppercase
                text-sm sm:text-base
                font-bold
                shadow-lg
                font-popins
              "
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
