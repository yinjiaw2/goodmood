import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import BeforeAfterCard from "@/components/charts/BeforeAfterCard";
import AreaChart from "@/components/charts/AreaChart";

export const metadata: Metadata = {
  title: "E-commerce Services",
  description:
    "E-commerce services designed to help brands grow through strategy, creative, and performance-driven campaigns.",
};

const case1Rows = [
  { label: "Conversion Rate", before: "0.8%", after: "3.3%" },
  { label: "Monthly Revenue", before: "$12K", after: "$43K" },
  { label: "Bounce Rate", before: "68%", after: "31%" },
];

export default function ServiceEcommercePage() {
  return (
    <>
      <ServiceHeroSection
        namespace="serviceEcommerce"
        imageSrc="/ecommerce1.png"
      />
      <ServiceOverviewSection namespace="serviceEcommerce" />
      <ServiceSubFeaturesSection
        namespace="serviceEcommerce"
        imageSrc="/ecommerce2.png"
      />
      <CaseStudySection
        namespace="serviceEcommerce"
        chart1={<BeforeAfterCard rows={case1Rows} />}
        chart2={<AreaChart />}
      />
    </>
  );
}
