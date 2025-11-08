import React from 'react';
import Home from '@/components/System Design/Home';
import ParallaxSection from '@/components/System Design/ParallaxSection';

import { faCode, faSatelliteDish, faPalette } from "@fortawesome/free-solid-svg-icons";
import ServiceSection from '@/components/System Design/ServiceSection';
import OurProcess from '@/components/System Design/OurProcess';
import DiscussCTA from '@/components/System Design/DiscussCTA';

const page = () => {
  const services = [
    {
      icon: faCode,
      title: "IT Software Development",
      description:
        "In today’s fast-paced digital economy, generic tools rarely meet the unique demands of growing businesses. At Deeproot, we craft custom software, API integrations, and enterprise-grade systems designed to automate workflows, conquer operational bottlenecks, and future-proof your growth. Whether you’re a startup scaling globally, a enterprise modernizing legacy infrastructure, or an international business seeking agile tech partners, our solutions blend cutting-edge engineering with battle-tested expertise. Born in Tasmania but trusted worldwide, we deliver innovation that adapts to your industry,.",

      extraSection: {
        title: "Our Edge:",
        bullets: [
          {
            bold: "Real-Time Analytics:",
            text: "Monitor equipment health, environmental conditions, and supply chain risks via unified dashboards."
          },
          {
            bold: "Predictive Modeling:",
            text: "Machine learning algorithms that forecast maintenance needs, demand spikes, and yield outcomes."
          },
          {
            bold: "Compliance-Ready Reporting:",
            text: "Automated data pipelines for ISO, FDA, or ESG audits."
          },
          {
            bold: "Industry-Specific Solutions:",
            text: "We engineer solutions tailored to niche business needs."
          }
        ]
      }
    },
    {
      icon: faCode,
      title: "IOT & Smart Systems",
      description:
        "Tasmania’s agriculture, aquaculture, and logistics sectors demand smarter tools. Our IoT solutions bridge the gap between physical operations and digital insights. Imagine monitoring soil moisture levels across your farm via AI-powered sensors, receiving instant alerts when storage temperatures threaten your seafood exports, or automating irrigation schedules based on real-time weather data. We design end-to-end IoT ecosystems – from hardware integration to cloud-based dashboards – that empower Tasmanian businesses to cut costs, boost yields, and make data-driven decisions. Partner with us to turn your “dumb” infrastructure into a connected, intelligent asset.",

      extraSection: {
        title: "Our System Deliver:",
        bullets: [
          {
            bold: "Real-Time Analytics:",
            text: "Monitor equipment health, environmental conditions, and supply chain risks via unified dashboards."
          },
          {
            bold: "Predictive Modeling:",
            text: "Machine learning algorithms that forecast maintenance needs, demand spikes, and yield outcomes."
          },
          {
            bold: "Compliance-Ready Reporting:",
            text: "Automated data pipelines for ISO, FDA, or ESG audits."
          },
          {
            bold: "Industry-Specific Solutions:",
            text: "We engineer solutions tailored to niche business needs."
          }
        ]
      }
    },
    {
      icon: faCode,
      title: "UX/ UI Design",
      description: `User experience (UX) isn’t just about screens—it’s the invisible hand guiding how customers perceive, trust, and engage with your brand.
At Deeproot, we combine behavioral psychology and technical rigor to craft interfaces that feel intuitive to first-time users and powerful for experts.
Using evidence-based methodologies like user journey mapping and A/B testing, we craft interfaces that reduce training time, minimize errors, and drive adoption.`,
    }
  ];

  return (
    <>
      <ParallaxSection />
      {services.map((service) => (
        <ServiceSection
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          extraSection={service.extraSection}
        />
      ))}
      <OurProcess />
      <DiscussCTA />
    </>
  );
};

export default page;
