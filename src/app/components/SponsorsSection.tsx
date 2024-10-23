import React from 'react';
import styles from '../styles/SponsorsSection.module.css';
import Image from 'next/image';

import solace from '../assets/solace.png';
import EEF from '../assets/eef.png';
import CSE from '../assets/cse.png';
import surveymonkey from '../assets/surveymonkey.png';
import deloitte from '../assets/deloitte.png';
import deepcode from '../assets/deepcode.png';
import voiceflow from '../assets/voiceflow.png'
import onepassword from '../assets/1password.png';
import ehub from '../assets/ehub.png';
import icons8 from '../assets/icons8.png';
import eleg from '../assets/eleg.png';
import xyz from '../assets/xyz.png';
import interviewcake from '../assets/interviewcake.png';
import balsamiq from '../assets/balsamiq.png';

import mlh from '../assets/mlh.png';
import github from '../assets/github.png';
import uottawa from '../assets/uottawa.png';

import otrain from '../assets/otrain.png';
import otrainRails from '../assets/otrain_rails.png';

interface SponsorsSectionProps {}

const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
    return (
        <section className={styles.container}>
            <p className={styles.pretitle}>Thank you to our</p>
            <p className={styles.title}>SPONSORS</p>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image src={solace} alt="Solace Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image src={EEF} alt="EEF Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image src={CSE} alt="CSE Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={surveymonkey} alt="SurveyMonkey Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image src={deloitte} alt="Deloitte Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={deepcode} alt="DeepCode Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image alt=" Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image src={voiceflow} alt="VoiceFlow Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={onepassword} alt="1Password Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={ehub} alt="Entrepreneurship Hub Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={icons8} alt="Icons8 Logo" />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.sponsorContainer}>
                    <Image src={eleg} alt="Elegoo Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={xyz} alt=".xyz Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={interviewcake} alt="Interview Cake Logo" />
                </div>
                <div className={styles.sponsorContainer}>
                    <Image src={balsamiq} alt="Balsamiq Logo" />
                </div>
            </div>

            <p className={styles.partnersTitle}>Community Partners</p>
            <div className={styles.row}>
                <div className={styles.partnersContainer}>
                    <Image src={mlh} alt="MLH Logo" />
                </div>
                <div className={styles.partnersContainer}>
                    <Image src={github} alt="Github Logo" />
                </div>
                <div className={styles.partnersContainer}>
                    <Image src={uottawa} alt="uOttawa Logo" />
                </div>
            </div>

            <div className={styles.otrain} >
                <Image src={otrain} alt="OTrain Drawing" />
            </div>
            <div className={styles.otrainrails} >
                <Image src={otrainRails} alt="Otrain Rails Drawing" />
            </div>
        </section>
    );
};

export default SponsorsSection;
