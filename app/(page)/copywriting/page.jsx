import React from 'react';
import CopywritingHero from '@/components/copywriting/CopywritingHero';
import BusinessHero from '@/components/website-developmen/BusinessHero';
import WebsiteDevelopmentHero from '@/components/website-developmen/WebsiteDevelopmentHero';
import BusinessCopyHero from '@/components/copywriting/BusinessCopyHero';
import WhatWeOffer from '@/components/copywriting/WhatWeOffer';
import PackageSection from '@/components/website-developmen/PackageSection';
import CopyPackageSection from '@/components/copywriting/CopyPackageSection';

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
          <CopywritingHero />
        </div>
        <BusinessCopyHero />
      </div>
      <WhatWeOffer />
      <CopyPackageSection />
    </>
  );
};

export default page;
