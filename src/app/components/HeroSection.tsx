"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
//Asset Imports Below
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";
import background from "../assets/Background.png";
import buildingRight from "../assets/BuildingRight.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [email, setEmail] = useState<string>("");
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      try {
        await addDoc(collection(db, "emails"), {
          email: email,
          timestamp: new Date(),
        });

        setEmail(""); // Clear input
        alert("Email added successfully!");
      } catch (error) {
        console.error("Error adding email: ", error);
        alert("Failed to add email");
      }
    } else {
      alert("Please enter an email");
    }
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
        <p className={styles.subtitle}>Explore Your Limits</p>

        <input
          type="email"
          placeholder="Email Address"
          name=""
          id="email"
          value={email}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 shadow-sm"
          onChange={(e) => setEmail(e.target.value)}
          required
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
