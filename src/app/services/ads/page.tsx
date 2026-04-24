import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FunnelChart from "@/components/charts/FunnelChart";
import CounterCards from "@/components/charts/CounterCards";

export const metadata: Metadata = {
  title: "Meta Ads + RedNote Ads",
  description:
    "Paid social campaigns across Meta and RedNote designed to turn attention into leads, sales, and scalable growth.",
};

const case2Items = [
  { value: 210, suffix: "", label: "Monthly Leads" },
  { value: 54, prefix: "−", suffix: "%", label: "CPA Reduction" },
  { value: 5.8, suffix: "×", label: "Paid Social ROAS", decimals: 1 },
  { value: 6, suffix: "", label: "Months to Results" },
];

export default function ServiceAdsPage() {
  return (
    <>
      <ServiceHeroSection namespace="serviceAds" imageSrc="/meta-ads.jpg" />
      <ServiceOverviewSection namespace="serviceAds" />
      <ServiceSubFeaturesSection
        namespace="serviceAds"
        imageSrc="/meta-ads.jpg"
      />
      <CaseStudySection
        namespace="serviceAds"
        chart1={<FunnelChart />}
        chart2={<CounterCards items={case2Items} />}
      />
    </>
  );
}
