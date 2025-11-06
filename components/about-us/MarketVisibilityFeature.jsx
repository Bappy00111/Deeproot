// components/MarketVisibilityFeature.jsx
import Image from "next/image";
import PropTypes from "prop-types";

export default function MarketVisibilityFeature({
  heading,
  paragraphs = [],
  imageSrc,
  imageAlt = "",
  reverse = false,       // ডান/বাম অদলবদল করতে
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      {/* subtle top gradient like the screenshot */}
      <div className="bg-gradient-to-b from-gray-100 to-transparent">
        <div className="app-container py-8">
          <div
            className={`grid items-center gap-8 md:gap-12 lg:gap-16 md:grid-cols-12`}
          >
            {/* Text */}
            <div
              className={`md:col-span-7 ${reverse ? "md:order-2" : "md:order-1"} font-roboto`}
            >
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">
                {heading}
              </h2>
              <div className="mt-6 space-y-5">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-7 text-gray-500">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className={`md:col-span-5 ${reverse ? "md:order-1" : "md:order-2"}`}
            >
              <div className="relative w-full overflow-hidden">
                {/* Keep the aspect & crop like screenshot */}
                <div className="relative w-full aspect-[16/9] md:h-[420px] lg:h-[460px]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

MarketVisibilityFeature.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  reverse: PropTypes.bool,
  className: PropTypes.string,
};
