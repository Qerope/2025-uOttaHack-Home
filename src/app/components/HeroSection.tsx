import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
//Asset Imports Below
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";
import BackgroundSVG from "../assets/bg-back2.svg";
import Train from "../assets/test_metro2.svg";
import BackgroudFront from "../assets/bg-front.svg";
import buildingRight from "../assets/BuildingRight.png";
import EmailInputBox from "../components/ui/EmailInputBox";
import mlh from "../assets/MLH.png";
import { DEV_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";
import { db } from "../../firebase";
import HeroCTA from "./HeroCTA";
import useIsMobile from "../hooks/useInMobile";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Metro from "../assets/Metro.svg";
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [email, setEmail] = useState<string>("");
  const [mainState, setMainState] = useState<number>(0);
  const isMobile = useIsMobile();

  return (
    <section className={`${styles.container} flex w-full  min-h-screen  `}>
      {isMobile ? (
        <>
          <BackgroundSVG className="fixed top-0 w-auto min-h-screen bg-center object-cover -z-[20]" />
          <BackgroudFront className="fixed top-0  w-auto min-h-screen bg-center object-cover -z-[10]" />
          <Train className=" fixed top-0  w-auto min-h-screen object-cover -z-[11]" />
        </>
      ) : (
        <div className="relative w-auto h-screen flex overflow-hidden">
          {/* Background Image Container with overflow-hidden */}
          <div className="relative w-full h-full overflow-hidden">
            <BackgroundSVG className="fixed top-0 left-0 w-full min-h-screen bg-center object-cover -z-[20]" />
            <BackgroudFront className="fixed top-0  left-0 w-full min-h-screen bg-center object-cover -z-[10]" />
            <div className="w-1/2 overflow-hidden fixed -z-[11]">
              {/* Animated Train positioned relative to the Background */}
              <motion.div
                className="fixed top-0 left-0 w-full h-full -z-15"
                initial={{ x: -1300, y: -250 }} // Start off-screen to the left
                animate={{
                  x: [-1300, 0, 0, 1300], // Move to the right, ending off-screen
                  y: [-250, 0, 0, 250], // Move downward as it moves to the right
                }}
                transition={{
                  times: [0, 0.3, 0.6, 1], // Pause between 30% and 60% of the duration
                  duration: 15, // Duration of the movement
                  repeat: Infinity, // Repeat indefinitely
                  repeatType: "loop", // Restart from the initial position after delay
                  repeatDelay: 5, // Pause 10 seconds before the next train appears
                  ease: "easeInOut", // Smooth easing for natural motion
                }}
              >
                <Train className=" fixed top-0 left-0 w-auto min-h-screen object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* <div className="  w-full  h-full -z-10">
        {" "} */}

      <div className={`absolute z-1 top-32 text-white `}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className={`text-md md:text-lg text-center font-jost font-regular ${styles["text-shadow-dark"]}`}
          >
            January 17 - 19, 2025
          </p>

          <h1 className={`${styles.title} font-harabara mb-2`}>uOttaHack 7</h1>
          <p
            className={`mb-24 text-md md:text-lg text-center font-jost font-medium ${styles["text-shadow-dark"]}`}
          >
            In-person @ the University of Ottawa
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="w-full h-full flex justify-center"
        >
          <HeroCTA mainState={mainState} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
