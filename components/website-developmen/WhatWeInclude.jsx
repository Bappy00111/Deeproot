import Image from "next/image";
import img from '../../public/image/webSite_development/asset 3.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

export default function WhatWeInclude() {
  return (
    <section className="bg-white">
      <div className="app-container  py-10 xl:py-16 ">
        <div className=" grid grid-cols-1  md:grid-cols-2 items-start lg:items-center gap-10 lg:gap-16">
          {/* Left: Icon + Text */}
          <div className="flex flex-col md:flex-row items-start md:gap-8 ">
            {/* Purple Icon */}
            <div className="w-16 h-16 bg-[#504992]  flex justify-center items-center
                        mx-auto md:mx-0 mb-6 md:mb-0 shrink-0">
              <FontAwesomeIcon
                icon={faConnectdevelop}
                className="text-white text-2xl"
              />
            </div>

            {/* Heading + Paragraph */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold  font-roboto text-[#444444] mb-6">
                What we include?
              </h2>

              <p className="text-base md:text-base leading-relaxed text-[#6a7282] max-w-xl font-popins tracking-wide">
                We include{" "}
                <span className="font-semibold text-[#726f6f]">
                  ongoing support
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#726f6f]">
                  maintenance
                </span>{" "}
                of your website,{" "}
                <span className="font-semibold text-[#726f6f]">
                  a constant work
                </span>{" "}
                on keeping your website{" "}
                <span className="font-semibold text-[#726f6f]">
                  securely and well-performed.
                </span>
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-[460px] lg:max-h-[460px] aspect-[3/4] lg:aspect-[3/4]">
              <Image
                src={img}
                alt="Developer workspace"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
