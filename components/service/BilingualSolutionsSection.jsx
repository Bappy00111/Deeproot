// components/BilingualSolutionsSection.jsx
import Image from "next/image";
import   image from '../../public/image/image_one.png';
import   image_two from '../../public/image/image-two.png';
import   image_three from '../../public/image/three.png';
import   image_four from '../../public/image/image_four.png';

const SOLUTIONS = [
  {
    title: "Bilingual Web Design",
    icon: image, // 👉 /public/icons/...
    items: [
      "Chinese Keywords",
      "Chinese Google Ads",
      "Culturally Compatible Web Design",
      "Tailored Bilingual Landing Page",
    ],
  },
  {
    title: "Content Marketing",
    icon: image_two,
    items: [
      "Blog & article creation",
      "Bilingual copywriting",
      "Localized storytelling",
      "Long-term content strategy",
    ],
  },
  {
    title: "Google Ads",
    icon: image_three,
    items: [
      "Chinese Google Ads",
      "Boost Traffic",
      "Brand Awareness",
      "PPC AdWords Management",
    ],
  },
  {
    title: "Social Media Management",
    icon: image_four,
    items: [
      "WeChat / Facebook management",
      "Content calendar & creatives",
      "Community engagement",
      "Inquiry monitoring & reporting",
    ],
  },
];

const BilingualSolutionsSection = () => {
  return (
    <section className="bg-[#f4f4f6] py-16">
      <div className="app-container">
        {/* Top: heading + FAQ button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-[40px] font-extrabold text-[#292929] mb-3 font-playfair pb-8">
              Bilingual Digital Marketing Solutions
            </h2>
            <p className="text-sm md:text-base font-normal text-[#5c5c5c] max-w-3xl leading-relaxed font-montserrat">
              We help small SMEs sell more locally and globally. Grow your
              business with a bilingual digital marketing approach built for
              long-term success.
            </p>
          </div>

          <button className="self-start md:self-auto px-8 py-2.5 rounded-full bg-[#5c4df4] text-white text-xs md:text-sm font-semibold tracking-[0.18em] uppercase shadow-sm hover:bg-[#483bda] transition">
            FAQ
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="rounded-3xl px-8 xl:px-14 py-10 md:flex gap-8 md:gap-6  shadow-[0_0_60px_rgba(0,0,0,0.16)]  border border-[#f4f4f6] "
            >
              {/* Icon */}
              <div className="w-[82px] h-[82px] flex items-center justify-center rounded-2xl bg-[#fff7e6] shrink-0 mx-auto md:mx-0">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={100}
                  height={100}
                  className="object-contain "
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-[32px] font-bold text-[#222222] mb-3 font-sora ">
                  {solution.title}
                </h3>
                <ul className="space-y-1.5 xl:space-y-5 x text-sm xl:text-base font-normal text-[#3a3a3a] leading-relaxed font-montserrat">
                  {solution.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BilingualSolutionsSection;
