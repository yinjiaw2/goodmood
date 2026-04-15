import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Conversion-first website and landing page design that turns visitors into customers.",
};

export default function ServiceWebPage() {
  return (
    <>
      <HeroSection namespace="serviceWeb" />
      <ServiceOverviewSection namespace="serviceWeb" />
      <ServiceSubFeaturesSection namespace="serviceWeb" />
      <CaseStudySection namespace="serviceWeb" />
    </>
  );
}
