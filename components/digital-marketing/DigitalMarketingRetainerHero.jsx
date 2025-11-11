


import Image from "next/image";

export default function DigitalMarketingRetainerHero() {
  return (
    <main className="bg-[#f5f6f8]">
      <section
        className="
        app-container
          py-10 sm:py-14 lg:py-20
          flex flex-col md:flex-row
          items-center
          gap-8 lg:gap-12
        "
      >
        {/* LEFT: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            className="
              font-montserrat
              text-2xl sm:text-3xl md:text-4xl lg:text-[40px]
              font-medium
              leading-snug md:leading-tight
              text-black
            "
          >
            Digital Marketing Retainer

            Services
          </h1>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="https://deeproot.com.au/wp-content/uploads/2020/05/img1-1-768x777.png"
            alt="Digital marketing illustration"
            width={700}
            height={700}
            className="
              w-[70%]
              sm:w-[60%]
              md:w-[65%]
              lg:w-[80%]
              xl:w-[550px]
              h-auto
            "
          />
        </div>
      </section>
    </main>
  );
}

