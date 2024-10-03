"use client";
import React from "react";
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.container}>
      <img
        src={gridImage.src}
        alt="Background Grid"
        className={styles.backgroundImage}
      />
      <div className={styles.stars}>
        {Array.from({ length: 23 }).map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>uOttaHack</h1>
        <p className={styles.subtitle}>Canada’s Capital Hackathon</p>

        <input
          type="email"
          placeholder="Email Address"
          name=""
          id=""
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 shadow-sm"
        />

        <button onClick={handleEmailSubmit} className={styles.cta}>
          Sign up
        </button>
        <a href="https://2024.uottahack.ca" className={styles.cta}>
          See 2024
        </a>
      </div>
      <img
        src={rightImage.src}
        alt="Right Side Image"
        className={styles.rightImage}
      />
    </section>
  );
};

export default HeroSection;
