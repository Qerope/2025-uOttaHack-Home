import React from 'react';
import styles from '../styles/MapSection.module.css';

interface MapSectionProps {}

const MapSection: React.FC<MapSectionProps> = () => {
  return (
    <section className={styles.container}>

      <div className={styles.title}>
        <h2>Where to find us...</h2>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3761884800556!2d-75.6839852877888!3d45.42191753613772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0553301ba91f%3A0x88fbccabd3b90bc4!2sLearning%20Crossroads%20(CRX)!5e0!3m2!1sen!2sca!4v1729473160390!5m2!1sen!2sca"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;
