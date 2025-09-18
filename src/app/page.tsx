import Header from "./sections/header";
import HeroSection from "./sections/hero/hero";
import BackofficeFeaturesSection from "./sections/backoffice-features";
import PricingSection from "./sections/pricing";
import ContactUsSection from "./sections/contact-us/contact-us";
import FaqsSection from "./sections/faqs";
import TeamSection from "./sections/team/team";
import Footer from "./sections/footer";
import MenuTypes from "./sections/menu-types/menu-types";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <BackofficeFeaturesSection />

      <MenuTypes />

      <PricingSection />
      <ContactUsSection />
      <FaqsSection />
      <TeamSection />
      <Footer />
    </>
  );
}
