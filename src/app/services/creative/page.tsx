import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";

export const metadata: Metadata = {
  title: "Creative Production",
  description:
    "Brand identity, video production, ad creatives, and motion graphics built to perform commercially.",
};

export default function ServiceCreativePage() {
  return (
    <>
      <HeroSection namespace="serviceCreative" />
      <ServiceOverviewSection namespace="serviceCreative" />
      <ServiceSubFeaturesSection namespace="serviceCreative" />
      <CaseStudySection namespace="serviceCreative" />
    </>
  );
}
