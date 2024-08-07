import React from 'react';
import styles from '../styles/HeroSection.module.css';
import gridImage from '../assets/Grid.png';
import rightImage from '../assets/Vector Graphic.png'; 
import sun from '../assets/Retro sun.png';
import rock from '../assets/Rock.png';
import parliament from '../assets/Parliam.png';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className={styles.container}>
      <img src={gridImage.src} alt="Background Grid" className={styles.backgroundImage} />
      <div className={styles.stars}>
        {Array.from({ length: 23 }).map((_, i) => (
          <div key={i} className={styles.star} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>uOttaHack</h1>
        <p className={styles.subtitle}>Canada’s Capital Hackathon</p>
        <a href="https://2024.uottahack.ca" className={styles.cta}>See 2024</a>
      </div>
      <img src={rightImage.src} alt="Right Side Image" className={styles.rightImage} />
    </section>
  );
};

export default HeroSection;
