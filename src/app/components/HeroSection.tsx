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
import mlh from "../assets/MLH.png";

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
    <>
      <img
        src={mlh.src}
        alt=""
        className="absolute top-0 right-20 w-[8.24rem] h-[15.5rem] "
      />
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <br />
          <p className={styles.subtitle}>January 17 - 19 2025</p>
          <h1 className={styles.title}>uOttaHack 7</h1>

          <input
            type="email"
            placeholder="Enter your email to be notified when application open"
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
      </section>
    </>
  );
};

export default HeroSection;
