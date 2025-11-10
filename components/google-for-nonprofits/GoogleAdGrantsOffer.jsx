import React from "react";
import Image from "next/image";

// নিজের ইমেজ ফাইলগুলো /public এর ভিতরে রাখো
import adGrantsLogo from "../../public/image/google-for-nonprofits/asset 3.png";
import freeAdsImage from "../../public/image/google-for-nonprofits/asset 4.png";

function GoogleAdGrantsOffer() {
  return (
    <section className="w-full bg-[#f5f6f8]">
      <div className="app-container py-12 md:py-16  font-montserrat">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12">
          {/* LEFT: দুইটা ইমেজ */}
          <div className="flex-1 flex flex-col items-center md:items-right gap-6">
            {/* Google Ad Grants logo */}
            <div className="bg-white px-4 py-2 shadow-sm">
              <Image
                src={adGrantsLogo}
                alt="Google Ad Grants"
                className="w-auto h-10 md:h-14 lg:h-[110px] xl:w-[450ppx] object-contain"
                priority
              />
            </div>

            {/* $10,000/month FREE GOOGLE ADVERTISING image */}
            <div>
              <Image
                src={freeAdsImage}
                alt="$10,000/month - Free Google Advertising"
                className="w-auto h-12 md:h-14 lg:h-[170px] object-contain"
              />
            </div>
          </div>

          {/* Divider (Desktop) */}
          <div className="hidden md:block w-px bg-[#4b3fb6]" />

          {/* RIGHT: Headline text */}
          <div className="flex-1 flex items-center justify-center md:justify-start text-center md:text-left ">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-[#111827]">
              🌱 GOOGLE FOR NONPROFITS: MAXIMIZE
              <br />
              YOUR IMPACT WITH
              <br />
              $10K/YEAR IN FREE TOOLS
            </p>
          </div>

        </div>

        {/* YELLOW BANNER */}
        <div className="mt-12 ">
          <div className="w-full bg-[#F2C80B] py-8 md:py-10 text-center ">
            <h2 className="text-3xl md:text-4xl xl:text-[42px] font-extrabold text-white tracking-wide">
              Limited-Time Offer
            </h2>
            <p className="mt-3 text-lg md:text-xl xl:text-[24px] font-bold text-[#7a7a7a]">
              Free Setup &amp; First Month Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleAdGrantsOffer;

