import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
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
      <ServiceHeroSection
        namespace="serviceSocial"
        imageSrc="/social-media.png"
      />
      <ServiceOverviewSection namespace="serviceSocial" />
      <ServiceSubFeaturesSection namespace="serviceSocial" />
      <CaseStudySection namespace="serviceSocial" />
    </>
  );
}
