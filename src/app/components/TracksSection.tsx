import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/TracksSection.module.css";
import TrainStation from "../assets/TrainStation.svg";
import FloorSVG from '../assets/Floor.svg';
import Seperator from "../assets/separation.svg";
import useInView from "../hooks/useInView";
import { Parallax } from "react-scroll-parallax";

const TracksSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [minHeight, setMinHeight] = useState("110vh");
  const { ref: inViewRef, isInView } = useInView({ threshold: 0.5 });
  const [isPortrait, setIsPortrait] = useState(false)

  const updateMinHeight = () => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const isCurrentlyPortrait = viewportHeight > viewportWidth;

    setIsPortrait(isCurrentlyPortrait);

    if (ref.current) {
      let calculatedHeight;

      if (isCurrentlyPortrait) {
        calculatedHeight = viewportHeight * 0.6 + viewportHeight * 0.5;
      } else {
        const aspectRatio = 11 / 16; // aspect ratio
        calculatedHeight = viewportWidth * aspectRatio;
      }

      setMinHeight(`${calculatedHeight}px`);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateMinHeight();
      window.addEventListener("resize", updateMinHeight);
      return () => window.removeEventListener("resize", updateMinHeight);
    }
  }, []);

  return (
    <section
      id="tracks"
      className={`relative w-full ${styles.section}`}
      style={{ minHeight }}
      ref={ref}
    >
      {/*<Parallax className={styles.bottomImageContainer} translateX={[-50, -55]}>
        <TrainStation />
  </Parallax> */}

      <div
        className={`relative z-2 md:w-[40%] w-[50%] flex flex-col ${
          isPortrait ? "items-center text-center" : "items-start text-left"
        } h-full text-white text-jost ${styles.textContainer}`}
      >
        <h1
          ref={inViewRef}
          className={`font-bold ${styles.heading} ${isInView ? styles.animateFadeInLeft : ""}`}
          style={{ textAlign: isPortrait ? "center" : "left" }}
        >
          TRACKS
        </h1>
        <p
          className={`${styles.tracksText} ${isInView ? styles.animateFadeInLeft : ""}`}
          style={{ textAlign: isPortrait ? "center" : "left" }}
        >
          <span className="font-light">
            Whether you&apos;re passionate about
          </span>{" "}
          <strong>health, fintech, AI, or sustainability</strong>
          <span className="font-light">
            , see what we can offer for the perfect platform to focus your
            creativity and build impactful solutions.
          </span>{" "}
          <u>Choose your challenge</u>, collaborate, and{" "}
          <strong>
            <em>explore your limits!</em>
          </strong>
        </p>
      </div>

      {isPortrait && (
      <div className={styles.floorContainer}>
          <FloorSVG />
      </div>
    )}
      <div className={styles.diagonalSeparator}>
        <Seperator className="w-full h-auto" />
      </div>
    </section>
  );
};

export default TracksSection;