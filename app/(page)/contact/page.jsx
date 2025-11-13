// import React from 'react';
// import ContactHead from '@/components/contact/ContactHead';
// import ContactInfo from '@/components/contact/ContactInfo';
// import MapSection from '@/components/contact/MapSection';

// const page = () => {
//   return (
//     <>
//       <ContactHead />
//       <ContactInfo />
//       <MapSection
//         address="Level 2, 162 Macquarie St, Hobart, Tasmania 7000, Australia"
//         zoom={10}
//         title="Our Office — Hobart"
//       />
//     </>
//   );
// };

// export default page;


// app/contact/page.jsx  (বা আপনার ফাইল যেখানে আছে)


// "use client";

// import React, { useEffect } from "react";
// import ContactHead from "@/components/contact/ContactHead";
// import ContactInfo from "@/components/contact/ContactInfo";
// import MapSection from "@/components/contact/MapSection";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const Page = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1800,   // ✅ 1.8s
//       once: true,       // ✅ একবারই চলবে
//       easing: "ease-out",
//       offset: 0,
//     });
//   }, []);

//   return (
//     <>
//       {/* 🟣 প্রথম সেকশন — কোনো অ্যানিমেশন নেই */}
//       <ContactHead />

//       {/* 🟢 বাকি সেকশনগুলোতে AOS */}
//       <div
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-bottom"
//         data-aos-duration="1800"
//       >
//         <ContactInfo />
//       </div>

//       <div
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-bottom"
//         data-aos-duration="1800"
//         data-aos-delay="100"   // ইচ্ছে করলে মুছে দিতে পারেন
//       >
//         <MapSection
//           address="Level 2, 162 Macquarie St, Hobart, Tasmania 7000, Australia"
//           zoom={10}
//           title="Our Office — Hobart"
//         />
//       </div>
//     </>
//   );
// };

// export default Page;


import TalkSection from '@/components/header/TalkSection';
import React from 'react';

const page = () => {
  return (
    <>
      <TalkSection />
    </>
  );
};

export default page;

