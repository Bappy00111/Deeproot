
import Image from "next/image";
import bgImg from "../../public/image/asset 9.jpeg";
import topImg from "../../public/image/asset 1.png"; // আপনার illustration
import Home from "./Home";

export default function ParallaxSection() {
  return (
    <div className="w-full">
      {/* ✅ TOP WHITE SECTION */}
      <Home/>

      {/* ✅ BOTTOM FIXED BACKGROUND SECTION */}
      <section className="relative w-full bg-fixed bg-cover bg-center">

        {/* Background Image */}
        <Image
          src={bgImg}
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#504992]/80 -z-10"></div>

        <div className="relative z-10 text-left max-w-4xl mx-auto text-white py-12 px-4">
          <h2 className="text-xl md:text-[29px] font-medium font-roboto">
            Engineered in Tasmania, Built for Global Challenges
          </h2>

          <p className=" mt-4 text-sm md:text-[19px] text-gray-200 leading-relaxed font-popins font-light italic">
            We design and develop custom software, APIs, and enterprise systems
            that streamline workflows, solve complex challenges, and drive innovation –
            backed by local Tasmanian expertise.
          </p>

       <div className="flex justify-center">
           <button className="mt-8 bg-white  text-blue-500 font-semibold py-3 px-10 tracking-widest rounded-full border border-green-400 duration-300 font-popins cursor-pointer">
            LET’S TALK
          </button>
       </div>
        </div>

      </section>

    </div>
  );
}

