import Image from "next/image";
import bgImg from "../../public/image/webSite_development/asset 11.jpeg"; // path ঠিক করে নাও
import { IoMdCheckmark } from "react-icons/io";

const plans = [
  {
    name: "Standard",
    price: "500",
    label: "Our team of experts are here to generate Fourunique content for your business blog.",
    features: [
      "4 Blog Articles",
      "On-Page Optimization",
      "High Quality Backlinks",
      "25 Target Keywords",
    ],
    highlight: false,
  },
  {
    name: "Plus",
    price: "1750",
    label: "For small businesses, contractors, consultants",
    features: [
      "16 Blog Articles every month",
      "On-Page Optimization",
      "High Quality Backlinks",
      "100 Target Keywords",

    ],
    highlight: true, // middle card highlight
  },

];

const CopyPackageSection = () => {
  return (
    <main className="w-full">
      <section
        className="
          relative w-full
          h-full py-20
          overflow-hidden
        "
      >
        {/* Background Image */}
        <Image
          src={bgImg}
          alt="Background"
          fill
          className="object-cover -z-20"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#504992]/65 -z-10" />

        {/* Cards on top of background */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full app-container">
            {/* Optional title */}
            {/* <h2 className="text-center text-white text-3xl md:text-4xl font-semibold mb-10">
              Our Packages
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-20">
              {plans.map((plan, index) => {
                // 1st < 2nd < 3rd
                const heightClass =
                  index === 0
                    ? "md:min-h-[600px]"
                    : index === 1
                    ? "md:min-h-[650px]"
                    : "md:min-h-[700px]";

                return (
                  <div
                    key={plan.name}
                    className={`
                      relative flex flex-col justify-between
                      ${heightClass}
                      rounded-2xl
                      px-7 py-[65px]
                      bg-slate-900/50
                      backdrop-blur-xl
                      border border-slate-800/90

                    `}
                  >
                    {/* Glow bar for highlighted card */}
                    {plan.highlight && (
                      <div className="absolute inset-x-0 -top-1 h-1 rounded-t-[32px] border-t border-4 border-emerald-400" />
                    )}

                    {/* Content */}
                    <div>
                      <p className="text-lg xl:text-[24px] font-light text-center text-white font-montserrat">
                        {plan.name}
                      </p>
                      <p className="mt-2 text-base lg:text-[32px] font-bold text-center text-white font-sora ">
                        {plan.label}
                      </p>

                      <div className="mt-3 flex flex-col items-center gap-1 font-montserrat font-light">
                        <span className="text-5xl xl:text-[70px]  text-[#00d492]">
                          <span className="text-[50px]">$</span>{plan.price}
                        </span>
                        <p className="text-xs xl:text-[14px] text-slate-300 text-center max-w-[230px]">
                          (ex gst)
                        </p>
                      </div>

                      <ul className="mt-7 space-y-2 text-xs text-[14px] font-light text-white font-roboto text-center">
                        {plan.features.map((f) => (
                          <li key={f} className="pb-4">
                            {/* <span><IoMdCheckmark className="h-4 w-4" /></span> */}
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-8 mx-auto">
                      <button
                        className={`
                        px-4 lg:px-10 rounded-full py-3 text-sm font-normal font-montserrat cursor-pointer text-center
                          transition
                          ${
                            plan.highlight
                              ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                              : "bg-slate-800/90 text-slate-100 hover:bg-slate-700"
                          }
                        `}
                      >
                        CHOOSE PLAN
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CopyPackageSection;
