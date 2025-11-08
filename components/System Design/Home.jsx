// app/page.tsx
import Image from "next/image";
import coverImg from '../../public/image/asset 1.png'

export default function Home() {
  return (
    <main className=" bg-[#f7f7fb] ">
      <section className="app-container py-6  flex flex-col lg:flex-row items-center gap-12 font-montserrat">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-medium tracking-tight text-gray-900 leading-tight">
            System Design &amp;
            <br className="hidden sm:block" />
            Software Development
          </h1>

          <p className="mt-8 text-base text-gray-500 max-w-xl">
            Built software solutions for agriculture, tourism, fintech and
            enterprise. From IoT systems to cloud migration – future-proof your
            business with local expertise.
          </p>
        </div>

        {/* Right: Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Image
              src={coverImg}
              alt="Team working on analytics and dashboards"
              width={900}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
