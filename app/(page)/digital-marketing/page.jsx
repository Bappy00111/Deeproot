import CommonMarketingExecutions from '@/components/digital-marketing/CommonMarketingExecutions';
import DigitalMarketingRetainerHero from '@/components/digital-marketing/DigitalMarketingRetainerHero';
import OutsourcedDigitalMarketingHero from '@/components/digital-marketing/OutsourcedDigitalMarketingHero';
import PricingBanner from '@/components/digital-marketing/PricingBanner';
import WhatYouGetSection from '@/components/digital-marketing/WhatYouGetSection';
import React from 'react';

const page = () => {
  return (
    <>
      <DigitalMarketingRetainerHero />
      <OutsourcedDigitalMarketingHero />
      <WhatYouGetSection />
      <PricingBanner />
      <CommonMarketingExecutions />
    </>
  );
};

export default page;
