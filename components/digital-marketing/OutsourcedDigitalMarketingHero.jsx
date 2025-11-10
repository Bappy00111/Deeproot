// components/OutsourcedDigitalMarketingHero.tsx

export default function OutsourcedDigitalMarketingHero() {
  return (
    <section className="w-full bg-[#f5f6f8] pt-10">
      <div
        className="

          rounded-md
          bg-gradient-to-r
          from-[#ebb0e7] via-[#9774d7] to-[#385cde]
          text-white
          text-center
          py-10 sm:py-14 lg:py-20
          font-montserrat
        "
      >
        <h1
          className="

            text-2xl sm:text-3xl md:text-4xl lg:text-[50px]
            font-bold
            leading-tight
          "
        >
          Your Outsourced Digital
          <br className="hidden sm:block" />
          Marketing Department
        </h1>

        <p
          className="
            mt-2
            text-xl sm:text-2xl md:text-3xl lg:text-[50px]
            font-light
          "
        >
          Boost Your Success
        </p>

        <p
          className="
            mt-4 md:mt-6
            max-w-3xl mx-auto
            text-sm sm:text-base md:text-base  font-normal
            text-white/90
          "
        >
          We love helping business grow, and freeing you to concentrate on running
          your business without worrying about managing the staffs.
        </p>
      </div>
    </section>
  );
}
