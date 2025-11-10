import React from 'react';
import DeliverablesOverview from '@/components/google-for-nonprofits/DeliverablesOverview';
import GoogleAdGrantsOffer from '@/components/google-for-nonprofits/GoogleAdGrantsOffer';
import NonProfitHero from '@/components/google-for-nonprofits/NonProfitHero';
import AdGrantsOfferSection from '@/components/google-for-nonprofits/AdGrantsOfferSection';

const page = () => {
  return (
    <>
      <NonProfitHero />
      <DeliverablesOverview />
      <GoogleAdGrantsOffer />
      <AdGrantsOfferSection />
    </>
  );
};

export default page;
