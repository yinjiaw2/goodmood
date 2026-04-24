import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import BeforeAfterCard from "@/components/charts/BeforeAfterCard";
import ProgressChart from "@/components/charts/ProgressChart";

export const metadata: Metadata = {
  title: "Video Production",
  description:
    "Technical audits, on-page optimisation, and link building designed to grow qualified organic traffic.",
};

const case1Rows = [
  { label: "Bounce Rate", before: "78%", after: "34%" },
  { label: "Weekly Leads", before: "0.4", after: "11" },
  { label: "Avg. Session Time", before: "0:42", after: "2:18" },
];

const case2Items = [
  { label: "Trial Signups / mo", before: 18, after: 94, max: 100, unit: "" },
  { label: "Landing Page CVR", before: 1, after: 7, max: 10, unit: "%" },
  { label: "Performance Score", before: 40, after: 94, max: 100, unit: "" },
  { label: "Mobile Score", before: 52, after: 96, max: 100, unit: "" },
];

export default function ServiceWebPage() {
  return (
    <>
      <ServiceHeroSection namespace="serviceVideoProduction" imageSrc="/SEO.jpeg" />
      <ServiceOverviewSection namespace="serviceVideoProduction" />
      <ServiceSubFeaturesSection
        namespace="serviceVideoProduction"
        imageSrc="/SEO.jpeg"
      />
      <CaseStudySection
        namespace="serviceVideoProduction"
        chart1={<BeforeAfterCard rows={case1Rows} />}
        chart2={<ProgressChart items={case2Items} />}
      />
    </>
  );
}
