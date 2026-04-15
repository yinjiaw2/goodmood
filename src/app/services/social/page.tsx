import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceDetailsSection from "@/components/shared/ServiceDetailsSection";
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
      <ServiceDetailsSection namespace="serviceSocial" />
      <CaseStudySection namespace="serviceSocial" />
    </>
  );
}
