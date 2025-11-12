// import React from "react";

// const processSteps = [
//   {
//     id: "1.",
//     title: "Customer Insight",
//     items: [
//       "Identify Business Goal",
//       "Define functional Requirements",
//       "Competitor Analysis",
//       "Metrics & Benchmark",
//     ],
//   },
//   {
//     id: "2.",
//     title: "Experience Mapping",
//     items: [
//       "User stories and Personas",
//       "Business Process Modelling",
//       "User Journey",
//       "Blueprint Planning",
//     ],
//   },
//   {
//     id: "3.",
//     title: "Ideation and Strategy",
//     items: [
//       "Product Roadmap",
//       "Go-to-market (GTM) strategy",
//     ],
//   },
//   {
//     id: "4.",
//     title: "Design",
//     items: [
//       "Wireframing",
//       "UI and Interaction Designs",
//       "Storyboarding",
//       "System Process Flow",
//     ],
//   },
//   {
//     id: "5.",
//     title: "Visualization",
//     items: [
//       "Systems & Component Library",
//       "Prototyping",
//       "Graphical Design and illustrations",
//     ],
//   },
//   {
//     id: "6.",
//     title: "Deliverables",
//     items: [
//       "Integration and verification",
//       "Design Specification",
//       "Storyboard Integration",
//       "Optimization",
//     ],
//   },
// ];

// const OurProcess = () => {
//   return (
//     <section className="bg-[#f3f4f6] py-16">
//       <h2 className="text-center text-[40px] font-medium text-[#533db5] font-roboto drop-shadow mb-16">
//         Our Process
//       </h2>

//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//         {processSteps.map((step, index) => (
//           <div key={index}>
//             <h3 className="font-bold text-gray-900 text-2xl mb-4 font-sora">
//               {step.id} {step.title}
//             </h3>

//             <ul className="space-y-3 text-gray-600 text-sm leading-6 font-montserrat">
//               {step.items.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProcess;

// components/OurProcess.jsx
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
  {
    id: "1.",
    title: "Customer Insight",
    items: [
      "Identify Business Goal",
      "Define functional Requirements",
      "Competitor Analysis",
      "Metrics & Benchmark",
    ],
  },
  {
    id: "2.",
    title: "Experience Mapping",
    items: [
      "User stories and Personas",
      "Business Process Modelling",
      "User Journey",
      "Blueprint Planning",
    ],
  },
  {
    id: "3.",
    title: "Ideation and Strategy",
    items: ["Product Roadmap", "Go-to-market (GTM) strategy"],
  },
  {
    id: "4.",
    title: "Design",
    items: [
      "Wireframing",
      "UI and Interaction Designs",
      "Storyboarding",
      "System Process Flow",
    ],
  },
  {
    id: "5.",
    title: "Visualization",
    items: [
      "Systems & Component Library",
      "Prototyping",
      "Graphical Design and illustrations",
    ],
  },
  {
    id: "6.",
    title: "Deliverables",
    items: [
      "Integration and verification",
      "Design Specification",
      "Storyboard Integration",
      "Optimization",
    ],
  },
];

const OurProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800, // 1.8s
      once: true,
      easing: "ease-out",
      offset: 0,
    });
  }, []);

  return (
    <section className="bg-[#f3f4f6] py-16">
      <h2
        className="text-center text-[40px] font-medium text-[#533db5] font-roboto drop-shadow mb-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
      >
        Our Process
      </h2>

      <div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1800"
        data-aos-delay="100"
      >
        {processSteps.map((step, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-900 text-2xl mb-4 font-sora">
              {step.id} {step.title}
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm leading-6 font-montserrat">
              {step.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;

