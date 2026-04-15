import type { Metadata } from "next";
import HeroSection from "@/components/shared/HeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import FunnelChart from "@/components/charts/FunnelChart";
import CounterCards from "@/components/charts/CounterCards";

export const metadata: Metadata = {
  title: "Paid Advertising",
  description:
    "Targeted campaigns across Meta, Google, TikTok, and Xiaohongshu built to acquire higher-quality customers.",
};

const case2Items = [
  { value: 210, suffix: "",   label: "Monthly Leads"          },
  { value: 54,  prefix: "−", suffix: "%", label: "Cost Per Lead"   },
  { value: 5.8, suffix: "×", label: "Return on Ad Spend", decimals: 1 },
  { value: 4,   suffix: "",   label: "Months to Results"       },
];

export default function ServiceAdsPage() {
  return (
    <>
      <HeroSection namespace="serviceAds" />
      <ServiceOverviewSection namespace="serviceAds" />
      <ServiceSubFeaturesSection namespace="serviceAds" />
      <CaseStudySection
        namespace="serviceAds"
        chart1={<FunnelChart />}
        chart2={<CounterCards items={case2Items} />}
      />
    </>
  );
}
