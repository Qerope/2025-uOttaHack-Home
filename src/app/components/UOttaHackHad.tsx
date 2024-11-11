import React from "react";
import styles from "../styles/UOttaHackHad.module.css";
import RectangleImage from "../assets/Rectangle 1280.png";
import road from "../assets/Road.png";
import maps from "../assets/Maps.png";
import { useEffect } from "react";
import { Suspense } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import Car1 from "../assets/car1.svg";
import Car2 from "../assets/car2.svg";
import Car3 from "../assets/car3.svg";
import Car4 from "../assets/car4.svg";
// const Car1 = React.lazy(() => import("../assets/car1.svg"));
// const Car2 = React.lazy(() => import("../assets/car2.svg"));
// const Car3 = React.lazy(() => import("../assets/car3.svg"));
// const Car4 = React.lazy(() => import("../assets/car4.svg"));

const UOttaHackHad: React.FC = () => {
  const countUpRef = React.useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers once when the element comes into view

  return (
    <section
      className="relative z-[1] md:-mt-[20%] overflow-hidden  -mt-[20%] w-full"
      style={{
        background: "linear-gradient(180deg, #366ACF 0%, #74A0F6 100%)",
      }}
      id="pastevent"
    >
      <div className="w-full h-full">
        <div
          className={` relative z-1 text-white w-full  pt-10 sm:mt-[1%] mt-[20%] lg:mt-[1%]`}
        >
          <h1
            className={`   w-full flex justify-center font-jost items-center`}
            style={{
              paddingTop: "clamp(20%, 2vw, 10%)",
              fontSize: "clamp(2rem, 5vw, 6rem)",
            }}
          >
            uOttaHack 2024 had...
          </h1>

          <div
            className={`flex md:flex-row flex-col font-light justify-between items-center   `}
            style={{
              fontSize: "clamp(1.5rem, 2vw, 3rem)",
              fontFamily: "Sulphur Point, sans-serif",
              paddingLeft: "clamp(1%, 8vw, 40%)",
              paddingRight: "clamp(1%, 8vw, 40%)",
              paddingBottom: "clamp(5%, 2vw, 20%)",

              paddingTop: "clamp(5%, 2vw, 20%)",
            }}
          >
            <div
              className={`  flex flex-col jsutify-center pb-10 md:pb-0 anianimate-once animate-duration-1000 animate-delay-100 animate-ease-out items-center `}
            >
              <CountUp
                start={0}
                end={2000}
                delay={0}
                enableScrollSpy={true}
                className=""
              >
                {({ countUpRef }) => (
                  <div
                    style={{
                      fontFamily: "Sulphur Point, sans-serif",
                    }}
                  >
                    <span ref={countUpRef} />
                    <span>+</span>
                  </div>
                )}
              </CountUp>

              <p>Applications</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh]  hidden md:block bg-white"></div>
            <div
              className={` flex flex-col jsutify-center  pb-10 md:pb-0 animate-fade animate-once animate-duration-1000 animate-delay-200 animate-ease-out items-center `}
            >
              <CountUp start={0} end={650} delay={0} enableScrollSpy={true}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Hackers</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh] hidden md:block bg-white"></div>
            <div
              className={` flex flex-col jsutify-center  pb-10 md:pb-0 animate-fade animate-once animate-duration-1000 animate-delay-300 animate-ease-out items-center `}
            >
              <CountUp start={0} end={30} delay={0} enableScrollSpy={true}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <span>+</span>
                  </div>
                )}
              </CountUp>
              <p>Schools</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh] hidden md:block hidden md:block bg-white"></div>
            <div
              className={`  flex flex-col jsutify-center  pb-10 md:pb-0 animate-fade animate-once animate-duration-1000 animate-delay-400 animate-ease-out items-center `}
            >
              <CountUp start={0} end={8} delay={0} enableScrollSpy={true}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>Doggos</p>
            </div>
            <div className="w-[1px] h-[2vh] md:h-[5vh] hidden md:block  bg-white"></div>
            <div
              className={`  flex flex-col jsutify-center  pb-10 md:pb-0 animate-fade animate-once animate-duration-1000 animate-delay-500 animate-ease-out items-center `}
            >
              <CountUp start={0} end={17} delay={0} enableScrollSpy={true}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <span>.1k</span>
                  </div>
                )}
              </CountUp>
              <p>Prizes</p>
            </div>
          </div>

          <div
            className=" relative w-full pt-[10%] pb-48"
            style={{
              paddingBottom: "clamp(5%, 2vw, 10%)",
            }}
          >
            {/* <img src={road.src} alt="Road" className={styles.roadImage} />
            <img src={maps.src} alt="Maps" className={styles.mapImage} /> */}
            <div className="  relative z-3 h-full w-full flex overflow-hidden ">
              <img
                src={road.src}
                alt="Road"
                className="w-[120%] overflow-hidden"
              />
              {/* Car SVG Overlay */}
              {/* Car SVG Overlay with Animation */}
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  className="absolute bottom-[30%] w-full left-0"
                  animate={{ x: ["-10%", "100%"] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Car1
                    className=" md:w-16 h-auto will-change-transform"
                    style={{
                      width: "clamp(0.1vw, 2vw, 10vw)",
                      // height: "clamp(0.11rem, 100vw, 6rem)",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-[30%] w-full left-0"
                  animate={{ x: ["-10%", "100%"] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 3,
                  }}
                >
                  <Car4
                    className="md:w-16 h-auto"
                    style={{
                      width: "clamp(0.1vw, 2vw, 10vw)",
                      // height: "clamp(1rem, 100vw, 6rem)",
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-[60%] w-full  left-0 "
                  animate={{ x: ["100%", "-20%"] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0,
                  }}
                >
                  <Car2
                    className="md:w-16 h-auto"
                    style={{
                      transform: "scaleX(-1)",

                      width: "clamp(0.1vw, 2vw, 10vw)",
                      // height: "clamp(1rem, 100vw, 6rem)",
                    }} // Flip car horizontally
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-[60%] w-full  left-0 "
                  animate={{ x: ["100%", "-20%"] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                >
                  <Car3
                    className="md:w-16 h-auto"
                    style={{
                      transform: "scaleX(-1)",

                      width: "clamp(0.1vw, 2vw, 10vw)",
                      // height: "clamp(1rem, 100vw, 6rem)",
                    }} // Flip car horizontally // Flip car horizontally
                  />
                </motion.div>
              </Suspense>
            </div>
            <div className="relative z-4 top-0 flex justify-center w-full -mt-[16%] ">
              <img
                src={maps.src}
                alt="Maps"
                className="w-[50%] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UOttaHackHad;
