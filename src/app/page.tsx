import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MapSection from "./components/MapSection";
import SponsorsSection from "./components/SponsorsSection";
import SponsorUsSection from "./components/SponsorUsSection";

export default function Home() {
  return (
  <main>

    <MainHeader />
    <HeroSection />
    <IntroSection />
    <AboutSection />
    <SponsorUsSection />
    <SponsorsSection />
    <MapSection />
    <FAQSection />
    <MainFooter />

  </main>
  );
}
