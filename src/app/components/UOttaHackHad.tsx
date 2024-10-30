import React from "react";
import styles from "../styles/UOttaHackHad.module.css";
import RectangleImage from '../assets/Rectangle 1280.png';

const UOttaHackHad: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <img src={RectangleImage.src} alt="UOttaHack Background" className={styles.rectangleImage} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>uOttaHack 2024 had...</h1>
      </div>
    </section>
  );
};

export default UOttaHackHad;
