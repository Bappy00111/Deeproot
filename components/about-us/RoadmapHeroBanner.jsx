// // components/RoadmapHeroBanner.jsx
// import bg  from '../../public/image/Bg-Services.png'

// export default function RoadmapHeroBanner() {
//   return (
//     <section className="main">
//       <div className="bg-white py-12">
//         <div className="app-container text-center">
//           <h2 className="text-[32px]  font-bold  text-[#504492]  uppercase font-roboto">
//              Step-By-Step Roadmap To Success
//           </h2>
//           <p className="mt-2 text-3xl leading-8   tracking-tight text-[#3D4459] sm:text-6xl  font-slab">
//            One-Stop Digital <br /> <br/>Agency
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/RoadmapHeroBanner.jsx
import bg from "@/public/image/Bg-Services.png";
import {
  FiArrowRight,
  FiTrendingUp,
  FiDollarSign,
  FiShoppingCart,
  FiImage,
  FiFileText,
} from "react-icons/fi";
import { FaMagic } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function RoadmapHeroBanner() {

  const services = [
    {
      title: "Google Marketing",
      desc: "Make your website visible",
      href: "https://deeproot.com.au/seo/",
      imgSrc: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-13-Copy.png",
      imgAlt: "Google Marketing",
    },
    {
      title: "Lead Generation",
      desc: "Help business target the right group and increase the promotion chances within less selling time",
      href: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-13-Copy.png",
      imgSrc: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-17.png",
      imgAlt: "Lead Generation",
    },

    {
      title: "Social Media",
      desc: "Help you get more targeted audience on Facebook.",
      href: "https://deeproot.com.au/seo/",
      imgSrc: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-22.png",
      imgAlt: "Google Marketing",
    },
    {
      title: "Ecommerce",
      desc: "Effective online solutions for enterprise ecommerce websites",
      href: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-13-Copy.png",
      imgSrc: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-19.png",
      imgAlt: "Lead Generation",
    },

    {
      title: "Web Design​",
      desc: "Develop unique and attractive websites",
      href: "https://deeproot.com.au/seo/",
      imgSrc: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-20.png",
      imgAlt: "Google Marketing",
    },
    {
      title: "Digital Marketing​",
      desc: "Your outsourced digital marketing department​",
      href: "https://deeproot.com.au/wp-content/uploads/2020/05/Group-13-Copy.png",
      imgSrc: "https://deeproot.com.au/wp-content/uploads/2020/05/content-icon-new.png",
      imgAlt: "Lead Generation",
    },

  ];
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-white/0 py-12">
        <div className="app-container text-center">
          <h2 className="text-[32px] font-bold text-[#504492] uppercase font-roboto">
            Step-By-Step Roadmap To Success
          </h2>
          <p className="mt-2 text-3xl leading-8 tracking-tight text-[#3D4459] sm:text-6xl font-slab">
            One-Stop Digital <br /> <br /> Agency
          </p>
        </div>
      </div>

      <div className="app-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ title, desc, href, imgSrc }) => (
            <div
              key={title}
              className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-xl  rounded-bl-[50px]  shadow-sm ring-1 ring-slate-200/70 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">

                  <Image
                    src={imgSrc}          // services থেকে আসবে
                    alt={imgSrc || title}
                    width={100} height={100}  // h-7 w-7 এর সমান
                    className="h-16 w-16 object-contain"
                    priority={false}
                  />

              </div>

              <h3 className="text-xl  text-slate-900 font-round">{title}</h3>
              <p className="mt-3 text-[#3B4459] leading-relaxed font-normal  font-montserrat">{desc}</p>

              <Link
                className="mt-6 inline-flex items-center gap-2 text-indigo-700 font-semibold tracking-widest uppercase text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 font-montserrat border-2"
                href={href}
                aria-label={`Learn more about ${title}`}
              >
                <span className=" group-hover:decoration-4 transition-[text-decoration-thickness]">
                  Learn More
                </span>
                <FiArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>

              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-[3rem] rounded-tl-[3rem] bg-indigo-50/40 blur-xl opacity-60"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

