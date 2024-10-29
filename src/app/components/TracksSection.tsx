import React from "react";
import styles from "../styles/TracksSection.module.css";
import TracksImageTop from '../assets/Background 3.png';
import TracksImageBottom from '../assets/Train Station.png';

const TracksSection: React.FC = () => {
  return (
    <section id="tracks" className={styles.section}>
      <div className={styles.relativeDiv}>
        <div >
          <img src={TracksImageTop.src} alt="Top Tracks Image" />
        </div>

        <div className={styles.absoluteText}>
          <h1 className={styles.heading}>TRACKS</h1>
          <div>
            <p className={styles.paragraph}>
              Whether you're passionate about <strong>health, fintech, AI, or sustainability</strong>, see what we can offer for the perfect platform to focus your creativity and build impactful solutions. <u>Choose your challenge</u>, collaborate, and <strong><em>explore your limits!</em></strong>
            </p>
          </div>
        </div>

        <div className={styles.marginTopNegative}>
        <img 
            src={TracksImageBottom.src} 
            alt="Bottom Tracks Image" 
            style={{ width: '84%', marginLeft: '222x'}}
          />
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
