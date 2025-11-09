import React from 'react';
import ServiceHero from '@/components/service/ServiceHero';
import BilingualSolutionsSection from '@/components/service/BilingualSolutionsSection';
import WhyCustomersLoveUs from '@/components/service/WhyCustomersLoveUs';
import StrategyPlanning from '@/components/service/StrategyPlanning';

const page = () => {
  return (
    <>
      <ServiceHero />
      <BilingualSolutionsSection />
      <WhyCustomersLoveUs />
      <StrategyPlanning />
    </>
  );
};

export default page;
