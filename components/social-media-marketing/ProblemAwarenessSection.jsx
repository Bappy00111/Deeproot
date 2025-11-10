// import Image from 'next/image';
// import React from 'react';

// const ProblemAwarenessSection = () => {
//   return (
//     <section className=''>
//       <div className="grid lg:grid-cols-5 px-16">
//         {/* Split Background */}
//         {/* one   */}
//         <div className='bg-[#504492] col-span-2  w-full  h-[550px]'></div>
//         {/* two  */}
//         <div className='bg-[#ffd845] col-span-3 w-full  h-[550px] flex justify-center  items-center'>
//           <div>
//             <p className="text-lg font-extrabold text-[#333642] mb-3 font-playfair">
//               Problems Finding Customers?
//             </p>
//             <h2 className="text-4xl lg:text-[50px] font-extrabold leading-tight text-[#333642] mb-8 font-montserrat">
//               Are You One
//               <br />
//               Of Those?
//             </h2>

//             <ul className="space-y-3 text-base font-light text-[#3a3a3a] leading-relaxed font-montserrat">
//               <li>Struggling with no channels and methods?</li>
//               <li>Running Facebook but no fans?</li>
//               <li>Don’t know how to effectively promote your brand?</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* img  */}
//       <div className=' h-[360px] w-[600px]  '>
//         <Image width={500} height={500} src="https://deeproot.com.au/wp-content/uploads/2020/05/About.png" alt="" srcset="" />
//       </div>
//     </section>
//   );
// };

// export default ProblemAwarenessSection;

import Image from "next/image";
import React from "react";

const ProblemAwarenessSection = () => {
  return (
    <section className="w-full ">
      {/* ========== LG & XL (ডেস্কটপ) ========== */}
      <div className="relative hidden xl:grid lg:grid-cols-7 h-[550px]  px-4 md:px-10 xl:px-16">
        {/* Left purple 30% */}
        <div className="bg-[#504492] col-span-3" />

        {/* Right yellow 70% + text */}
        <div className="bg-[#ffd845] col-span-4 flex items-center justify-center">
          <div className="px-16">
            <p className="text-lg font-extrabold text-[#333642] mb-3 font-playfair">
              Problems Finding Customers?
            </p>
            <h2 className="text-4xl lg:text-[50px] font-extrabold leading-tight text-[#333642] mb-8 font-montserrat">
              Are You One
              <br />
              Of Those?
            </h2>
            <ul className="space-y-3 text-base font-light text-[#3a3a3a] leading-relaxed font-montserrat">
              <li>Struggling with no channels and methods?</li>
              <li>Running Facebook but no fans?</li>
              <li>Don’t know how to effectively promote your brand?</li>
            </ul>
          </div>
        </div>

        {/* Image: purple & yellow বর্ডারের মাঝ বরাবর */}
        <div className="absolute top-1/2 left-[30%] xl:left-[40%] -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-white px-10 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <Image
              width={420}
              height={260}
              src="https://deeproot.com.au/wp-content/uploads/2020/05/About.png"
              alt="Customer Illustration"
              className="w-[380px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ========== MD (ট্যাবলেট) ========== */}
      <div className="hidden lg:block xl:hidden">
        {/* Top yellow with text */}
        <div className="bg-[#ffd845] px-10 py-14">
          <p className="text-base font-extrabold text-[#333642] mb-2 font-playfair">
            Problems Finding Customers?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#333642] mb-6 font-montserrat">
            Are You One
            <br />
            Of Those?
          </h2>
          <ul className="space-y-3 text-base font-light text-[#3a3a3a] leading-relaxed font-montserrat max-w-xl">
            <li>Struggling with no channels and methods?</li>
            <li>Running Facebook but no fans?</li>
            <li>Don’t know how to effectively promote your brand?</li>
          </ul>
        </div>

        {/* Bottom purple with centered image */}
        <div className="bg-[#504492] flex items-center justify-center py-14">
          <div className="bg-white px-8 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <Image
              width={380}
              height={230}
              src="https://deeproot.com.au/wp-content/uploads/2020/05/About.png"
              alt="Customer Illustration"
              className="w-[320px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ========== SM (মোবাইল) ========== */}
      <div className="block lg:hidden">
        {/* Text */}
        <div className="bg-[#ffd845] px-6 py-10">
          <p className="text-sm font-extrabold text-[#333642] mb-2 font-playfair">
            Problems Finding Customers?
          </p>
          <h2 className="text-2xl font-extrabold leading-snug text-[#333642] mb-5 font-montserrat">
            Are You One Of Those?
          </h2>
          <ul className="space-y-2 text-sm font-light text-[#3a3a3a] leading-relaxed font-montserrat">
            <li>Struggling with no channels and methods?</li>
            <li>Running Facebook but no fans?</li>
            <li>Don’t know how to effectively promote your brand?</li>
          </ul>
        </div>

        {/* Image */}
        <div className="bg-[#504492] flex items-center justify-center py-10">
          <div className="bg-white px-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <Image
              width={260}
              height={180}
              src="https://deeproot.com.au/wp-content/uploads/2020/05/About.png"
              alt="Customer Illustration"
              className="w-[220px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwarenessSection;

