import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";

export const metadata: Metadata = {
  title: "Email Marketing",
  description:
    "Design, write, and automate email sequences that turn your subscriber list into a consistent revenue engine.",
};

export default function ServiceEmailPage() {
  return (
    <>
      <HeroSection namespace="serviceEmail" />
      <ServiceOverviewSection namespace="serviceEmail" />
      <ServiceSubFeaturesSection namespace="serviceEmail" />
      <CaseStudySection namespace="serviceEmail" />
    </>
  );
}
