import BackofficeFeaturesSection from "@/sections/backoffice-features";
import CallToActionSection from "@/sections/call-to-action";
import Header from "@/sections/header";
import HeroSection from "@/sections/hero";
import PricingSection from "@/sections/pricing";
import ContactUsSection from "@/sections/contact-us";
import ContentSection from "@/sections/content";
import Footer from "@/sections/footer";
import FaqsSection from "@/sections/faqs";
import Benefits from "@/sections/Benefits";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <BackofficeFeaturesSection />
      <ContentSection />
      <Benefits />
      <CallToActionSection />
      <PricingSection />
      <ContactUsSection />
      <FaqsSection />
      <Footer />
    </>
  );
}
