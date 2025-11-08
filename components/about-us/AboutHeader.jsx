const  AboutHeader = () => {
  return (
    <div className="w-full font-roboto app-container">
      {/* Top Title */}
      <section className="pt-4 pb-6 text-center ">
        <h1 className="text-4xl md:text-6xl xl:text-[68px] font-medium tracking-tight text-gray-900">
          About Us
        </h1>
      </section>

      {/* Card Section */}
      <section className="">
        <div className=" bg-white shadow shadow-card z-10">
          <div className="px-6 py-12 md:px-16 md:py-16 text-center">
            <h2 className="text-3xl md:text-6xl xl:text-[80px] font-medium text-gray-900 leading-tight  tracking-wide">
              Break Cultural Barriers
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base text-[#000000cc] leading-relaxed">
              Assist the transformation of Australia brand industry, and enter
              Asia Pacific markets through cross-border e-commerce.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutHeader;
