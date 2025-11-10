import React from "react";
import Image from "next/image";
import heroImg from "../../public/image/google-for-nonprofits//asset 1.png"; // path তোমার অনুযায়ী ঠিক করো

function NonProfitHero() {
  return (
    <section className="w-full bg-[#f5f6f8]">
      <div className="app-container">
        <div className="min-h-[60vh] flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5  py-10">

          {/* LEFT: Heading */}
          <div className="w-full lg:w-1/2 flex items-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[40px] font-medium leading-snug text-[#111827] font-montserrat">
              Digital Marketing For Non-

              Profit Organisations
            </h1>
          </div>

          {/* RIGHT: Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl">
              <Image
                src={heroImg}
                alt="Two people shaking hands representing digital marketing support"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default NonProfitHero;
