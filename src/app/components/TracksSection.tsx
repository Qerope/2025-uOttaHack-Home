import React from "react";
import styles from "../styles/TracksSection.module.css";
import TracksImageTop from '../assets/Background 3.png';
import TracksImageBottom from '../assets/Train Station.png';
import SeperationImage from '../assets/Seperation.png'; 

const TracksSection = () => {
  return (
    <section id="tracks" className="relative w-full">
      <div className="relative">
        {/* Top Image */}
        <div className="w-full">
          <img 
            src={TracksImageTop.src}
            alt="Top Tracks Image" 
            className="w-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="absolute top-1/2 left-[6%] transform -translate-y-1/2 z-10 text-white max-w-sm md:max-w-lg font-['Jost']">
          <h1 className="text-5xl md:text-6xl lg:text-[6rem] font-bold mb-8 md:mb-12"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            TRACKS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed -mt-2">
            Whether you're passionate about <strong>health, fintech, AI, or sustainability</strong>, 
            see what we can offer for the perfect platform to focus your creativity and build 
            impactful solutions. <u>Choose your challenge</u>, collaborate, and{' '}
            <strong><em>explore your limits!</em></strong>
          </p>
        </div>

        {/* Bottom Images */}
        <div className="relative">
          <div className="mt-[-65vw] md:mt-[-1058px]">
            <img 
              src={TracksImageBottom.src}
              alt="Bottom Tracks Image"
              className="w-[84%] ml-[222px] object-cover"
            />
          </div>
          
          <div className="mt-5">
            <img 
              src={SeperationImage.src}
              alt="Separation Image"
              className="w-full -mt-[260px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;