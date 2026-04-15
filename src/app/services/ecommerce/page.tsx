import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";

export const metadata: Metadata = {
  title: "Ecommerce Growth",
  description:
    "Turn your online store into a revenue machine with conversion-focused design, SEO, landing pages, and data analytics.",
};

export default function ServiceEcommercePage() {
  return (
    <>
      <HeroSection namespace="serviceEcommerce" />
      <ServiceOverviewSection namespace="serviceEcommerce" />
      <ServiceSubFeaturesSection namespace="serviceEcommerce" />
      <CaseStudySection namespace="serviceEcommerce" />
    </>
  );
}
