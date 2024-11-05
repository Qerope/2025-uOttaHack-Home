import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
//Asset Imports Below
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";
import BackgroundSVG from "../assets/BACKGROUND.svg";
import buildingRight from "../assets/BuildingRight.png";
import mlh from "../assets/MLH.png";
import HeroCTA from "./HeroCTA";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Metro from "../assets/Metro.svg";
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when the element comes into view

  const [mainState, setMainState] = useState<number>(0);

  return (
    <section className={`${styles.container} flex w-full min-h-screen  `}>
      <BackgroundSVG className="fixed top-0  w-auto min-h-screen bg-cover bg-center -z-10" />
      {/* <motion.svg
          className="fixed top-[47%] right-[19%] bg-cover -z-10"
          initial={{ width: "100%", height: "0%" }} // Initial SVG dimensions
          animate={{ width: "50%", height: "50%" }} // Target SVG dimensions
          transition={{ duration: 1 }} // Animation duration in seconds
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100" // Example viewBox, adjust to your SVG content
        >
          <Metro className="fixed top-[65%] left-100 bg-cover  -z-10" />
        </motion.svg> */}

      <div className={`absolute z-1 top-32 text-white `}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Starting state: faded out and below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in place
          transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
        >
          <p className="text-md md:text-lg text-center font-inter font-medium text-shadow-hero">
            January 17 - 19, 2025
          </p>

          <h1 className={`${styles.title} mb-2 font-harabara text-shadow-hero`}>
            uOttaHack 7
          </h1>
          <p className="mb-24 text-md md:text-lg text-center font-inter font-medium text-shadow-hero">
            In-person @ the University of Ottawa
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Starting state: faded out and below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in place
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Animation duration and easing
          className="w-full h-full flex justify-center"
        >
          <HeroCTA mainState={mainState} />{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
