// components/DigitalMarketingHero.jsx
import Image from "next/image";
import marketingIllustration from "../../public/image/asset 1.png"; // 👉 এখানে নিজের image দিন

const ServiceHero = () => {
  return (
    <section className="bg-[#f5f6f8]">
      <div className="app-container py-16 ">
        {/* 2-column layout on lg, stacked on mobile */}
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* LEFT: Text block */}
          <div>
            {/* Top badge */}
            <span className="inline-block bg-[#ffb638] text-white text-xs xl:text-[15px] font-extrabold tracking-wide uppercase px-6 py-2 rounded-full font-sora">
              Digital Marketing
            </span>

            {/* Main heading */}
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[50px] font-medium text-[#111827] leading-tight font-montserrat">
              Reaching Oversea
              <br className="hidden sm:block" />
              Buyers
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-[#3a3a3a] font-normal leading-relaxed font-montserrat">
              Get Facebook, WeChat, Google Marketing, plus expert social media
              consultation and marketing campaigns. Grow your brand’s relevance
              and reach with Deeproot Australia.
            </p>
          </div>

          {/* RIGHT: Illustration */}
          <div className="relative w-full h-56 sm:h-72 lg:h-[420px] font-montserrat">
            <Image
              src={marketingIllustration}
              alt="Digital marketing reaching overseas buyers"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
