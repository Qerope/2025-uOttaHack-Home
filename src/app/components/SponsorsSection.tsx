import React from 'react';

import styles from '../styles/SponsorsSection.module.css';
import Image from 'next/image';

import CSE from '../assets/cse.png'


interface SponsorsSectionProps {

}

  const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
    return (
        <section className={styles.container}>
            <p>Thank you to our</p>
            <p>SPONSORS</p>

            <Image src={CSE} />
        </section>
    );
  };
  
  export default SponsorsSection;