// components/HeroSection.tsx
import React from 'react';
import styles from '../styles/HeroSection.module.css';
import gridImage from '../assets/Grid.png';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className={styles.container}>
      <img src={gridImage.src} alt="Background Grid" className={styles.backgroundImage} />
    </section>
  );
};

export default HeroSection;
