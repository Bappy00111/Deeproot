import React from 'react';
import ServiceHero from '@/components/service/ServiceHero';
import BilingualSolutionsSection from '@/components/service/BilingualSolutionsSection';
import WhyCustomersLoveUs from '@/components/service/WhyCustomersLoveUs';

const page = () => {
  return (
    <>
      <ServiceHero />
      <BilingualSolutionsSection />
      <WhyCustomersLoveUs/>
    </>
  );
};

export default page;
