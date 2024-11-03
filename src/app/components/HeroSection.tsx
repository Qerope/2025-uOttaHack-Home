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
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when the element comes into view

  const [email, setEmail] = useState<string>("");
  const [mainState, setMainState] = useState<number>(0);

  // const [ref, isInView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed

  return (
    <section className={`${styles.container} flex min-h-screen  `}>
      <BackgroundSVG className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10" />
      <div className={`absolute z-1 top-10 text-white `}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Starting state: faded out and below
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in place
          transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
        >
          <p className="text-md md:text-lg text-center font-inter font-medium text-shadow-hero">
            January 17 - 19, 2025
          </p>

          <h1 className={`${styles.title} mb-2 text-shadow-hero`}>
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
