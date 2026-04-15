import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import ProgressChart from "@/components/charts/ProgressChart";
import AreaChart from "@/components/charts/AreaChart";

export const metadata: Metadata = {
  title: "Email Marketing",
  description:
    "Design, write, and automate email sequences that turn your subscriber list into a consistent revenue engine.",
};

const case1Items = [
  { label: "Open Rate",          before: 11, after: 38, max: 50,  unit: "%" },
  { label: "Click-Through Rate", before: 2,  after: 9,  max: 15,  unit: "%" },
  { label: "Revenue per Email",  before: 14, after: 90, max: 100, unit: "¢" },
  { label: "List Growth",        before: 0,  after: 65, max: 100, unit: "%" },
];

export default function ServiceEmailPage() {
  return (
    <>
      <HeroSection namespace="serviceEmail" />
      <ServiceOverviewSection namespace="serviceEmail" />
      <ServiceSubFeaturesSection namespace="serviceEmail" />
      <CaseStudySection
        namespace="serviceEmail"
        chart1={<ProgressChart items={case1Items} />}
        chart2={<AreaChart />}
      />
    </>
  );
}
