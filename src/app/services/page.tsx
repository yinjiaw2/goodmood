import type { Metadata } from "next";
import HeroSection from "@/components/services/HeroSection";
import WhyUsSection from "@/components/services/WhyUsSection";
import ServiceSection from "@/components/home/ServiceSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-funnel digital marketing services including social media, paid ads, SEO, ecommerce, and creative production.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ServiceSection />
    </>
  );
}
