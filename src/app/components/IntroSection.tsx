import styles from "../styles/IntroSection.module.css";
import IntroBuildingsTop from "../assets/IntroBuildingsTop.png";
import IntroBuildingsBottom from "../assets/IntroBuildingsBottom.png";
import { Parallax } from "react-scroll-parallax";
import useInView from "../hooks/useInView";
import Image from "next/image";
import { useState, useEffect } from "react";

const IntroSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
      console.log(window.innerWidth < 768);
    };

    // Set initial screen size
    handleResize();

    // Update `isMobile` on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`relative overflow-hidden bg-fixed font-jost bg-center bg-[#00B3F0]  w-[100%]  h-[100vh]`}
      id="about"
    >
      <>
        {isMobile ? (
          <img
            src={IntroBuildingsTop.src}
            alt="Top Buildings"
            className={styles.staticImage}
          />
        ) : (
          <Parallax className={styles.parallaxImage} translateX={[-50, -55]}>
            <img src={IntroBuildingsTop.src} alt="Top Buildings" />
          </Parallax>
        )}
      </>
      <div className="flex justify-center items-center  h-full">
        <div className="flex flex-col  text-white w-full  justify-center items-center h-full md:flex-row ">
          <h1 className="flex flex-col text-5xl items-center justify-between w-full  [text-shadow:_10px_2px_4px_rgb(0_0_0_/_0.3)]  text-[6vh] md:text-[6vw]">
            <span className=" ">UOTTAHACK</span>
            <span
              ref={ref}
              className={`font-bold  text-[8vh] md:text-[8vw] ${
                isInView ? "animate-jump-in" : ""
              }`}
              // style={{ fontSize: "clamp(4rem, 7vw, 10rem)" }}
            >
              IS BACK
            </span>
            <span className="">
              FOR YEAR <strong>7!</strong>
            </span>
          </h1>

          <div
            ref={ref}
            className={`felx space-y-10 items-center font-jost  p-10 ${
              isInView
                ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                : ""
            }`}
            style={{ fontSize: "clamp(1rem, 2vw, 1.7rem)" }}
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

      <>
        {isMobile ? (
          <img
            src={IntroBuildingsBottom.src}
            alt="Top Buildings"
            className={`${styles.parallaxImage} ${styles.parallaxImageBottom}`}
          />
        ) : (
          <Parallax
            className={`${styles.parallaxImage} ${styles.parallaxImageBottom}`}
            translateX={[-50, -40]}
          >
            <img src={IntroBuildingsBottom.src} alt="Bottom Buildings" />
          </Parallax>
        )}
      </>
    </section>
  );
};

export default IntroSection;
