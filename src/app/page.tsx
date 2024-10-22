"use client";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MapSection from "./components/MapSection";
import SponsorsSection from "./components/SponsorsSection";
import SponsorUsSection from "./components/SponsorUsSection";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <MainHeader/>
        <HeroSection />
        
        <IntroSection/>
        <SponsorsSection/>
        <MapSection/>
        <FAQSection/>

        <MainFooter/>
        <MainHeader/>
        
        <SponsorUsSection/> 
      </ParallaxProvider>
    </main>
  );
}
