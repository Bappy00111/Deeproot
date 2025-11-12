


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

// const ServiceSection = ({ icon, title, description, extraSection }) => {
//   return (
//     <section className="py-16 bg-white">
//       {/* Top content */}
//       <div className="app-container flex flex-col md:flex-row md:gap-10 items-start text-center md:text-left">
//         {/* Icon */}
//         <div className="w-16 h-16 bg-[#504992]  flex justify-center items-center
//                         mx-auto md:mx-0 mb-6 md:mb-0 shrink-0">
//           <FontAwesomeIcon
//             icon={faConnectdevelop}
//             className="text-white text-2xl"
//           />
//         </div>

//         {/* Text */}
//         <div className="w-full">
//           <h2 className="font-roboto text-2xl sm:text-3xl md:text-[40px] font-medium text-gray-800 mb-4">
//             {title}
//           </h2>
//           <p className="text-[#726f6f] leading-7 font-popins text-sm sm:text-base">
//             {description}
//           </p>
//         </div>
//       </div>

//       {/* Extra Section */}
//       {extraSection && (
//         <div className="bg-[#f3f4f6] mt-10 py-10">
//           <div className="app-container">
//             <h3 className="text-center font-roboto text-2xl sm:text-3xl md:text-[40px]
//                            font-medium text-[#533db5] drop-shadow mb-8">
//               {extraSection.title}
//             </h3>

//             <ul className="space-y-6">
//               {extraSection.bullets.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex gap-3 text-[#54595f]"
//                 >
//                   {/* bullet dot */}
//                   <span className="mt-2 text-lg leading-none">•</span>

//                   {/* text block */}
//                   <div className={`text-left md:flex ${index === 0
//                       ? 'md:pl-12'
//                       : index === 1
//                         ? 'md:pl-15'
//                         : index === 2
//                           ? 'md:pl-24'
//                           : index === 3
//                             ? 'md:pl-5'
//                             : ''
//                     } `}>
//                     <p className="font-montserrat font-semibold text-sm sm:text-base ">
//                       {item.bold}
//                     </p>
//                     <p className={`font-montserrat text-xs sm:text-sm md:text-base leading-relaxed `}>
//                       {item.text}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ServiceSection;


// components/ServiceSection.jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

const ServiceSection = ({ icon, title, description, extraSection }) => {
  useEffect(() => {
    AOS.init({
      duration: 1800,  // 1.8s
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Top content */}
      <div
        className="app-container flex flex-col md:flex-row md:gap-10 items-start text-center md:text-left"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        {/* Icon */}
        <div
          className="w-16 h-16 bg-[#504992]  flex justify-center items-center
                        mx-auto md:mx-0 mb-6 md:mb-0 shrink-0"
        >
          <FontAwesomeIcon
            icon={faConnectdevelop}
            className="text-white text-2xl"
          />
        </div>

        {/* Text */}
        <div className="w-full">
          <h2 className="font-roboto text-2xl sm:text-3xl md:text-[40px] font-medium text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-[#726f6f] leading-7 font-popins text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Extra Section */}
      {extraSection && (
        <div className="bg-[#f3f4f6] mt-10 py-10">
          <div
            className="app-container"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1800"
            data-aos-delay="100"
          >
            <h3
              className="text-center font-roboto text-2xl sm:text-3xl md:text-[40px]
                           font-medium text-[#533db5] drop-shadow mb-8"
            >
              {extraSection.title}
            </h3>

            <ul className="space-y-6">
              {extraSection.bullets.map((item, index) => (
                <li key={index} className="flex gap-3 text-[#54595f]">
                  {/* bullet dot */}
                  <span className="mt-2 text-lg leading-none">•</span>

                  {/* text block */}
                  <div
                    className={`text-left md:flex ${
                      index === 0
                        ? "md:pl-12"
                        : index === 1
                        ? "md:pl-15"
                        : index === 2
                        ? "md:pl-24"
                        : index === 3
                        ? "md:pl-5"
                        : ""
                    } `}
                  >
                    <p className="font-montserrat font-semibold text-sm sm:text-base ">
                      {item.bold}
                    </p>
                    <p className={`font-montserrat text-xs sm:text-sm md:text-base leading-relaxed `}>
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;

