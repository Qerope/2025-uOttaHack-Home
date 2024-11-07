import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/TracksSection.module.css";
import TracksImageBottom from "../assets/Train Station.png";
import SeperatorImage from "../assets/Seperation.png";
import useInView from "../hooks/useInView";

const TracksSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [minHeight, setMinHeight] = useState("110vh");
  const { ref: inViewRef, isInView } = useInView({ threshold: 0.5 });

  const updateMinHeight = () => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    const isPortrait = viewportHeight > viewportWidth;
  
    if (ref.current) {
      let calculatedHeight;
  
      if (isPortrait) {
        // **Portrait Mode: responsiveness
        calculatedHeight = viewportHeight * 0.6 + viewportHeight * 0.5; // 60% of viewport height + 5vh
      } else {
        // **Landscape Mode:** Maintain a fixed height-to-width ratio
        const aspectRatio = 11 / 16; //**11:16 aspect ratio
        calculatedHeight = viewportWidth * aspectRatio;
      }
  
      setMinHeight(`${calculatedHeight}px`);
    }
  };
  

  useEffect(() => {
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);

  return (
    <section
      id="tracks"
      className={`relative w-full ${styles.section}`}
      style={{ minHeight }}
      ref={ref}
    >
      <div className={`absolute w-full flex justify-end items-end z-2 ${styles.bottomImageContainer}`}>
        <img
          src={TracksImageBottom.src}
          alt="Bottom Tracks Image"
          className="w-[83%]"
        />
      </div>
      <div
        className={`relative z-2 md:w-[40%] w-[50%] flex flex-col items-start justify-center text-left h-full text-white text-jost ${styles.textContainer}`}
      >
        <h1
          ref={inViewRef}
          className={`font-bold ${styles.heading} ${
            isInView ? "animate-flip-down" : ""
          }`}
          style={{
            fontSize: "clamp(1.5rem, 7vw, 8rem)",
            textAlign: "left",
            /*paddingLeft: "4rem",*/
          }}
        >
          TRACKS
        </h1>
        <p
          style={{
            fontSize: "clamp(0.7rem, 2vw, 1.9rem)",
            paddingLeft: "0rem",
            paddingBottom: "6rem",
          }}
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

      <div className={styles.diagonalSeparator}>
        <img src={SeperatorImage.src} alt="Separator" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default TracksSection;
