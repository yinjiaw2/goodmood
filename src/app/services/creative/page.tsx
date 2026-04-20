import type { Metadata } from "next";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import ServiceOverviewSection from "@/components/shared/ServiceOverviewSection";
import ServiceSubFeaturesSection from "@/components/shared/ServiceSubFeaturesSection";
import CaseStudySection from "@/components/shared/CaseStudySection";
import CounterCards from "@/components/charts/CounterCards";
import DonutChart from "@/components/charts/DonutChart";

export const metadata: Metadata = {
  title: "TikTok Ads",
  description:
    "In-Feed Ads, Spark Ads, and creative testing built for new audience reach on TikTok.",
};

const case1Items = [
  { value: 580, suffix: "%", label: "Engagement Rate Lift" },
  { value: 3.2, suffix: "×", label: "Ad Click-Through Rate", decimals: 1 },
  { value: 240, suffix: "+", label: "Creative Assets" },
  { value: 8, suffix: "", label: "Brand Partners" },
];

export default function ServiceCreativePage() {
  return (
    <>
      <ServiceHeroSection
        namespace="serviceCreative"
        imageSrc="/ecommence.png"
      />
      <ServiceOverviewSection namespace="serviceCreative" />
      <ServiceSubFeaturesSection namespace="serviceCreative" />
      <CaseStudySection
        namespace="serviceCreative"
        chart1={<CounterCards items={case1Items} />}
        chart2={<DonutChart />}
      />
    </>
  );
}
