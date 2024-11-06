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
    const portraitMode = viewportHeight > viewportWidth;

    if (ref.current) {
      const elementHeight = ref.current.clientHeight;
      setMinHeight(
        portraitMode
          ? `calc(${viewportHeight * 0.6}px + 5vh)`
          : `calc(${elementHeight}px + 10vh)`
      );
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
        className={`relative z-2 md:w-[40%] w-[50%] flex flex-col items-start justify-center text-left h-full text-white ${styles.textContainer}`}
      >
        <h1
          ref={inViewRef}
          className={`font-bold [text-shadow:_6px_0px_0px_rgb(0_0_0_/_0.5)] ${
            isInView ? "animate-flip-down" : ""
          }`}
          style={{
            fontSize: "clamp(1.5rem, 7vw, 8rem)",
            textAlign: "left",
            paddingLeft: "4rem",
          }}
        >
          TRACKS
        </h1>
        <p
          style={{
            fontSize: "clamp(0.7rem, 2vw, 1.9rem)",
            paddingLeft: "4rem",
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
