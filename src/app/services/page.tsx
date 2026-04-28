import type { Metadata } from "next";
import HeroSection from "@/components/services/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import CoreCapabilitiesSection from "@/components/about/CoreCapabilitiesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-funnel digital marketing services including social media, paid ads, SEO, ecommerce, and creative production.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <CoreCapabilitiesSection namespace="services.whyUs" variant="whyUs" />
      <ServiceSection />
    </>
  );
}
