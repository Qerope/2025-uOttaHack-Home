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
import xyz from "../assets/xyz.png";
import interviewcake from "../assets/interviewcake.png";
import balsamiq from "../assets/balsamiq2.png";
import NavCanada from "../assets/navCanada.svg";
import redbull from "../assets/redbull.png";
import warp from "../assets/warp.png";
import standoutStk from "../assets/StandOut-Stickers.png";
import wolfram from "../assets/wolfram.png";
import eef_community from "../assets/eef-com.png";

import MLH from "../assets/mlh.svg";
import github from "../assets/github.png";
import uottawa from "../assets/uottawa.png";

import IPSG from "../assets/IPSG.png";
import OtrainSVG from "../assets/Otrain2.svg";
import OtrainRails from "../assets/OtrainRail.svg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface SponsorsSectionProps {}

const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Detect when the section comes into view

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
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0 }}
            >
              <Image
                src={solace}
                alt="Solace Logo"
                className="md:h-32  md:h-auto w-32 md:w-96"
              />
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            >
              <Image
                src={EEF}
                alt="EEF Logo"
                className="md:h-32  md:h-15 w-auto"
              />
            </motion.div>
          </div>

          {/* Third Row - Medium Sponsors */}
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <CSE className="h-full w-32 md:w-full" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}
            >
              <Image
                src={Surveymonkey}
                alt="Survey Monkey logo"
                className="h-auto w-full md:p-5"
              />
            </motion.div>
          </div>

          {/* Fourth Row - Medium Sponsors */}
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <NavCanada className="md:w-48 w-32 p-10" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 0.75 }}
            >
              <Deepcode className="h-auto w-[100%] md:w-[75%] p-5" />
            </motion.div>
          </div>

          {/* Fifth Row - Small Sponsors */}
          <div className="flex flex-row items-center justify-center w-full  gap-x-5 ">
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center p-5 h-20 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.05 }}
            ></motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
            >
              <Image src={IPSG} alt="IPSG Logo" className="h-auto w-48" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.05 }}
            >
              <Image
                src={deloitte}
                alt="Deloitte logo"
                className="h-auto w-48"
              />
            </motion.div>
            <motion.div
              className=" rounded-xl w[5%] md:w-[25%] flex items-center justify-center p-5 h-20 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, ease: "easeOut", delay: 1.05 }}
            ></motion.div>
          </div>

          {/* Sixth Row - Mini Sponsors */}
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            >
              <Image
                src={redbull}
                alt="Red Bull logo"
                className="h-auto w-48"
              />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 1.65 }}
            >
              <Image src={warp} alt="Warp logo" className="h-auto w-48" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
            >
              <Image src={eleg} alt="Elegoo logo" className="h-auto w-48" />
            </motion.div>
          </div>

          {/* Seventh Row - Mini Sponsors */}
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 2.1 }}
            >
              <Image src={wolfram} alt="Wolfram logo" className="h-auto w-48" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.25 }}
            >
              <Image src={xyz} alt=".xyz Logo" className="h-auto w-40" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
            >
              <Image
                src={interviewcake}
                alt="Interview Cake Logo"
                className="h-auto w-48"
              />
            </motion.div>
          </div>

          {/* Eighth Row - Single Sponsor */}
          <div className="flex flex-row items-center justify-center w-full p-5 gap-x-5 ">
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 2.55 }}
            >
              <Image
                src={standoutStk}
                alt="Standout-Stickers Logo"
                className="h-auto w-48"
              />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.85 }}
            >
              <Image src={icons8} alt="Icons8 logo" className="h-auto w-48" />
            </motion.div>
            <motion.div
              className="bg-white rounded-xl w-full flex items-center justify-center p-5 h-20 md:h-48"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 1.95 }}
            >
              <Image
                src={voiceflow}
                alt="Voiceflow Logo"
                className="h-auto w-48"
              />
            </motion.div>
          </div>

          {/* Community Partners */}
          <motion.p
            className=" flex font-bold italic pt-20  font-jost justify-center items-center w-full  text-[#366ACF]"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
            style={{ fontSize: "clamp(2rem, 6vw , 3rem)" }}
          >
            Community Partners
          </motion.p>
          <div className={styles.row}>
            <motion.div
              className={styles.partnersContainer}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
            >
              <MLH className="w-48 md:w-full h-auto" />
            </motion.div>
            <motion.div
              className={styles.partnersContainer}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
            >
              <Image
                src={EEF}
                alt="EEF Community"
                className="w-48  md:w-full h-auto"
              />
            </motion.div>
            <motion.div
              className={styles.partnersContainer}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
            >
              <Image
                src={uottawa}
                alt="uOttawa Logo"
                className="w-48 md:w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={`${styles.otrain} `}>
        <Parallax translateX={[-80, 100]} className="  ">
          <OtrainSVG />
        </Parallax>
      </div>
      {/* <div className={` flex justify-center items-center`}> */}

      {/* </div> */}

      <OtrainRails className="absolute z-10 " />
      <div className={` absolute top-0 z-0 w-full h-full`}>
        <div className={`${styles.triangle} absolute `} />
      </div>
    </section>
  );
};

export default SponsorsSection;
