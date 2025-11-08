import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ecommerceData } from './ecommerceData';


const EcommerceCardSection = () => {
  return (
     <section className="w-full bg-[#f5f5f5] pt-10 pb-0.5">
      <div className="app-container">
        {ecommerceData.map((service, index) => {
          const reverse = index % 2 === 1; // odd index -> image right, text left

          return (
            <div
              key={service.id}
              className={`

                overflow-hidden
                flex flex-col md:flex-row
                gap-0
                ${reverse ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* IMAGE SIDE */}
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover xl:h-[520px]"
                />
              </div>

              {/* TEXT SIDE */}
              <div className="md:w-1/2 py-4 md:py-8 md:p-10  xl:p-[100px] flex flex-col justify-start ">
                <h3 className="mb-4 text-xl md:text-2xl font-bold font-sora text-[#1d1f24]">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm md:text-[15px] font-normal font-montserrat leading-relaxed text-[#72757f]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EcommerceCardSection;
