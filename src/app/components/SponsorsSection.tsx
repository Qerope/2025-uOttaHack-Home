import React from "react";
import styles from "../styles/SponsorsSection.module.css";
import Image from "next/image";

import solace from "../assets/solace.png";
import EEF from "../assets/eef.png";
import CSE from "../assets/cse.png";
import surveymonkey from "../assets/surveymonkey.png";
import deloitte from "../assets/deloitte.png";
import deepcode from "../assets/deepcode.png";
import voiceflow from "../assets/voiceflow.png";
import onepassword from "../assets/1password.png";
import ehub from "../assets/ehub.png";
import icons8 from "../assets/icons8.png";
import eleg from "../assets/eleg.png";
import xyz from "../assets/xyz.png";
import interviewcake from "../assets/interviewcake.png";
import balsamiq from "../assets/balsamiq.png";

import mlh from "../assets/mlhLogo.png";
import github from "../assets/github.png";
import uottawa from "../assets/uottawa.png";

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
        className={styles.title}
        style={{ fontSize: "clamp(3rem, 5vw ,20rem)" }}
      >
        SPONSORS
      </p>

      <div ref={sectionRef} className={styles.sponsorSection}>
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
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image src={EEF} alt="EEF Logo" />
          </motion.div>
        </div>

        {/* Third Row */}
        <div className={styles.row}>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <Image src={CSE} alt="CSE Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            <Image src={surveymonkey} alt="SurveyMonkey Logo" />
          </motion.div>
        </div>

        {/* Fourth Row */}
        <div className={styles.row}>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          >
            <Image src={deloitte} alt="Deloitte Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
          >
            <Image src={deepcode} alt="DeepCode Logo" />
          </motion.div>
          {/* <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <Image src={anotherLogo} alt="Another Logo" />
          </motion.div> */}
        </div>

        {/* Fifth Row */}
        <div className={styles.row}>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 3 }}
          >
            <Image src={voiceflow} alt="VoiceFlow Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 3.5 }}
          >
            <Image src={onepassword} alt="1Password Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 4 }}
          >
            <Image src={ehub} alt="Entrepreneurship Hub Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 4.5 }}
          >
            <Image src={icons8} alt="Icons8 Logo" />
          </motion.div>
        </div>

        {/* Sixth Row */}
        <div className={styles.row}>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 5 }}
          >
            <Image src={eleg} alt="Elegoo Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 5.5 }}
          >
            <Image src={xyz} alt=".xyz Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 6 }}
          >
            <Image src={interviewcake} alt="Interview Cake Logo" />
          </motion.div>
          <motion.div
            className={styles.sponsorContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 6.5 }}
          >
            <Image src={balsamiq} alt="Balsamiq Logo" />
          </motion.div>
        </div>

        {/* Community Partners */}
        <p className={styles.partnersTitle}>Community Partners</p>
        <div className={styles.row}>
          <motion.div
            className={styles.partnersContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 7 }}
          >
            <Image src={mlh} alt="MLH Logo" />
          </motion.div>
          <motion.div
            className={styles.partnersContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 7.5 }}
          >
            <Image src={github} alt="GitHub Logo" />
          </motion.div>
          <motion.div
            className={styles.partnersContainer}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut", delay: 8 }}
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
