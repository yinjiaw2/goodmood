import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyIntroSection from "@/components/about/CompanyIntroSection";
import CoreCapabilitiesSection from "@/components/about/CoreCapabilitiesSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import OfficeMapSection from "@/components/about/OfficeMapSection";

export const metadata: Metadata = {
  title: "about page",
  description: "about page of siddeley talent link",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntroSection />
      <CoreValuesSection />
      <OfficeMapSection />
      <CoreCapabilitiesSection />
    </>
  );
}
