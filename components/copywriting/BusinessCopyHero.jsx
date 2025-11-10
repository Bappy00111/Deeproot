import React from 'react';
import Image from 'next/image';
import cover from '../../public/image/copyrighting/asset 2.jpeg'

const BusinessCopyHero = () => {
  return (
    <section

    >
      {/* Purple overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-700/90" /> */}

      {/* Content wrapper */}
      <div className="relative app-container py-10 ">
        <div
          className="
                flex flex-col lg:flex-row
                items-center lg:items-stretch
                gap-8 lg:gap-12
              "
        >
          {/* Left: White image card */}
          <div className="w-full lg:w-[55%] flex justify-center">
            <div className=" shadow-2xl overflow-hidden w-full max-w-3xl">
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-80 lg:h-[440px]">
                <Image
                  src={cover}
                  alt="Laptop with code and coffee"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div className="w-full lg:w-[45%] text-white flex flex-col justify-center  md:justify-between">
            <h2 className="text-2xl sm:text-3xl font-roboto  font-semibold leading-snug mb-6">
              Your Content Values

            </h2>

            <p className="text-base sm:text-lg xl:text-[19px] font-popins font-light tracking-widest text-white/90 mb-4">
              No matter what you are trying to brand, you need to tell some impressive stories that can attract attention and hit what actually matters for customers.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-white/90 mb-8">
              Good content requires clear logical flow, right theme, and clear concise copy that can successfully grab readers’ attention so that they can spend time to look through your details.
            </p>

            <button
              className="
                     w-3/5
                    inline-flex items-center justify-center
                    px-10 sm:px-12
                    py-3.5 sm:py-4
                    rounded-full
                    text-blue-900
                    bg-emerald-400
                    border border-transparent
                    hover:bg-transparent
                    hover:border-white
                    hover:text-white
                    tracking-[0.18em]
                    uppercase
                    text-sm sm:text-base
                    font-bold
                    font-popins
                    shadow-lg
                    cursor-pointer
                    transition-all duration-200
                  "
            >
              START YOUR TRIAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCopyHero;
