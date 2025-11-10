// components/PricingBanner.tsx

export default function PricingBanner() {
  return (
    <section className="w-full bg-[#F2C80B]">
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-10 sm:py-14 lg:py-16
          text-center
        "
      >
        {/* Top label */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-[15px]  text-[#686868] font-semibold uppercase">
          Monthly availability of 40 hours of digital marketing services, invoiced monthly
        </p>

        {/* Price */}
        <p
          className="
            mt-4
            text-4xl sm:text-5xl md:text-6xl lg:text-[80px]
            font-extrabold
            text-white font-montserrat
          "
        >
          $ 3,750 <span className="align-middle">+GST</span>
        </p>

        {/* Bottom label */}
        <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-[24px] font-bold tracking-[0.12em] text-[#7a7a7a] uppercase">
          Contract period is 3 months plus
        </p>
      </div>
    </section>
  );
}
