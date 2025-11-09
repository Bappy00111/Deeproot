import React from 'react';
import WebsiteDevelopmentHero from '@/components/website-developmen/WebsiteDevelopmentHero';
import BusinessHero from '@/components/website-developmen/BusinessHero';
import WhatWeInclude from '@/components/website-developmen/WhatWeInclude';
import GrowBusinessSection from '@/components/website-developmen/GrowBusinessSection';
import PackageSection from '@/components/website-developmen/PackageSection';

const page = () => {
  return (
    <>

      <div
        className="relative main min-h-screen bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/image/webSite_development/asset%2010.jpeg')" }}
      >
        {/* purple tint overlay so text is readable over the image */}
        <div className="absolute inset-0 bg-[#504992] opacity-80" />

        {/* content above the overlay */}
        <div className="relative z-10">
          <WebsiteDevelopmentHero />
        </div>
        <BusinessHero />
      </div>
      <WhatWeInclude />
      <GrowBusinessSection />
      <PackageSection />
    </>
  );
};

export default page;
