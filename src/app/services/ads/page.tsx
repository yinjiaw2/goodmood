import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FunnelChart from "@/components/charts/FunnelChart";
import CounterCards from "@/components/charts/CounterCards";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "Search, Shopping, and Performance Max campaigns built to capture high-intent demand and turn clicks into revenue.",
};

const case2Items = [
  { value: 210, suffix: "", label: "Monthly Leads" },
  { value: 54, prefix: "−", suffix: "%", label: "Cost Per Lead" },
  { value: 5.8, suffix: "×", label: "Return on Ad Spend", decimals: 1 },
  { value: 4, suffix: "", label: "Months to Results" },
];

export default function ServiceAdsPage() {
  return (
    <>
      <ServiceHeroSection namespace="serviceAds" imageSrc="/google-ads.png" />
      <ServiceOverviewSection namespace="serviceAds" />
      <ServiceSubFeaturesSection
        namespace="serviceAds"
        imageSrc="/google-ads.png"
      />
      <CaseStudySection
        namespace="serviceAds"
        chart1={<FunnelChart />}
        chart2={<CounterCards items={case2Items} />}
      />
    </>
  );
}
