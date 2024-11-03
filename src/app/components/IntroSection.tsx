// IntroSection.tsx
import React from "react";
import styles from "../styles/IntroSection.module.css";
import IntroBuildingsTop from "../assets/IntroBuildingsTop.png";
import IntroBuildingsBottom from "../assets/IntroBuildingsBottom.png";
import { Parallax } from "react-scroll-parallax";
import useInView from "../hooks/useInView";
const IntroSection: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.5 }); // Adjust threshold as needed

  return (
    <section
      className={`relative overflow-hidden bg-fixed  bg-center bg-[#00B3F0]  w-[100%]  h-[100vh]`}
    >
      <Parallax className={styles.parallaxImage} translateX={[-50, -55]}>
        <img src={IntroBuildingsTop.src} alt="Top Buildings" />
      </Parallax>
      <div className="flex justify-center items-center  h-full">
        <div className="flex flex-col  text-white w-[full]  justify-center items-center h-full md:flex-row md:p-10">
          <h1 className="flex flex-col text-5xl items-center md:w-[50%]  [text-shadow:_10px_2px_4px_rgb(0_0_0_/_0.3)]  md:text-8xl ">
            <span className=" " style={{ fontSize: "clamp(4rem, 4vw, 9rem)" }}>
              UOTTAHACK
            </span>
            <span
              ref={ref}
              className={`font-bold text-7xl md:text-8xl ${
                isInView ? "animate-jump-in" : ""
              }`}
              style={{ fontSize: "clamp(5rem, 7vw, 10rem)" }}
            >
              IS BACK
            </span>
            <span className="" style={{ fontSize: "clamp(4rem, 4vw, 9rem)" }}>
              FOR YEAR <strong>7!</strong>
            </span>
          </h1>

          <div
            className="felx space-y-10 items-center md:w-[40%] p-10 "
            style={{ fontSize: "clamp(1rem, 1vw, 4rem)" }}
          >
            <p className="">
              uOttaHack is back for their 7th year! Join over{" "}
              <b>800+ hackers</b> from around Canada and get ready to innovate,
              invent, and connect with a community to turn your dreams into a
              new reality.
            </p>

            <p className="">
              <b>Not from Ottawa?</b> Well, we've got you covered for food,
              lodging, and fun, so you enjoy your experience learning and
              discovering new bounds.
            </p>

            <p className="">
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
