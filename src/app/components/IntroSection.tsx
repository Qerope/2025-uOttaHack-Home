// MissionSection.tsx
import React from 'react';
import styles from '../styles/IntroSection.module.css';

const MissionSection: React.FC = () => {
  return (
    <section className={styles.container} id="mission">
      <h2 className={styles.heading}>What is uOttaHack?</h2>
      <p className={styles.description}>
        uOttaHack is Ottawa’s Premier Hackathon community since 2017. It is organized by a student group directly with the University of Ottawa's Faculty of Engineering and the President and Vice-Chancellor's team to deliver Ottawa's largest annual technology.
      </p>
    </section>
  );
};

export default MissionSection;
