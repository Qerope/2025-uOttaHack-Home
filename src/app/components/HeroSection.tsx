import React, { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../styles/HeroSection.module.css";
import BackgroundSVG from "../assets/BACKGROUND.svg";
import HeroCTA from "./HeroCTA";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface HeroSectionProps {}

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
