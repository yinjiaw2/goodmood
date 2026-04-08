import HeroSection from "@/components/home/HeroSection";
import NumberSection from "@/components/home/NumbersSection";
import CoreServices from "@/components/home/CoreServices";
import OurTeam from "@/components/home/OurTeam";
import ServiceProcess from "@/components/home/ServiceProcess";
import SuccessCases from "@/components/home/SuccessCases";
import FAQ from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import HomeSectionTracker from "@/components/home/HomeSectionTracker";

export default function Home() {
  return (
    <>
      <HomeSectionTracker />
      <HeroSection />
      <NumberSection />
      <CoreServices />
      <OurTeam />
      <ServiceProcess />
      <SuccessCases />
      <FAQ />
      <Contact />
    </>
  );
}
