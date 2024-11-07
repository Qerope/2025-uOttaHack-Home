import React, { useState, useEffect } from "react";
import styles from "../styles/IntroSection.module.css";
import IntroBuildingsTop from "../assets/IntroBuildingsTop.png";
import IntroBuildingsBottom from "../assets/IntroBuildingsBottom.png";
import { Parallax } from "react-scroll-parallax";
import useInView from "../hooks/useInView";

const IntroSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  // Initialize isLandscape to a default value
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    // Check if window is defined (component is mounted on client)
    if (typeof window !== "undefined") {
      // Set initial orientation
      setIsLandscape(window.innerWidth > window.innerHeight);

      // Function to handle orientation change
      const handleOrientationChange = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      };

      // Listen for both resize and orientationchange events
      window.addEventListener("resize", handleOrientationChange);
      window.addEventListener("orientationchange", handleOrientationChange);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener("resize", handleOrientationChange);
        window.removeEventListener("orientationchange", handleOrientationChange);
      };
    }
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-fixed bg-center bg-[#00B3F0] w-full h-[100vh]"
      id="about"
    >
      <Parallax className={styles.parallaxImage} translateX={[-50, -55]}>
        <img src={IntroBuildingsTop.src} alt="Top Buildings" />
      </Parallax>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col text-white w-full justify-center items-center h-full md:flex-row md:p-10">
          <h1
            className={`flex flex-col items-center md:w-[50%] text-5xl md:text-8xl${
              isLandscape ? styles.landscapeHeading : styles.portraitHeading
            }`}
          >
            <span className="font-jost" style={{ fontSize: "clamp(3rem, 4vw, 9rem)", textShadow: "4px 4px 0px rgba(0, 0, 0, 0.3)" }}>
              UOTTAHACK
            </span>
            <span
              ref={ref}
              className={`font-bold font-jost ${isInView ? "animate-jump-in" : ""}`}
              style={{ fontSize: "clamp(4rem, 7vw, 10rem)",  textShadow: "6px 6px 0px rgba(0, 0, 0, 0.3)" }}
            >
              IS BACK
            </span>
            <span className="font-jost" style={{ fontSize: "clamp(3rem, 4vw, 9rem)",  textShadow: "4px 4px 0px rgba(0, 0, 0, 0.3)" }}>
              FOR YEAR <strong>7!</strong>
            </span>
          </h1>

          <div
            ref={ref}
            className={`lg:space-y-10 md:space-y-5 items-center font-jost md:w-[50%] lg:w-[40%] p-10 mt-12 ${
              isLandscape ? styles.landscapeText : styles.portraitText
            } ${isInView ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out" : ""}`}
          >
            <p className="introText">
              uOttaHack is back for their 7th year! Join over <b>800+ hackers</b> from around Canada and get ready to innovate,
              invent, and connect with a community to turn your dreams into a new reality.
            </p>

            <p>
              <b>Not from Ottawa?</b> Well, we&apos;ve got you covered for food, lodging, and fun, so you enjoy your experience learning and discovering new bounds.
            </p>

            <p>
              <a href="https://uOttaHack.ca" className={styles.link}>
                <u>View our Main Site</u>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Parallax
        className={`${styles.parallaxImage} ${styles.parallaxImageBottom}`}
        translateX={[-50, -40]}
      >
        <img src={IntroBuildingsBottom.src} alt="Bottom Buildings" />
      </Parallax>
    </section>
  );
};

export default IntroSection;
