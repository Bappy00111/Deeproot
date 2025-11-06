import React from 'react';
import ContactHead from '@/components/contact/ContactHead';
import ContactInfo from '@/components/contact/ContactInfo';
import MapSection from '@/components/contact/MapSection';

const page = () => {
  return (
    <>
      <ContactHead />
      <ContactInfo />
      <MapSection
        address="Level 2, 162 Macquarie St, Hobart, Tasmania 7000, Australia"
        zoom={10}
        title="Our Office — Hobart"
      />
    </>
  );
};

export default page;
