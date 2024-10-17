// IntroSection.tsx
import React from "react";
import styles from "../styles/IntroSection.module.css";
import IntroBuildingsTop from '../assets/IntroBuildingsTop.png';
import IntroBuildingsBottom from '../assets/IntroBuildingsBottom.png'; 
import { Parallax } from "react-scroll-parallax";

const IntroSection: React.FC = () => {
  return (
    <section className={` ${styles.container} intro-container-bg container`}  id="mission">
    <Parallax
      className={styles.parallaxImage}
      translateX={[-50, -55]} 
    >
      <img src={IntroBuildingsTop.src} alt="Top Buildings" />
    </Parallax>

    <h1 className={styles.title}>
        <span className={styles.year}>UOTTAHACK</span>
        <br />
        <span className={styles.bigBold}>IS BACK</span>
        <br />
        <span className={styles.year}>FOR YEAR 7!</span>
      </h1>
      
      <div className={styles.introTexts}>
        <p className={styles.introText}>
          uOttaHack is back for their 7th year! Join over <b>800+ hackers</b> from around Canada and get ready to innovate, invent, and connect with a community to turn your dreams into a new reality.
        </p>

        <p className={styles.introText}>
          <b>Not from Ottawa?</b> Well, we've got you covered for food, lodging, and fun, so you enjoy your experience learning and discovering new bounds.
        </p>

        <p className={styles.introText}>
          <a href="https://uOttaHack.ca" className={styles.link}>
            <u>View our Main Site</u>
          </a>
        </p>
      </div>
      
      <Parallax
        className={`${styles.parallaxImage} ${styles.parallaxImageBottom}`}
        translateX={[-50, -40]} 
      >
      <img src={IntroBuildingsBottom.src} alt="Bottom Buildings" />
    </Parallax>
    </section>
  );
};

export default IntroSection;
