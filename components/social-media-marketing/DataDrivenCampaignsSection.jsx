// app/components/DataDrivenCampaignsSection.tsx

import React from "react";

const services = [
  {
    title: "SEO",
    desc: "“Dominate the search results.”",
  },
  {
    title: "Social Media",
    desc: "“Build relationships, not just followers.”",
  },
  {
    title: "Google Ads",
    desc: "“Pay for results, not guesses.”",
  },
];

const DataDrivenCampaignsSection = () => {
  return (
    <section className="bg-white text-[#333333]  py-16 md:py-24">
      {/* Top Text */}
      <div className="app-container">
        <p className="text-sm md:text-base xl:text-[18px] font-bold tracking-wide mb-4 font-playfair">
          Originality Is Our Commitment
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-extrabold font-playfair">
          Data-Driven Campaigns To Grow Your Audience And
          <br className="hidden sm:block" />
          {" "}Revenue
        </h2>
      </div>

      {/* Services */}
      <div className="app-container mt-16 grid gap-10 md:grid-cols-3">
        {services.map((item) => (
          <div key={item.title} className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-extrabold mb-3 font-montserrat">
              {item.title}
            </h3>
            <p className="text-base font-light text-[#3a3a3a] mb-8 font-montserrat">
              {item.desc}
            </p>
            <div className="h-px w-full bg-[#e1e1e1]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataDrivenCampaignsSection;
