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
