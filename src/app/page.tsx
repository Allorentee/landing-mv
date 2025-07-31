import BackofficeFeaturesSection from "@/sections/backoffice-features";
import CallToActionSection from "@/sections/CallToAction";
import Header from "@/sections/header";
import HeroSection from "@/sections/hero";
import PricingSection from "@/sections/pricing";
import ContactUsSection from "@/sections/contact-us";
import ContentSection from "@/sections/content";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BackofficeFeaturesSection />
      <ContentSection />
      <CallToActionSection />
      <PricingSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
