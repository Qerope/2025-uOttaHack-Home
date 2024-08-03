import React from 'react';
import styles from '../styles/HeroSection.module.css';
import gridImage from '../assets/Grid.png';

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
    </section>
  );
};

export default HeroSection;
