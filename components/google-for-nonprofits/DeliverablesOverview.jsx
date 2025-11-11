import Image from "next/image";
import img from '../../public/image/google-for-nonprofits/asset 2.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

export default function DeliverablesOverview() {
  return (
    <section className="bg-white">
      <div className="app-container  py-10 xl:py-20 2xl:py-40 ">
        <div className=" grid grid-cols-1  md:grid-cols-2 items-center lg:items-start  gap-10 lg:gap-16">
          {/* Left: Icon + Text */}
          <div className="flex flex-col md:flex-row items-start md:gap-8 xl:gap-12 order-2 md:order-1">
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
              <h2 className="text-3xl md:text-4xl lg:text-[41px] font-semibold  font-montserrat text-[#504992] mb-6">
                What is it?
              </h2>

              <p className="text-base md:text-base leading-relaxed text-[#6a7282] max-w-xl font-popins tracking-wide">
                Imagine: You are a nonprofit organisation and wannt to run marketing campaign. If you can get Google Ads advertising budget worth $10,000 USD per month, what you can get from it? We can help you manage this Google Grants and take full advantage of it to make your website visible. Free ads for charities in Tasmania!
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 md:order-2">
            <div className="relative w-full h-auto max-w-md lg:max-w-[460px] lg:max-h-[460px]">
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
