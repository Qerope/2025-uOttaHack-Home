import React from "react";
import styles from "../styles/SponsorsSection.module.css";
import Image from "next/image";

import solace from "../assets/solace.png";
import EEF from "../assets/eef.png";
import CSE from "../assets/cse.svg";
import Surveymonkey from "../assets/survey_monkey.png";
import deloitte from "../assets/deloitte.png";
import Deepcode from "../assets/Deepcode.svg";
import voiceflow from "../assets/voiceflow.png";
import onepassword from "../assets/1password.png";
import ehub from "../assets/ehub.png";
import icons8 from "../assets/icons8.png";
import eleg from "../assets/eleg.png";
import XYZ from "../assets/xyz-logo.svg";
import interviewcake from "../assets/interviewcake.png";
import balsamiq from "../assets/balsamiq2.png";
import NavCanada from "../assets/navCanada.svg";
import redbull from "../assets/redbull.png";
import warp from "../assets/warp.png";
import standoutStk from "../assets/StandOut-Stickers.png";
import wolfram from "../assets/wolfram-1.png";
import eef_community from "../assets/eef-com.png";

import MLH from "../assets/mlh.svg";
import github from "../assets/github.png";
import uottawa from "../assets/uottawa.png";

import IPSG from "../assets/IPSG.png";
import OtrainSVG from "../assets/Otrain2.svg";
import OtrainRails from "../assets/train_rail.svg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface SponsorsSectionProps {}

const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Detect when the section comes into view
  const numElements = 25; // Total number of motion.div elements
  const maxDelay = 2.0; // Maximum delay in seconds
  const delayIncrement = maxDelay / (numElements - 1);

  // Generate delays
  const delays = Array.from(
    { length: numElements },
    (_, i) => i * delayIncrement
  );
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Adjust the delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Update `isMobile` on resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className="bg-[#E2E2E2] pb-[10%] w-full relative z-10 overflow-hidden min-h-screen "
      id="sponsors"
    >
      <div className="md:ml-[10%] pt-10 z-10 relative md:mr-[10%] justify-center items-centerw-full">
        <p className={`${styles.pretitle} justify-center items-center flex`}>
          Thank you to our
        </p>
        <p
          className="z-10 relative font-jost font-bold text-[#366ACF] flex justify-center items-center"
          style={{ fontSize: "clamp(4rem, 1vw ,20rem)" }}
        >
          SPONSORS
        </p>

        <div ref={sectionRef} className={` `}>
          {/* First Row - Large Sponsors */}
          <a href="https://solace.com" target="_blank" rel="noreferrer">
            <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 gap-x-5 ">
              <motion.div
                className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
                variants={itemVariants}
                initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
                animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
                transition={
                  isMobile
                    ? {}
                    : { duration: 1, ease: "easeOut", delay: delays[0] }
                }
              >
                <Image
                  src={solace}
                  alt="Solace Logo"
                  className="md:h-32  md:h-auto w-32 md:w-96"
                />
              </motion.div>
            </div>
          </a>

          {/* Second Row */}
          <a href="https://www.uottawa.ca/faculty-engineering/student-experience/funding-student-initiatives" target="_blank" rel="noreferrer">
            <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-5 ">
              <motion.div
                className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
                variants={itemVariants}
                initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
                animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
                transition={
                  isMobile
                    ? {}
                    : { duration: 1, ease: "easeOut", delay: delays[1] }
                }
              >
                <Image
                  src={EEF}
                  alt="EEF Logo"
                  className="md:h-32  md:h-15 w-auto"
                />
              </motion.div>
            </div>
          </a>
          {/* Third Row - Medium Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pt-5 pl-5 pr-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[2] }
              }
            >
              <a href="https://www.cse-cst.gc.ca/en" target="_blank" rel="noreferrer">
                <CSE className="h-full w-32 md:w-full" />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[3] }
              }
            >
              <a href="https://www.surveymonkey.com/" target="_blank" rel="noreferrer">
                <Image
                  src={Surveymonkey}
                  alt="Survey Monkey logo"
                  className="h-auto w-full md:p-5"
                />
              </a>
            </motion.div>
          </div>

          {/* Fourth Row - Medium Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[4] }
              }
            >
              <a href="https://www.navcanada.ca/en/" target="_blank" rel="noreferrer">
                <NavCanada className="md:w-48 w-32 p-10" />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[5] }
              }
            >
              <a href="https://www.deepcode.ca/" target="_blank" rel="noreferrer">
                <Deepcode className="h-auto w-[100%] md:w-[75%] p-5" />
              </a>
            </motion.div>
          </div>

          {/* Fifth Row - Small Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-5 ">
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center p-5 h-20  md:h-48"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[6] }
              }
            ></motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[7] }
              }
            >
              <a href="https://ipsgtechnology.com/" target="_blank" rel="noreferrer">
                <Image src={IPSG} alt="IPSG Logo" className="h-auto  w-[10vw]" />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 h-20 md:h-48 "
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[8] }
              }
            >
              <a href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html" target="_blank" rel="noreferrer">
                <Image
                  src={deloitte}
                  alt="Deloitte logo"
                  className="h-auto w-48"
                />
              </a>
            </motion.div>
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center p-5 h-20 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[9] }
              }
            ></motion.div>
          </div>

          {/* Sixth Row - Mini Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 pb-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[10] }
              }
            >
              <a href="https://www.redbull.com/ca-en" target="_blank" rel="noreferrer">
                <Image
                  src={redbull}
                  alt="Red Bull logo"
                  className="h-auto w-48"
                />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[11] }
              }
            >
              <a href="https://www.warp.dev/" target="_blank" rel="noreferrer">
                <Image src={warp} alt="Warp logo" className="h-auto w-48" />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[12] }
              }
            >
              <a href="https://www.elegoo.com/" target="_blank" rel="noreferrer">
                <Image src={eleg} alt="Elegoo logo" className="h-auto w-48" />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[13] }
              }
            >
              <a href="https://www.wolfram.com/" target="_blank" rel="noreferrer">
                <Image src={wolfram} alt="Wolfram logo" className="h-auto " />
              </a>
            </motion.div>
          </div>

          {/* Seventh Row - Mini Sponsors */}
          <div className="flex flex-row items-center justify-center w-full   pl-5 pr-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl  w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[14] }
              }
            >
              <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
                <XYZ className=" w-8 md:w-32 h-auto object-contain " />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[15] }
              }
            >
              <a href="https://www.interviewcake.com/" target="_blank" rel="noreferrer">
                <Image
                  src={interviewcake}
                  alt="Interview Cake Logo"
                  className="h-auto w-48"
                />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[16] }
              }
            >
            <a href="https://www.standoutstickers.com/" target="_blank" rel="noreferrer">
              <Image
                src={standoutStk}
                alt="Standout-Stickers Logo"
                className="h-auto w-[10vw]"
              />
            </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[17] }
              }
            >
              <a href="https://www.voiceflow.com/" target="_blank" rel="noreferrer">
                <Image
                  src={voiceflow}
                  alt="Voiceflow Logo"
                  className="h-auto w-48"
                />
              </a>
            </motion.div>
          </div>

          {/* Eighth Row - Single Sponsor */}

          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-5 ">
            <motion.div
              className=" rounded-xl w-[37.5%]  flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[18] }
              }
            >
              {" "}
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-[25%] flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[19] }
              }
            >
              <a href="https://icons8.com/" target="_blank" rel="noreferrer">
                <Image src={icons8} alt="Icons8 logo" className="h-auto w-48" />
              </a>
            </motion.div>
            <motion.div
              className=" rounded-xl w-[37.5%]  flex items-center justify-center p-5 h-[3vh] md:h-[15vh]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[20] }
              }
            ></motion.div>
          </div>

          {/* Community Partners */}
          <motion.p
            className=" flex font-bold italic pt-20  font-jost justify-center items-center w-full  text-[#366ACF]"
            variants={itemVariants}
            initial="hidden"
            animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
            transition={
              isMobile
                ? {}
                : { duration: 1, ease: "easeOut", delay: delays[21] }
            }
            style={{ fontSize: "clamp(2rem, 6vw , 3rem)" }}
          >
            Community Partners
          </motion.p>
          <div className={styles.row}>
            <motion.div
              className={styles.partnersContainer}
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[22] }
              }
            >
              <a href="https://mlh.io/" target="_blank" rel="noreferrer">
                <MLH className="w-48 md:w-full h-auto" />
              </a>
            </motion.div>
            <motion.div
              className={styles.partnersContainer}
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[23] }
              }
            >
              <a href="https://www.uottawa.ca/faculty-engineering/student-experience/funding-student-initiatives" target="_blank" rel="noreferrer">
                <Image
                  src={EEF}
                  alt="EEF Community"
                  className="w-48  md:w-full h-auto"
                />
              </a>
            </motion.div>
            <motion.div
              className={styles.partnersContainer}
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[24] }
              }
            >
              <a href="https://www.uottawa.ca/faculty-engineering/" target="_blank" rel="noreferrer">
                <Image
                  src={uottawa}
                  alt="uOttawa Logo"
                  className="w-48 md:w-full h-auto"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={`${styles.otrain}`}>
        <Parallax
          translateX={isMobile ? [-20, 20] : [-80, 100]} // Adjust values for mobile
          className="will-change-transform  "
        >
          <OtrainSVG />
        </Parallax>
      </div>
      {/* <div className={` flex justify-center items-center`}> */}

      {/* </div> */}

      <OtrainRails className="absolute z-[1] " />
      <div className={` absolute top-0 z-0 w-full h-full`}>
        <div className={`${styles.triangle} absolute `} />
      </div>
    </section>
  );
};

export default SponsorsSection;
