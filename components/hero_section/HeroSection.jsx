
import Image from "next/image";
import React from "react";
import bgImg from "../../public/image/asset 10.webp"; // আপনার ইমেজের path ঠিক করুন

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Top Hero Section */}
      <section className="relative w-full h-[350px] md:h-[660px]">
        {/* Background Image */}
        <Image
          src={bgImg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl xl:text-[70px] font-semibold text-center px-4 leading-snug md:tracking-wide font-roboto">
            Make your business visible
          </h1>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-[#504A97] text-white px-8 md:px-20  py-12 flex flex-col md:flex-row justify-around items-center gap-5">

        {/* Triangle Shape */}
        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 w-0 h-0
                        border-l-[20px] border-r-[20px] border-b-[20px]
                        border-transparent border-b-gray-950 rotate-180">
        </div>

        {/* Left Text */}
        <h2 className="text-2xl md:text-3xl max-w-[550px] font-semibold text-center md:text-left leading-snug font-slab">
          Help businesses sell MORE through digital solution
        </h2>

        {/* Right Button */}
        <button className="bg-yellow-400 text-blue-900 px-7 py-3 font-semibold rounded shadow-md hover:opacity-90 font-roboto">
          CONSULT NOW &raquo;
        </button>

      </section>
    </div>
  );
};

export default HeroSection;


