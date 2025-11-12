// app/components/WhyCustomersLoveUs.tsx
// import Image from "next/image";
// import img from '../../public/image/asset 1.png';
// import icon_one from '../../public/image/asset 6.png'
// import icon_tow from '../../public/image/asset 7.png'

// export default function WhyCustomersLoveUs() {
//   return (
//     <section className="w-full bg-[#f5f6f8]">
//       <div className="app-container flex-col items-center gap-10  py-10 md:grid md:grid-cols-2 md:items-center md:gap-16 ">
//         {/* LEFT SIDE */}
//         <div className="w-full">
//           {/* Badge */}
//           <div className="inline-flex items-center rounded-full bg-[#ffb54a] px-6 py-2 text-sm xl:text-[15px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(255,181,74,0.6)] font-sora">
//             Our Work
//           </div>

//           {/* Heading */}
//           <h2 className="mt-8 text-4xl xl:text-[40px] font-extrabold leading-tight text-[#22252f] font-playfair">
//             Why customers loves us?
//           </h2>

//           {/* Sub text */}
//           <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8b8f99] md:text-lg font-montserrat font-normal">
//             We are using bilingual techniques to develop a cultural sensitive
//             business frame for you.
//           </p>

//           {/* Bullet blocks */}
//           <div className="mt-10 space-y-6 font-sora text-xl xl:text-[24px] font-bold text-[#26262c]">
//             {/* Item 1 */}
//             <div className="flex items-center gap-4">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe7b8] shadow-[0_8px_20px_rgba(255,181,74,0.35)]">
//                 {/* icon placeholder - replace with SVG */}
//                 {/* <span className="h-8 w-8 rounded-sm bg-[#ffb54a]" /> */}
//                 <Image  src={icon_one} alt="" />
//               </div>
//               <div className="">
//                 Multi-culture
//               </div>
//             </div>

//             {/* Item 2 */}
//             <div className="flex items-center gap-4">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe7b8] shadow-[0_8px_20px_rgba(255,181,74,0.35)]">
//                 {/* icon placeholder - replace with SVG */}
//                 {/* <span className="h-8 w-8 rounded-full bg-[#ffb54a]" /> */}
//                 <Image  src={icon_tow} alt="" />
//               </div>
//               <div className="">
//                 Bilingualism
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE (Illustration) */}
//         <div className="flex w-full justify-center md:justify-end">
//           <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[420px] md:h-[420px] md:w-[460px]">
//             {/* Replace /rocket-illustration.svg with your actual image */}
//             <Image
//               src={img}
//               alt="Team launching a rocket"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// app/components/WhyCustomersLoveUs.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import img from "../../public/image/asset 1.png";
import icon_one from "../../public/image/asset 6.png";
import icon_tow from "../../public/image/asset 7.png";

export default function WhyCustomersLoveUs() {
  useEffect(() => {
    AOS.init({
      duration: 1800,   // ✅ 1.8s
      once: true,       // ✅ স্ক্রলে একবারই অ্যানিমেট হবে
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="w-full bg-[#f5f6f8]">
      <div
        className="app-container flex-col items-center gap-10 py-10 md:grid md:grid-cols-2 md:items-center md:gap-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        {/* LEFT SIDE */}
        <div className="w-full">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-[#ffb54a] px-6 py-2 text-sm xl:text-[15px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(255,181,74,0.6)] font-sora">
            Our Work
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl xl:text-[40px] font-extrabold leading-tight text-[#22252f] font-playfair">
            Why customers loves us?
          </h2>

          {/* Sub text */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8b8f99] md:text-lg font-montserrat font-normal">
            We are using bilingual techniques to develop a cultural sensitive
            business frame for you.
          </p>

          {/* Bullet blocks */}
          <div className="mt-10 space-y-6 font-sora text-xl xl:text-[24px] font-bold text-[#26262c]">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe7b8] shadow-[0_8px_20px_rgba(255,181,74,0.35)]">
                <Image src={icon_one} alt="" />
              </div>
              <div className="">Multi-culture</div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe7b8] shadow-[0_8px_20px_rgba(255,181,74,0.35)]">
                <Image src={icon_tow} alt="" />
              </div>
              <div className="">Bilingualism</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Illustration) */}
        <div className="flex w-full justify-center md:justify-end">
          <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[420px] md:h-[420px] md:w-[460px]">
            <Image
              src={img}
              alt="Team launching a rocket"
              fill
              className="object-contain"
              priority
              onLoad={() => AOS.refresh()} // ইমেজ লোডে রিফ্রেশ (অপশনাল কিন্তু হেল্পফুল)
            />
          </div>
        </div>
      </div>
    </section>
  );
}
