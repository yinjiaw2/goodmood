import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import BeforeAfterCard from "@/components/charts/BeforeAfterCard";
import AreaChart from "@/components/charts/AreaChart";

export const metadata: Metadata = {
  title: "Ecommerce Growth",
  description:
    "Turn your online store into a revenue machine with conversion-focused design, SEO, landing pages, and data analytics.",
};

const case1Rows = [
  { label: "Conversion Rate", before: "0.8%",  after: "3.3%" },
  { label: "Monthly Revenue", before: "$12K",  after: "$43K" },
  { label: "Bounce Rate",     before: "68%",   after: "31%"  },
];

export default function ServiceEcommercePage() {
  return (
    <>
      <HeroSection namespace="serviceEcommerce" imageSrc="/ecommence.png" />
      <ServiceOverviewSection namespace="serviceEcommerce" />
      <ServiceSubFeaturesSection namespace="serviceEcommerce" />
      <CaseStudySection
        namespace="serviceEcommerce"
        chart1={<BeforeAfterCard rows={case1Rows} />}
        chart2={<AreaChart />}
      />
    </>
  );
}
