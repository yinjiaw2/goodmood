import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import BeforeAfterCard from "@/components/charts/BeforeAfterCard";
import ProgressChart from "@/components/charts/ProgressChart";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Conversion-first website and landing page design that turns visitors into customers.",
};

const case1Rows = [
  { label: "Bounce Rate",       before: "78%",  after: "34%"  },
  { label: "Weekly Leads",      before: "0.4",  after: "11"   },
  { label: "Avg. Session Time", before: "0:42", after: "2:18" },
];

const case2Items = [
  { label: "Trial Signups / mo",  before: 18, after: 94, max: 100, unit: "" },
  { label: "Landing Page CVR",    before: 1,  after: 7,  max: 10,  unit: "%" },
  { label: "Performance Score",   before: 40, after: 94, max: 100, unit: "" },
  { label: "Mobile Score",        before: 52, after: 96, max: 100, unit: "" },
];

export default function ServiceWebPage() {
  return (
    <>
      <HeroSection namespace="serviceWeb" />
      <ServiceOverviewSection namespace="serviceWeb" />
      <ServiceSubFeaturesSection namespace="serviceWeb" />
      <CaseStudySection
        namespace="serviceWeb"
        chart1={<BeforeAfterCard rows={case1Rows} />}
        chart2={<ProgressChart items={case2Items} />}
      />
    </>
  );
}
