import AboutHeader from '@/components/about-us/AboutHeader';
import MarketVisibilityFeature from '@/components/about-us/MarketVisibilityFeature';
import RoadmapHeroBanner from '@/components/about-us/RoadmapHeroBanner';
import React from 'react';

const AboutUs = () => {
    const paragraphs = [
    "Using market-proven e-commerce strategies, we help you to dramatically increase sales and market visibility in overseas markets in a fast and relatively low-cost way.",
    "We have an international team of different professionals (including customer service, marketing, and engineers) across the five countries. We hope to help more Australian manufacturers to carry forward overseas. Selling more is the core belief and mission of Deeproot!",
  ];
  return (
    <div className=' py-5 bg-gray-50'>
      <AboutHeader/>
      <MarketVisibilityFeature
        heading="Market Visibility"
        paragraphs={paragraphs}
        imageSrc="https://deeproot.com.au/wp-content/uploads/2020/06/ian-schneider-TamMbr4okv4-unsplash-2048x1367.jpg"        // put your image in /public/images/
        imageAlt="PASSION LED US HERE"
      />
      <RoadmapHeroBanner />
    </div>
  );
};

export default AboutUs;


// 'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import AboutHeader from '@/components/about-us/AboutHeader';
// import MarketVisibilityFeature from '@/components/about-us/MarketVisibilityFeature';
// import RoadmapHeroBanner from '@/components/about-us/RoadmapHeroBanner';

// const AboutUs = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1800,          // স্লো ট্রানজিশন
//       easing: 'ease-out-quart',
//       once: true,
//       offset: 80,
//     });
//   }, []);

//   const paragraphs = [
//     "Using market-proven e-commerce strategies, we help you to dramatically increase sales and market visibility in overseas markets in a fast and relatively low-cost way.",
//     "We have an international team of different professionals (including customer service, marketing, and engineers) across the five countries. We hope to help more Australian manufacturers to carry forward overseas. Selling more is the core belief and mission of Deeproot!",
//   ];

//   return (
//     <div className="py-5 bg-gray-50">
//       {/* 1) Header: NO animation */}
//       <AboutHeader />

//       {/* 2) Feature: WITH animation */}
//       <div
//         data-aos="fade-up"
//         data-aos-duration="1800"
//         data-aos-anchor-placement="top-bottom"
//       >
//         <MarketVisibilityFeature
//           heading="Market Visibility"
//           paragraphs={paragraphs}
//           imageSrc="https://deeproot.com.au/wp-content/uploads/2020/06/ian-schneider-TamMbr4okv4-unsplash-2048x1367.jpg"
//           imageAlt="PASSION LED US HERE"
//         />
//       </div>

//       {/* 3) Roadmap: WITH animation (এখানে চাইলে একটু বেশি স্লো) */}
//       <div
//         data-aos="fade-up"
//         data-aos-delay="120"
//         data-aos-duration="2000"
//         data-aos-anchor-placement="top-bottom"
//       >
//         <RoadmapHeroBanner />
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

