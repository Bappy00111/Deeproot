// components/WebsiteDevelopmentHero.tsx
import Image from "next/image";
import cover from '../../public/image/webSite_development/asset 1.png'

export default function WebsiteDevelopmentHero() {
  return (
    <section className="bg-gray-50">
      <div
        className="
          app-container w-full
          xl:min-h-[calc(100vh-80px)]
          flex flex-col md:flex-row
          items-start md:items-center
          justify-center
          py-10
          gap-8
        "
      >
        {/* Text */}
        <div className="w-full ">
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl font-montserrat font-medium

              text-black
              leading-tight
            "
          >
            Website Development
          </h1>
        </div>

        {/* Illustration */}
        <div
          className="
            w-full md:w-1/2
            flex justify-center md:justify-end
          "
        >
          <div
            className="
              relative
              w-[320px] h-80
              sm:w-[260px] sm:h-[230px]
              md:w-[324px] md:h-[324px]
              lg:w-[450px] lg:h-[450px]
              xl:w-[580px] xl:h-[580px]
            "
          >
            {/* illustration ফাইলটা /public এ রাখো */}
            <Image
              src={cover}
              alt="Website Development Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
