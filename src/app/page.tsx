"use client";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import { SnackbarProvider } from "notistack";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MapSection from "./components/MapSection";
import SponsorsSection from "./components/SponsorsSection";
import SponsorUsSection from "./components/SponsorUsSection";
import TracksSection from "./components/TracksSection";
import UOttaHackHad from "./components/UOttaHackHad";
import InterestedInSponsoring from "./components/InterestedInSponsoring";

import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <SnackbarProvider maxSnack={3}>
          <MainHeader />
          <HeroSection />

          <IntroSection />

          <TracksSection />
          <UOttaHackHad />
          <InterestedInSponsoring />

          <SponsorsSection />
          <MapSection />
          <FAQSection />
        </SnackbarProvider>

        {/* <MainFooter />

        <SponsorUsSection /> */}
      </ParallaxProvider>
    </main>
  );
}
