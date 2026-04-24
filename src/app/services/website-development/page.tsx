import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import BeforeAfterCard from "@/components/charts/BeforeAfterCard";
import ProgressChart from "@/components/charts/ProgressChart";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Conversion-focused website development built for speed, clarity, and scalable business growth.",
};

const case1Rows = [
  { label: "Load Time", before: "5.8s", after: "1.9s" },
  { label: "Bounce Rate", before: "71%", after: "39%" },
  { label: "Lead CVR", before: "0.9%", after: "4.6%" },
];

const case2Items = [
  { label: "Qualified Leads / mo", before: 14, after: 57, max: 60, unit: "" },
  { label: "Mobile Speed Score", before: 41, after: 92, max: 100, unit: "" },
  { label: "Landing Page CVR", before: 1, after: 6, max: 10, unit: "%" },
  { label: "Avg. Time on Site", before: 48, after: 146, max: 180, unit: "s" },
];

export default function ServiceWebsiteDevelopmentPage() {
  return (
    <>
      <ServiceHeroSection
        namespace="serviceWebsiteDevelopment"
        imageSrc="/world-trade-center.jpg"
      />
      <ServiceOverviewSection namespace="serviceWebsiteDevelopment" />
      <ServiceSubFeaturesSection
        namespace="serviceWebsiteDevelopment"
        imageSrc="/world-trade-center.jpg"
      />
      <CaseStudySection
        namespace="serviceWebsiteDevelopment"
        chart1={<BeforeAfterCard rows={case1Rows} />}
        chart2={<ProgressChart items={case2Items} />}
      />
    </>
  );
}
