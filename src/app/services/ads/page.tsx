import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";

export const metadata: Metadata = {
  title: "Paid Advertising",
  description:
    "Targeted campaigns across Meta, Google, TikTok, and Xiaohongshu built to acquire higher-quality customers.",
};

export default function ServiceAdsPage() {
  return (
    <>
      <HeroSection namespace="serviceAds" />
      <ServiceOverviewSection namespace="serviceAds" />
      <ServiceSubFeaturesSection namespace="serviceAds" />
      <CaseStudySection namespace="serviceAds" />
    </>
  );
}
