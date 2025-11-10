import DataDrivenCampaignsSection from '@/components/social-media-marketing/DataDrivenCampaignsSection';
import DataInsightsHero from '@/components/social-media-marketing/DataInsightsHero';
import PricingSection from '@/components/social-media-marketing/PricingSection';
import ProblemAwarenessSection from '@/components/social-media-marketing/ProblemAwarenessSection';
import SocialMediaHome from '@/components/social-media-marketing/SocialMediaHome';
import React from 'react';

const page = () => {
  return (
    <>
      <SocialMediaHome />
      <ProblemAwarenessSection />
      <DataDrivenCampaignsSection />
      <DataInsightsHero />
      <PricingSection />
    </>
  );
};

export default page;
