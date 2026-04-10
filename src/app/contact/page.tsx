import ContactConnectSection from "@/components/contact/ContactConnectSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";
import ContactOverviewSection from "@/components/contact/ContactOverviewSection";

export default function ContactPage() {
  return (
    <>
      <ContactOverviewSection />
      <ContactConnectSection />
      <ContactFaqSection />
    </>
  );
}
