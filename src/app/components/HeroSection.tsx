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
import HeroCTA from "./HeroCTA";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [mainState, setMainState] = useState<number>(0);

  return (
    <>
      <section
        className={` ${styles.container} hero-container-bg  bg-scroll md:bg-fixed`}
      >
        <div
          className={`${styles.textContainer} flex flex-col justify-center items-center w-full`}
        >
          <br />
          <p className=" mt-[30vh] w-full mb-[-25px]flex text-large justify-center text-center font-jost">
            January 17 - 19 2025
          </p>
          <h1 className={styles.title}>uOttaHack 7</h1>
          <p className="mx-auto text-shadow font-jost">Explore Your Limits</p>
          <br />
          <div className="flex-col justify-center">
            <HeroCTA mainState={mainState} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
