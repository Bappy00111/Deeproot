import React from 'react';

const SocialMediaHome = () => {
  return (
    <main className=" bg-gray-50 flex items-center justify-center xl:pb-20">
      <section className="w-full app-container md:flex items-center gap-5  py-10">
        {/* Left Text */}
        <h1 className="flex-1 text-[45px] xl:text-[50px] font-medium text-black leading-tight font-montserrat pb-4 md:pb-0">
          Social Media Marketing
        </h1>

        {/* Purple Dot */}
        <div className="hidden lg:block w-4 h-4 rounded-full bg-[#7B6CFF]" />

        {/* Right Video / Thumbnail */}
        <div className="w-full  md:w-[320px] xl:w-[520px] aspect-[16/9] bg-white  shadow-lg overflow-hidden flex items-center justify-center">
          {/* অপশন ১: Video */}
          <video
            src="https://deeproot.com.au/wp-content/uploads/2020/06/20200214_PerformanceMarketingAnimation_1-1.mp4"
            className="w-full h-full object-cover"
            controls
          />

          {/* অপশন ২ (যদি শুধু ইমেজ থাকে) */}
          {/* <img
            src="/images/social-media-thumb.png"
            alt="Social Media Marketing"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </section>
    </main>
  );
};

export default SocialMediaHome;
