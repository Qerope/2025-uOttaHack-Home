import React from 'react';
import styles from '../styles/SponsorsSection.module.css';
import Image from 'next/image';

import solace from '../assets/solace.png';
import EEF from '../assets/eef.png';
import CSE from '../assets/cse.png';
import surveymonkey from '../assets/surveymonkey.png';
import deloitte from '../assets/deloitte.png';
import deepcode from '../assets/deepcode.png';

interface SponsorsSectionProps {}

const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
    return (
        <section className={styles.container}>
            <p className={styles.pretitle}>Thank you to our</p>
            <p className={styles.title}>SPONSORS</p>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={solace} alt="Solace Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={EEF} alt="EEF Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={CSE} alt="CSE Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={surveymonkey} alt="SurveyMonkey Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deloitte} alt="Deloitte Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deloitte} alt="Deloitte Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deloitte} alt="Deloitte Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image className={styles.sponsor} src={deepcode} alt="DeepCode Logo" />
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
