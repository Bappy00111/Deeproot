// import Image from "next/image";
// import img  from '../../public/image/webSite_development/asset 4.jpeg'
// import img_tow  from '../../public/image/webSite_development/asset 5.jpeg'
// import img_three  from '../../public/image/webSite_development/asset 6.jpeg'

// const features = [
//   {
//     title: "Good Looking",
//     description:
//       "We are committed to deliver impressive websites depending on your business brand.",
//     image: img,
//     alt: "Good looking website",
//   },
//   {
//     title: "SEO",
//     description:
//       "Improve your rankings in Google with Managed SEO and Strategic Plans.",
//     image: img_tow,
//     alt: "SEO letters",
//   },
//   {
//     title: "Ongoing Support",
//     description:
//       "Make sure your services are under good conditions and perform securely.",
//     image: img_three,
//     alt: "Ongoing support workspace",
//   },
// ];

// export default function GrowBusinessSection() {
//   return (
//     <section className="bg-[#e3e4e8] py-16 md:py-20">
//       <div className="app-container">
//         {/* Heading */}
//         <h2 className="text-center text-2xl md:text-3xl  font-semibold text-[#474545] mb-12 font-roboto">
//           Grow your business. Fast.
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
//           {features.map((feature) => (
//             <div
//               key={feature.title}
//               className="bg-white text-center py-14 px-8 shadow-sm"
//             >
//               {/* Circle image */}
//               <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={feature.image}
//                     alt={feature.alt}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl md:text-2xl  font-extrabold text-[#333333] mb-5 font-playfair">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-base  leading-relaxed font-normal text-gray-500 font-popins">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// components/website-developmen/GrowBusinessSection.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import img from "../../public/image/webSite_development/asset 4.jpeg";
import img_tow from "../../public/image/webSite_development/asset 5.jpeg";
import img_three from "../../public/image/webSite_development/asset 6.jpeg";

const features = [
  {
    title: "Good Looking",
    description:
      "We are committed to deliver impressive websites depending on your business brand.",
    image: img,
    alt: "Good looking website",
  },
  {
    title: "SEO",
    description:
      "Improve your rankings in Google with Managed SEO and Strategic Plans.",
    image: img_tow,
    alt: "SEO letters",
  },
  {
    title: "Ongoing Support",
    description:
      "Make sure your services are under good conditions and perform securely.",
    image: img_three,
    alt: "Ongoing support workspace",
  },
];

export default function GrowBusinessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 1.8s
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="bg-[#e3e4e8] py-16 md:py-20">
      <div className="app-container">
        {/* Heading */}
        <h2
          className="text-center text-2xl md:text-3xl font-semibold text-[#474545] mb-12 font-roboto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1800"
        >
          Grow your business. Fast.
        </h2>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1800"
        >
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white text-center py-14 px-8 shadow-sm"
              data-aos="zoom-in"
              data-aos-delay={idx * 120} // 0ms, 120ms, 240ms
              data-aos-duration="1800"
            >
              {/* Circle image */}
              <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    onLoad={() => AOS.refresh()}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-2xl font-extrabold text-[#333333] mb-5 font-playfair">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed font-normal text-gray-500 font-popins">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

