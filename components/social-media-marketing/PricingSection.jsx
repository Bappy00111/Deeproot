// app/components/PricingSection.jsx
import React from "react";

const pricingPlans = [
  {
    name: "Starter Package",
    price: 1200,
    currency: "$",
    label: "From",
    note: "ex gst.",
    features: [
      "FB Fanpage Management",
      "Banner design of FB fan group image (monthly replacement)",
      "4 articles published every month",
      "Report basic questions of fans and message control FB fan group",
      "Diversion to official website or e-commerce platform",
      "FB advertisements",
    ],
  },
  {
    name: "Professional Package",
    price: 1600,
    currency: "$",
    label: "From",
    note: "ex gst.",
    features: [
      "FB Fanpage Management",
      "Banner design of FB fan group image (monthly replacement)",
      "6 articles published every month (with illustration & picture design)",
      "Report basic questions of fans and message control FB fan group",
      "Diversion to official website or e-commerce platform",
      "FB advertisements",
      "Increase the number of FB fan groups (not guaranteed)",
      "Monthly analysis report",
    ],
  },
  {
    name: "Premium Package",
    price: 2400,
    currency: "$",
    label: "From",
    note: "ex gst.",
    features: [
      "FB Fanpage Management",
      "Banner design of FB fan group image (monthly replacement)",
      "10 articles published every month (with illustration & picture design)",
      "Report basic questions of fans and message control FB fan group",
      "Diversion to official website or e-commerce platform",
      "FB advertisements",
      "Increase the number of FB fan groups (not guaranteed)",
      "Monthly analysis report",
      "1 short video of 30 seconds to 3 minutes per month",
      "Organize Internet events (once a month)",
      "Simultaneously publish on Twitter & Instagram",
    ],
  },
];

function PricingSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* mobile = column, md+ = row; প্রত্যেক card নিজের height */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 xl:gap-12 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl bg-[#1f2334cc] text-white px-4 lg:px-8  pt-10 pb-8 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 text-center"
            >
              {/* Header */}
              <div>
                <h3 className="text-xl xl:text-2xl font-light font-montserrat ">
                  {plan.name}
                </h3>
                <p className="mt-4 text-[32px] font-sora font-bold">{plan.label}</p>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="text-[#03fdad] text-5xl leading-none font-montserrat font-light text-[50px]  xl:text-[74px]">
                    <span className="text-[40px] xl:text-[50px]"> {plan.currency}</span>
                    {plan.price}
                  </span>
                </div>
                <p className="mt-1 text-xs md:text-sm opacity-70 font-montserrat font-light">{plan.note}</p>
              </div>

              {/* Features */}
              <ul className="mt-8 mb-6 space-y-3 text-xs leading-relaxed">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start justify-center gap-2 font-roboto text-[14px] font-normal"
                  >
                    <span className="mt-[2px] text-white text-sm font-black">✔</span>
                    {/* ছোট স্ক্রিনে text-center, বড়তে আলাইন সুন্দর রাখতে চাইলে এভাবেই রাখা ভাল */}
                    <span className="text-left sm:text-center">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full rounded-full bg-[#27303a] py-3 text-xs font-semibold uppercase tracking-wide hover:bg-[#03fdad] hover:text-[#27303a] transition-colors font-montserrat cursor-pointer">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
