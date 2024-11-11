import React, { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
//Asset Imports Below
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";
import background from "../assets/Background.png";
import buildingRight from "../assets/BuildingRight.png";
import EmailInputBox from '../components/ui/EmailInputBox';
import mlh from "../assets/MLH.png";
import { DEV_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";
import { db } from "../../firebase";
import BackgroundSVG from "../assets/BACKGROUND.svg";
import HeroCTA from "./HeroCTA";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [email, setEmail] = useState<string>("");
  const [mainState, setMainState] = useState<number>(0);

  return (
    <section className={`${styles.container} flex w-full min-h-screen`}>
      <BackgroundSVG className="fixed top-0 w-auto min-h-screen bg-cover bg-center -z-10" />
      
      <div className="absolute z-10 top-28 lg:top-32 text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className={`text-md md:text-lg text-center font-jost font-regular ${styles["text-shadow-dark"]}`}>
            January 17 - 19, 2025
          </p>

          <h1 className={`${styles.title} mb-2`}>
            uOttaHack 7
          </h1>
          <p className={`mb-24 text-md md:text-lg text-center font-jost font-medium ${styles["text-shadow-dark"]}`}>
            In-person @ the University of Ottawa
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="w-full h-full flex justify-center">
          <HeroCTA mainState={mainState} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
