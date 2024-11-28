import React from "react";
import styles from "../styles/SponsorsSection.module.css";
import Image from "next/image";

import solace from "../assets/solace.png";
import EEF from "../assets/eef.png";
import CSE from "../assets/cse.svg";
import Surveymonkey from "../assets/surveryMonkey.svg";
import Deloitte from "../assets/Deloitte.svg";
import Deepcode from "../assets/Deepcode.svg";
import Voiceflow from "../assets/voiceflow.svg";
import onepassword from "../assets/1password.png";
import ehub from "../assets/ehub.png";
import Icons8 from "../assets/icons8.svg";
import eleg from "../assets/eleg.png";
import XYZ from "../assets/xyz-logo.svg";
import Interviewcake from "../assets/interviewcake.svg";
import balsamiq from "../assets/balsamiq2.png";
import NavCanada from "../assets/navCanada.svg";
import redbull from "../assets/redbull.png";
import warp from "../assets/warp.png";
import StandoutStk from "../assets/stand-out-stickers-logo.svg";
import wolfram from "../assets/wolfram-1.png";
import huion from "../assets/huion.png";
import eef_community from "../assets/eef-com.png";
import longandmcquade from "../assets/long-and-mcquade.png"
import themerrydairy from "../assets/themerrydairy.png"
import shop3d from "../assets/shop3d.png"
import dorahacks from "../assets/dorahacks.png"

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

interface SponsorsSectionProps { }

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
          <a
            href="https://www.uottawa.ca/faculty-engineering/student-experience/funding-student-initiatives"
            target="_blank"
            rel="noreferrer"
          >
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
          <div className="flex flex-row items-center justify-center w-full pt-5 pl-5 pr-5 gap-x-2 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw] overflow-hidden"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[2] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[20%] h-full overflow-hidden">
                <a
                  href="https://www.cse-cst.gc.ca/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CSE className="w-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[3] }
              }
            >
              <div className="  w-full p-[8%] h-full overflow-hidden">
                <a
                  href="https://www.surveymonkey.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Surveymonkey className="w-[100%] h-[100%]" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Fourth Row - Medium Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-2 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw] overflow-hidden"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[4] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[40%] h-full overflow-hidden">
                <a
                  href="https://www.navcanada.ca/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <NavCanada className="w-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[5] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[5%] h-full overflow-hidden">
                <a
                  href="https://www.deepcode.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Deepcode className="w-full " />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Fifth Row - Small Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-2 ">
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center h-[11vw]"
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
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[7] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[30%]  h-full overflow-hidden">
                <a
                  href="https://ipsgtechnology.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={IPSG} alt="IPSG Logo" className="w-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[8] }
              }
            >
              <div className=" flex items-center justify-center w-full  p-[30%] h-full overflow-hidden">
                <a
                  href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Deloitte className="w-[100%]" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center   h-[11vw]"
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

          {/* Fifth Row - Small Sponsors */}
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 gap-x-2 ">
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center h-[11vw]"
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
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[7] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[30%]  h-full overflow-hidden">
                <a
                  href="https://dorahacks.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={dorahacks} alt="DoraHacks Logo" className="w-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[11vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[7] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[30%]  h-full overflow-hidden">
                <a
                  href="https://shop3d.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={shop3d} alt="Shop3D.ca Logo" className="w-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center   h-[11vw]"
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
          <div className="flex flex-row items-center justify-center w-full pl-5 pr-5 pt-5 pb-5 gap-x-2 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[10] }
              }
            >
              <a
                href="https://www.redbull.com/ca-en"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={redbull}
                  alt="Red Bull logo"
                  className="h-auto max-w-[10vw] min-w-[5vw]"
                />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[8vw]"
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
                <Image src={warp} alt="Warp logo" className="w-full" />
              </a>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[12] }
              }
            >
              <div className=" flex items-center justify-center w-full  h-full overflow-hidden">
                <a
                  href="https://www.elegoo.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={eleg}
                    alt="Elegoo logo"
                    className="w-[10vw] h-[100%]"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[13] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[10%] h-full overflow-hidden">
                <a
                  href="https://huion.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={huion}
                    alt="Huion logo"
                    className="h-auto max-w-[10vw] min-w-[5vw]"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Seventh Row - Mini Sponsors */}
          <div className="flex flex-row items-center justify-center w-full  pl-5 pr-5 gap-x-2 ">
            <motion.div
              className="bg-white rounded-xl  w-full flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[14] }
              }
            >
              <div className=" flex items-center justify-center w-full p-[30%] h-full overflow-hidden">
                <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
                  <XYZ className=" w-full " />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white md:rounded-xl rounded-md w-full flex items-center justify-center h-[8vw]  "
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[15] }
              }
            >
              <div className=" ">
                <a
                  href="https://www.interviewcake.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Interviewcake className="w-full h-full " />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-md md:rounded-xl w-full flex items-center justify-center  h-[8vw] overflow-hidden"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"}
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"}
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[16] }
              }
            >
              <div className="flex items-center justify-center w-full p-[25%] h-full overflow-hidden">
                <a
                  href="https://www.standoutstickers.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <StandoutStk className="w-full h-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white md:rounded-xl rounded-md w-full flex items-center justify-center  h-[8vw] overflow-hidden"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[17] }
              }
            >
              <div className="flex items-center justify-center w-full h-full overflow-hidden">
                <a
                  href="https://www.voiceflow.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Voiceflow className="w-[100%] " />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Eighth Row - Single Sponsor */}

          <div className="flex flex-row items-center justify-self-center justify-center w-[75%] pl-5 pr-5 pt-5 gap-x-2">
            <motion.div
              className="bg-white rounded-xl flex-1 flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[18] }
              }
            >

              <div className="p-[10%]">
                <a href="https://www.long-mcquade.com/" target="_blank" rel="noreferrer">
                  <Image
                    src={longandmcquade}
                    alt="Long & McQuade logo"
                    className="w-[100%]"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl flex-1 flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[19] }
              }
            >
              <div className="p-[10%]">
                <a href="https://icons8.com/" target="_blank" rel="noreferrer">
                  <Icons8 className="w-full" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl flex-1 flex items-center justify-center h-[8vw]"
              variants={itemVariants}
              initial={isMobile ? "visible" : "hidden"} // On mobile, default to visible with no animation
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"} // Only animate on larger screens
              transition={
                isMobile
                  ? {}
                  : { duration: 1, ease: "easeOut", delay: delays[19] }
              }
            >
              <div className="p-[10%]">
                <a href="https://themerrydairy.com/" target="_blank" rel="noreferrer">
                  <Image
                    src={themerrydairy}
                    alt="The Merry Dairy logo"
                    className="w-[100%]"
                  />
                </a>
              </div>
            </motion.div>
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
              <a
                href="https://www.uottawa.ca/current-students/career-experiential-learning/entrepreneurship-hub"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={ehub}
                  alt="ehub Community"
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
              <a
                href="https://www.uottawa.ca/faculty-engineering/"
                target="_blank"
                rel="noreferrer"
              >
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
