import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description:
    "Turn followers into revenue with data-driven social media marketing strategies built for measurable growth.",
};

export default function ServiceSocialPage() {
  return (
    <>
      <HeroSection />
      <ServiceOverviewSection namespace="serviceSocial" />
      <ServiceSubFeaturesSection namespace="serviceSocial" />
      <CaseStudySection namespace="serviceSocial" />
    </>
  );
}
