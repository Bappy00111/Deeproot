// components/WhatWeOffer.tsx

// import Image from "next/image";
// import { FaDesktop, FaFacebookF, FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";
// import { FaCamera, FaRegAddressCard, FaBookOpen, FaEnvelopeOpenText } from "react-icons/fa6";
// import laptopImg from '../../public/image/copyrighting/asset 3.jpeg'

// const items = [
//   { icon: <FaDesktop />, label: "SEO\nCopywriting" },
//   { icon: <FaFacebookF />, label: "Social\nMedia\nContent" },
//   { icon: <FaBriefcase />, label: "Email\nCampaigns" },
//   { icon: <FaChalkboardTeacher />, label: "Training\nMaterial" },
//   { icon: <FaCamera />, label: "Blogs and\nArticles" },
//   { icon: <FaRegAddressCard />, label: "Profiles" },
//   { icon: <FaBookOpen />, label: "Brochures" },
//   { icon: <FaEnvelopeOpenText />, label: "Newsletters" },
// ];

// export default function WhatWeOffer() {
//   return (
//     <section className="bg-white py-12 sm:py-16 lg:py-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center  lg:items-start gap-5 lg:gap-14">
//           {/* LEFT: Icons + text grid */}
//           <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-y-10 xl:gap-y-20 gap-x-4  lg:gap-x-10">
//             {items.map((item, i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4C3DA8] text-white text-xl flex-shrink-0">
//                   {item.icon}
//                 </div>
//                 <div className="text-[#4C3DA8] text-2xl leading-snug font-semibold">
//                   {item.label.split("\n").map((line, idx) => (
//                     <div key={idx}>{line}</div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT: Image */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <div className="w-full max-w-md">
//               <Image
//                 src={laptopImg} // নিজের path দাও
//                 alt="Person working on laptop"
//                 width={600}
//                 height={800}
//                 className="w-full h-[400px] xl:h-[600px] object-cover"
//               />
//               <div className="mt-10 text-center">
//                 <p className="text-xl sm:text-2xl font-semibold text-[#4C3DA8]">
//                   What we offer
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Bottom label */}

//       </div>
//     </section>
//   );
// }


// components/WhatWeOffer.tsx

import Image from "next/image";
import laptopImg from '../../public/image/copyrighting/asset 3.jpeg'
import {
  FaDesktop,
  FaFacebookF,
  FaBriefcase,
  FaChalkboardTeacher,
  FaCamera,
  FaRegAddressCard,
  FaBookOpen,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const items = [
  { icon: FaDesktop, label: "SEO Copywriting" },
  { icon: FaFacebookF, label: "Social Media Content" },
  { icon: FaBriefcase, label: "Email Campaigns" },
  { icon: FaChalkboardTeacher, label: "Training Material" },
  { icon: FaCamera, label: "Blogs and Articles" },
  { icon: FaRegAddressCard, label: "Profiles" },
  { icon: FaBookOpen, label: "Brochures" },
  { icon: FaEnvelopeOpenText, label: "Newsletters" },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row items-start  gap-10 lg:gap-14">
          {/* LEFT: ITEMS */}
          <div className="w-full lg:w-1/2">
            {/* Mobile: single column + centered; md+: 2 columns, left aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-10 xl:gap-y-24 gap-x-10">
              {items.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="
                    flex flex-col md:flex-row items-center
                    text-center sm:text-left
                    gap-3
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      h-14 w-14
                      rounded-full
                      bg-[#4C3DA8]
                      text-white
                      text-2xl
                      shadow-sm
                      transition-transform duration-200
                      hover:-translate-y-1
                    "
                  >
                    <Icon />
                  </div>
                  <p className="text-[#4C3DA8] font-semibold text-lg sm:text-xl xl:text-[25px] leading-snug font-roboto ">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full ">
              <Image
                src={laptopImg} // নিজের path দাও
                alt="Person working on laptop"
                width={600}
                height={750}
                className="w-full h-[400px] xl:h-[700px] object-cover "
              />
              <div className="mt-8 sm:mt-10 text-center">
                <p className="text-lg sm:text-xl font-semibold text-[#4C3DA8]">
                  What we offer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LABEL */}

      </div>
    </section>
  );
}

