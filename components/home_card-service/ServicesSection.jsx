
// import Image from "next/image";
// import { servicesData } from "./servicesData";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const ServicesSection = () => {
//   return (
//     <section className="w-full bg-white py-16">
//       <div className="app-container ">
//         {servicesData.map((service, index) => {
//           const isReversed = index % 2 !== 0;

//           return (
//             <div
//               key={service.id}
//               className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 font-roboto"
//             >
//               {/* Media */}
//               <div className={isReversed ? "md:order-2 " : ""}>
//                 {/* Variant: light bars above & below image */}
//                 {service.layout === "bars" && (
//                   <div className="">
//                     <div className="h-20 w-full  bg-gray-100" />
//                     <div className="relative">
//                       <Image
//                         src={service.image}
//                         alt={service.title}
//                         width={900}
//                         height={600}
//                         className="w-full  object-cover shadow-lg"
//                       />
//                     </div>
//                     <div className="h-20 w-full  bg-gray-300" />
//                   </div>
//                 )}

//                 {/* Variant: colored strip behind the image (like the purple one) */}
//                 {service.layout === "strip" && (
//                   <div className="relative">
//                     {/* background strip */}
//                     <div
//                       className="absolute inset-0 -mx-8 "
//                       style={{ backgroundColor: service.accentColor ?? "#5B49A8" }}
//                       aria-hidden
//                     />
//                     <div className="relative p-6 md:p-10">
//                       <Image
//                         src={service.image}
//                         alt={service.title}
//                         width={900}
//                         height={600}
//                         className="w-full  object-cover shadow-xl"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Copy */}
//               <div className={isReversed ? "md:order-1 py-10 lg:py-0 " : "py-10 lg:py-0"}>
//                 <h3 className="mb-4 text-2xl xl:text-[32px] font-bold text-[#4a4659]">
//                   {service.title}
//                 </h3>
//                 <p className="mb-6 leading-relaxed text-[#76787f]">
//                   {service.description}
//                 </p>
//                 <a
//                   href={service.buttonLink}
//                   className="inline-flex text-sm items-center gap-2 tracking-widest text-gray-700 rounded-full border bg-[#fddc5b]   border-blue-600 px-10 py-2.5 font-medium  transition hover:bg-[#4A4659] hover:text-[#fddc5b]"
//                 >
//                   Get Started <span aria-hidden><MdKeyboardDoubleArrowRight  className="h-5 w-5" /></span>
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

'use client';

import { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { servicesData } from "./servicesData";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,          // অ্যানিমেশনের সময়
      easing: 'ease-out-quart',
      once: true,             // একবারই অ্যানিমেট হবে (প্রয়োজনে false)
      offset: 80,             // একটু নিচে স্ক্রল হলে ট্রিগার
    });
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="app-container">
        {servicesData.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const delayMedia = 0;
          const delayCopy  = 120;

          return (
            <div
              key={service.id}
              className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 font-roboto"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {/* Media */}
              <div
                className={isReversed ? "md:order-2" : ""}
                data-aos="fade-up"
                data-aos-delay={delayMedia}
                data-aos-anchor-placement="top-bottom"
              >
                {/* Variant: bars */}
                {service.layout === "bars" && (
                  <div>
                    <div className="h-20 w-full bg-gray-100" />
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={600}
                        className="w-full object-cover shadow-lg"
                      />
                    </div>
                    <div className="h-20 w-full bg-gray-300" />
                  </div>
                )}

                {/* Variant: strip */}
                {service.layout === "strip" && (
                  <div className="relative">
                    <div
                      className="absolute inset-0 -mx-8"
                      style={{ backgroundColor: service.accentColor ?? "#5B49A8" }}
                      aria-hidden
                    />
                    <div className="relative p-6 md:p-10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={600}
                        className="w-full object-cover shadow-xl"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Copy */}
              <div
                className={isReversed ? "md:order-1 py-10 lg:py-0" : "py-10 lg:py-0"}
                data-aos="fade-up"
                data-aos-delay={delayCopy}
                data-aos-anchor-placement="top-bottom"
              >
                <h3 className="mb-4 text-2xl xl:text-[32px] font-bold text-[#4a4659]">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-[#76787f]">
                  {service.description}
                </p>
                <a
                  href={service.buttonLink}
                  className="inline-flex text-sm items-center gap-2 tracking-widest text-gray-700 rounded-full border bg-[#fddc5b] border-blue-600 px-10 py-2.5 font-medium transition hover:bg-[#4A4659] hover:text-[#fddc5b]"
                >
                  Get Started{" "}
                  <span aria-hidden>
                    <MdKeyboardDoubleArrowRight className="h-5 w-5" />
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;

