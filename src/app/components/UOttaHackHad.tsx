import React from "react";
import styles from "../styles/UOttaHackHad.module.css";
import RectangleImage from '../assets/Rectangle 1280.png';
import road from '../assets/Road.png';
import maps from '../assets/Maps.png';

const UOttaHackHad: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <img src={RectangleImage.src} alt="UOttaHack Background" className={styles.rectangleImage} />
        <div className={styles.overlayContent}>
          <h1 className={styles.heading}>uOttaHack 2024 had...</h1>
          
          <div className={styles.statsContainer}>
            <div className={styles.stat}><h2>2000+</h2><p>Applications</p></div>
            <div className={styles.stat}><h2>650</h2><p>Hackers</p></div>
            <div className={styles.stat}><h2>30+</h2><p>Schools</p></div>
            <div className={styles.stat}><h2>8</h2><p>Doggos</p></div>
            <div className={styles.stat}><h2>17.1k</h2><p>Prizes</p></div>
          </div>

          <div className={styles.overlayImages}>
            <img src={road.src} alt="Road" className={styles.roadImage} />
            <img src={maps.src} alt="Maps" className={styles.mapImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UOttaHackHad;
