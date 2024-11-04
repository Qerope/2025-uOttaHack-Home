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

import mlh from "../assets/mlhLogo.png";
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
    <section className={styles.container} id="sponsorship">
      <p className={styles.pretitle}>Thank you to our</p>
      <p
        className="z-10 relative font-jost font-bold text-[#366ACF] flex justify-center items-center"
        style={{ fontSize: "clamp(4rem, 1vw ,20rem)" }}
      >
        SPONSORS
      </p>

      <div ref={sectionRef} className={`${styles.sponsorSection} `}>
        {/* First Row */}
        <div className={styles.row}>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger animation based on view
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
          >
            <Image src={solace} alt="Solace Logo" />
          </motion.div>
        </div>

        {/* Second Row */}
        <div className={styles.row}>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          >
            <Image src={EEF} alt="EEF Logo" />
          </motion.div>
        </div>

        {/* Third Row */}
        <div className={styles.row}>
          <motion.div
            className={
              "w-full realative z-10 m-5 bg-white h-48 rounded-xl justify-center items-center"
            }
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <CSE className="w-full h-full justify-self-center items-self-center" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}
          >
            <Image
              className="   justify-self-center items-self-center"
              alt="Survey Monkey logo"
              src={Surveymonkey}
            />
          </motion.div>
        </div>

        {/* Fourth Row */}
        <div className={styles.row}>
          <motion.div
            className={
              "w-full realative z-10 m-5 bg-white h-48 rounded-xl justify-center items-center"
            }
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <NavCanada className="w-48 h-full justify-self-center items-self-center" />
          </motion.div>
          <motion.div
            className={
              "w-full realative z-10 m-5 bg-white h-48 rounded-xl justify-center items-center"
            }
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 0.75 }}
          >
            <Deepcode className="w-full h-full justify-self-center items-self-center" />
          </motion.div>
        </div>
        <div className={styles.row}>
          <motion.div
            className={"block w-1/3 m-5"}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          ></motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.05 }}
          >
            <Image
              src={IPSG}
              className="  w-48 justify-self-center items-self-center"
              alt="IPSG Logo"
            />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          >
            <Image
              src={deloitte}
              className=" justify-self-center items-self-center"
              alt="deloitte logo"
            />
          </motion.div>
          <motion.div
            className={"block w-1/3 m-5 "}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.35 }}
          ></motion.div>
        </div>

        {/* Fifth Row */}
        <div className={styles.row}>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            <Image src={redbull} className="w-48 " alt="redbull logo" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.65 }}
          >
            <Image src={warp} alt="warp logo" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          >
            <Image src={eleg} alt="Elegoo logo" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.95 }}
          >
            <Image src={voiceflow} alt="Icons8 Logo" />
          </motion.div>
        </div>

        {/* Sixth Row */}
        <div className={styles.row}>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2.1 }}
          >
            <Image src={wolfram} className="w-96" alt="wolfram" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-40 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.25 }}
          >
            <Image src={xyz} alt=".xyz Logo" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
          >
            <Image src={interviewcake} alt="Interview Cake Logo" />
          </motion.div>
          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2.55 }}
          >
            <Image
              src={standoutStk}
              className="w-48 h-auto"
              alt="Standout-Stickers Logo"
            />
          </motion.div>
        </div>
        <div className={styles.row}>
          <motion.div
            className={"block z-10 m-5 w-full"}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2.55 }}
          >
            {" "}
          </motion.div>

          <motion.div
            className="bg-white rounded-[15px] p-2 m-5 flex-1 basis-full min-h-48 max-h-48 flex items-center justify-center z-10"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.85 }}
          >
            <Image
              src={icons8}
              className="justify-self-center flex  items-center"
              alt="icons8 logo"
            />
          </motion.div>

          <motion.div
            className={"block z-10 m-5 w-full"}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2.85 }}
          ></motion.div>
        </div>

        {/* Community Partners */}
        <motion.p
          className=" relative z-10 italic pt-20  text-[#366ACF]"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
          style={{ fontSize: "clamp(3rem, 1vw , 6rem)" }}
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
            <Image src={mlh} alt="MLH Logo" />
          </motion.div>
          <motion.div
            className={styles.partnersContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
          >
            <Image src={EEF} alt="EEF Community" />
          </motion.div>
          <motion.div
            className={styles.partnersContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 3.0 }}
          >
            <Image src={uottawa} alt="uOttawa Logo" />
          </motion.div>
        </div>
      </div>

      <div className={`${styles.otrain} `}>
        <Parallax translateX={[-80, 100]} className="otrain">
          <OtrainSVG />
        </Parallax>
      </div>
      <div className={styles.otrainrails}>
        <OtrainRails />
      </div>

      <div className={styles.triangle} />
    </section>
  );
};

export default SponsorsSection;
